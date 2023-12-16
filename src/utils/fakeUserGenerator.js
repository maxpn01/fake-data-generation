import introduceError from "./errorEmulation.js";
import { faker } from "@faker-js/faker";

const generateFakeUser = (locale, seed, errorN) => {
    const loc = locale.location,
          uuid = locale.string.uuid(),
          firstName = locale.person.firstName(),
          middleName = locale.person.middleName(),
          lastName = locale.person.lastName(),
          state = loc.state({ abbreviated: true }),
          city = loc.city(),
          street = loc.street(),
          building = loc.buildingNumber(),
          apartment = loc.secondaryAddress(),
          zipCode = loc.zipCode(),
          phone = locale.phone.number();

    if (errorN > 0) {
        let noisyData = [
            firstName, middleName, lastName,
            state, city, street, building, 
            apartment, zipCode, phone];    

        for (let i = 0; i < noisyData.length; i++) {
            for (let j = 0; j < errorN; j++) {
                noisyData[i] = introduceError(noisyData[i]);
            }
        }

        if (errorN < 1) {

        }

        return {
            id: uuid,
            name: `${noisyData[0]} ${noisyData[1]} ${noisyData[2]}`,
            address: `${noisyData[3]}, ${noisyData[4]}, ${noisyData[5]}, ${noisyData[6]}, ${noisyData[7]}, ${noisyData[8]}`,
            phone: noisyData[9]
        }
    }

    return {
        id: uuid,
        name: `${firstName} ${middleName} ${lastName}`,
        address: `${state}, ${city}, ${street}, ${building}, ${apartment}, ${zipCode}`,
        phone,
    }
}

export const generateFakeUsers = (locale, seed, length, errorN) => {
    const users = [];

    locale.seed(seed);

    Array.from({length: length}).forEach(() => {
        users.push(generateFakeUser(locale, seed, errorN))
    })

    return users;
}

const errorN = 0.25;

console.log("Error: 0");
console.log(generateFakeUsers(faker, 2, 1, 0));
console.log(`Error: ${errorN}`);
console.log(generateFakeUsers(faker, 2, 1, errorN));