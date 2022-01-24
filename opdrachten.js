/**
 * 
 * OPDRACHT 1
 * 
 */
function showWelcome() {
    document.getElementById('welkom').innerHTML = "Welkom bij de oefentoets<br> Programmeren - Periode 2";
}

// Roep de functie `showWelcome` aan

/**
 * 
 * OPDRACHT 2
 * 
 */

function showName() {
    // Maak een variable genaamd `naam` en geef deze jouw naam als waarde.
    // Toon de variabele naam in de innerHTML van element met ID='naam'
}

//  Roep de functie `showName` aan 


/**
 * 
 * OPDRACHT 3a
 * 
 */

function alertColor() {
    let kleur = document.getElementById('kleur').value;
    alert("De kleur is: " + kleur);
}

//  Koppel de functie 'alertColor' aan het 'click' event van de button met ID=kleur-show

/**
 * 
 * OPDRACHT 3b
 * 
 */

function changeSectionBackground() {
    // Pas de backgroundColor aan van het element met ID='kleur-section' 
    // naar de waarde van van de input met ID='kleur'
}
//  Koppel de functie 'changeSectionBackground' aan het 'click' event van de button met ID=kleur-show

/**
 * 
 * OPDRACHT 4
 * 
 */

// Schrijf de functie genaamd: `showWorkForAge`, met hierin code die:
    // de `value` van het element met ID='leeftijd' onthoud in een variabele genaamd: leeftijd
    // Zorg ervoor dat afhankelijk van de waarde van de variabele 'leeftijd', er "Ja" of "Nee" komt in de
    // elementen met IDs: leeftijd-werk-licht, leeftijd-werk-zwaar, leeftijd-werk-nacht:
        // Als leeftijd kleiner is dan 13, mag je helemaal niet werken (alles "Nee")
        // Als leeftijd 13 of 14 is, mag er alleen licht werk gedaan worden
        // Als leeftijd 15, 16 of 17 is, mag er licht en zwaar werk gedaan worden, maar geen nacht werk.
        // Als leeftijd 18 of hoger is, mag al het werk verricht worden.

//  Koppel de functie 'showWorkForAge' aan het 'click' event van de button met ID='leeftijd-show'

/**
 * 
 * OPDRACHT 5
 * 
 */

function showNamesLudo() {
    let naam = ["Ludovicus", "di", "Rizzo"];
    
    // Toon de eerste string uit 'naam' in element met ID='ludo-tussenvoegsel'
    // Toon de tweede string uit 'naam' in element met ID='ludo-tussenvoegsel'
    // Toon de derde string uit 'naam' in element met ID='ludo-achternaam'
}

// Roep de functie `showNameLudo` aan.

/**
 * 
 * OPDRACHT 6
 * 
 */

 function showNamesMe() {
    // Maak een variabele genaamd `naam` met als waarde een array met jouw:
    //   - voornaam
    //   - tussenvoegsel (null als geen)
    //   - achternaam

    // Toon de naamdelen uit de array 'naam' in de elementen met ID's:
    //   - mijn-voornaam
    //   - mijn-tussenvoegsel
    //   - mijn-voornaam
}

// Roep de functie `showNamesMe` aan.

/**
 * 
 * OPDRACHT 7 Kleur naamdelen
 * 
 */

// Schrijf de functie genaamd: `colorNames`, met hierin code die:
    // - de HTML elementen met class=voornaam onthoud in de variabele: 'voornamen'
    // - Voor elk element in die array:
      // - Maak de tekstkleur groen

    // - de HTML elementen met class=tussenvoegsel onthoud in de variabele: 'tussenvoegsels'
    // - Voor elk element in die array:
      // - Maak de tekstkleur oranje

    // - de HTML elementen met class=achternaam onthoud in de variabele: 'tussenvoegsels'
    // - Voor elk element in die array:
      // - Maak de tekstkleur rood

//  Koppel de functie 'colorNames' aan het 'click' event van de button met ID='kleur-namen'


/**
 * 
 * OPDRACHT 8
 * 
 */

//  Maak de functie changeBackgroundColor
    //  Maak de variabel color, geef deze de waarde van de body background color
    //  Schakel tussen de variabel color
    //      Indien color 'black' is
    //          Verander de body background color naar '#c1c1c1'
    //      Indien color '#c1c1c1' is
    //          Verander de body background color naar '#7d493e'
    //      Indien het geen van de bovenstaande is
    //          Verander de body background color naar 'black'
//
// Zorg ervoor dat de functie wordt aangeroepen bij een click op ID=change-body-background



/**
 * 
 * OPDRACHT 9
 * 
 */

 //  Maak de functie changeTextColor
    //  Maak de variabel color, geef deze de waarde van de tekst-kleur
    //  Schakel tussen de variabel color
    //      Indien color 'black' is
    //          Verander de body background color naar 'blue'
    //      Indien color 'blue' is
    //          Verander de body background color naar 'red'
    //      Indien het geen van de bovenstaande is
    //          Verander de body background color naar 'black'
//
// Zorg ervoor dat de functie elke 5 seconden wordt aangeroepen