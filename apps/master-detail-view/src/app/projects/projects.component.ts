import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-core-workshop-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
  
export class ProjectsComponent implements OnInit {
  primaryColor = "#456456"
  projects$;

  //like state
  selectedProject: Project;

  constructor(private projectsService: ProjectsService) { } 

  ngOnInit(): void {
    //safe place to gather async data from remote server
    this.getProjects()
  }

  getProjects ()  {
    this.projects$ = this.projectsService.allProjects()
    //this.projectsService.allProjects().subscribe((result: any) => this.projects = result)
  }

  selectProject = (project) => {
    this.selectedProject = project
    console.log(project)
  }

}
