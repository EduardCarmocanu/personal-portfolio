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
    // Scroll modal back to the top
    document.querySelector('#modal-content').scrollTop = 0; 

    // Restored scrolling to the page
    document.querySelector('body').style.overflow = 'initial';

    this.modalClicked.emit();
  }

  


  

}
