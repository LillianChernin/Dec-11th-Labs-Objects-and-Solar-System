const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];

// 1.
console.log(solarSystem[4].moons);
// 2.
console.log(solarSystem[7].moons[1]);
// 3.
solarSystem[1].moons.push("Endor");
console.log(solarSystem[1].moons);
// 4.
solarSystem.push({
  name: "Pluto",
  ringSystem: false,
  moons: ["Charon"]
});
console.log(solarSystem[8].name);

// 5.
solarSystem[2].diameter = '7,917.5';
// 6.
solarSystem[0].ringSystem = true;
// 7.
solarSystem[6].moons[3] = "Oberon";
// 8.
for (let i = 0; i < solarSystem.length; i++) {
  if (solarSystem[i].ringSystem === true) {
    console.log(solarSystem[i]);
  }
}
