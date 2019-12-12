import { HEROESMock } from './mock-hero-data';
import { POWERSMock } from './mock-power-data';

export const HttpMockedResponces = [
    {
        url: 'api/heroes',
        data: HEROESMock
    },
    {
        url: 'api/heroes/11',
        data: HEROESMock[0]
    },
    {
        url: 'api/heroes/12',
        data: HEROESMock[1]
    },
    {
        url: 'api/heroes/13',
        data: HEROESMock[2]
    },
    {
        url: 'api/heroes/14',
        data: HEROESMock[3]
    },
    {
        url: 'api/heroes/15',
        data: HEROESMock[4]
    },
    {
        url: 'api/heroes/16',
        data: HEROESMock[5]
    },
    {
        url: 'api/heroes/17',
        data: HEROESMock[6]
    },
    {
        url: 'api/heroes/18',
        data: HEROESMock[7]
    },
    {
        url: 'api/heroes/19',
        data: HEROESMock[8]
    },
    {
        url: 'api/heroes/20',
        data: HEROESMock[9]
    },

    {
        url: 'api/powers/?heroId=11',
        data: POWERSMock[11]
    },
    {
        url: 'api/powers/?heroId=12',
        data: POWERSMock[12]
    },
    {
        url: 'api/powers/?heroId=13',
        data: POWERSMock[13]
    },
    {
        url: 'api/powers/?heroId=14',
        data: POWERSMock[14]
    },
    {
        url: 'api/powers/?heroId=15',
        data: POWERSMock[15]
    },
    {
        url: 'api/powers/?heroId=16',
        data: POWERSMock[16]
    },
    {
        url: 'api/powers/?heroId=17',
        data: POWERSMock[17]
    },
    {
        url: 'api/powers/?heroId=18',
        data: POWERSMock[18]
    },
    {
        url: 'api/powers/?heroId=19',
        data: POWERSMock[19]
    },
    {
        url: 'api/powers/?heroId=20',
        data: POWERSMock[20]
    },
];