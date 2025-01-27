const form = document.querySelector(".formulario-fale-conosco ")
const mascara = document.querySelector(".mascara-form")


function mostrarForm() {
    form.style.left = "40%"
    form.style.trasnform = "translateX(-50%)"
    mascara.style.visibility = "visible"

}
function esconderForm() {
    form.style.left = "-300px"
    form.style.trasnform = "translateX(0)"
    mascara.style.visibility = "hidden"
}
