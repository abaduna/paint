var canvas = document.getElementById("canvas")
var contex = canvas.getContext("2d")

contex.lineWidth=1

var ruta=false

function dibujar(evento){
    x=evento.clientX - canvas.offsetLeft
    y=evento.clientY - canvas.offsetTop*0.65
    if(ruta==true){
        contex.lineTo(x,y)
        contex.stroke()
    }
    
}
canvas.addEventListener("mousemove", dibujar)

canvas.addEventListener("mousedown",()=>{
    ruta=true
    contex.beginPath()
    contex.moveTo(x,y)
    canvas.addEventListener("mousemove", dibujar)
    

})
canvas.addEventListener("mouseup",()=>{
    ruta=false
})
function color (color){
    contex.strokeStyle= color.value
}
function ancho (ancho){
    contex.lineWidth= ancho.value
    document.getElementById("valor").innerHTML = ancho.value
}
function limpiar(){
    contex.clearRect(0,0,canvas.width,canvas.height)
    
}
