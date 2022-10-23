function validation(){
    n=document.getElementById("nom").value;
    p=document.getElementById("prenom").value;
    d=document.getElementById("date").value;
    a=document.getElementById("adresse").value;
    m=document.getElementById("mail").value;
    if(n.length<5 || n==""){
    document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
    return false;
    }
    else if(m.length<5 || m==""){
        document.getElementById("error").innerHTML = "La saisie du mail est obligatoire";
        return false;
        }
     else if(p.length<5 || p==""){
            document.getElementById("error").innerHTML = "La saisie du prenom est obligatoire";
            return false;
        }
        else if(d.length<5 || d==""){
            document.getElementById("error").innerHTML = "La saisie de la date est obligatoire";
            return false;
            }
            else if(a.length<5 || a==""){
                document.getElementById("error").innerHTML = "La saisie de l'adresse est obligatoire";
                return false;
                }
                else{
                document.getElementById("res").innerHTML = "Bienvenue " +n;
                return true;
                }
}