// ASSESSMENT 6: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array of objects and returns an array with a sentence about each person with their name capitalized.

// a) Create a test with an expect statement using the variable provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("sentenceMaker", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in an array of objects and returns an array with a sentence about each person with their name capitalized.", () => {
    const people = [
      { name: "ford prefect", occupation: "a hitchhiker" },
      { name: "zaphod beeblebrox", occupation: "president of the galaxy" },
      { name: "arthur dent", occupation: "a radio employee" }
    ]

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(sentenceMaker(people)).toEqual(["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."])
  })
})

// Expected output: ["Ford Prefect is a hitchhiker.", "Zaphod Beeblebrox is president of the galaxy.", "Arthur Dent is a radio employee."]

// sentenceMaker › takes in an array of objects and returns an array with a sentence about each person with their name capitalized.
//  ReferenceError: sentenceMaker is not defined
// Good failure


// b) Create the function that makes the test pass.

// Declare a function called sentenceMaker which will take in one parameter, array.
// Inside the function, declare a variable called sentence which will be assigned to the .map() higher order function and this higher order function will take in one parameter called person.
// Inside the higher order function, declare a variable called splitName which will be assigned to name key of the object with the addition of the .split(" ") method so that the person's first name and last name are its own values rather than the whole name being one value.
// Declare another variable called firstName which will be responsible for holding the value of the capitalized first name of person. This variable will incorporate various methods such as .toUpperCase(), .slice(), and .split(). Due to the nature of the .slice() method, the variable firstName will have an unwanted character at index 1.
// In order to get rid of this unwated character from firstName, we will use the .splice() with the appropriate arguments, to remove the 2nd character.
// Declare one last variable called lastName which will follow the same logic as the variable firstName.
// Return the structure of the expected output by incorporating spaces and the person's occupation. Also make sure to utilize the .join("") method on the firstName and lastName variables since they split into an array.
// Finally, return the variable sentence outside of the higher-order function which was established at the very beginning of the function.

const sentenceMaker = (array) => {
  let sentence = array.map(person => {
    let splitName = person.name.split(" ")
    let firstName = (splitName[0][0].toUpperCase()+splitName.slice(0,1)).split("")
    firstName.splice(1,1)
    let lastName = (splitName[1][0].toUpperCase()+splitName.slice(1,2)).split("")
    lastName.splice(1,1)
    return firstName.join("")+" "+lastName.join("")+" is "+ person.occupation+"."
  })
  return sentence
}

// The test passed (green) :D


// --------------------2) Create a function that takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.

// a) Create a test with an expect statement using the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("onlyRemainders", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.", () => {
    const hodgepodge1 = [23, "Heyyyy!", 45, -10, 0, "Yo", false]
    // Expected output: [ 2, 0, -1, 0 ]
    const hodgepodge2 = [5, "Hola", 43, -34, "greetings", true]
    // Expected output: [ 2, 1, -1 ]

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(onlyRemainders(hodgepodge1)).toEqual([ 2, 0, -1, 0 ])
    expect(onlyRemainders(hodgepodge2)).toEqual([ 2, 1, -1 ])
  })
})

// onlyRemainders › takes in a mixed data array and returns an array of only the REMAINDERS of the numbers when divided by 3.
// ReferenceError: onlyRemainders is not defined
// Good failure



// b) Create the function that makes the test pass.

// Declare a function called onlyRemainders that will take in one parameter, array.
// Within the function, declare a variable called remainders which will be assigned to the value of array.filter() since our expected output will be an array with a modified length. The .filter() method will take in one parameter, value.
// Inside the filter method, return only the values that are numbers inside the array. This is accomplished by utilizing the typeof operator.
// Outside of the filter method, use the .map() method on the variable remainders since our goal is to return the remainders of the numbers when divided by 3.
// The argument for the map() method will just be value => value%3 since the modulo operator will give us the remainder.

const onlyRemainders = (array) => {
  let remainders = array.filter(value => {
    return typeof value === "number"
  })
  return remainders.map(value => value%3)
}

// The test passed (green) :D


// --------------------3) Create a function that takes in an array of numbers and returns the sum of all the numbers cubed.

// a) Create a test with an expect statement using the variables provided.

// a describe method that lists the name of the function OR naming of the particular test.
describe("cubeSum", () => {

  // a test/it method, nested within the describe block, that in plain words, describes that the function does.
  it("takes in an array of numbers and returns the sum of all the numbers cubed.", () => {
    const cubeAndSum1 = [2, 3, 4]
    // Expected output: 99
    const cubeAndSum2 = [0, 5, 10]
    // Expected output: 1125

    //an expect method, nested within the test block, calling on the hello() function, followed by the .toEqual() matcher that checks the expected output of the function return.
    expect(cubeSum(cubeAndSum1)).toEqual(99)
    expect(cubeSum(cubeAndSum2)).toEqual(1125)
  })
})

// cubeSum › takes in an array of numbers and returns the sum of all the numbers cubed.
// ReferenceError: cubeSum is not defined
// Good failure

// b) Create the function that makes the test pass.

// Declare a function called cubeSum which will take in a parameter, array.
// Inside the function, declare a variable called answer which will be assigned to the value of array.map() since we essentially want the length of the array to be the same but with modified values.
// Since we want to cube each number in the array first, we will use the exponent operator (**) followed by a 3 which indicates that the value is being cubed.
// Now that we have an array with the values cubed, our next goal is to add these numbers together. The .reduce() method is an array method that is helpful for calculating the sum. After incorporating the appropriate arguments in the reduce() method, the test passes.

const cubeSum = (array) => {
  let answer = array.map(value => {
    return value ** 3
  })
  return answer.reduce((a,b) => a+b)
}

// The test passed (green) :D
