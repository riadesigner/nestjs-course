import 'reflect-metadata';
import {inject, injectable, Container} from 'inversify';


interface iFruit{
    give_juice():number;
}

@injectable()
class Apple implements iFruit{
    give_juice():number{return 100;};    
}

@injectable()
class Juicer {
    
    constructor(@inject("FruitKey") private fruit:iFruit){                
    }

    get_juice(){
        console.log(this.fruit.give_juice());
    }
}

const container = new Container();
container.bind<iFruit>("FruitKey").to(Apple);
container.bind<Juicer>(Juicer).to(Juicer);

const juice = container.get<Juicer>(Juicer);
juice.get_juice();


