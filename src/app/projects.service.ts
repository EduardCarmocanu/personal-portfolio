import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {
  projects = [
    {
      title: 'Portfolio project', 
      subTitle: 'Personal portfolio project created for 1st semester exam at Multimedia design and communication',
      tags: ['JS', 'JQuery', 'CSS', 'HTML', 'Personal Branding'],
      date: 'December 2016',
      description: 'For the 1st semester exam me and my fellow student coleagues, have been given the challenge to brand ourselves and create a personal portfolio website in the process of it. The purpose of the exam was to evaluate our competences in regards of design and development. Moreover during the project one of the requirements was to convey your own brand that you want to sell to a company that you would like to work for.',
      link: 'http://eduards.space',
      coverImage: '/assets/portfolio-website.png'
    },
    {
      title: 'Fjord&Baelt', 
      subTitle: 'Interactive exploration game for the marine life research center in Keterminde',
      tags: ['UX', 'GAME', 'HTML', 'CSS', 'JS', 'PHP'],
      date: 'June 2017',
      description: 'The challange for the 2nd semester exam was to create an interactive solution for the Marine research center in Keterminde which is also hosting a marine exhibition, moreover the target audience, as requested by the center, was formed out of your children. Our solution was to create an interactive exploration game for the children in which they had to be facem whith questions related to the exhibition and find those answers by going around the center and dicovering them',
      link: 'http://eduards.space/projects/marine-center-game/',
      coverImage: '/assets/fjord.png'
    },
    {
      title: 'Sam & the soulmates', 
      subTitle: 'Convery a new band image the music band Sam & the soulmates',
      tags: ['Branding', 'HTML', 'CSS', 'JS'],
      date: 'March 2017',
      description: 'This project was all about creating a new image for the jazz band Sam & the soulmates which resulted in a very colourfull "new age" style of the band that can be seen from the cover image. The band image was inspired from the colourful athmosphere that the jazz band created with the band member personalities and especially their music',
      link: 'http://eduards.space/projects/module-2/',
      coverImage: '/assets/sam.png'
    },

    
  ];

  getProjects() {
    return this.projects;
  }

}
