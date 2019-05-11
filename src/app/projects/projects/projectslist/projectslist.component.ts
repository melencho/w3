import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-projectslist',
  templateUrl: './projectslist.component.html',
  styles: []
})
export class ProjectslistComponent implements OnInit {

  @Input() public listaProyectos: any;
  @Input() public name: string;

  constructor() { }

  ngOnInit() {
  }

}
