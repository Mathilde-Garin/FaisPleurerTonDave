////////////////////////////////// FONCTIONS DU CLICKER & DES OPTIONS A UPGRADER & PONCTUELLES ////////////////////////////////// 

// VARIABLES DES OPTIONSUP : LES COMPTEURS
$AfficheCompteurLarmes = document.getElementById("CompteurLarmes"); // Maj compteur actuel de larmes
$AfficheMultiNbLarmesClic = document.getElementById("MultiNbLarmesClic"); // Maj multiplicateur nb de larmes par clic
$AfficheLarmesParS = document.getElementById("LarmesSeconde"); // Maj larmes par seconde

var VCompteurLarmes = 0; // Compteur actuel de larmes
var VMultiLarmes = 1; // Multiplicateur du nombre de larmes / clic
var	VLarmesParS = 0; // Nombre de larmes gagnées par sec automatiquement

// VARIABLES OPTIONUP1 : HTML
$AfficheNiveauOptionUp1 = document.getElementById("niveauUp1"); // Maj niveau OptionUp1 
$AfficheAchatOptionUp1 = document.getElementById("OptionUp1"); // Maj bouton OptionUp1 (prochain achat)
var NextAchatOptionUp1 = 20; // Prix de départ de l'OptionUp1
var VNiveauOptionUp1 = 1; // Niveau de l'OptionUp1

// VARIABLES OPTIONUP2 : JS
$AfficheNiveauOptionUp2 = document.getElementById("niveauUp2"); // Maj niveau OptionUp2
$AfficheAchatOptionUp2 = document.getElementById("OptionUp2"); // Maj bouton OptionUp2 (prochain achat)
var NextAchatOptionUp2 = 50; // Prix de départ de l'OptionUp2
var VNiveauOptionUp2 = 1; // Niveau de l'OptionUp2

// VARIABLES OPTIONUP3 : PHP
$AfficheNiveauOptionUp3 = document.getElementById("niveauUp3"); // Maj niveau OptionUp3
$AfficheAchatOptionUp3 = document.getElementById("OptionUp3"); // Maj bouton OptionUp3 (prochain achat)
var NextAchatOptionUp3 = 100; // Prix de départ de l'OptionUp3
var VNiveauOptionUp3 = 1; // Niveau de l'OptionUp3

// VARIABLES OPTIONUP4 : Python
$AfficheNiveauOptionUp4 = document.getElementById("niveauUp4"); // Maj niveau OptionUp4
$AfficheAchatOptionUp4 = document.getElementById("OptionUp4"); // Maj bouton OptionUp4 (prochain achat)
var NextAchatOptionUp4 = 500; // Prix de départ de l'OptionUp4
var VNiveauOptionUp4 = 1; // Niveau de l'OptionUp4

// VARIABLES OPTIONUP5 : Ruby
$AfficheNiveauOptionUp5 = document.getElementById("niveauUp5"); // Maj niveau OptionUp5 
$AfficheAchatOptionUp5 = document.getElementById("OptionUp5"); // Maj bouton OptionUp5 (prochain achat)
var NextAchatOptionUp5 = 1000; // Prix de départ de l'OptionUp5
var VNiveauOptionUp5 = 1; // Niveau de l'OptionUp5

// VARIABLES OPTIONUP6 : Java
$AfficheNiveauOptionUp6 = document.getElementById("niveauUp6"); // Maj niveau OptionUp6 
$AfficheAchatOptionUp6 = document.getElementById("OptionUp6"); // Maj bouton OptionUp6 (prochain achat)
var NextAchatOptionUp6 = 5000; // Prix de départ de l'OptionUp6
var VNiveauOptionUp6 = 1; // Niveau de l'OptionUp6

// VARIABLES OPTIONUP7 : Elixir
$AfficheNiveauOptionUp7 = document.getElementById("niveauUp7"); // Maj niveau OptionUp7 
$AfficheAchatOptionUp7 = document.getElementById("OptionUp7"); // Maj bouton OptionUp7 (prochain achat)
var NextAchatOptionUp7 = 25000; // Prix de départ de l'OptionUp7
var VNiveauOptionUp7 = 1; // Niveau de l'OptionUp7

// VARIABLES OPTIONUP8 : C
$AfficheNiveauOptionUp8 = document.getElementById("niveauUp8"); // Maj niveau OptionUp8 
$AfficheAchatOptionUp8 = document.getElementById("OptionUp8"); // Maj bouton OptionUp8 (prochain achat)
var NextAchatOptionUp8 = 50000; // Prix de départ de l'OptionUp8
var VNiveauOptionUp8 = 1; // Niveau de l'OptionUp8

