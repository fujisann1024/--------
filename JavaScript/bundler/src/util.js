const APP_NAME = 'JavaScript逆引きレシピ';

export function getTriangle(base, height){
    return base * height;
}

export class Person {
    constructor(name){
        this.name = name;
    }

    show() {
        return `${this.name}です`;
    }
}