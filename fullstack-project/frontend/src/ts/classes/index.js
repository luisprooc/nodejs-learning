var Pizza = /** @class */ (function () {
    function Pizza() {
        this.chesse = '';
        this.bacon = false;
        this.otherIngredients = [""];
    }
    Pizza.prototype.setChesse = function (chesse) {
        this.chesse = chesse;
        return this;
    };
    Pizza.prototype.setBacon = function () {
        this.bacon = true;
        return this;
    };
    Pizza.prototype.setOtherIngredients = function (ingredients) {
        this.otherIngredients = ingredients;
        return this;
    };
    Pizza.prototype.build = function () {
        return this;
    };
    return Pizza;
}());
var pepperoniPizza = new Pizza();
pepperoniPizza
    .setBacon()
    .setChesse("Mozzarela")
    .setOtherIngredients(["tomate"]);


console.log(pepperoniPizza.build())