// VARIABLES OPTIONPONC1 : NIVEAUX UP1-2-3-4 +1
$AfficheOptionPonc1 = document.getElementById("OptionPonc1"); // Maj bouton OptionPonc1
var NextAchatOptionPonc1 = 25000; // Prix de départ de l'OptionPonc1

// VARIABLES OPTIONPONC2 : TROLL
$AfficheOptionPonc2 = document.getElementById("OptionPonc2"); // Maj bouton OptionPonc2
var NextAchatOptionPonc2 = 50000; // Prix de départ de l'OptionPonc2

// VARIABLES OPTIONPONC3 : NIVEAUX UP5-6-7-8 +1
$AfficheOptionPonc3 = document.getElementById("OptionPonc3"); // Maj bouton OptionPonc3
var NextAchatOptionPonc3 = 25000000; // Prix de départ de l'OptionPonc3

// VARIABLES OPTIONPONC4 : LANCE CARTE MYST
$AfficheOptionPonc4 = document.getElementById("OptionPonc4"); // Maj bouton OptionPonc4
var NextAchatOptionPonc4 = 30000; // Prix de départ de l'OptionPonc4


///////////////////////////// AJOUT LARMES AVEC CLICKER CANARD /////////////////////////////

	function ajoutLarmesClic() {
		VCompteurLarmes += VMultiLarmes;
		$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
	}

	document.getElementById("clicker").onclick = ajoutLarmesClic;


/////////////////// OPTIONUP1 A UPGRADER : MULTIPLICATEUR HTML ///////////////////

	function incrementerOptionUp1() {
		
		if ((VCompteurLarmes - NextAchatOptionUp1) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionUp1;
			VMultiLarmes++;
			VNiveauOptionUp1++;	
			NextAchatOptionUp1 = NextAchatOptionUp1 * 2;
				
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
			$AfficheNiveauOptionUp1.innerHTML = VNiveauOptionUp1;
			$AfficheAchatOptionUp1.innerHTML =  NextAchatOptionUp1 + "<span class=\"tooltiptext\">Augmente le nombre de larmes récolté à chaque clic</span>";
			$AfficheMultiNbLarmesClic.innerHTML = 'x ' +VMultiLarmes;
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}

		if (VNiveauOptionUp1 > 2) {
			$AfficheAchatOptionUp2.disabled = false; // Déverrouille OptionUp2
		}

		if (VNiveauOptionUp4 > 5 && VNiveauOptionUp1 > 9) {
			$AfficheAchatOptionUp5.disabled = false; // Déverrouille OptionUp5
		}
	}

	$AfficheAchatOptionUp1.onclick = incrementerOptionUp1;


/////////////////// OPTIONUP2 A UPGRADER : AUTOCLIC JAVASCRIPT ///////////////////

	function plusCompteurLarmes() {
		VCompteurLarmes++;
		$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
	}

	function autoclicOptionUp2() {
		
		if ((VCompteurLarmes - NextAchatOptionUp2) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionUp2;
			NextAchatOptionUp2 = NextAchatOptionUp2 * 2;
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
			VNiveauOptionUp2++;
			$AfficheNiveauOptionUp2.innerHTML = VNiveauOptionUp2;
			$AfficheAchatOptionUp2.innerHTML = NextAchatOptionUp2 + "<span class=\"tooltiptext\">Récolte automatiquement des larmes chaque seconde</span>";
						
			setInterval(plusCompteurLarmes, 1000);
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
					
			VLarmesParS++;
			$AfficheLarmesParS.innerHTML = 'Par seconde : ' +VLarmesParS;
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}

		if (VNiveauOptionUp2 > 4) {
			$AfficheAchatOptionUp3.disabled = false; // Déverrouille OptionUp3
		}

		if ((VNiveauOptionUp3 > 4) && (VNiveauOptionUp2 > 9)) {
			$AfficheAchatOptionUp4.disabled = false; // Déverrouille OptionUp4
		}

		if (VNiveauOptionUp7 > 9 && VNiveauOptionUp2 > 14) {
			$AfficheAchatOptionUp8.disabled = false; // Déverrouille OptionUp8
		}

		if (VNiveauOptionUp2 > 8) {
			$AfficheOptionPonc2.disabled = false; // Déverrouille OptionPonc2
		}
	}

	$AfficheAchatOptionUp2.onclick = autoclicOptionUp2;


