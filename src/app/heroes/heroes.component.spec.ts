import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";
import { componentFactoryName } from "@angular/compiler";

describe('HeroeComponent', () => {
    let heroeList;
    let heroComponent;
    let mockHeroService;

    beforeEach(() => {
   
        heroeList = [
            {id:1,name: 'Captain America', strength: 18},
            {id:2,name: 'Tor', strength: 60},
            {id:3,name: 'Iron man', strength: 45}
        ]

        mockHeroService = jasmine.createSpyObj(['addHero','getHeroes','deleteHero']);
        heroComponent = new HeroesComponent(mockHeroService);
    })
    
    describe('delete', () => {
        it('should remove the indicated hero from the heroes list', () =>{

        //let expectedResult= [{id:1,name: 'Captain America', strength: 18},{id:2,name: 'Tor', strength: 60}]
        //configure the expectation of the delete method
        mockHeroService.deleteHero.and.returnValue(of(true));
        heroComponent.heroes = heroeList;

        heroComponent.delete(heroeList[2]);

        //expect(heroComponent.heroes).toEqual(expectedResult);
        expect(heroComponent.heroes.length).toBe(2);

        })
    })
})