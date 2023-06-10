import { CompositeMeal } from "./classes/composite-meal";
import { MainDishBuilder } from "./classes/main-dish-builder";
import { Beans, Rice, Meat } from "./classes/meals";
import { VeganDishBuilder } from "./classes/vegan-dish-builder";

/**
 * Without Builder
 */

// const rice = new Rice("Arroz", 10.24)
// const beans = new Beans("Feijão", 19.99)
// const meat = new Meat("Carne", 29.99)

// const compositeMeal = new CompositeMeal()

// compositeMeal.add(rice, beans, meat)

// console.log(compositeMeal);
// console.log(compositeMeal.getPrice());


/**
 * With Builder 
 */

const mainDishBuilder = new MainDishBuilder();

mainDishBuilder.makeMeal().makeDesert()

console.log(mainDishBuilder.getMeal());

console.log(mainDishBuilder.getPrice());

// Explicit Reset
mainDishBuilder.reset();

const mainDishBuilder2 = new MainDishBuilder();

mainDishBuilder2.makeMeal().makeBeverage()

console.log(mainDishBuilder.getMeal());

console.log(mainDishBuilder.getPrice());

// Another Builder (Vegan)
const veganDishBuilder = new VeganDishBuilder()

const veganMeal = veganDishBuilder.makeMeal().getMeal()

console.log(veganMeal);

console.log(veganMeal.getPrice());




