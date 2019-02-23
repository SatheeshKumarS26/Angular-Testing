/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UserDetailsComponent } from './user-details.component';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';

class RouterStub {
  navigate(params){
  }
}

class ActivatedRouterStub {
  subject = new Subject();
  
  push(id){
    this.subject.next(id);
  }

  get params() {
  return this.subject.asObservable();
  }
}

describe('UserDetailsComponent', () => {
  let component: UserDetailsComponent;
  let fixture: ComponentFixture<UserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsComponent ],
      providers: [{provide: Router, useCalss: RouterStub}, {provide: ActivatedRoute, useCalss: ActivatedRouterStub}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('route to users component' , () => {
   let route = TestBed.get(Router);
   spyOn(route, 'navigate');
   component.save();
   expect(route).toHaveBeenCalledWith(['users']);
  });

  it('Activated route testing' , () => {
    let route = TestBed.get(Router);
    spyOn(route, 'navigate');
    let d: ActivatedRouterStub = TestBed.get(ActivatedRoute);
    d.push({id: 0});
    expect(route).toHaveBeenCalledWith(['not-found']);
   });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
