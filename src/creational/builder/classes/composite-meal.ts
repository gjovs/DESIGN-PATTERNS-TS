import { MealCompositeProtocol } from "../interfaces/meal-composite.protocal";

export class CompositeMeal implements MealCompositeProtocol {
    private readonly _children: MealCompositeProtocol[] = []; 
    
    getPrice(): number {
        return this._children.reduce((sum, meal) => sum + meal.getPrice() ,0);
    }    

    add(...meal: MealCompositeProtocol[]) {
        meal.forEach((item) => this._children.push(item))
    }
}