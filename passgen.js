let password = {
    passLength : 0,
    hasLower : true,
    hasUpper : true,
    hasSpecial : true,
    hasNumber : true,

    setProps() {
        this.passLength = prompt("How long do you want the password? (8-128)");
        this.hasLower = confirm("Do you need lower case letters?");
        this.hasUpper = confirm("Do you need upper case letters?");
        this.hasSpecial = confirm("Do you need special characters?");
        this.hasNumber = confirm("Do you need numbers?");
    },

    cipher : [],

    getCipher() {
        return ( this.cipher.join("") );
    },

};

let characters = {
    upperCaseLetters : ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
    numbers : ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'],
    specialCharacters : ['!', '@', '#', '$', '%', '^', '&', '*', '+', '-'],
}

let lowerCaseLetters = characters.upperCaseLetters.map( letter => letter.toLowerCase() );
characters.lowerCaseLetters = lowerCaseLetters;

let countCharsRemaining = (currentChars) => {
    return (password.passLength - currentChars);
}

let getRandomIndex = (array) => {
    return ( Math.floor(Math.random() * array.length) );
}


let generatePassword = () => {

    password.cipher = [];
    password.setProps();

    let possibleCharacters = [];

    if (password.hasLower) {
        possibleCharacters.push(...characters.lowerCaseLetters);
        let randomLower = characters.lowerCaseLetters[ getRandomIndex(characters.lowerCaseLetters) ];
        password.cipher.push(randomLower);
    }

    if (password.hasUpper) {
        possibleCharacters.push(...characters.upperCaseLetters);
        let randomUpper = characters.upperCaseLetters[ getRandomIndex(characters.upperCaseLetters) ];
        password.cipher.push(randomUpper);
    }

    if (password.hasSpecial) {
        possibleCharacters.push(...characters.specialCharacters);
        let randomSpecial = characters.specialCharacters[ getRandomIndex(characters.specialCharacters) ];
        password.cipher.push(randomSpecial);
    }

    if (password.hasNumber) {
        possibleCharacters.push(...characters.numbers);
        let randomNumber = characters.numbers[ getRandomIndex(characters.numbers) ];
        password.cipher.push(randomNumber);

    }

    //console.log(possibleCharacters);

    let numRemaining = password.passLength - password.cipher.length;

    for (let i = 0; i < numRemaining; i++) {
        let index = getRandomIndex(possibleCharacters);
        password.cipher.push(possibleCharacters[index]);
    }

    //console.log(password.cipher);

    let passTextElement = document.createElement("p");
    passTextElement.innerHTML = password.getCipher();

    let field = document.getElementById("pass-field");
    field.appendChild(passTextElement);





}

let genBtn = document.getElementById("genBtn");




genBtn.addEventListener("click", generatePassword)






