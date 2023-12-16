import { faker } from "@faker-js/faker";

const getRandomNumber = (n) => faker.number.int({ max: n });

const getRandomChar = (s) => {
    const randomIndex = getRandomNumber(s.length);
    return s.slice(randomIndex, randomIndex + 1);
};

const deleteCharError = (s) => {
    let newStr = s.split("");
    newStr.splice(getRandomNumber(s.length), 1);
    return newStr.join("");
};

const addCharError = (s) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const randomIndex = getRandomNumber(s.length);
    return s.slice(0, randomIndex) + getRandomChar(chars) + s.slice(randomIndex);
};

const swapCharError = (s) => {
    let newStr = s.split(""),
        first = getRandomNumber(s.length),
        second = getRandomNumber(s.length) + 1;

    let temp = newStr[first];    
    newStr[first] = newStr[second];
    newStr[second] = temp;

    return newStr.join("");
};

export default function introduceError(s) {
    const errorType = getRandomNumber(3);

    switch (errorType) {
        case 0: return deleteCharError(s);
        case 1: return addCharError(s);
        case 2: return swapCharError(s);
        default: return s;
    }
};