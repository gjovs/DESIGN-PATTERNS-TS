import { MealBuilderProtocol } from "../interfaces/meal-builder-protocol";
import { CompositeMeal } from "./composite-meal";
import { Beans, Beverage, Dessert, Meat, Rice } from "./meals";

export class VeganDishBuilder implements MealBuilderProtocol {
    private _meal: CompositeMeal = new CompositeMeal();

    reset(): this {
        this._meal = new CompositeMeal();
        return this;
    }

    makeMeal(): this {
        const rice = new Rice('Arroz', 5)
        const beans = new Beans('Feijão', 4.50)
        this._meal.add(rice, beans)
        return this;
    }
    makeBeverage(): this {
        const beverage = new Beverage('Limonada', 12.99)
        this._meal.add(beverage)
        return this;
    }
    makeDesert(): this {
        const dessert = new Dessert('Bolo de Chocolate', 9.99)
        this._meal.add(dessert)
        return this
    }



    getMeal(): CompositeMeal {
        // is common to also reset here 
        // this.reset()
        return this._meal;
    }

    getPrice(): number {
        return this._meal.getPrice(); 
    }
}