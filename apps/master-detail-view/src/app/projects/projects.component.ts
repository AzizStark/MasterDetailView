import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-core-workshop-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
  
export class ProjectsComponent implements OnInit {
  primaryColor = "#456456"
  projects = [
    {
      id: '1',
      title: 'Project One',
      details: 'This is a sample project',
      percentComplete: 20,
      approved: false,
    },
    {
      id: '2',
      title: 'Project Two',
      details: 'This is a sample project',
      percentComplete: 40,
      approved: false,
    },
    {
      id: '3',
      title: 'Project Three',
      details: 'This is a sample project',
      percentComplete: 100,
      approved: true,
    }
  ];

  //like state
  selectedProject;

  constructor() { } 

  ngOnInit(): void {
  }

  selectProject = (project) => {
    this.selectedProject = project
    console.log(project)
  }

}
