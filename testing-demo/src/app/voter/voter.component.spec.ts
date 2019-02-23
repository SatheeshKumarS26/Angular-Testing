import { VoterComponent } from './voter.component';
import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('UsersComponent', () => {
  let component: VoterComponent;
  let fixture: ComponentFixture<VoterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('totalCount to be 21 in HTML', () => {
  component.othersVote = 20;
  component.myVote = 1;
  fixture.detectChanges();

  let de = fixture.debugElement.query(By.css('.vote-count'));
  let el: HTMLElement = de.nativeElement;
  expect(el.innerHTML).toContain(21);
  })

  it('Highlight class to be available', () => {
    component.myVote = 1;
    fixture.detectChanges();
  
    let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
    expect(de.classes['highlighted']).toBeTruthy();
    })

    it('Trigger Button Event', () => {    
      let de = fixture.debugElement.query(By.css('.glyphicon-menu-up'));
      de.triggerEventHandler('click', null);
      expect(component.totalVotes).toBe(1);
      })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});