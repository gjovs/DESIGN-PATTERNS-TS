import { MealCompositeProtocol } from "../interfaces/meal-composite.protocal";

export abstract class AbstractMeal implements MealCompositeProtocol {
    constructor(private name: string, private price: number) {
    }
    getPrice() {
        return this.price;
    }
}