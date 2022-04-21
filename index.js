function arrayEquals(actual, expected) {
    return Array.isArray(actual) &&
        Array.isArray(expected) &&
        actual.length === expected.length &&
        actual.every((val, index) => val === expected[index]);
}

function stringEquals(actual, expected) {
    console.log(actual);
    console.log(expected);
    return actual == expected;
}

const arrayToSort = [12, 3, 56, 9, 55, 99, 177];

console.log(
    arrayEquals(
        arrayToSort.sort((a, b) => a - b),
        [3, 9, 12, 55, 56, 99, 177]
    )
);

function reverseAString(s) {
    
}