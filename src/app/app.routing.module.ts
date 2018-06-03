
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { AccordianComponent } from './accordian/accordian.component';
import { CarouselComponent } from './carousel/carousel.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { ModalComponent } from './modal/modal.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { ProgressbarComponent } from './progressbar/progressbar.component';
import { TabsComponent } from './tabs/tabs.component';
import { TimeComponent } from './time/time.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TypeaheadComponent } from './typeahead/typeahead.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent} from './landing/landing.component';


const appRoutes: Routes = [
  { path: '*', component:  LandingComponent},
  { path: 'accoridan', component:  AccordianComponent},
  { path: 'carousel', component:  CarouselComponent},
  { path: 'datepicker', component:  DatepickerComponent},
  { path: 'dropdown', component:  DropdownComponent},
  { path: 'modal', component:  ModalComponent},
  { path: 'pagination', component:  PaginationComponent},
  { path: 'progressbar', component:  ProgressbarComponent},
  { path: 'tabs', component:  TabsComponent},
  { path: 'time', component:  TimeComponent},
  { path: 'tooltip', component:  TooltipComponent},
  { path: 'typeahead', component:  TypeaheadComponent},
];



@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing: true, // <-- debugging purposes only
      }
    )
  ],
  exports: [
    RouterModule
  ],
  providers: [
  ]
})
export class AppRoutingModule { }

