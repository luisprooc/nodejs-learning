class Pizza {

    public chesse: string = '';
    public bacon: boolean = false;
    public otherIngredients: Array<string> = [""];

    setChesse(chesse: string): Pizza{
        this.chesse = chesse;
        return this;
    }

    setBacon(): Pizza{
        this.bacon= true;
        return this;
    }

    setOtherIngredients(ingredients: string[]): Pizza{
        this.otherIngredients= ingredients;
        return this;
    }

    build(){
        return this;
    }
}

const pepperoniPizza: Pizza = new Pizza();
pepperoniPizza
    .setBacon()
    .setChesse("Mozzarela")
    .setOtherIngredients(["tomate"])