/////////////////// OPTIONUP3 A UPGRADER : AUTOCLIC PHP ///////////////////

	function plusCompteurLarmesOptionUp3() {
		VCompteurLarmes += 10;
		$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
	}

	function autoclicOptionUp3() {
		
		if ((VCompteurLarmes - NextAchatOptionUp3) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionUp3;
			NextAchatOptionUp3 = NextAchatOptionUp3 * 2;
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
			VNiveauOptionUp3++;
			$AfficheNiveauOptionUp3.innerHTML = VNiveauOptionUp3;
			$AfficheAchatOptionUp3.innerHTML = NextAchatOptionUp3 + "<span class=\"tooltiptext\">Récolte automatiquement des larmes chaque seconde</span>";
						
			setInterval(plusCompteurLarmesOptionUp3, 1000);
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
					
			VLarmesParS +=10 ;
			$AfficheLarmesParS.innerHTML = 'Par seconde : ' +VLarmesParS;
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}

		if ((VNiveauOptionUp3 > 4) && (VNiveauOptionUp2 > 9)) {
			$AfficheAchatOptionUp4.disabled = false; // Déverrouille OptionUp4
		}

		if (VNiveauOptionUp3 > 11 && VNiveauOptionUp5 > 5) {
			$AfficheAchatOptionUp6.disabled = false; // Déverrouille OptionUp6
		}
	}

	$AfficheAchatOptionUp3.onclick = autoclicOptionUp3;


/////////////////// OPTIONUP4 A UPGRADER : MULTIPLICATEUR PYTHON ///////////////////

	function incrementerOptionUp4() {
		
		if ((VCompteurLarmes - NextAchatOptionUp4) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionUp4;
			VMultiLarmes = VMultiLarmes * 1.5;
			VNiveauOptionUp4++;	
			NextAchatOptionUp4 = NextAchatOptionUp4 * 2;
				
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
			$AfficheNiveauOptionUp4.innerHTML = VNiveauOptionUp4;
			$AfficheAchatOptionUp4.innerHTML = NextAchatOptionUp4 + "<span class=\"tooltiptext\">Augmente le nombre de larmes récolté à chaque clic</span>";
			$AfficheMultiNbLarmesClic.innerHTML = 'x ' +VMultiLarmes;
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}

		if (VNiveauOptionUp4 > 5 && VNiveauOptionUp1 > 9) {
			$AfficheAchatOptionUp5.disabled = false; // Déverrouille OptionUp5
		}

		if (VNiveauOptionUp4 > 1) {
			$AfficheOptionPonc1.disabled = false; // Déverrouille OptionPonc1
		}
	}

	$AfficheAchatOptionUp4.onclick = incrementerOptionUp4;


/////////////////// OPTIONUP5 A UPGRADER : AUTOCLIC RUBY ///////////////////

	function plusCompteurLarmesOptionUp5() {
		VCompteurLarmes += 50;
		$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
	}

	function autoclicOptionUp5() {
		
		if ((VCompteurLarmes - NextAchatOptionUp5) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionUp5;
			NextAchatOptionUp5 = NextAchatOptionUp5 * 2;
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
			VNiveauOptionUp5++;
			$AfficheNiveauOptionUp5.innerHTML = VNiveauOptionUp5;
			$AfficheAchatOptionUp5.innerHTML = NextAchatOptionUp5 + "<span class=\"tooltiptext\">Récolte automatiquement des larmes chaque seconde</span>";

						
			setInterval(plusCompteurLarmesOptionUp5, 1000);
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
					
			VLarmesParS += 50;
			$AfficheLarmesParS.innerHTML = 'Par seconde : ' +VLarmesParS;
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}

		if (VNiveauOptionUp3 > 11 && VNiveauOptionUp5 > 5) {
			$AfficheAchatOptionUp6.disabled = false; // Déverrouille OptionUp6
		}

		if (VNiveauOptionUp5 > 14 && VNiveauOptionUp6 > 6) { 
			$AfficheAchatOptionUp7.disabled = false; // Déverrouille OptionUp7
		}
	}

	$AfficheAchatOptionUp5.onclick = autoclicOptionUp5;


/////////////////// OPTIONUP6 A UPGRADER : AUTOCLIC JAVA ///////////////////

	function plusCompteurLarmesOptionUp6() {
		VCompteurLarmes += 100;
		$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
	}

	function autoclicOptionUp6() {
		
		if ((VCompteurLarmes - NextAchatOptionUp6) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionUp6;
			NextAchatOptionUp6 = NextAchatOptionUp6 * 2;
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
			VNiveauOptionUp6++;
			$AfficheNiveauOptionUp6.innerHTML = VNiveauOptionUp6;
			$AfficheAchatOptionUp6.innerHTML = NextAchatOptionUp6 + "<span class=\"tooltiptext\">Récolte automatiquement des larmes chaque seconde</span>";
						
			setInterval(plusCompteurLarmesOptionUp6, 1000);
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
					
			VLarmesParS += 100;
			$AfficheLarmesParS.innerHTML = 'Par seconde : ' +VLarmesParS;
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}

		if (VNiveauOptionUp5 > 14 && VNiveauOptionUp6 > 6) {
			$AfficheAchatOptionUp7.disabled = false; // Déverrouille OptionUp7
		}
	}

	$AfficheAchatOptionUp6.onclick = autoclicOptionUp6;


