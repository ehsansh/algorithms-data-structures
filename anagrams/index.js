// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

function createCharCountObj(str) {
    let charCountObj = {};
    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        charCountObj[char] = charCountObj[char] + 1 || 1;
    }
    return charCountObj;
}

function sanitizeString(str) {
    return str
        .replace(/[^a-zA-Z]+/g, '')
        .toLowerCase()
        .trim();
}
// O(n+m)
function anagrams2(stringA, stringB) {
    stringA = sanitizeString(stringA);
    stringB = sanitizeString(stringB);

    if (stringA.length !== stringB.length) return false;

    let aCharObj = createCharCountObj(stringA);
    let bCharObj = createCharCountObj(stringB);

    for (let key in aCharObj) {
        if (aCharObj[key] !== bCharObj[key]) {
            return false;
            break;
        }
    }

    return true;
}
//time complexity for this solution is O(NLogN)
function anagrams(stringA, stringB) {
    stringA = sanitizeString(stringA);
    stringB = sanitizeString(stringB);

    if (stringA.length !== stringB.length) return false;

    return (
        stringA.split('').sort().join('') === stringB.split('').sort().join('')
    );
}

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup('bdd');
const { assert } = chai;

describe('Anagrams', () => {
    it('works if case sensitivity and non word characters NOT taken into account', () => {
        assert.equal(anagrams('earth', 'heart'), true);

        assert.equal(anagrams('love', 'meow'), false);
        assert.equal(anagrams('lol', 'lolc'), false);
    });
    it("is case insensitive. 'HEART' and 'earth' should return true", () => {
        assert.equal(anagrams('HEART', 'earth'), true);
        assert.equal(anagrams('heart', 'EARTH'), true);

        assert.equal(anagrams('love', 'meow'), false);
        assert.equal(anagrams('lol', 'lolc'), false);
    });
    it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
        assert.equal(anagrams('heart!', ' earth'), true);

        assert.equal(anagrams('love', 'meow'), false);
        assert.equal(anagrams('lol', 'lolc'), false);
    });
});

mocha.run();
