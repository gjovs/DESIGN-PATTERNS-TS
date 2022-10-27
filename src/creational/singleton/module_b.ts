import { MyDatabaseClassic } from './db/my-database-classic';
import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseFunction } from './db/my-database-function';

import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a'; // Run the Code in the module A
import { MyDatabaseModule as MyDatabaseModule_A } from './module_a';
import { MyDatabaseFunction as MyDatabaseFunction_A } from './module_a';

const myDatabaseClassic = MyDatabaseClassic.instance;

myDatabaseClassic.add({ name: 'Joana', age: 16 });
myDatabaseClassic.add({ name: 'Pedro', age: 17 });

myDatabaseClassic.show();

// Test the Singletons with multiples imports and exports and others modules

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
console.log(MyDatabaseModule === MyDatabaseModule_A);
console.log(MyDatabaseFunction === MyDatabaseFunction_A);
