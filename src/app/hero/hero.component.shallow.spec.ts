import { TestBed, ComponentFixture } from "@angular/core/testing";
import { HeroComponent } from "../hero/hero.component";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { By } from "@angular/platform-browser";

describe('HeroComponent (shallow tests)',() => {
let fixture: ComponentFixture<HeroComponent>;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[HeroComponent],
            schemas:[NO_ERRORS_SCHEMA]
        });
        fixture = TestBed.createComponent(HeroComponent);

    });

    it('should have the correct hero',() =>{
        fixture.componentInstance.hero = {id:1, name:'SuperDude', strength: 3};
        expect(fixture.componentInstance.hero.name).toBe('SuperDude');
    });

    /*testing rendered HTML
    detectChanges to trigger ngOnInit and then binding update
    nativeElement expose the DOM API. it is a wrapper around a component
    debugElement is a Wrapper around a DOM node.It can expose additionnal properties
    */
    it('should render the hero name in an anchor tag',() =>{
        fixture.componentInstance.hero = {id:1, name:'SuperDude', strength: 3};
        fixture.detectChanges();
        const anchorTag = fixture.nativeElement.querySelector('a').textContent;
        const debugElt = fixture.debugElement.query(By.css('a'));
        expect(debugElt.nativeElement.textContent).toContain('SuperDude')
        expect(anchorTag).toContain('SuperDude');
    });
});