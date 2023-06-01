import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'Checkbox',
    templateUrl: './checkbox.component.html',
    styleUrls: ['./checkbox.component.scss']
})

export class CheckboxComponent implements OnInit {
    @Input('id')
    id: string = '';
    @Input('value')
    value = false;
    @Output() data = new EventEmitter<{ id: string, value: boolean }>();

    constructor() { }

    ngOnInit() { }

    emitData() {
        this.data.emit({ id: this.id, value: !this.value })
    }
}