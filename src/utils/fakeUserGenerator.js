import introduceError from "./errorEmulation.js";
import { fakerEN_US, fakerPL, fakerKA_GE } from "@faker-js/faker";

const englishAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const polishAlphabet = "AĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŹaąbcćdeęfghijklłmnńoópqrsśtuvwxyzź";
const georgianAlphabet = "აბგდევზჱთიკლმნჲოპჟრსტჳუფქღყშჩცძწჭხჴჯჰჵჶჷჸ";
const digits = "0123456789";

function getNameChars(locale) {
    return locale === fakerEN_US ? englishAlphabet :
           locale === fakerPL ? polishAlphabet :
           locale === fakerKA_GE ? georgianAlphabet : "";
}

function getAddressChars(locale) {
    return locale === fakerEN_US ? englishAlphabet + digits :
           locale === fakerPL ? polishAlphabet + digits :
           locale === fakerKA_GE ? georgianAlphabet + digits : "";
}

const generateFakeUser = (locale, errorN) => {
    return {
        uuid: locale.string.uuid(),
        firstName: locale.person.firstName(),
        middleName: locale.person.middleName(),
        lastName: locale.person.lastName(),
        state: locale.location.state({ abbreviated: true }),
        city: locale.location.city(),
        street: locale.location.street(),
        building: locale.location.buildingNumber(),
        apartment: locale.location.secondaryAddress(),
        zipCode: locale.location.zipCode(),
        phone: locale.phone.number(),
    };
}

export const generateFakeUsers = (locale, seed, length, errorN) => {
    locale.seed(seed)

    const users = Array.from({ length }).map(() => {
        return generateFakeUser(locale);
    });

    if (errorN > 0) {
        users.forEach((user, index) => {
            const nameChars = getNameChars(locale);
            user.firstName = introduceError(user.firstName, errorN, nameChars, locale);
            user.middleName = introduceError(user.middleName, errorN, nameChars, locale);
            user.lastName = introduceError(user.lastName, errorN, nameChars, locale);

            const addressChars = getAddressChars(locale);
            user.state = introduceError(user.state, errorN, addressChars, locale);
            user.city = introduceError(user.city, errorN, addressChars, locale);
            user.street = introduceError(user.street, errorN, addressChars, locale);
            user.building = introduceError(user.building, errorN, addressChars, locale);
            user.apartment = introduceError(user.apartment, errorN, addressChars, locale);
            user.zipCode = introduceError(user.zipCode, errorN, addressChars, locale);

            user.phone = introduceError(user.phone, errorN, "-+()0123456789", locale); 
        });
    }

    const formattedUsers = [];

    users.forEach((user, index) => {
        formattedUsers.push({
            id: user.uuid,
            name: `${user.firstName} ${locale === fakerEN_US ? user.middleName + " " : ""}${user.lastName}`,
            address: `${user.state}, ${user.city}, ${user.street}, ${user.building}, ${user.apartment}, ${user.zipCode}`,
            phone: user.phone,
        });
    });

    return formattedUsers;
}