class Estudiante{
    constructor(nombre, nota1, nota2, nota3){
        this.nombre = nombre
        this.nota1 = nota1
        this.nota2 = nota2
        this.nota3 = nota3

        
    }
    getNombre() {
        return this.nombre;
    }
    getNota1() {
        return this.nota1();
    }
    getNota2() {
        return this.nota2();
    }
    getNota3() {
        return this.nota3();
    }
    getPromedio(){
        suma= this.nota1 + this.nota2 + this.nota3;
        promedio = suma / 3;
        return promedio
    }
}
    setNotas() {
        if (nuevaNota1 > 0 || nuevaNota1 < 10){
            this.nota1 = nuevaNota1
        }
        else{
            alert("No se pudo cargar la nota")
        }
        if (nuevaNota2 > 0 || nuevaNota2 <= 10){
            this.nota2 = nuevaNota2
        }
        else{
            alert("No se pudo cargar la nota")
        }
        if (nuevaNota3 > 0 || nuevaNota3 < 10){
            this.nota3 = nuevaNota3
        }
        else{
            alert("No se pudo cargar la nota")
        }
        mostrarInfo()
        }

    function enviar(){
        let nombre = document.getElementById("nombre").value;
        let nota1 = document.getElementById("nota1").value;
        let nota2 = document.getElementById("nota2").value;
        let nota3 = document.getElementById("nota3").value;
    }
    lista = [];
    i = 0
    function Estudiantee() {
        nuevaNota = new Persona(prompt("Ingresa el nombre"), parseInt(prompt("Ingresa la primera nota")), parseInt(prompt("Ingresa la segunda nota")), parseInt(prompt("Ingresa la tercera nota")));
        lista.push(nuevaNota);
        mostrarInfo();
    }

    function mostrarInfo() {
        if (lista.length > 0) {
            document.getElementById("nombre").innerHTML = lista[i].getNombre();
            document.getElementById("nota1").innerHTML = lista[i].getNota1();
            document.getElementById("nota2").innerHTML = lista[i].getNota2();
            document.getElementById("nota3").innerHTML = lista[i].getNota3();
            document.getElementById("promedio").innerHTML =lista[1].promediar();
        }else{
            alert("No hay personas");
        }
        
    }
    function siguiente() {
        if (lista.length > 0) {
            if (i < lista.length - 1) {
                i++;
                mostrarInfo();
            }
        }else{
            alert("No hay personas");
        }
        
    }
    
    function anterior() {
        if (lista.length > 0) {
            if (i > 0) {
                i--;
                mostrarInfo();
            }
        }else{
            alert("No hay personas");
        }
    }
