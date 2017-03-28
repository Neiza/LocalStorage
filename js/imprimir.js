
  var regresar = document.getElementById("btnReturn");
  var edit = document.getElementById("edit");

  function returnToIndex(){
    window.location.assign("index.html");
  }


  window.addEventListener("load", function(){
    var spanName = document.getElementById("patientName");
    var spanLastName = document.getElementById("patientLastName");
    var spanAge = document.getElementById("patientAge");
    var spanGender = document.getElementById("patientGender");
    var spanCity = document.getElementById("patientCity");
    var spanCountry = document.getElementById("patientCountry");
    var patientObject = JSON.parse(localStorage.getItem("nuevoPaciente"));
    console.log(patientObject);
    spanName.innerText = patientObject.nombre;
    spanLastName.innerText = patientObject.apellido;
    spanAge.innerText = patientObject.edad;
    spanGender.innerText = patientObject.genero;
    spanCity.innerText = patientObject.ciudad;
    spanCountry.innerText = patientObject.pais;

    regresar.addEventListener("click", returnToIndex);

    edit.addEventListener("click", function(event){
        event.preventDefault;
          window.location = "editar.html"

      /*  function editar(){
       var inputs = document.getElementById("inputs");
       var label = document.createElement("label");
       var inputName = document.createElement("input");

       inputs.appendChild(label);
       label.innerHTML = "nombre"
       inputs.appendChild(inputName);
       inputName.value = patientObject.nombre;
       inputName.focus();


        }
        editar();*/
    });



  });
