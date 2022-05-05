window.onload = iniciar;

function iniciar() {

    var Calcular = document.getElementById("btnCalcular");
    Calcular.addEventListener("click", clickCalcular);

}

function clickCalcular() {
    var txtNombre = document.getElementById("txtNombre");
    var Nombre = txtNombre.value;
    var txtApellido = document.getElementById("txtApellido");
    var Apellido = txtApellido.value;
    var txtMonto = document.getElementById("txtMonto");
    var Monto = txtMonto.value;
    var selector = document.getElementById("selector").value;
    var dias = document.getElementById("Dias").value






    if (Nombre === "") {


        document.getElementById("MsjErrorNombre").innerHTML = "Ingrese un Nombre"
        return Nombre

    }
    if (Apellido === "") {

        document.getElementById("MsjErrorApellido").innerHTML = "Ingrese un apellido"
        return Apellido

    }
    if (Monto < 1000) {

        document.getElementById("MsjErrorMonto").innerHTML = "El monto no puede ser nulo y debe ser mayor a $1000"
        return Monto

    }
    let porcentaje
    if (dias === "30") {
        porcentaje = 40

    } else if (dias === "60") {
        porcentaje = 45

    } else if (dias === "120") {
        porcentaje = 50

    } else if (dias === "360") {
        porcentaje = 65

    }

    if (selector === "No") {
        MostrarMonto(Monto, dias, porcentaje);

    } else {

        MostrarTabla(Monto, dias, porcentaje);
    }


}
var Table = document.getElementById("mytable");
Table.innerHTML = "";


function calculoPlazoFijo(Monto, dias, porcentaje) {
    return (Number(Monto) + (Number(Monto) * (Number(dias) / 360) * (Number(porcentaje) / 100)))

}

function MostrarMonto(Monto, dias, porcentaje) {

    const divMostrar = document.getElementById('mostrar')
    divMostrar.innerHTML = "El monto final es: " + calculoPlazoFijo(Monto, dias, porcentaje);


}

function MostrarTabla(monto, dias, porcentaje) {


    const table = document.querySelector('[table]')
    const thead = document.createElement('thead')
    const trThead = document.createElement('tr')
    const thPeriodo = document.createElement('th')
    thPeriodo.innerHTML = 'Periodo'

    const thMontoInicial = document.createElement('th')
    thMontoInicial.innerHTML = 'Monto inicial'

    const thMontoFinal = document.createElement('th')
    thMontoFinal.innerHTML = 'Monto final'

    trThead.appendChild(thPeriodo)
    trThead.appendChild(thMontoInicial)
    trThead.appendChild(thMontoFinal)
    thead.appendChild(trThead)
    table.appendChild(thead)
    var resultado = calculoPlazoFijo(monto, dias, porcentaje)

    const tbody = document.createElement('tbody')
    for (let Periodo = 1; Periodo < 5; Periodo++) {

        const trTbody = document.createElement('tr')
        const tdTbodyPeriodo = document.createElement('td')
        tdTbodyPeriodo.innerHTML = Number(Periodo);


        const tdTbodyMontoInicial = document.createElement('td')
        tdTbodyMontoInicial.innerHTML = Number(monto).toFixed(2);

        const tdTbodyMontoFinal = document.createElement('td')
        tdTbodyMontoFinal.innerHTML = Number(resultado).toFixed(2)

        trTbody.appendChild(tdTbodyPeriodo)
        trTbody.appendChild(tdTbodyMontoInicial)
        trTbody.appendChild(tdTbodyMontoFinal)
        tbody.appendChild(trTbody)
        table.appendChild(tbody)

        console.log(typeof(monto), typeof(resultado))



        monto = resultado
        resultado = calculoPlazoFijo(monto, dias, porcentaje)


    }




}