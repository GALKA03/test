import { NextResponse } from "next/server";

const newLocal = (word) => {
    const charCount = {};

    const nonRepeatedChars = [...word].filter((char) => {
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
        return charCount[char] === 1;
    });

    return nonRepeatedChars.length > 0 ? nonRepeatedChars[0] : null;
};

// const findFirstNonRepeatedSymbol = (word) => {
//   const charCount = {};

//   for (let i = 0; i < word.length; i++) {
//     const char = word[i];
//     charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
//   }

//   for (let i = 0; i < word.length; i++) {
//     const char = word[i];
//     if (charCount[char] === 1) {
//       return char;
//     }
//   }

//   return null; // If no non-repeated symbol found
// };
// const findFirstNonRepeatedSymbol = (word) => {
//   const charCount = {};

//   const nonRepeatedChar = [...word].find((char) => {
//     charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
//     return Object.values(charCount).some((count) => count === 1);
//   });

//   return nonRepeatedChar || null;
// };
const findFirstUniqueSymbol = (array) => {
  for (let i = 0; i < array.length; i++) {
    const word = array[i];
    const uniqueSymbol = [...word].find((char) => {
      return word.indexOf(char) === word.lastIndexOf(char);
    });

    if (uniqueSymbol) {
      return uniqueSymbol;
    }
  }

  return null; // If no unique symbol found
};

function findUniqueCharacter(text) {
  const words = text.split(" ");
  console.log("words", words);
  const filteredWords = words.filter((word) => /^[a-zA-Z]+$/.test(word));
  // console.log('filter', filteredWords)
  const uniqueCharacters = filteredWords.flatMap((word) => word.toLowerCase());
  console.log("uniqueCharacters:", uniqueCharacters);
const uniqueWords = uniqueCharacters.filter((word, index, arr) => {
//   const newArr= arr.indexOf(word) === index && arr.lastIndexOf(word) === index; //из не повторяющихся
    const newArr = arr.indexOf(word) !== index; //из повторяющихся
      console.log("newArr", newArr);
    return newArr;
  });
  const firstNonRepeatedSymbols = uniqueWords.map((word) =>
    findFirstUniqueSymbol(word)
  
  );
  console.log("firstNonRepeatedSymbols", firstNonRepeatedSymbols);

  const firstUniqueCharacter = firstNonRepeatedSymbols.find(
    (char, index, array) => {
      const firstLatter = array.indexOf(char) === array.lastIndexOf(char);
      return firstLatter;
    }
  );
  console.log("firstUniqueCharacter ", firstUniqueCharacter);
  return firstUniqueCharacter;
}



export async function POST(request) {
  try {
    const data = await request.json();
    const text = data.text;

    console.log("data api", data);
    // Create a new pizza in the database with the given data
    const uniqueCharacter = findUniqueCharacter(text);
    return new NextResponse(
      JSON.stringify({ result: uniqueCharacter }), // Convert response to valid JSON
      { status: 200, headers: { "Content-Type": "application/json" } } // Set appropriate headers
    );
  } catch (error) {
    return new NextResponse.json({ error: error.message }, { status: 500 });
  }
}