/////////////////// OPTIONUP7 A UPGRADER : MULTIPLICATEUR ELIXIR ///////////////////

	function incrementerOptionUp7() {
		
		if ((VCompteurLarmes - NextAchatOptionUp7) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionUp7;
			VMultiLarmes = VMultiLarmes * 2;
			VNiveauOptionUp7++;	
			NextAchatOptionUp7 = NextAchatOptionUp7 * 2;
				
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
			$AfficheNiveauOptionUp7.innerHTML = VNiveauOptionUp7;
			$AfficheAchatOptionUp7.innerHTML = NextAchatOptionUp7 + "<span class=\"tooltiptext\">Augmente le nombre de larmes récolté à chaque clic</span>";
			$AfficheMultiNbLarmesClic.innerHTML = 'x ' +VMultiLarmes;
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}

		if (VNiveauOptionUp7 > 9 && VNiveauOptionUp2 > 14) {
			$AfficheAchatOptionUp8.disabled = false; // Déverrouille OptionUp8
		}
	}

	$AfficheAchatOptionUp7.onclick = incrementerOptionUp7;


/////////////////// OPTIONUP8 A UPGRADER : AUTOCLIC C ///////////////////

	function plusCompteurLarmesOptionUp8() {
		VCompteurLarmes += 500;
		$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
	}

	function autoclicOptionUp8() {
		
		if ((VCompteurLarmes - NextAchatOptionUp8) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionUp8;
			NextAchatOptionUp8 = NextAchatOptionUp8 * 2;
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
			VNiveauOptionUp8++;
			$AfficheNiveauOptionUp8.innerHTML = VNiveauOptionUp8;
			$AfficheAchatOptionUp8.innerHTML = NextAchatOptionUp8 + "<span class=\"tooltiptext\">Récolte automatiquement des larmes chaque seconde</span>";
						
			setInterval(plusCompteurLarmesOptionUp8, 1000);
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
					
			VLarmesParS += 500;
			$AfficheLarmesParS.innerHTML = 'Par seconde : ' +VLarmesParS;
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}

		if (VNiveauOptionUp8 > 1) {
			$AfficheOptionPonc3.disabled = false; // Déverrouille OptionPonc3
		}
	}

	$AfficheAchatOptionUp8.onclick = autoclicOptionUp8;


//////////////////////////// OPTION PONCTUELLE 1 ////////////////////////////

	function lancerOptionPonc1() {
		if ((VCompteurLarmes - NextAchatOptionPonc1) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionPonc1;
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
			VNiveauOptionUp1++;
			NextAchatOptionUp1 = NextAchatOptionUp1 * 2;
			VNiveauOptionUp2++;
			NextAchatOptionUp2 = NextAchatOptionUp2 * 2;
			VNiveauOptionUp3++;
			NextAchatOptionUp3 = NextAchatOptionUp3 * 2;
			VNiveauOptionUp4++;
			NextAchatOptionUp4 = NextAchatOptionUp4 * 2;
			NextAchatOptionPonc1 = NextAchatOptionPonc1 * 3;
			$AfficheNiveauOptionUp1.innerHTML = VNiveauOptionUp1;
			$AfficheNiveauOptionUp2.innerHTML = VNiveauOptionUp2;
			$AfficheNiveauOptionUp3.innerHTML = VNiveauOptionUp3;
			$AfficheNiveauOptionUp4.innerHTML = VNiveauOptionUp4;
			$AfficheAchatOptionUp1.innerHTML = NextAchatOptionUp1 + "<span class=\"tooltiptext\">Augmente le nombre de larmes récolté à chaque clic</span>";
			$AfficheAchatOptionUp2.innerHTML = NextAchatOptionUp2 + "<span class=\"tooltiptext\">Récolte automatiquement des larmes chaque seconde</span>";
			$AfficheAchatOptionUp3.innerHTML = NextAchatOptionUp3 + "<span class=\"tooltiptext\">Récolte automatiquement des larmes chaque seconde</span>";
			$AfficheAchatOptionUp4.innerHTML = NextAchatOptionUp4 + "<span class=\"tooltiptext\">Augmente le nombre de larmes récolté à chaque clic</span>";
			$AfficheOptionPonc1.innerHTML = NextAchatOptionPonc1 + "<span class=\"tooltiptext\">Oh non la machine à café est en panne ! Comment Dave va-t-il tenir toute la journée ?... <Br><Br>Achetez cette option et augmentez ainsi les 4 premiers langages d'1 niveau !</span>";
		}

		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}
	}

	$AfficheOptionPonc1.onclick = lancerOptionPonc1;


