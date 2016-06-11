import { Component, OnInit } from '@angular/core';
import { IJoke } from '../shared/interfaces/index';
import { JokeService } from '../shared/services/index';


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  public item : IJoke;	

  constructor(private jokeSvc :  JokeService) {}

  ngOnInit() {
  	//CALL THE API TO GET THE JOKE
  	// todo: move to service

  	// this.item = this.jokeSvc.getJoke();
  	this.jokeSvc.getJoke().subscribe(
  		success =>  {
  			this.item = success;
  		} 
  		)
  }

}

