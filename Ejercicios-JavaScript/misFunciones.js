/**
 * Conversion de unidades de metros, pies, yardas y pulgadas
 * @method conversionUnidades
 * @param (string) id - Id de los inputs del formulario
 * @param (number) valor - El valor de los inputs del formulario
 */

//Funciones ConversorUnidades.html

function conversionUnidades(id,valor)
{
    let metro, pulgada, pie, yarda;

    if(valor.includes(","))
    {
        valor = valor.replace("," , ".");
    }

    if(isNaN(valor))
    {
        alert("Se ingreso un valor incorrecto");
        metro = "";
        pulgada = "";
        pie = "";
        yarda = "";
    }
    else if(id=="metro")
    {
        metro = valor;
        pulgada = 39.3701*valor;
        pie = 3.28084*valor;
        yarda = 1.09361*valor;
    }
    else if(id=="pulgada")
    {
        pulgada = valor;
        metro = valor/39.3701;
        pie = valor/12;
        yarda = valor/36;
    }
    else if(id=="pie")
    {
        pie = valor;
        metro = valor/3.281;
        pulgada = valor*12;
        yarda = valor/3;
    }
    else if(id=="yarda")
    {
        yarda = valor;
        metro = valor/1.094;
        pulgada = valor*36;
        pie = valor*3;
    }

    document.lasUnidades.unid_metro.value = Math.round(metro*100)/100;
    document.lasUnidades.unid_pulgada.value = Math.round(pulgada*100)/100;
    document.lasUnidades.unid_pie.value = pie.toFixed(2)
    document.lasUnidades.unid_yarda.value = yarda.toFixed(2);

}

//Funciones grados_radianes.html

function convertirGR(id)
{
    let grad, rad;

    if(id=="grados")
    {
        grad = document.getElementById("grados").value;
        rad = (grad*Math.PI)/180;
    }
    else if(id=="radianes")
    {
        rad = document.getElementById("radianes").value;
        grad = (rad*180)/Math.PI
    }

    document.getElementById("grados").value = grad;
    document.getElementById("radianes").value = rad;
}


//Funciones mostrar_ocultar.html

function mostrar_ocultar(valorMO)
{
    if(valorMO=="val_mostrar")
    {
        document.getElementById("unDiv").style.display = 'block'
    }
    else if(valorMO=="val_ocultar")
    {
        document.getElementById("unDiv").style.display = 'none'
    }
}


//Funciones operacionesMatematicas.html

function calcularSuma()
{
    let num1, num2;
    num1 = document.getElementById("nums1").value;
    num2 = document.getElementById("nums2").value;
    document.getElementById("totalS").innerHTML  = Number(num1) + Number(num2);
}

function calcularResta()
{
    let num1, num2;
    num1 = document.getElementById("numr1").value;
    num2 = document.getElementById("numr2").value;
    document.getElementById("totalR").value = Number(num1) - Number(num2);
}

function calcularMul()
{
    let num1, num2;
    num1 = document.getElementById("numm1").value;
    num2 = document.getElementById("numm2").value;
    document.getElementById("totalM").value = Number(num1) * Number(num2);
}

function calcularDiv()
{
    let num1, num2;
    num1 = document.getElementById("numd1").value;
    num2 = document.getElementById("numd2").value;
    document.getElementById("totalD").value = Number(num1) / Number(num2);
}


//Funciones primerWeb.html

function cargarWeb()
{
    let cantidad, unidad, urlComp;

    cantidad = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;

    urlComp = "segundaWeb.html#" + cantidad + "#" + unidad;
    window.open(urlComp);

}

function cargarResultado()
{
    let cantidad, unidad, urlComp;

    urlComp = window.location.href.split("/")[5];
    console.log(urlComp);

    cantidad = urlComp.split("#")[1];
    unidad = urlComp.split("#")[2];

    document.getElementById("dist").value = cantidad + " " + unidad;
}

