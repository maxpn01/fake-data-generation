const generateFakeUser = (locale) => {
    const loc = locale.location,
          firstName = locale.person.firstName(),
          middleName = locale.person.middleName(),
          lastName = locale.person.lastName(),
          state = loc.state({ abbreviated: true }),
          city = loc.city(),
          street = loc.street(),
          building = loc.buildingNumber(),
          apartment = loc.secondaryAddress(),
          zipCode = loc.zipCode();

    return {
        id: locale.string.uuid(),
        name: `${firstName} ${middleName} ${lastName}`,
        address: `${state}, ${city}, ${street}, ${building}, ${apartment}, ${zipCode}`,
        phone: locale.phone.number(),
    }
}

export const generateFakeUsers = (locale, seed, length) => {
    const users = [];

    locale.seed(seed);

    Array.from({length: length}).forEach(() => {
        users.push(generateFakeUser(locale))
    })

    return users;
}