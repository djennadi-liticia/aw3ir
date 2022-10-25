function validation(){
    n=document.getElementById("nom").value;
    p=document.getElementById("prenom").value;
    d=document.getElementById("date").value;
    a=document.getElementById("adresse").value;
    m=document.getElementById("mail").value;
    document.getElementById("res").style.display ="none";
    document.getElementById("error").style.display ="none";
    if(n.length<5 || n==""){
        document.getElementById("error").style.display ="block";
    document.getElementById("error").innerHTML = "La saisie du nom est obligatoire avec une taille min de 5 caractères";
    return false;
    }
    else if(m.length<5 || m==""){
        document.getElementById("error").style.display ="block";
        document.getElementById("error").innerHTML = "La saisie du mail est obligatoire avec une taille min de 5 caractères";
        return false;
        }
     else if(p.length<5 || p==""){
        document.getElementById("error").style.display ="block";
            document.getElementById("error").innerHTML = "La saisie du prenom est obligatoire avec une taille min de 5 caractères";
            return false;
        }
        else if(d.length<5 || d==""){
            document.getElementById("error").style.display ="block";
            document.getElementById("error").innerHTML = "La saisie de la date est obligatoire avec une taille min de 5 caractères ";
            return false;
            }
            else if(a.length<5 || a==""){
                document.getElementById("error").style.display ="block";
                document.getElementById("error").innerHTML = "La saisie de l'adresse est obligatoir eavec une taille min de 5 caractères ";
                return false;
                }
                else{
                    document.getElementById("res").style.display ="block";
                document.getElementById("res").innerHTML= "Bienvenue " +n;
                return true;
                }
}