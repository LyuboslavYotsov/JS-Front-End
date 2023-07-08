function createHeroRegister(input) {
  class Hero {
    constructor(name, level, items) {
      (this.name = name), (this.level = level), (this.items = items);
    }
  }
  const heroRegister = [];

  for (const string of input) {
    [heroName, heroLevel, heroInvertory] = string.split(" / ");

    const currentHero = new Hero(heroName, heroLevel, heroInvertory);
    heroRegister.push(currentHero);
  }

  const sortedRegister = heroRegister.sort((a, b) => a.level - b.level);

  for (const hero of sortedRegister) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}

createHeroRegister([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
createHeroRegister([
  "Batman / 2 / Banana, Gun",
  "Superman / 18 / Sword",
  "Poppy / 28 / Sentinel, Antara",
]);
