const trAR_FR = q_s("#trans");
const icon_en = q_s("#en");
const icon_fr = q_s("#fr");
var li_x = document.querySelectorAll("#trad");
var n_OF = li_x.length;
let lang = "en";

const en = ["Home","about","projects","story","call-me","AHMED NAOUM",`I'm a Cyber Security Analyst based in <span style='text-decoration: underline #EB4A4A;'>Morocco</span>  the city of Agadir,<br>
I specialize in creating software that help small businesses<br>
manage and protect websites from security attacks.`,"contact","download cv"];
const fr = ["Menu","Sur Nous","Projets","Histoire","appelle-moi","AHMED NAOUM",`Je suis un Analyste en cybersécurité j'habite au <span style="text-decoration: underline #EB4A4A;">Maroc</span> a la ville d'Agadir,<br>
spécialise dans la création des logiciels qui aident les petites<br>
entreprises à gérer, protéger et sécurise leur site Web.`,"contacter","telecharger cv"];

 trAR_FR.addEventListener("click", ()=> {
        if(lang == "en"){
            icon_fr.classList.add("hide");
            for(var i=0;i<n_OF;i++){
              li_x[i].innerHTML= fr[i];
              }
              icon_en.classList.remove("hide");
              lang= "fr"
        }
        else{
            icon_en.classList.add("hide");
            for(var i=0;i<n_OF;i++){
              li_x[i].innerHTML= en[i];
              }
            icon_fr.classList.remove("hide");
        lang = "en"
        }
      });
function q_s(id){
 return document.querySelector(id);
}