//localstorage

function guardarLS()
{
    let distancia, unidad;

    distancia = document.getElementById("distancia").value;
    unidad = document.getElementsByName("unidades")[0].value;
    localStorage.setItem("distanciaLS", distancia);
    localStorage.setItem("unidadLS", unidad);
    window.open("2_web.html");
}

function cargarLS()
{
    let cant, un;
    cant = localStorage.getItem("distanciaLS");
    un = localStorage.getItem("unidadLS");
    document.getElementById("dist").value = cant + " " + un;
}

//Cua

function dibujarCirculoCuadrado(){
    let canvas = document.getElementById("myCanvas");
    let ctx = canvas.getContext("2d");

    let xMax = canvas.width;
    let yMax = canvas.height;
    let margen = 10;
    let tamCuadrado = 50;

    ctx.fillRect(0+margen,yMax-50-margen,tamCuadrado,tamCuadrado);

    ctx.arc(xMax/2,yMax/2,20,0,2*Math.PI);
    ctx.stroke();
    ctx.fillStyle = "3c91d2";
    ctx.fill();
}

//Mini Paint

var bandera;
function dibujar(){
    let canvas = document.getElementById("linzoDibujo");
    let ctx = canvas.getContext("2d");

    let posX = event.clientX;
    let posY = event.clientY;

    console.log(posX, posY);

    canvas.onmousedown = function (){bandera=true};
    canvas.onmouseup = function (){bandera=false};

    if(bandera) {
        ctx.fillRect(posX, posY, 5, 5)
    }
}

function borrarCanvas(){
    let canvas = document.getElementById("linzoDibujo");
    let ctx = canvas.getContext("2d");

    canvas.width = canvas.width;
}

function cargarListener(){
    document.getElementById("lienzoDibujo").addEventListener("mousemove",function (event) {
        let canvas = document.getElementById("linzoDibujo");
        let ctx = canvas.getContext("2d");

        let posX = event.clientX;
        let posY = event.clientY;


        canvas.onmousedown = function () {
            bandera = true
        };
        canvas.onmouseup = function () {
            bandera = false
        };

        if (bandera) {
            ctx.fillRect(posX, posY, 5, 5)
        }
    });
}


//Dibujar Cuadriculado

function dibujarCuadriculado(){
    let canvas = document.getElementById("linzoDibujo");
    let ctx = canvas.getContext("2d");


    let xMax = canvas.width;
    let yMax = canvas.height;

    //Dibujar lineas horizontales
    for(let i=20; i<yMax;){
        ctx.beginPath();
        ctx.moveTo(0,i);
        ctx.lineTo(xMax,i);
        ctx.strokeStyle = "1b73f8";
        ctx.stroke();
        ctx.closePath();
        i = i+20;
    }

    //Dibujar lineas verticales
    for(let i=20; i<xMax;){
        ctx.beginPath();
        ctx.moveTo(i,0);
        ctx.lineTo(i,yMax);
        ctx.strokeStyle = "1b73f8";
        ctx.stroke();
        ctx.closePath();
        i = i+20;
    }

    //EjeX
    ctx.beginPath();
    ctx.moveTo(0,yMax/2);
    ctx.lineTo(xMax,yMax/2);
    ctx.strokeStyle = "ff0009";
    ctx.stroke();
    ctx.closePath();

    //EjeY
    ctx.beginPath();
    ctx.moveTo(xMax/2,0);
    ctx.lineTo(xMax/2,yMax);
    ctx.strokeStyle = "ff0009";
    ctx.stroke();
    ctx.closePath();

}


//Dibujar Auto

function dibujarAuto(posX,posY){
    let canvas = document.getElementById("linzoDibujo");
    let ctx = canvas.getContext("2d");
    let img;

    canvas.width = canvas.width;

    img = new Image();
    img.src = "images/auto.png";

    img.onload = function (){
        ctx.drawImage(img, posX, posY);
    }


}