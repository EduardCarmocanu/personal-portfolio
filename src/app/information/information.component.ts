import { Component } from '@angular/core';

@Component({
  selector: 'yup-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
  developmentSkills = [
    'AngularJS',
    'Vue.JS',
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
  ];
  designSkills = [
    'Photoshop',
    'Illustrator',
    'UX'
  ];
}
