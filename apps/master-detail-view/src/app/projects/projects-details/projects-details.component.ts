import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'angular-core-workshop-projects-details',
  templateUrl: './projects-details.component.html',
  styleUrls: ['./projects-details.component.css']
})
export class ProjectsDetailsComponent{
  currentProject;
  originalTitle;
  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();
  
  @Input() set project(value) {
    if(value) this.originalTitle = value.title
    this.currentProject = Object.assign({}, value)
    //Object assign uses get set property so SharedMutation is not possible ;)
  };
  constructor() { }
}
