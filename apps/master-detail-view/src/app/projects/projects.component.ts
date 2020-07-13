import { Component, OnInit } from '@angular/core';
import { ProjectsService, Project } from '@workshop/core-data';

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
    this.resetProject()
  }

  getProjects ()  {
    this.projects$ = this.projectsService.allProjects()
    //this.projectsService.allProjects().subscribe((result: any) => this.projects = result)
  }

  selectProject = (project) => {
    this.selectedProject = project
  }

  resetProject() {
    const emptyProject: Project = {
      id: null,
      title: '',
      details: '',
      percentComplete: 0,
      approved: false,
    }
    this.selectProject(emptyProject);
  }

  saveProject(project) {
    if(!project.id) {
      this.createProject(project);
    } else {
      this.updateProject(project);
    }
  }

  createProject(project) {
    this.projectsService.create(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  updateProject(project) {
    this.projectsService.update(project)
      .subscribe(result => {
        this.getProjects();
        this.resetProject();
      });
  }

  deleteProject(project) {
    this.projectsService.delete(project.id)
      .subscribe(result => this.getProjects());
  }

  cancel() {
    this.resetProject();
  }

}
