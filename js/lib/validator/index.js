exports.isValid = function(person) {
    if (!person.hasOwnProperty("firstName")) {
        throw 'First name is mandatory';
    }

    if (!person.firstName) {
        return false;
    }

    if (person.yearOfBirth >= 1990) {
        return true;
    }

    return false;
};
