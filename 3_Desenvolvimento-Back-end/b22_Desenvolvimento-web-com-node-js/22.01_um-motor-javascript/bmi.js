const readlineSync = require("readline-sync");

// altura em cm, peso em kgs

function returnBmi(weight, height) {
  const heightInMeters = height / 100;
  const bmi = weight / heightInMeters ** 2;
  console.log(`Weight: ${weight}, Height: ${heightInMeters}`);
  console.log(`BMI: ${bmi.toFixed(2)}`);
  switch (true) {
    case bmi < 18.5:
      console.log('Status: underweight');
      break;
    case bmi >= 18.5 && bmi <= 24.9 :
      console.log('Status: normal weight');
      break;
    case bmi >= 25 && bmi <= 29.9 :
      console.log('Status: overweight');
      break;
    case bmi >= 30 && bmi <= 34.9 :
      console.log('Status: obesity level I');
      break;
    case bmi >= 35 && bmi <= 39.9 :
      console.log('Status: obesity level II');
      break;
    case bmi > 40 :
      console.log('Status: obesity levels III and IV');
      break;
    default:
      break;
  }
  return bmi;
}

function main() {
  const WEIGHT = readlineSync.questionFloat("What's your weight? (in kilograms) ");
  const HEIGHT = readlineSync.questionFloat("What's your height? (in centimeters) ");

  returnBmi(WEIGHT, HEIGHT);
}

main();
