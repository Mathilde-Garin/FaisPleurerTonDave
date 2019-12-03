var VCarteMyst1, VCarteMyst2, VCarteMyst3, VCarteMyst4, VCarteMyst5, VCarteMyst6;
var VChanceDeLancmt;

// Variables de la modale de l'event 1
var VModalCarteMyst1 = document.getElementById("ModalCarteMyst1");
var VModalCarteMyst2 = document.getElementById("ModalCarteMyst2");
var VModalCarteMyst3 = document.getElementById("ModalCarteMyst3");
var VModalCarteMyst4 = document.getElementById("ModalCarteMyst4");
var VModalCarteMyst5 = document.getElementById("ModalCarteMyst5");
var VModalCarteMyst6 = document.getElementById("ModalCarteMyst6");


// Les modales pour les cartes mystères

// Modale 1

function Modal(VModalCarteMyst){
	function TexteModal() {
		VModalCarteMyst.style.display = "block";
	}

	TexteModal()

	window.onclick = function(event) {
		if (event.target == VModalCarteMyst) {
			VModalCarteMyst.style.display = "none";
		} 
	}
}

	function fermeture() {
		VModalCarteMyst1.style.display = "none";
		VModalCarteMyst2.style.display = "none";
		VModalCarteMyst3.style.display = "none";
		VModalCarteMyst4.style.display = "none";
		VModalCarteMyst5.style.display = "none";
		VModalCarteMyst6.style.display = "none";
	}

//Lancer un évènement aléatoire


function EventRandom() {
	var VNombreRandom = Math.floor(Math.random() * 7);

		// CarteMyst1 : 25% des larmes actuelles en moins.

		function CarteMyst1() {
			VCompteurLarmes = (VCompteurLarmes)-(VCompteurLarmes/4);
			Modal(VModalCarteMyst1);
		}


		// CarteMyst2 : 50% des larmes actuelles en moins.

		function CarteMyst2() {
			VCompteurLarmes = (VCompteurLarmes)-(VCompteurLarmes/2);
			Modal(VModalCarteMyst2);
		}

		// CarteMyst3 : 75% des larmes actuelles en moins.

		function CarteMyst3() {
			VCompteurLarmes = (VCompteurLarmes)-((VCompteurLarmes/4)*3);
			Modal(VModalCarteMyst3);
		}

		// CarteMyst4 : 25% des larmes actuelles en plus.

		function CarteMyst4() {
			VCompteurLarmes = (VCompteurLarmes)+(VCompteurLarmes/4);
			Modal(VModalCarteMyst4);
		}

		// CarteMyst5 : 50% des larmes actuelles en plus.

		function CarteMyst5() {
			VCompteurLarmes = (VCompteurLarmes)+(VCompteurLarmes/2);
			Modal(VModalCarteMyst5);

		}

		// CarteMyst6 : 75% des larmes actuelles en plus.

		function CarteMyst6() {
			VCompteurLarmes = (VCompteurLarmes)+((VCompteurLarmes/4)*3);
			Modal(VModalCarteMyst6);
		}


	// Lancer la bonne fonction

	if (VNombreRandom==1) {CarteMyst1()} 
		else if (VNombreRandom==2) {CarteMyst2()}
			else if (VNombreRandom==3) {CarteMyst3()} 
				else if (VNombreRandom==4) {CarteMyst4()} 
					else if (VNombreRandom==5) {CarteMyst5()} 
						else {CarteMyst6()}

							$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
					}

// Quand on appuie sur le bouton canard, savoir si l'event va se déclencher

function LancmtEvent() {
	VChanceDeLancmt = Math.floor(Math.random() * 101);
	if (VChanceDeLancmt<2) {EventRandom()} 
}



