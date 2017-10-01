import { ProjectsService } from './../projects.service';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'yup-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  @Output() projectClicked = new EventEmitter;
  projects;

  constructor(service: ProjectsService) {
    this.projects = service.getProjects();
  }

  displayModal(id) {
    this.projectClicked.emit(id);
  }
}
