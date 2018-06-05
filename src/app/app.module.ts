import { ProjectsService } from './projects.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AboutComponent } from './about/about.component';
import { InformationComponent } from './information/information.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { ScrollerDirective } from './scroller.directive';
import { ProjectModalComponent } from './project-modal/project-modal.component';


  
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    AboutComponent,
    InformationComponent,
    PortfolioComponent,
    ContactComponent,
    ScrollerDirective,
    ProjectModalComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    ProjectsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
