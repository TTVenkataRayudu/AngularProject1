import {EventEmitter,Injectable} from '@angular/core';
import {Recipe} from './recipe.model';
import {RecipeService} from './recipe.service';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
@Injectable()

export class RecipeService{
recipeSelected=new EventEmitter<Recipe>();
	 private recipes: Recipe[] = [
    	new Recipe('Tasteschnitze',
        'Super Tasty Schnitzel?',
        'https://lh3.googleusercontent.com/W13ceIzN8LAhfgQXnLQ2zMdur6akuYiima8B9VDzpiYvzE-XW2R0OqXOzjuvn2Ii9QKr8GGXxjq1LUafxQcDl5xTg3Zt-gDFJidFTK4=w600-l68',
        [
      	  new Ingredient('Mean',1),
      	  new Ingredient('French-Fries',20)
        ]),
    	new Recipe('Big Fat Burger',
        'What else you need to say?',
        'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
        [
      	  new Ingredient('Buns',2),
      	  new Ingredient('Meat',1)
        ]),
        new Recipe('Samosa',
        'Spicy and Tasty Samosa',
        'http://sanjhindianrestaurant.com.au/wp-content/uploads/2002/01/2.Vegetable-Samosa-.jpg',[
           new Ingredient('Chilli',2),
           new Ingredient('Sauce',1)
           ]),
         new Recipe('HotDog',
         'Yummy HotDog for you',
         'http://blog.heinens.com/wp-content/uploads/2015/04/Hotdog-Feature.jpg',[
         	new Ingredient('Cococola',1),
         	new Ingredient('TomatoSauce',1)
         	])
  ];
  constructor(private slService:ShoppingListService){}
  getRecipes(){
  return this.recipes.slice();
  }
  addIngredientsToShoppingList(ingredients:Ingredient[]){
  this.slService.addIngredients(ingredients);

  }
  }

}