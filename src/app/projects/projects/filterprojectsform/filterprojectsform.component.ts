import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filterprojectsform',
  templateUrl: './filterprojectsform.component.html',
  styles: []
})
export class FilterprojectsformComponent implements OnInit {

  @Input() public name: string;
  @Output() public filtrar = new EventEmitter;

  public onChange(value) {
    this.filtrar.emit(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
