function testdate() {
   let dateNaissance = new Date(2010, 10, 25);
   let dateNaissanceTimestamp = dateNaissance.getTime();
   let nowTimestamp = Date.now();
   if (nowTimestamp > d) {
      return false;
   } else {
      return true;
   }
}
function Validation() {
   nom = document.getElementById("nom").value;
   prenom = document.getElementById("prenom").value;
   d = document.getElementById("date").value;
   m = document.getElementById("mail").value;
   adr = document.getElementById("adresse").value;

  
   if (nom.length > 5 && prenom.length > 5 && testdate() && validateEmail(m) == true) {

      document.querySelector(".titre").innerHTML = `<div class="p-3 mb-2 bg-success text-white">Formulaire enregistré avec succés!</div>`;
      contactStore.add(nom, prenom, d, adr, m);
      displayContactList();
   }
   else{  document.querySelector(".titre").innerHTML = `<div class="p-3 mb-2 bg-danger text-white">Un ou plusieurs champs ont été mal rempli!</div>`;
   
   displayContactList();                             }



}
      function displayContactList(){
         document.querySelector("table tbody").innerHTML= `<table class="table"><tr><td>Nom </td><td> Prenom</td><td>Date de Naissance</td><td>Adresse</td><td> Mail</td><tr></table>`
         const contactListString = localStorage.getItem('contactList');  // ici on va récupérer la liste en forme de chaine de caractère (string)
  const contactList = contactListString ? JSON.parse(contactListString) : [];

      for (const contact of contactList) {
         document.querySelector("table tbody").innerHTML =
            document.querySelector("table tbody").innerHTML + `<tr>
            <td>${contact.name}</td>
            <td>${contact.firstname}</td>
            <td>${contact.date}</td>
            <td>${contact.adress}</td>
            <td>${contact.mail}</td>
            <tr>`;
      }
   }



function validateEmail(email) {
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(String(email).toLowerCase());
}
function calcNbChar(id) {
   document.querySelector(`#${id} + span`).textContent = document.querySelector(`#${id}`).value.length;
}
