
var saveButton = document.getElementById("guardar");
window.addEventListener("load", function(){
      var inputName = document.getElementById("nombre");
      var inputLastName = document.getElementById("apellido");
      var inputAge = document.getElementById("edad");
      var inputGender = document.getElementById("genero");
      var inputCity = document.getElementById("ciudad");
      var inputCountry = document.getElementById("pais");
      var patientObject = JSON.parse(localStorage.getItem("nuevoPaciente"));
      console.log(patientObject);
      inputName.value = patientObject.nombre;
      inputLastName.value = patientObject.apellido;
      inputAge.value = patientObject.edad;
      inputGender.value = patientObject.genero;
      inputCity.value = patientObject.ciudad;
      inputCountry.value = patientObject.pais;

      inputName.focus();

      saveButton.addEventListener("click", function(event){
        event.preventDefault();
            function Paciente(nombrePaciente, apellidoPaciente, edadPaciente, generoPaciente,ciudadPaciente,paisPaciente) {
                 this.nombre = nombrePaciente;
                 this.apellido = apellidoPaciente;
                 this.edad = edadPaciente;
                 this.genero = generoPaciente;
                 this.ciudad = ciudadPaciente;
                 this.pais = paisPaciente;
             }

             var nombre = inputName.value;
             var apellido = inputLastName.value;
             var edad = inputAge.value;
             var genero = inputGender.value ;
             var ciudad = inputCity.value;
             var pais = inputCountry.value;
             if(nombre.length!=0 && apellido.length!=0 && edad.length!=0 && genero.length!=0 && ciudad.length!=0 && pais.length!=0){
               //arrPacientes.push(new Paciente(nombre,apellido,edad,genero,ciudad,pais));
               console.log(new Paciente(nombre,apellido,edad,genero,ciudad,pais))
               localStorage.setItem("nuevoPaciente",JSON.stringify(new Paciente(nombre,apellido,edad,genero,ciudad,pais)))
               window.location = "imprimirfichas.html"
         		}

      });


});
