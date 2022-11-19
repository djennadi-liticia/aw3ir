function validateEmail(email) {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
 } 
function testdate() {  
let dateNaissance = new Date(2022, 10, 25); 
let dateNaissanceTimestamp = dateNaissance.getTime();
let nowTimestamp = Date.now();
if(nowTimestamp>d){ 
   return false;
}else{
   return true;
}
}
function Validation(){ 
    n=document.getElementById("nom").value;
    p=document.getElementById("prenom").value;
    d=document.getElementById("date").value;
    m=document.getElementById("mail").value;
    var myModal = new bootstrap.Modal(document.getElementById('myModal'));       
   if(n.length>5 && p.length>5 && testdate()==true && validateEmail(m)==true){
       adr=document.getElementById("adresse").value;
          document.querySelector(".modal-body").innerHTML = `Vous etes nés le ${d} et Vous habitez à : <a href='http://maps.google.com/maps?q=${adr}'><img src='https://maps.googleapis.com/maps/api/staticmap?markers=${adr}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg' width='100%' />${adr}</a>`;
          document.querySelector(".modal-title").textContent = "Bienvenue " +n;
          myModal.show();
         }
   else{
      document.querySelector(".modal-title").textContent = "Erreur dans le formulaire";
      document.querySelector(".modal-body").innerHTML= "Tout les champs sont obligatoires" ;
      myModal.show();
   }
  }