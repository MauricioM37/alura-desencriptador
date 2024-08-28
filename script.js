document.getElementById("encryptBtn").addEventListener("click", function() {
    let inputText = document.getElementById("inputText").value;
    let encryptedText = encryptText(inputText);
    showOutput(encryptedText);
});

document.getElementById("decryptBtn").addEventListener("click", function() {
    let inputText = document.getElementById("inputText").value;
    let decryptedText = decryptText(inputText);
    showOutput(decryptedText);
});

document.getElementById("copyBtn").addEventListener("click", function() {
    let outputText = document.getElementById("outputText");
    outputText.select();
    document.execCommand("copy");
});

function encryptText(text) {
    let encryptedText = text.replace(/e/g, "enter")
                            .replace(/i/g, "imes")
                            .replace(/a/g, "ai")
                            .replace(/o/g, "ober")
                            .replace(/u/g, "ufat");
    return encryptedText;
}

function decryptText(text) {
    let decryptedText = text.replace(/enter/g, "e")
                            .replace(/imes/g, "i")
                            .replace(/ai/g, "a")
                            .replace(/ober/g, "o")
                            .replace(/ufat/g, "u");
    return decryptedText;
}

function showOutput(text) {
    let outputTextArea = document.getElementById("outputText");
    let placeholderImg = document.getElementById("placeholderImg");

    placeholderImg.style.display = "none";
    outputTextArea.style.display = "block";
    outputTextArea.value = text;
}
