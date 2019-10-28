//==== SAUVEGARDE ====//

//==== ETAPE 01 ====//
//integrer la ligne suivante dans chaque fonction : localStorage.setItem("nom sauvgarde", valeur de notre fonction)//

//==== ETAPE 02 ====//
//Rassembler tous les localStorage de chaque fonction, dans une fonction//
function sauvegarde(){

	// VARIABLES
	localStorage.setItem("VCompteurLarmes", VCompteurLarmes); 
	localStorage.setItem("VMultiLarmes", VMultiLarmes); 
	localStorage.setItem("VLarmesParS", VLarmesParS);
	localStorage.setItem("NextAchatOptionUp1", NextAchatOptionUp1);
	localStorage.setItem("VNiveauOptionUp1", VNiveauOptionUp1);
	localStorage.setItem("NextAchatOptionUp2", NextAchatOptionUp2);
	localStorage.setItem("VNiveauOptionUp2", VNiveauOptionUp2);
	localStorage.setItem("NextAchatOptionUp3", NextAchatOptionUp3);
	localStorage.setItem("VNiveauOptionUp3", VNiveauOptionUp3);
	localStorage.setItem("NextAchatOptionUp4", NextAchatOptionUp4);
	localStorage.setItem("VNiveauOptionUp4", VNiveauOptionUp4);
	localStorage.setItem("NextAchatOptionUp5", NextAchatOptionUp5);
	localStorage.setItem("VNiveauOptionUp5", VNiveauOptionUp5);
	localStorage.setItem("NextAchatOptionUp6", NextAchatOptionUp6);
	localStorage.setItem("VNiveauOptionUp6", VNiveauOptionUp6);
	localStorage.setItem("NextAchatOptionUp7", NextAchatOptionUp7);
	localStorage.setItem("VNiveauOptionUp7", VNiveauOptionUp7);
	localStorage.setItem("NextAchatOptionUp8", NextAchatOptionUp8);
	localStorage.setItem("VNiveauOptionUp8", VNiveauOptionUp8);
	localStorage.setItem("NextAchatOptionPonc1", NextAchatOptionPonc1);
	localStorage.setItem("NextAchatOptionPonc2", NextAchatOptionPonc2);
	localStorage.setItem("NextAchatOptionPonc3", NextAchatOptionPonc3);
	localStorage.setItem("NextAchatOptionPonc4", NextAchatOptionPonc4);

	// FONCTIONS
	localStorage.setItem("ajoutLarmesClic", ajoutLarmesClic); 
	localStorage.setItem("incrementerOptionUp1", incrementerOptionUp1);
	localStorage.setItem("plusCompteurLarmes", plusCompteurLarmes);
	localStorage.setItem("autoclicOptionUp2", autoclicOptionUp2);
	localStorage.setItem("plusCompteurLarmesOptionUp3", plusCompteurLarmesOptionUp3);
	localStorage.setItem("autoclicOptionUp3", autoclicOptionUp3);
	localStorage.setItem("incrementerOptionUp4", incrementerOptionUp4);
	localStorage.setItem("plusCompteurLarmesOptionUp5", plusCompteurLarmesOptionUp5);
	localStorage.setItem("autoclicOptionUp5", autoclicOptionUp5);
	localStorage.setItem("plusCompteurLarmesOptionUp6", plusCompteurLarmesOptionUp6);
	localStorage.setItem("autoclicOptionUp6", autoclicOptionUp6);
	localStorage.setItem("incrementerOptionUp7", incrementerOptionUp7);
	localStorage.setItem("plusCompteurLarmesOptionUp8", plusCompteurLarmesOptionUp8);
	localStorage.setItem("autoclicOptionUp8", autoclicOptionUp8);
	localStorage.setItem("lancerOptionPonc1", lancerOptionPonc1);
	localStorage.setItem("lancerOptionPonc2", lancerOptionPonc2);
	localStorage.setItem("lancerOptionPonc3", lancerOptionPonc3);
	localStorage.setItem("lancerOptionPonc4", lancerOptionPonc4);

}

//==== ETAPE 03 - LE RELOAD ====//

