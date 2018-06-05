import { Component } from '@angular/core';

@Component({
//   tslint:disable-next-line:component-selector
  selector: 'yup-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

	iconsData = [
		{ 
			src: '../../assets/social-media-icons/linkedin-white.png', 
			alt: 'linkedIn',
			href: 'https://www.linkedin.com/in/eduardcarmocanu/'
		},
		{
			src: '../../assets/social-media-icons/github-white.png', 
			alt: 'github',
			href: 'https://github.com/EduardCarmocanu'
		},
		{ 
			src: '../../assets/social-media-icons/stack-white.png', 
			alt: 'stackoverflow',
			href: 'https://stackoverflow.com/users/8446238/eduard-carmocanu'
		}
	];
}
