import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
import { PowerService } from '../power.service';

import {Power} from '../power';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

    @Input() hero: Hero;

    constructor(
        private heroService: HeroService,
        private powerService: PowerService,
        private route: ActivatedRoute,
        private location: Location
    ) { }

    private powers;

    ngOnInit(): void {
        this.getHero();
        this.getHeroPowers();
        // this.powers = [
        //     {heroId: 1, id: 1, name: 'Effortless Flight'},
        //     {heroId: 1, id: 2, name: 'Unlimited Dexterity'},
        //     {heroId: 1, id: 3, name: 'Does Not Need to Breath'}
        // ];
    }

    getHero(): void {
        // + operator converts the string id to a number
        const id = +this.route.snapshot.paramMap.get('id');
        this.heroService.getHero(id)
            .subscribe(hero => this.hero = hero);
    }

    getHeroPowers(): void {
        // + operator converts the string id to a number
        const id = +this.route.snapshot.paramMap.get('id');
        this.powerService.getHeroPowers(id)
            .subscribe(powers => this.powers = powers);
    }

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.updateHero(this.hero)
            .subscribe(() => this.goBack());
    }

}
