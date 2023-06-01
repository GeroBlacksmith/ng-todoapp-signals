import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'TodoItem',
    templateUrl: './todo-item.component.html',
    styleUrls: ['./todo-item.component.scss']
})

export class TodoItemComponent implements OnInit {
    @Input('id')
    id: string = '';
    @Input('value')
    value = false;
    @Input('description')
    description: string = '';
    @Output() data = new EventEmitter<{ id: string, value: boolean }>();
    constructor() { }

    ngOnInit() { }
    getCheckboxData({ id, value }: { id: string, value: boolean }) {
        this.data.emit({ id: id, value: !value })
    }
}