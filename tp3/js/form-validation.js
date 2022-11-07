function Validation(){
window.onload = function () {   
     console.log( "DOM ready!" );
     
     n=document.getElementById("nom").value;
    p=document.getElementById("prenom").value;
    d=document.getElementById("date").value;
    a=document.getElementById("adresse").value;
    m=document.getElementById("mail").value;
       function validateEmail(email) {
         const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
         return re.test(String(email).toLowerCase());
       }
         let dateNaissance = new Date(2022, 10, 25); 
         let dateNaissanceTimestamp = dateNaissance.getTime();
         let nowTimestamp = Date.now();
         var myModal = new bootstrap.Modal(document.getElementById('myModal'));
         myModal.show();
         if(n.length>5 && p.length>5 && d.length >5 && d>nowTimestamp && m>5 && validateEmail(m)){
          var map;
          function initialize() {
            var prop = {
             center:new google.maps.LatLng(51.508742,-0.120850),
             zoom:5,
             mapTypeId:google.maps.MapTypeId.ROADMAP
            };
           return new google.maps.Map(document.getElementById("w3docs-map"), prop);
          }
          setTimeout(function(){
             map = initialize();
          },500);
          function w3Load(){
             document.getElementById("w3docs-map").style.display = 'block';
             google.maps.event.trigger(map, 'resize');
          }
          document.querySelector(".modal-body").innerHTML = '\<img src="map.jpg"/\>'
          document.querySelector(".modal-title").textContent = "Bienvenue" +n;

         }
    else{
      document.querySelector(".modal-title").textContent = "Erreur dans le formulaire";
      document.querySelector(".modal-body").innerHTML= "Tout les champs sont obligatoires" ;
    }
    
  }
    
    };