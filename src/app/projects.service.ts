import { Injectable } from '@angular/core';

@Injectable()
export class ProjectsService {
  projects = [
    {
      title: 'Portfolio project', 
      subTitle: 'Personal portfolio project created for 1st semester exam at Multimedia design and communication',
      tags: ['JS', 'CSS', 'HTML', 'Personal Branding'],
      date: 'December 2016',
      description: 'For the 1st semester exam me and my fellow student coleagues, have been given the challenge to brand ourselves and create a personal portfolio website in the process of it. The purpose of the exam was to evaluate our competences in regards of design and development. Moreover during the project one of the requirements was to convey your own brand that you want to sell to a company that you would like to work for.',
      link: 'http://www.eduards.space/projects/1st-semester-exam/',
      coverImage: '../../assets/portfolio-website.png'
    },
    {
      title: 'Fjord&Baelt', 
      subTitle: 'Interactive exploration game for the marine life research center in Keterminde',
      tags: ['UX', 'GAME', 'HTML', 'CSS', 'JS', 'PHP'],
      date: 'June 2017',
      description: 'The challange for the 2nd semester exam was to create an interactive solution for the Marine research center in Keterminde which is also hosting a marine exhibition, moreover the target audience, as requested by the center, was formed out of your children. Our solution was to create an interactive exploration game for the children in which they had to be facem whith questions related to the exhibition and find those answers by going around the center and dicovering them',
      link: 'http://eduards.space/projects/marine-center-game/',
      coverImage: '../../assets/fjord.png'
    },
    {
      title: 'Morningscore', 
      subTitle: 'Participated in the development of the SEO analysis product, morningscore',
      tags: ['React.JS', 'HTML', 'SASS', 'SaaS'],
      date: 'November 2017 - May 2018',
      description: 'During the collaboration on morningscore I have been responsible for the client side of the application as a front-end developer. The tasks that i have been handling range from UI components development and Optimizations to Identifying and addressing UX related isues discovered through data analysis or just user feedback',
      link: 'https://morningscore.io/',
      coverImage: '../../assets/morningscore.png'
    },

    
  ];

  getProjects() {
    return this.projects;
  }

}
