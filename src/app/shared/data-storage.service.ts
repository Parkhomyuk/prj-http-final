import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';
import {AuthService} from "../auth/auth.service";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class DataStorageService {
  constructor(private http: Http,private httpClient: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

  storeRecipes() {
 /*   return this.http.put('https://ng-recipe-book-b3822.firebaseio.com/recipes.json', this.recipeService.getRecipes());*/
    return this.http.put('https://ng-recipe-book-b3822.firebaseio.com/recipes.json', this.recipeService.getRecipes());
  }

  getRecipes() {
    const token= this.authService.getToken()
    console.log(token+' token')
    //noinspection TypeScriptUnresolvedFunction
    this.http.get('https://ng-recipe-book.firebaseio.com/recipes.json?auth='+token)
      .map(
        (response: Response) => {
          const recipes: Recipe[] = response.json();
          for (let recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: Recipe[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
