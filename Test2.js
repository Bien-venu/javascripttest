function decipher(encryptedText, word) {
  function shiftText(text, shift) {
    return text
      .split("")
      .map((char) => {
        if (char >= "a" && char <= "z") {
          return String.fromCharCode(
            ((char.charCodeAt(0) - 97 + shift) % 26) + 97
          );
        } else if (char >= "A" && char <= "Z") {
          return String.fromCharCode(
            ((char.charCodeAt(0) - 65 + shift) % 26) + 65
          );
        } else {
          return char;
        }
      })
      .join("");
  }

  for (let shift = 1; shift < 26; shift++) {
    const decryptedText = shiftText(encryptedText, shift);
    console.log(`Shift: ${shift}, Decrypted Text: ${decryptedText}`); 
    if (decryptedText.includes(word)) {
      return decryptedText;
    }
  }
  return null; 
}

let encryptedText = "Uifsf jt b tfdsfu dpef!";
let word = "This";

console.log(decipher(encryptedText, word)); 
