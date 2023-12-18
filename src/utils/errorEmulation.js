import { fakerEN_US, fakerPL, fakerKA_GE } from "@faker-js/faker";

function getRandomInt(locale, n) {
    return locale === fakerEN_US ? fakerEN_US.number.int({ max: n }) :
           locale === fakerPL ? fakerPL.number.int({ max: n }) : 
           locale === fakerKA_GE ? fakerKA_GE.number.int({ max: n }) : "";
}

function getRandomFloat(locale, n) {
    return locale === fakerEN_US ? fakerEN_US.number.float({ max: n }) :
           locale === fakerPL ? fakerPL.number.float({ max: n }) : 
           locale === fakerKA_GE ? fakerKA_GE.number.float({ max: n }) : "";
} 

function getRandomChar(s, locale) {
    const randomIndex = getRandomInt(locale, s.length);
    return s.slice(randomIndex, randomIndex + 1);
}

function deleteCharError(s, locale) {
    let newStr = s.split("");
    const randomIndex = s.length > 0 ? getRandomInt(locale, s.length-1) :
                                       getRandomInt(locale, s.length);
    newStr.splice(randomIndex, 1);
    return newStr.join("");
}

function addCharError(s, charsSet, locale) {
    const randomIndex = getRandomInt(locale, s.length);
    return s.slice(0, randomIndex) + getRandomChar(charsSet, locale) + s.slice(randomIndex);
};

function swapCharError(s, locale) {
    let newStr = s.split(""),
        first = getRandomInt(locale, s.length),
        second = getRandomInt(locale, s.length)+1;

    let temp = newStr[first];
    newStr[first] = newStr[second];
    newStr[second] = temp;

    return newStr.join("");
};

function executeErrorFunc(s, charSet, locale) {
    const errorType = getRandomInt(locale, 3);

    if (s.length >= 20) {
        switch (errorType) {
            case 0: return deleteCharError(s, locale);
            case 1: return deleteCharError(s, locale);
            case 2: return addCharError(s, charSet, locale);
            case 3: return swapCharError(s, locale);
            default: return s;
        }
    }

    if (s.length <= 10) {
        switch (errorType) {
            case 0: return addCharError(s, charSet, locale);
            case 1: return addCharError(s, charSet, locale);
            case 2: return addCharError(s, charSet, locale);
            case 3: return swapCharError(s, locale);
            default: return s;
        }
    }

    switch (errorType) {
        case 0: return deleteCharError(s, locale);
        case 1: return addCharError(s, charSet, locale);
        case 2: return swapCharError(s, locale);
        case 3: return swapCharError(s, locale);
        default: return s;
    }
}

export default function introduceError(s, errorN, charSet, locale) {
    if (errorN < 1) {
        if (getRandomFloat(locale, 1) < errorN) return executeErrorFunc(s, charSet, locale);
        else return s;
    }

    return executeErrorFunc(s, charSet, locale);
};