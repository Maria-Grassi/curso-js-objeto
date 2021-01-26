

class turnosHorarioRx{
constructor(fecha, hora){
this.fecha= fecha;
this.hora=hora;
this.disponibilidad=true;

}


}


let turnosRx=[]

let turnoL1 = new turnosHorarioRx("25/01", "16:00hs");
let turnoMa1 = new turnosHorarioRx( "26/01", "16:00hs");
let turnoMi1 = new turnosHorarioRx( "27/01", "16:00hs");
let turnoJ1 = new turnosHorarioRx( "28/01", "16:00hs");
let turnoV1 = new turnosHorarioRx( "29/01", "16:00hs");

let turnoL2 = new turnosHorarioRx( "25/01", "16:15hs");
let turnoMa2 = new turnosHorarioRx( "26/01", "16:15hs");
let turnoMi2 = new turnosHorarioRx( "27/01", "16:15hs");
let turnoJ2= new turnosHorarioRx( "28/01", "16:15hs");
let turnoV2 = new turnosHorarioRx( "29/01", "16:15hs");

let turnoL3 = new turnosHorarioRx( "25/01", "16:30hs");
let turnoMa3 = new turnosHorarioRx( "26/01", "16:30hs");
let turnoMi3 = new turnosHorarioRx( "27/01", "16:30hs");
let turnoJ3 = new turnosHorarioRx( "28/01", "16:30hs");
let turnoV3 = new turnosHorarioRx( "29/01", "16:30hs");

let turnoL4 = new turnosHorarioRx( "25/01", "16:45hs");
let turnoMa4 = new turnosHorarioRx( "26/01", "16:45hs");
let turnoMi4 = new turnosHorarioRx( "27/01", "16:45hs");
let turnoJ4 = new turnosHorarioRx( "28/01", "16:45hs");
let turnoV4 = new turnosHorarioRx( "29/01", "16:45hs");

turnosRx.push(turnoL1);
turnosRx.push(turnoMa1);
turnosRx.push(turnoMi1);
turnosRx.push(turnoJ1);
turnosRx.push(turnoV1);
turnosRx.push(turnoL2);
turnosRx.push(turnoMa2);
turnosRx.push(turnoMi2);
turnosRx.push(turnoJ2);
turnosRx.push(turnoV2);
turnosRx.push(turnoL3);
turnosRx.push(turnoMa3);
turnosRx.push(turnoMi3);
turnosRx.push(turnoJ3);
turnosRx.push(turnoV3);
turnosRx.push(turnoL4);
turnosRx.push(turnoMa4);
turnosRx.push(turnoMi4);
turnosRx.push(turnoJ4);
turnosRx.push(turnoV4);
let hola;
for (let i = 0; i < turnosRx.length; i++) {
  
  if (turnosRx[i].disponibilidad ==true) {
    hola += `
       <div class="turno" onclick="Turno()"  >
       <b> ${turnosRx[i].fecha} <b> 
       <br>
       ${turnosRx[i].hora}
        </div>
        `
        
  }
  else if(turnosRx[i].disponibilidad ==false){
      hola += 
      `<div class="turnodado">
       <b> ${turnosRx[i].fecha} </b> <br>
       ${turnosRx[i].hora}
        </div>`
       
  }
 

}
document.getElementById("turnito").innerHTML=hola

var obraSocial;
var nombreObraSocial;
var duracionDeTurno;



function Turno(){

    let nombre= prompt("Nombre y Apellido")
    let telefono =prompt("inserte telefono de contacto")
    let email=prompt("ingrese direccion e-mail")
    let cantEstudios= Number(prompt("Cantidad de Rx a realizar. Ej= Rodilla F y P son 2"));
    let estudioRXDig= prompt("Indicar estudio a realizar");
    
var resp =
   `Solicita el turno ${nombre}.<br>
Para realizarse las siguientes Rx ${estudioRXDig}.<br>
El costo de estudio es de $${costoDeEstudio()}.<br>
Se estima que para realizar los estudios solicitados se tardara alrededor de ${duracionDeTurnoo()} minutos <br>
Informacion de contacto: <br>
tel= ${telefono} <br>
mail= ${email} <br>`

function duracionDeTurnoo(){
   
        if (cantEstudios<=3){
            duracionDeTurno=15;
        }
        else {duracionDeTurno=((cantEstudios-3)*3)+15;
        }
    
  
return duracionDeTurno
}

function costoDeEstudio() {
    let valorBonoIoma
    obraSocial= prompt("¿Cuenta con obra social o prepaga?. Responder solo si o no?");
    if (obraSocial=== "si" ){
        tipoDeObraSocial= Number(prompt("1) Ioma 2) Osde 3) Swith medical 4)Pami"))
    } else {obraSocial= "no"}
    
        if((obraSocial=== "no" )||(tipoDeObraSocial==2)){
            costo=cantEstudios*350
        }
        else if (tipoDeObraSocial==1){
            valorBonoIoma=60
            costo = valorBonoIoma*cantEstudios
        }
        else if (tipoDeObraSocial==3){
            costo= "Sin cargo"
        }
        else if(tipoDeObraSocial==4) {
            costo= cantEstudios* 150
        }
        else {
            alert("Nombre de obra social mal ingresado")
        }    
  
    
    
return costo
}
document.getElementById("solicitarTurnillo").innerHTML=resp
}

