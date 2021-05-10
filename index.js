// Make a package that removes spaces from a string and replaces them with dashes

module.exports = function spaceToDash(string) {
    if (typeof string !== "string") throw new TypeError("Input not of type string!");
    return string.replace(/\s/g, "-");
};
