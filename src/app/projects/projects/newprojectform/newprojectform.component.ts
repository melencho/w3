import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-newprojectform',
  templateUrl: './newprojectform.component.html',
  styles: []
})
export class NewprojectformComponent implements OnInit {

  public miNuevoProyecto = {id: 1, name: ''};
  @Output() public nuevoProjecto = new EventEmitter();
  @Input() public nextIndex: number;

  public onSend() {
    console.log('click: ' + this.miNuevoProyecto.name + ' - ' + this.miNuevoProyecto.id);
    this.nuevoProjecto.emit(this.miNuevoProyecto);
    this.miNuevoProyecto.id++;
  }

  constructor() {}

  ngOnInit() {
    this.miNuevoProyecto.id = this.nextIndex;
  }

}
