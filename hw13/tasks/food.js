class Food {
    filterFoodPrice = (food, min, max) => food.filter(element => element.price >= min && element.price <= max);
}

module.exports = new Food();