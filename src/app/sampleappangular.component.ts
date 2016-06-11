import { Component } from '@angular/core';
import { DashboardComponent } from './+dashboard';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { CategoriesComponent } from './+categories';
import { CustomizeComponent } from './+customize';

@Component({
  moduleId: module.id,
  selector: 'sampleappangular-app',
  templateUrl: 'sampleappangular.component.html',
  styleUrls: ['sampleappangular.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent},
  {path: '/categories', component: CategoriesComponent},
  {path: '/customize', component: CustomizeComponent}
])
export class SampleappangularAppComponent {
  title = 'sampleappangular works!';
}
