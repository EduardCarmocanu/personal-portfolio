import { ProjectsService } from './../projects.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yup-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss']
})
export class ProjectModalComponent{
  @Input('id') id = 0;
  @Input('display') display = false;
  @Output() modalClicked = new EventEmitter;
  projects;
  
  constructor(projectsService: ProjectsService) { 
    this.projects = projectsService.getProjects();
  }

  closeModal() {
    document.querySelector('#modal-content').scrollTop = 0; 
    // Scroll modal back to the top
    this.modalClicked.emit();
  }

  


  

}
