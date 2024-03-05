function accentRemoval(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f\ ]/g, "");
}

function codeBtn() {
    let output_save = document.querySelector("#text_input").value.toLowerCase();
    if (output_save !== "") {
        let output_coded = output_save
            .replace(/a/g, "mal")
            .replace(/i/g, "zk")
            .replace(/u/g, "suh")
            .replace(/o/g, "jin")
            .replace(/e/g, "boh");
        output_coded = accentRemoval(output_coded);
        let result = document.getElementById("output");
        result.innerText = output_coded;
    } else {
        alert("Please write something!");
    }
}

function decodeBtn() {
    let output_save = document.querySelector("#text_input").value.toLowerCase();
    if (output_save !== "") {
        let output_decoded = output_save
            .replace(/mal/g, "a")
            .replace(/zk/g, "i")
            .replace(/suh/g, "u")
            .replace(/jin/g, "o")
            .replace(/boh/g, "e");
        output_decoded = accentRemoval(output_decoded);
        let result = document.getElementById("output");
        result.innerText = output_decoded;
    } else {
        alert("Please write something!");
    }

}

function copyBtn() {
    let textCopied = document.getElementById("output").textContent
    navigator.clipboard.writeText(textCopied)
        .then(() => {
            console.log("Text copied with success!")
        })
        .catch(err => {
            console.error("Error trying to copy")
        });
}

function clearBtn() {
    let output = document.getElementById("output");
    let input_box = document.querySelector("#text_input");
    output.textContent = "";
    input_box.value = "";
}
