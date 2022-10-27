import { MyDatabaseClassic } from './db/my-database-classic';
import { MyDatabaseModule } from './db/my-database-module';
import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseClassic = MyDatabaseClassic.instance;

myDatabaseClassic.add({ name: 'Guilherme', age: 16 });
myDatabaseClassic.add({ name: 'Pedro', age: 17 });
myDatabaseClassic.add({ name: 'Enzo', age: 16 });
myDatabaseClassic.add({ name: 'Moreira', age: 17 });
myDatabaseClassic.add({ name: 'Dobbeck', age: 16 });

export { myDatabaseClassic, MyDatabaseModule, MyDatabaseFunction };
