# Intent: This project was created as a Proof of Concept (POC) to determine if we would be  able to mock out the API Calls in protractor.
-This is an important first step in getting the protractor tests to run in Azure Devops because there will not be a live backend when running the tests there.
-This also would allow us to use mocked consumer data, meaning we do not need to create the new consumer before we run our tests
-Lastly this would allow our front end unit test to have a complete seperation of concerns from the Middle and Back End layers

# How to Run the project to prove that this works
-In the command line, type: ng serve --open
---This will launch the application with "real" data: or at least the data we are not mocking at the http interceptor
---The Heroes listed should all have heroric sounding names, since that is the real list of heroes: ex: Dr Nice or Narco

-In the command line, within the project enter the command: ng serve --open --configuration=mock
---This will launch the site with the mocked data
---The Heroes listed should all have non heroric names, since these are mocked heroes: ex: Whimp or Dan Drifter

# How to run the protractor tests using the mocked data, and not the real data
-Since the defaut devServerTarget is set to serve:mock, a call to run e2e automatically pulls in mocked data
-Run: ng e2e


### Important Files that allow Mocking to Work

# The Http Interceptor needs to be created: Files:
-http-mock-request.interceptor.ts
-app.modulke.ts : providers

# The e2e configuration needs the "options" "devServerTarget" to point to the mock version of the server
"e2e": {
          "builder": "@angular-devkit/build-angular:protractor",
          "options": {
            "protractorConfig": "e2e/protractor.conf.js",
          # "devServerTarget": "angular-tour-of-heroes:serve:mock"
          },
          "configurations": {
            "production": {
              "devServerTarget": "angular-tour-of-heroes:serve:production"
            },
            "mock": {
                "devServerTarget": "angular-tour-of-heroes:serve:mock"
            }
          }



#########################################################################################################################################



# AngularTourOfHeroes

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
