  function encryptMessage() {
    var inputText = document.getElementById("inputText").value;
    var shiftValue = parseInt(document.getElementById("shiftValue").value);

    if (inputText.trim() === "" || isNaN(shiftValue) || shiftValue < 1) {
      alert("Please enter valid input and shift value.");
      return;
    }

    var encryptedMessage = caesarCipherEncrypt(inputText, shiftValue);
    document.getElementById("encodedMessage").value = encryptedMessage;
  }

  function caesarCipherEncrypt(text, shift) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
      var charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) {  
        result += String.fromCharCode((charCode - 65 + shift) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) {  
        result += String.fromCharCode((charCode - 97 + shift) % 26 + 97);
      } else {
        result += text[i]; 
      }
    }
    return result;
  }


  function decryptMessage() {
    var encodedText = document.getElementById("encodedText").value;
    var shiftValue = parseInt(document.getElementById("encodedshiftValue").value);

    if (encodedText.trim() === "" || isNaN(shiftValue) || shiftValue < 1) {
      alert("Please enter valid input and shift value.");
      return;
    }

    var decryptedMessage = caesarCipherDecrypt(encodedText, shiftValue);
    document.getElementById("decryptedMessage").value = decryptedMessage;
  }

  function caesarCipherDecrypt(text, shift) {
    var result = "";
    for (var i = 0; i < text.length; i++) {
      var charCode = text.charCodeAt(i);
      if (charCode >= 65 && charCode <= 90) { 
        result += String.fromCharCode((charCode - 65 - shift + 26) % 26 + 65);
      } else if (charCode >= 97 && charCode <= 122) {  
        result += String.fromCharCode((charCode - 97 - shift + 26) % 26 + 97);
      } else {
        result += text[i]; 
      }
    }
    return result;
  }