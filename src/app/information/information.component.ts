import { Component } from '@angular/core';

@Component({
  selector: 'yup-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.scss']
})
export class InformationComponent {
	
  developmentSkills = [
	'React.JS',
	'AngularJS',
    'HTML',
    'CSS',
    'JavaScript',
	'PHP',
	'Python',
	'GIT',
	'Webpack',
	'Gulp'
  ];
  designSkills = [
	'Usability Testing',
	'UX Design',
	'Design thinking',
    'Photoshop',
    'Illustrator',
    'Adobe XD'
  ];
}
