let nom = prompt("Quel est votre nom de famille ?");
let prenom = prompt("Quel est votre prénom ?");
let codePostal = prompt("Quel est votre code postale ?");
let risque = prompt("Avez vous récemment été en contact avec une personne à risque (Oui ou Non) ?");

let lieuResidence = " "
let identite = nom + " " + prenom;

let bw = "Brabant Wallon"
let l = " Liège "
let n = " Namur "
let h = "Hainaut "
let lu = "Luxembourg "


for ( i = codePostal ; i < 1 ; i += 1){
    if ( codePostal < 1499 && codePostal > 1300 ) {
        lieuResidence = bw;
        }
        else if ( codePostal < 4999 && codePostal > 4000 ) {
            lieuResidence = l;
            }
            else if ( codePostal < 5999 && codePostal > 5000 ) {
                lieuResidence = n;
                }
                else if ( codePostal < 6599 && codePostal > 6000 ) {
                    lieuResidence = h;
                    }
                    else if ( codePostal < 7999 && codePostal > 7000 ) {
                        lieuResidence = h;
                        }
                        else if ( codePostal < 6999 && codePostal > 6600 ) {
                            lieuResidence = lu;
                            }
                            else {
                                console.log("Veuillez introduire un code postale valide");
                                }
}



if ( risque == "Oui" ) {
    console.log("Votre province est : " + lieuResidence + " allez consultez votre centre qui est le ....");
}
else if ( risque == "Non" ) {
    console.log("Bravo bogosse continue t cho");
}
else {
    console.log("Veuillez repondre a cette question : Avez vous récemment été en contact avec une personne à risque (Oui ou Non) ? Inscrivez bien soit la reponse Oui ou la réponse Non");
}

//Analyse tableau 

for (i=0; i < tab.length; i++) {
    