//////////////////////////// OPTION PONCTUELLE 2 ////////////////////////////

	function lancerOptionPonc2() {
		if ((VCompteurLarmes - NextAchatOptionPonc2) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionPonc2;
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
			window.open('https://youtu.be/gG5abwgyX7k?t=77');
			NextAchatOptionPonc2 = NextAchatOptionPonc2 * 2;
			$AfficheOptionPonc2.innerHTML = NextAchatOptionPonc2 + "<span class=\"tooltiptext\">L'ami développeur de Dave n'a vraiment rien compris, il n'arrête pas de déranger Dave dans son travail. <Br><Br>Débloquez cette option surprise !</span>";
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}
	}

	$AfficheOptionPonc2.onclick = lancerOptionPonc2;


/////////////////////////// OPTION PONCTUELLE 3 ////////////////////////////

	function lancerOptionPonc3() {
		if ((VCompteurLarmes - NextAchatOptionPonc3) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionPonc3;
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
			VNiveauOptionUp5++;
			NextAchatOptionUp5 = NextAchatOptionUp5 * 2;
			VNiveauOptionUp6++;
			NextAchatOptionUp6 = NextAchatOptionUp6 * 2;
			VNiveauOptionUp7++;
			NextAchatOptionUp7 = NextAchatOptionUp7 * 2;
			VNiveauOptionUp8++;
			NextAchatOptionUp8 = NextAchatOptionUp8 * 2;
			NextAchatOptionPonc3 = NextAchatOptionPonc3 * 3;
			$AfficheNiveauOptionUp5.innerHTML = VNiveauOptionUp5;
			$AfficheNiveauOptionUp6.innerHTML = VNiveauOptionUp6;
			$AfficheNiveauOptionUp7.innerHTML = VNiveauOptionUp7;
			$AfficheNiveauOptionUp8.innerHTML = VNiveauOptionUp8;
			$AfficheAchatOptionUp5.innerHTML = NextAchatOptionUp5 + "<span class=\"tooltiptext\">Récolte automatiquement des larmes chaque seconde</span>";
			$AfficheAchatOptionUp6.innerHTML = NextAchatOptionUp6 + "<span class=\"tooltiptext\">Récolte automatiquement des larmes chaque seconde</span>";
			$AfficheAchatOptionUp7.innerHTML = NextAchatOptionUp7 + "<span class=\"tooltiptext\">Augmente le nombre de larmes récolté à chaque clic</span>";
			$AfficheAchatOptionUp8.innerHTML = NextAchatOptionUp8 + "<span class=\"tooltiptext\">Récolte automatiquement des larmes chaque seconde</span>";
			$AfficheOptionPonc3.innerHTML = NextAchatOptionPonc3 + "<span class=\"tooltiptext\">... Ô désespoir !<Br><Br>Coupure d'électricité, plus d'Internet. Et Dave n'avait pas sauvegardé son travail...<Br><Br>Cette option augmente les 4 derniers langages d'1 niveau !</span>";
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}
	}

	$AfficheOptionPonc3.onclick = lancerOptionPonc3;


/////////////////////////// OPTION PONCTUELLE 4 ////////////////////////////

	function lancerOptionPonc4() {
		if ((VCompteurLarmes - NextAchatOptionPonc4) >= 0) {
			VCompteurLarmes = VCompteurLarmes - NextAchatOptionPonc4;
			$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);

			NextAchatOptionPonc4 = NextAchatOptionPonc4 * 2;
			$AfficheOptionPonc4.innerHTML = NextAchatOptionPonc4 + "<span class=\"tooltiptext\">Les formateurs débarquent dans le bureau de Dave pour lui donner plein de nouveaux TP sur des technologies qu'il ne connait pas ! Dave se met en PLS... <Br><Br>Une carte mystère aléatoire va se lancer.</span>";
			EventRandom();
		}
		else {
			alert("Gagnez plus de larmes pour pouvoir acheter l'option");
		}
	}

	$AfficheOptionPonc4.onclick = lancerOptionPonc4;
