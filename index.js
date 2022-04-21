function arrayEquals(name, actual, expected) {
    const equals =
        Array.isArray(actual) &&
        Array.isArray(expected) &&
        actual.length === expected.length &&
        actual.every((val, index) => val === expected[index]);
    return equalsMessaging(name, equals, actual, expected);
}

function objectStrictlyEquals(name, actual, expected) {
    return equalsMessaging(name, actual === expected, actual, expected);
}

function equalsMessaging(name = "test case", equals, actual, expected) {
    if (equals) {
        console.info(`✅ ${name}`);
    } else {
        console.error(`❌ ${name} failed!`);
        console.error(`❌ expected: ${expected}`);
        console.error(`❌ actual: ${actual}`);
    }
    return equals;
}

const arrayToSort = [12, 3, 56, 9, 55, 99, 177];

const reverseString = (s) => s.split("").reverse().join("");

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

function anagrams(a, b) {
    const aMap = new Map();
    const size = a.length;
    if (size !== b.length) {
        return false;
    }
    for (let i = 0; i < size; i++) {
        if (aMap.has(a[i])) {
            aMap.set(a[i], aMap.get(a[i]) + 1);
        } else {
            aMap.set(a[i], 1);
        }
    }
    for (let i = 0; i < size; i++) {
        if (aMap.has(b[i])) {
            aMap.set(b[i], aMap.get(b[i]) - 1);
            if (aMap.get(b[i]) < 0) {
                return false;
            }
        } else {
            return false;
        }
    }
    return true;
}

function caesarCipher(message, shift) {
    if (shift > 26) {
        shift = shift % 26;
    }
    let cipherText = "";
    // A = 65
    // Z = 90
    // a = 97
    // z = 122
    console.log("a".charCodeAt());
}

arrayEquals(
    "sorts array",
    arrayToSort.sort((a, b) => a - b),
    [3, 9, 12, 55, 56, 99, 177]
);

objectStrictlyEquals("it reverses a string", reverseString("hello"), "olleh");

objectStrictlyEquals("it detects a pali", isPalindrome("a"), true);

objectStrictlyEquals("it detects a pali", isPalindrome("aa"), true);

objectStrictlyEquals("it detects a pali", isPalindrome("abba"), true);

objectStrictlyEquals("it detects a pali", isPalindrome("aimia"), true);

objectStrictlyEquals("it detects a non-pali", isPalindrome("hello"), false);

objectStrictlyEquals("it detects a non-pali", isPalindrome("aira"), false);

objectStrictlyEquals("it detects anagrams", anagrams("aira cats", "riaa stac"), true);

objectStrictlyEquals("it detects non-anagrams", anagrams("airacv", "vriaaf"), false);