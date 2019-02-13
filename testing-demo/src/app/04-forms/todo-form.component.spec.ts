import { TodoFormComponent } from './todo-form.component'; 
import {FormBuilder} from '@angular/forms';

describe('TodoFormComponent', () => {
  var component: TodoFormComponent; 

  beforeEach(() => {
  component = new TodoFormComponent(new FormBuilder());
  });

  it('should contain two form builder object', () => {
    expect(component.form.contains('name')).toBeTruthy();
    expect(component.form.contains('email')).toBeTruthy();
  });

  it('to validate required', () => {
    let result = component.form.get('name');
    result.setValue('');
    expect(result.valid).toBeFalsy();
  });
});