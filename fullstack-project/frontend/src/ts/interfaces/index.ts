interface IAnimal {
    name: string;
    color: string;
    age: number;
};

const dog: IAnimal = {
    name: "Foxy",
    color: "Black",
    age: 12
};

console.log(dog);