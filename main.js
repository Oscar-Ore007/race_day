let raceNumber = Math.floor(Math.random() * 1000);

let registereedEarly = true; 

let age = 31; 

if (registeredEarly && age > 18) {
    raceNumber += 1000;
}


if (registeredEarly && age > 18) {
    console.log(`Race will begin at 9:30, your reace number is: ${raceNumber}.`); 
} else if (!early && age > 18) {
    console.log(`Race will being at 11:00, your race number is: ${raceNumber}. `);
}