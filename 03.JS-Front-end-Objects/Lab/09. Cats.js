function createCats(input) {
    class Cat {
        constructor(name, age)
        {
            this.name = name;
            this.age = age;
        }

        meow()
        {
            console.log(`${this.name}, age ${this.age} says Meow`)
        };
    }

    for (const pair of input) {
        [catName, catAge] = pair.split(" ");

        const newCat = new Cat(catName, catAge);

        newCat.meow();
    }
}

createCats(['Mellow 2', 'Tom 5']);