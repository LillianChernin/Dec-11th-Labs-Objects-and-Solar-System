//Example below:
//const objectName = {name: "Tim", age: 7}
//"const" => specifies what time of variable the object will be
//"objectName" => specifies the name of the object
// "=" => assignment operator
// "{}" => goes around the contents of the object
// "name" => an example key name
// ":" => goes between the key and value pair
// "Tim" => value assigned to the name key
// "," => goes between each key/value pair
// "age" => another example key name
// ":" => goes between the key and value pair
// "7" => value assigned to the age key

const me = {};
me.name = "Lillian";
me.age = 28;
me.email = "Lillian.Chernin@gmail.com";

console.log(me.name);
me.age = 1000;
console.log(me.age);

me["place of residence"] = "Austin, TX";
console.log(me["place of residence"]);

const monster = {
   name: "Slimer",
   color: "greenish",
   type: "plasm or ghost or something"
}

console.log(monster.name);
monster.type = "creature";
monster.age = 6;
console.log(monster.type + " " + monster.age);

const adventurer = {
  name: "Hero",
  hitPoints: 10,
  shield: 10,
  armor: 20,
  weapon: "sword",
  attackPower: 5,
  attackSpeed: 10
}

const ogre = {
  name: "Tim",
  hitPoints: 20,
  attackPower: 10,
  attackSpeed: 5
}

const battle = () => {
  let time = 0;
  while (ogre.hitPoints > 0 && adventurer.hitPoints > 0) {
    time++
    if (time * ogre.attackSpeed % 10 === 0) {
      if (adventurer.shield > 0) {
        adventurer.shield = adventurer.shield - ogre.attackPower;
        console.log(adventurer.name + "\'s shield is damaged!");
      } else if (adventurer.armor > 0) {
        adventurer.armor = adventurer.armor - ogre.attackPower;
        console.log(adventurer.name + "\'s armor is damaged!");
      } else {
        adventurer.hitPoints = adventurer.hitPoints - ogre.attackPower;
        if (adventurer.hitPoints <= 0) {
          console.log("Hero was mortally wounded!  \nGAME OVER");
        }
      }
    } else if (time * adventurer.attackSpeed % 10 === 0) {
      ogre.hitPoints = ogre.hitPoints - adventurer.attackPower;
      if (ogre.hitPoints <= 0) {
        console.log("The Ogre was defeated!!");
      }
    }
  }
}

battle();


const cat1 = {
  name: "twinke",
  breed: "mutt",
  age: 4
}

console.log(cat1.age + " and " + cat1.breed);

const cat2 =  {
  name: "toots",
  breed: "orange tabby",
  age: 5
}

const combineCats = (cat1, cat2) => {
  return {name: cat1.name + cat2.name, age: 1, breed: cat1.breed + "-" + cat2.breed};
}

console.log(combineCats(cat1, cat2));
console.log(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)));

console.log(combineCats(combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2)), combineCats(combineCats(cat1, cat2), combineCats(cat1, cat2))));

const user = {
  name: "Tim",
  email: "Tim@gmail.com",
  age: 30,
  purchased: []
}

user.email = "Timmy@gmail.com";
user.age++;
user.location = "Nashville";
user.purchased.push("carbohydrates");
user.purchased.push("peace of mind");
user.purchased.push("Merino jodhpurs");
console.log(user.purchased[2]);

user.friend = {
  name: "Bert",
  age: 32,
  location: "Nashville",
  purchased: [];
}
