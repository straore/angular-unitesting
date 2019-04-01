import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";
import { HeroesComponent } from "./heroes.component";
import { of } from "rxjs";
import { HeroService } from "../hero.service";

describe('HeroesComponent (shallow tests)',() => {
let fixture: ComponentFixture<HeroesComponent>;
let mockHeroService= jasmine.createSpyObj(['getHeroes','addHero','deleteHero']);
let HEROES = [{id:1, name:'SuperDude', strength: 3},
{id:1, name:'SuperDude', strength: 3},
{id:1, name:'SuperDude', strength: 3}]
beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[HeroesComponent],
            providers:[
                //long hand provider syntax
            {provide: HeroService,useValue: mockHeroService}
        ],
            //ignore the child component and the child directive(routerLink) with this
            //Side effect: will hide issues in the template
            schemas:[NO_ERRORS_SCHEMA]
        });
       
        fixture = TestBed.createComponent(HeroesComponent);

    });

    //integ test mocking the service and ignoring child component and routerLink
    it('should do set heroes correctly from the service',() =>{
        mockHeroService.getHeroes.and.returnValue(of(HEROES));
        fixture.detectChanges();
        expect(fixture.componentInstance.heroes.length).toBe(3);
    });

    
    it('should render the hero name in an anchor tag',() =>{
        
    });
});