//==== Créer une fonction Reload qui a pour but de rafraichir la page en temps réel en prenant n compte les sauvegarde//
//==== Faire appel à ctte fonction Reload à la fin de la page ====//
function reload(){

	// VARIABLES
	VCompteurLarmes = parseInt (localStorage.getItem("VCompteurLarmes"));
	VMultiLarmes = parseInt (localStorage.getItem("VMultiLarmes"));
	VLarmesParS = parseInt (localStorage.getItem("VLarmesParS"));
	NextAchatOptionUp1 = parseInt (localStorage.getItem("NextAchatOptionUp1"));
	VNiveauOptionUp1 = parseInt (localStorage.getItem("VNiveauOptionUp1"));
	NextAchatOptionUp2 = parseInt (localStorage.getItem("NextAchatOptionUp2"));
	VNiveauOptionUp2 = parseInt (localStorage.getItem("VNiveauOptionUp2"));
	NextAchatOptionUp3 = parseInt (localStorage.getItem("NextAchatOptionUp3"));
	VNiveauOptionUp3 = parseInt (localStorage.getItem("VNiveauOptionUp3"));
	NextAchatOptionUp4 = parseInt (localStorage.getItem("NextAchatOptionUp4"));
	VNiveauOptionUp4 = parseInt (localStorage.getItem("VNiveauOptionUp4"));
	NextAchatOptionUp5 = parseInt (localStorage.getItem("NextAchatOptionUp5"));
	VNiveauOptionUp5 = parseInt (localStorage.getItem("VNiveauOptionUp5"));
	NextAchatOptionUp6 = parseInt (localStorage.getItem("NextAchatOptionUp6"));
	VNiveauOptionUp6 = parseInt (localStorage.getItem("VNiveauOptionUp6"));
	NextAchatOptionUp7 = parseInt (localStorage.getItem("NextAchatOptionUp7"));
	VNiveauOptionUp7 = parseInt (localStorage.getItem("VNiveauOptionUp7"));
	NextAchatOptionUp8 = parseInt (localStorage.getItem("NextAchatOptionUp8"));
	VNiveauOptionUp8 = parseInt (localStorage.getItem("VNiveauOptionUp8"));
	NextAchatOptionPonc1 = parseInt (localStorage.getItem("NextAchatOptionPonc1"));
	NextAchatOptionPonc2 = parseInt (localStorage.getItem("NextAchatOptionPonc2"));
	NextAchatOptionPonc3 = parseInt (localStorage.getItem("NextAchatOptionPonc3"));
	NextAchatOptionPonc4 = parseInt (localStorage.getItem("NextAchatOptionPonc4"));


	// AFFICHAGE
	$AfficheCompteurLarmes.innerHTML = Math.trunc(VCompteurLarmes);
	$AfficheMultiNbLarmesClic.innerHTML = 'x ' +VMultiLarmes;
	$AfficheLarmesParS.innerHTML = 'Par seconde : ' +VLarmesParS;
	$AfficheNiveauOptionUp1.innerHTML = VNiveauOptionUp1;
	$AfficheAchatOptionUp1.innerHTML = NextAchatOptionUp1 + "<span class=\"tooltiptext\">Augmente le nombre de larmes récolté à chaque clic</span>";
	$AfficheNiveauOptionUp2.innerHTML = VNiveauOptionUp2;
	$AfficheAchatOptionUp2.innerHTML = NextAchatOptionUp2 + "<span class=\"tooltiptext\">Récolte automatiquement des larmes chaque seconde</span>";
	$AfficheNiveauOptionUp3.innerHTML = VNiveauOptionUp3;
	$AfficheAchatOptionUp3.innerHTML = NextAchatOptionUp3 + "<span class=\"tooltiptext\">Récolte automatiquement des larmes chaque seconde</span>";
	$AfficheNiveauOptionUp4.innerHTML = VNiveauOptionUp4;
	$AfficheAchatOptionUp4.innerHTML = NextAchatOptionUp4 + "<span class=\"tooltiptext\">Augmente le nombre de larmes récolté à chaque clic</span>";
	$AfficheNiveauOptionUp5.innerHTML = VNiveauOptionUp5;
	$AfficheAchatOptionUp5.innerHTML = NextAchatOptionUp5 + "<span class=\"tooltiptext\">Récolte automatiquement des larmes chaque seconde</span>";
	$AfficheNiveauOptionUp6.innerHTML = VNiveauOptionUp6;
	$AfficheAchatOptionUp6.innerHTML = NextAchatOptionUp6 + "<span class=\"tooltiptext\">Récolte automatiquement des larmes chaque seconde</span>";
	$AfficheNiveauOptionUp7.innerHTML = VNiveauOptionUp7;
	$AfficheAchatOptionUp7.innerHTML = NextAchatOptionUp7 + "<span class=\"tooltiptext\">Augmente le nombre de larmes récolté à chaque clic</span>";
	$AfficheNiveauOptionUp8.innerHTML = VNiveauOptionUp8;
	$AfficheAchatOptionUp8.innerHTML = NextAchatOptionUp8 + "<span class=\"tooltiptext\">Récolte automatiquement des larmes chaque seconde</span>";
	$AfficheOptionPonc1.innerHTML = NextAchatOptionPonc1 + "<span class=\"tooltiptext\">Oh non la machine à café est en panne ! Comment Dave va-t-il tenir toute la journée ?... <Br><Br>Achetez cette option et augmentez ainsi les 4 premiers langages d'1 niveau !</span>";
	$AfficheOptionPonc2.innerHTML = NextAchatOptionPonc2 + "<span class=\"tooltiptext\">L'ami développeur de Dave n'a vraiment rien compris, il n'arrête pas de déranger Dave dans son travail. <Br><Br>Débloquez cette option surprise !</span>";
	$AfficheOptionPonc3.innerHTML = NextAchatOptionPonc3 + "<span class=\"tooltiptext\">... Ô désespoir !<Br><Br>Coupure d'électricité, plus d'Internet. Et Dave n'avait pas sauvegardé son travail...<Br><Br>Cette option augmente les 4 derniers langages d'1 niveau !</span>";
	$AfficheOptionPonc4.innerHTML = NextAchatOptionPonc4 + "<span class=\"tooltiptext\">Les formateurs débarquent dans le bureau de Dave pour lui donner plein de nouveaux TP sur des technologies qu'il ne connait pas ! Dave se met en PLS... <Br><Br>Une carte mystère aléatoire va se lancer.</span>";


	// RELANCE AUTOCLIC
	for (var i = 1; i < VNiveauOptionUp2; i++) {
		setInterval(plusCompteurLarmes, 1000);
	}

	for (var i = 1; i < VNiveauOptionUp3; i++) {
		setInterval(plusCompteurLarmesOptionUp3, 1000);
	}

	for (var i = 1; i < VNiveauOptionUp5; i++) {
		setInterval(plusCompteurLarmesOptionUp5, 1000);
	}

	for (var i = 1; i < VNiveauOptionUp6; i++) {
		setInterval(plusCompteurLarmesOptionUp6, 1000);
	}

	for (var i = 1; i < VNiveauOptionUp8; i++) {
		setInterval(plusCompteurLarmesOptionUp8, 1000);
	}


	// BOUTONS DISABLED
	if (VNiveauOptionUp1 > 2) {
		$AfficheAchatOptionUp2.disabled = false; // Déverrouille OptionUp2
	}
	if (VNiveauOptionUp2 > 4) {
		$AfficheAchatOptionUp3.disabled = false; // Déverrouille OptionUp3
	}
	if ((VNiveauOptionUp3 > 4) && (VNiveauOptionUp2 > 9)) {
		$AfficheAchatOptionUp4.disabled = false; // Déverrouille OptionUp4
	}
	if (VNiveauOptionUp4 > 5 && VNiveauOptionUp1 > 9) {
		$AfficheAchatOptionUp5.disabled = false; // Déverrouille OptionUp5
	}
	if (VNiveauOptionUp3 > 11 && VNiveauOptionUp5 > 5) {
		$AfficheAchatOptionUp6.disabled = false; // Déverrouille OptionUp6
	}
	if (VNiveauOptionUp5 > 14 && VNiveauOptionUp6 > 6) { 
		$AfficheAchatOptionUp7.disabled = false; // Déverrouille OptionUp7
	}
	if (VNiveauOptionUp7 > 9 && VNiveauOptionUp2 > 14) {
		$AfficheAchatOptionUp8.disabled = false; // Déverrouille OptionUp8
	}
	if (VNiveauOptionUp4 > 1) {
		$AfficheOptionPonc1.disabled = false; // Déverrouille OptionPonc1
	}
	if (VNiveauOptionUp2 > 8) {
		$AfficheOptionPonc2.disabled = false; // Déverrouille OptionPonc2
	}
	if (VNiveauOptionUp8 > 1) {
		$AfficheOptionPonc3.disabled = false; // Déverrouille OptionPonc3
	}

}
