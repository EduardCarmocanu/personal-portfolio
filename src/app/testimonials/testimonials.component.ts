import { Component } from '@angular/core';

@Component({
  selector: 'yup-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent {
  
  testimonials = [
    {
      testimonial: 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magnam sequi ducimus obcaecati aliquam eligendi enim, vero rem eveniet delectus, non eaque architecto doloribus',
      imageSrc: './assets/profile-pics.png',
      author: 'John Doe', 
      role: 'developer'
    },
    
    {
      testimonial: 
      'sit amet consectetur adipisicing elit. Adipisci magnam sequi ducimus obcaecati aliquam eligendi enim, vero rem eveniet delectus, non eaque architecto doloribus repudiandae? Maiores quos voluptatum tenetur reicie',
      imageSrc: './assets/profile-pics.png',
      author: 'John Doe', 
      role: 'developer'
    },
    
    {
      testimonial: 
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci magnam sequi ducimus obcaecati aliquam eligendi',
      imageSrc: './assets/profile-pics.png',
      author: 'John Doe', 
      role: 'developer'
    },
    
  ];
  activeTestimonial = 0;
  Ldisabled = false;
  Rdisabled = false;
  opacity;
  
  changeTestimonial(direction) {

    this.opacity = 0;
    setTimeout( () => {

        if (direction === 'left') {
          this.activeTestimonial--;
        } 
        else if (direction === 'right') {
          this.activeTestimonial++;
        }

        if (this.activeTestimonial > 2) {
          this.activeTestimonial = 0;
        }
        if (this.activeTestimonial < 0) {
          this.activeTestimonial = 2;
        }

      this.opacity = 1;
    }, 200);
  }
}
