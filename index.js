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
    console.log(`✅ ${name}`);
  } else {
    console.log(`❌ ${name} failed!`);
    console.log(`❌ expected: ${expected}`);
    console.log(`❌ actual: ${actual}`);
  }
  return equals;
}

const arrayToSort = [12, 3, 56, 9, 55, 99, 177];

const reverseString = (s) => s.split("").reverse().join("");

function isPalindrome(s) {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    console.log(s[left], s[right]);
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(
  arrayEquals(
    "sorts array",
    arrayToSort.sort((a, b) => a - b),
    [3, 9, 12, 55, 56, 99, 177]
  )
);

console.log(objectStrictlyEquals("test object equality comparison", "b", "b"));

console.log(
  objectStrictlyEquals("it reverses a string", reverseString("hello"), "olleh")
);

console.log(objectStrictlyEquals("it detects a pali", isPalindrome("a"), true));

console.log(
  objectStrictlyEquals("it detects a pali", isPalindrome("aa"), true)
);
console.log(
  objectStrictlyEquals("it detects a pali", isPalindrome("abba"), true)
);

console.log(
  objectStrictlyEquals("it detects a pali", isPalindrome("aimia"), true)
);
console.log(
  objectStrictlyEquals("it detects a non-pali", isPalindrome("hello"), false)
);
console.log(
  objectStrictlyEquals("it detects a non-pali", isPalindrome("aira"), false)
);
