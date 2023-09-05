import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectsRoutingModule } from './links-routing.module';
import { ProjectsComponent } from './quick-links/projects.component';


@NgModule({
  declarations: [
    ProjectsComponent
  ],
  imports: [
    CommonModule,
    ProjectsRoutingModule
  ],
  exports: [
    ProjectsComponent
  ]
})
export class LinksModule { }
