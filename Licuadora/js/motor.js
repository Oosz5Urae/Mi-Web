var estadoLicuadora = "apagada";
var licuadora = document.getElementById("blender");

function controlarLicuadora() {
    if (estadoLicuadora == "apagada") {
        estadoLicuadora = "encendido";
console.log("me prendiste");
    } else {
        estadoLicuadora = "apagada";
        console.log("me apagaste");
    }
}