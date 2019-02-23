import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/from';
import 'rxjs/add/observable/empty';

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service =  new TodoService(null);
    component = new TodosComponent(service);
  });

  it('should return a observable', () => {
    spyOn(service, 'getTodos').and.callFake(()=> {
    return Observable.from([ [1,2,3] ]);
    })
    component.ngOnInit();
    expect(component.todos.length).toBe(3);
  });

  it ('should call add', () => {
    let spy = spyOn(service, 'add').and.returnValue(Observable.empty());
    component.add();
    expect(spy).toHaveBeenCalled();
  })
   
  it('should push the value into array', () => {
    let todo = {id: 1};
    spyOn(service, 'add').and.returnValue(Observable.from([ todo ]));
    component.add();
    expect(component.todos.indexOf(todo)).toBeGreaterThan(-1);
  })

  it('should throw an error', () => {
   let spy = spyOn(service, 'add').and.throwError('error');
   component.add();
   expect(component.message).toBe('message');
  })

  it('should delete with confirmation true', () => {
   spyOn(window, 'confirm').and.returnValue(true);
   let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
   component.delete(1);
   expect(spy).toHaveBeenCalledWith(1);
  })

  it('should not call delete with confirmation false', () => {
    spyOn(window, 'confirm').and.returnValue(false);
    let spy = spyOn(service, 'delete').and.returnValue(Observable.empty());
    component.delete(1);
    expect(spy).not.toHaveBeenCalled();
   })

});