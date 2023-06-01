import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-app';
  checkBoxState = [
    {
      id: 'checkbox1',
      value: true,
      description: 'Todo 1'
    }, {
      id: 'checkbox2',
      value: true,
      description: 'Todo 2'
    }, {
      id: 'checkbox3',
      value: true,
      description: 'Todo 3'
    }];
  getCheckboxData(data: { id: string, value: boolean }) {
    this.checkBoxState = this.checkBoxState.map(
      (checkboxData) => ({
        id: checkboxData.id,
        value: checkboxData.id === data.id ? !checkboxData.value : checkboxData.value,
        description: checkboxData.description
      }));
  }
}
