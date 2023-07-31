import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Recipe name', 'Recipe desc', 'https://lobsterfrommaine.com/wp-content/uploads/fly-images/1577/20210517-Pasta-alla-Gricia-with-Lobster3010-2048x576-c.jpg'),
    new Recipe('Good recipe', 'Good desc', 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Healthy_Food_-_Colourful_Fruit_and_Veg_-_50191699151.jpg/1599px-Healthy_Food_-_Colourful_Fruit_and_Veg_-_50191699151.jpg?20200910213445'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }

}
