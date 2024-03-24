import 'reflect-metadata';
import {inject, injectable, Container} from 'inversify';


abstract class iFruit{
    give_juice():number{return 0;};    
}

@injectable()
class Apple implements iFruit{
    constructor(){}
    give_juice():number{return 100;};    
}

@injectable()
class Orange implements iFruit{
    constructor(){}
    give_juice():number{return 50;};    
}

@injectable()
class Juicer {
    
    constructor(@inject(iFruit) private fruit:iFruit){                
    }

    get_juice(){
        console.log(this.fruit.give_juice());
    }
}

const container = new Container();
container.bind<iFruit>(iFruit).to(Orange);
container.bind<Juicer>(Juicer).toSelf();

const juice = container.get<Juicer>(Juicer);
juice.get_juice();


