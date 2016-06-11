import { Component, OnInit } from '@angular/core';
import { JokeService } from '../shared/services/index';
import { IJoke } from '../shared/interfaces/index';

@Component({
  moduleId: module.id,
  selector: 'app-categories',
  templateUrl: 'categories.component.html',
  styleUrls: ['categories.component.css'],
})

export class CategoriesComponent implements OnInit {

  public categories: string[];
  public jokes : IJoke[];
  constructor(private jokeSvc: JokeService) {}

  ngOnInit() {
  			this.jokeSvc.getCategories().subscribe(
  			success => this.categories = success
  		);
  }


  public getJoke(categoryName){
  		this.jokeSvc.getJokes(categoryName).subscribe(
  		success => this.jokes = success

  		);
  }

}
