function vowels() {
  function replaceVowels() {
      let newString = "";
      for (let i=0; i < str.length; i++) {
        if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || str.charAt(i) == "o" || str.charAt(i) == "u" ||
        str.charAt(i) == "A" || str.charAt(i) == "E" || str.charAt(i) == "E" || str.charAt(i) == "O" || str.charAt(i) == "U") {
          newString += "-";
        }
        else {
          newString += str.charAt(i);
        }
      }
      return newString;
    }
    let str = document.getElementById("response").value;
    document.getElementById("output").innerHTML = replaceVowels();
   }