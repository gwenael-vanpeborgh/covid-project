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

//Analyse tableau <3

//données test:
//let tabBw =[]; 
//let proche=0;
//let codePostale = 1348;
//let lieuResidence = "bw";
//let diff = 10000;

let tabProv =[1300, 1340, 1370, 1390, 1400, 1480, 1495,
 5070, 5080, 5100, 5500, 5555, 5650,
 4000, 4100, 4300, 4500, 4540, 4600, 4800, 4900, 4960,
 6600, 6690, 6700, 6760, 6800, 6900,
 6060, 6460, 7000, 7060, 7100, 7130, 7500, 7800, 7900]

if (lieuResidence == "bw") {
    for (i=0; i < tabProv.length; i++) {
        if (tabProv[i] < 1499 && tabProv[i] > 1300) {
		tabBw.push(tabProv[i]);
		}
	}
	for (i=0; i < tabBw.length; i++) {
		if(Math.abs((tabBw[i]-codePostale))<diff){
           diff = Math.abs((tabBw[i]-codePostale));
		   proche = tabBw[i];
		}  
	}
}
console.log(proche);

else if (lieuResidence == "l") {
    for (i=0; i < tabProv.length; i++) {
        if (tabProv[i] < 4999 && tabProv[i] > 4000) {
		tabL.push(tabProv[i]);
		}
	}
	for (i=0; i < tabBL.length; i++) {
		if(Math.abs((tabBL[i]-codePostale))<diff){
           diff = Math.abs((tabBL[i]-codePostale));
		   proche = tabBL[i];
		}
	}
}

// /!\VERSION presque FINALE/!\:
        
let nom = prompt("Quel est votre nom de famille ?");
let prenom = prompt("Quel est votre prénom ?");
let codePostal = prompt("Quel est votre code postale ?");
let risque = prompt("Avez vous récemment été en contact avec une personne à risque (Oui ou Non) ?");

let lieuResidence = " ";
let identite = nom + " " + prenom;
let bw = "Brabant Wallon";
let l = " Liège ";
let n = " Namur ";
let h = "Hainaut ";
let lu = "Luxembourg ";



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

									
//version test:
let tabHain = [];
let tabHainB = [];
let tabL = [];
let tabLux = [];
let tabNam = [];
let tabBw =[]; 
let proche=0;
let diff = 10000;

let tabProv =[1300, 1340, 1370, 1390, 1400, 1480, 1495,
 5070, 5080, 5100, 5500, 5555, 5650,
 4000, 4100, 4300, 4500, 4540, 4600, 4800, 4900, 4960,
 6600, 6690, 6700, 6760, 6800, 6900,
 6060, 6460, 7000, 7060, 7100, 7130, 7500, 7800, 7900];




if (lieuResidence == bw) {
    for (i=0; i < tabProv.length; i++) {
        if (tabProv[i] < 1499 && tabProv[i] > 1300) {
		tabBw.push(tabProv[i]);
		}
	}
	for (i=0; i < tabBw.length; i++) {
		if(Math.abs((tabBw[i]-codePostal))<diff){
           diff = Math.abs((tabBw[i]-codePostal));
		   proche = tabBw[i];
		}  
	}
}

//liège;

else if (lieuResidence == l) {
    for (i=0; i < tabProv.length; i++) {
        if (tabProv[i] < 4999 && tabProv[i] > 4000) {
		tabL.push(tabProv[i]);
		}
	}
	for (i=0; i < tabBL.length; i++) {
		if(Math.abs((tabL[i]-codePostal))<diff){
           diff = Math.abs((tabL[i]-codePostal));
		   proche = tabL[i];
		}
	}
}

//namur:

else if (lieuResidence == n) {
    for (i=0; i < tabProv.length; i++) {
        if (tabProv[i] < 5999 && tabProv[i] > 5000) {
		tabNam.push(tabProv[i]);
		}
	}
	for (i=0; i < tabNam.length; i++) {
		if(Math.abs((tabNam[i]-codePostal))<diff){
           diff = Math.abs((tabNam[i]-codePostal));
		   proche = tabNam[i];
		}		  
	}
}			

//lux:

else if (lieuResidence == lu) {
    for (i=0; i < tabProv.length; i++) {
        if (tabProv[i] < 6999 && tabProv[i] > 6600) {
		tabLux.push(tabProv[i]);
		}
	}
	for (i=0; i < tabLux.length; i++) {
		if(Math.abs((tabLux[i]-codePostal))<diff){
           diff = Math.abs((tabLux[i]-codePostal));
		   proche = tabLux[i];
		}  
	}
}

//Hainaut:

else if (lieuResidence == h) {
    for (i=0; i < tabProv.length; i++) {
        if (tabProv[i] < 6599 && tabProv[i] > 6000) {
		tabHain.push(tabProv[i]);
		}
	}
	for (i=0; i < tabHain.length; i++) {
		if(Math.abs((tabHain[i]-codePostal))<diff){
           diff = Math.abs((tabHain[i]-codePostal));
		   proche = tabHain[i];
		}  
	}
}

else if (lieuResidence == h) {
    for (i=0; i < tabProv.length; i++) {
        if (tabProv[i] < 7999 && tabProv[i] > 7000) {
		tabHainB.push(tabProv[i]);
		}
	}
	for (i=0; i < tabHainB.length; i++) {
		if(Math.abs((tabHainB[i]-codePostal))<diff){
           diff = Math.abs((tabHainB[i]-codePostal));
		   proche = tabHainB[i];
		}  
	}
}

//Espace réponses:

if ( risque == "Oui" ) {
    console.log("Votre province est : " + lieuResidence + " le centre le plus proche se trouve au code postale suivant:" + proche + ".");
}
else if ( risque == "Non" ) {
    console.log("Bravo bogosse continue t cho");
}
else {
    console.log("Veuillez repondre a cette question : Avez vous récemment été en contact avec une personne à risque (Oui ou Non) ? Inscrivez bien soit la reponse Oui ou la réponse Non");
}  

