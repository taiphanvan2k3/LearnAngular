abstract class BaseService<T> {
    protected model!: T;

    findOne(): T {
        return this.model;
    }

    find(): T[] {
        return [this.model];
    }
}

interface IAnimal {
    makeSound(): void;
}

export class Dog implements IAnimal {
    makeSound(): void {
        console.log('Gau gau');
    }
}

export class Cat implements IAnimal {
    makeSound(): void {
        console.log('meo meo');
    }
}

export class DogService extends BaseService<Dog>{ }
export class CatService extends BaseService<Cat>{ }