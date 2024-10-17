let fruitChoices = [
        "oranges",
        "bananas",
        "mongoes"
];

for (let index = 0; index <fruitChoices.length; index++) {
    const element = fruitChoices[index];
    console.log(element);
    console.log(`The fruit of this iteration is ${fruitChoices[index]} `);
}

// start at 0, untill 0 reaches 4, do a thing and increease 0 up by 1 every time we do that thing
for (let i =0; i < 5; i++ ) {
    console.log(`This is the ${i} interation if the loop`); //string interpolation
    console.log("This is the" + i + "interation if the loop"); //string concatenation
}

//forEach

fruitChoices.forEach(element => {
    console.log("For each loop result: " + element.toLocaleUpperCase());
})

// for of

for (const fruit of fruitChoices) {
    console.log("For of result: " + fruit);
}

//map-> map returns a new array, and every element has a change applied on it

let fruitChoicesShortened = fruitChoices.map(fruit =>{
    return fruit.substring(0,3);
})

console.log(fruitChoicesShortened);

//filter -> returns a new array, only with the elements that meet the condition

let nonCitrusFruits = fruitChoices.filter(fruit =>{
    return fruit != "oranges" && != "lemons"
})

console.log(nonCitrusFruits);
