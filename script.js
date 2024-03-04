function codeBtn() {
    let replace_text = document.querySelector("#text_input").value.toLowerCase();
    replace_text = replace_text.replace(/a/g, "mal")
    replace_text = replace_text.replace(/i/g, "zk")
    replace_text = replace_text.replace(/u/g, "suh")
    replace_text = replace_text.replace(/o/g, "jin")
    replace_text = replace_text.replace(/e/g, "boh")
    let result = document.getElementById("output");
    result.innerText = replace_text;
}

function decodeBtn() {
    let output_save = document.getElementById("output").innerText;
    output_decoded = output_save
        .replace(/mal/g, "a")
        .replace(/zk/g, "i")
        .replace(/suh/g, "u")
        .replace(/jin/g, "o")
        .replace(/boh/g, "e")
    let result = document.getElementById("output");
    result.innerText = output_decoded;
}