
/*
[v] Je gaat dit doen met behulp van de REST Counties API.
[v] De documentatie over de verschillende endpoints kun je hier vinden.
1. ga naar websait
   1. zoek endpoints https://restcountries.com/v2/all

       [v] Bekijk deze documentatie goed.
       [v] Let op: we raden je aan om gebruik te maken van de endpoints uit versie 2 (versie 3 is nog niet zo betrouwbaar).

       Voor je begint
       [v] Het bestaande
       [v] CSS- bestand zijn nog niet gekoppeld
       [v] JavaScript bestand zijn nog niet gekoppeld aan het HTML-bestand. Dit mag je zelf doen.

       [v] Schrijf voor alle opdrachten eerst stap voor stap de psuedo-code uit. Begin dan pas met programmeren. Ik meen het.
       [v] NPM en Parcel zijn al geconfigureerd, maar je moet de bijbehorende dependencies nog wel installeren.
       [v] De node_modules map wordt immers niet meegepusht naar GitHub. Omdat er een package.json aanwezig is in het bestand,
           kun je dit doen met het volgende (globale) commando: npm install
       [v] Alle benodigde dependencies zijn nu binnengehaald! Als je de applicatie wil starten, doe je dat met het
           volgende commando: npm run start
       [v] Tip: wanneer je gebruik gaat maken van Axios zul je dit nog wel los moeten installeren,
           want deze staat nog niet in de package.json.

       Randvoorwaarden

       [v] 1a. Op basis van de informatie uit de REST Countries API, haal je data op over alle landen ter wereld en geef je
               deze in een lijst weer op de pagina;
               1. zoek de url =
               2. maak fetch functie met axios
               3. maak catch
               4. maak id in ul om tekst naar de html te sturen
               5. maak een fuctie waar de tekst opgemaakt wordt in javasctipt
               6.  maar een map list en plaats die in de text op maak functie
               7. inport axios form exios

       [v] Bovenaan de pagina staat de afbeelding van een wereldkaart (zie de map assets);

       Voor ieder land geef je het volgende weer:
       [v] De naam van het land
       [v] De vlag van dat land
       [v] De zin: Has a population of [amount] people
       [v] De landen zijn gesorteert op populatie, van laag naar hoog;
       [v] De land-namen moeten worden weergegeven in een kleur die overeenkomt met het continent waar het land in ligt.
           Tip: maak hier een aparte functie voor die een regio-naam verwacht en bepaalt welke kleur het land moet krijgen.
           Een land ligt meestal in één van de volgende vijf contintenten, maar uitzonderingen kunnen voorkomen:
       [v] Africa: blauw
       [v] Americas: groen
       [v] Asia: rood
       [v] Europe: geel
       [v] Oceania: paars

       Stappenplan
       Let op: het is uitdagender om jouw eigen stappenplan te maken. Als je niet zo goed weet waar je moet beginnen,
           kun je onderstaand stappenplan gebruiken:

       [v] 1. Installeer en importeer Axios;
       [v] 2. eem de documentatie van de REST Countries API goed door. Welk endpoint heb je nodig om informatie over
           alle landen op te halen?
       [v] 3. Schrijf een asynchrone functie die, met behulp van Axios, een GET-request maakt naar het juiste endpoint.
           Log de response in de console en bestudeer de data goed: hoe is het opgebouwd?
       [v] 4. Probeer eens om de naam van het allereerste land te loggen in de console, welk pad moet je hiervoor volgen?
       [v] 5. Maak een <ul>-tag in de HTML die je als referentie kunt gebruiken in jouw JavaScript bestand;
       [v] 6. Zorg ervoor dat de naam van het allereerste land wordt weergegeven als <li>-tag in het lijst-element op de pagina;
       [v] 7. Zorg er nu ook voor dat de populatie (Has a population of [amount] people) daaronder wordt weergegeven;
       [v] 8. Schrijf een aparte functie die één regio-naam verwacht, en op basis van deze regio de correcte kleur-naam
           als string teruggeeft. Gebruik deze, om de naam van het land in de juiste kleur weer te geven op de pagina.
           Tip: zorg ervoor dat je CSS-classes maakt voor alle regio-kleuren!
       [v] 9. Breidt de <li>-tag uit met een <img>-tag om zo ook de url van de meegegeven vlag-afbeelding weer te kunnen geven;
       [v] 10. Gebruik de map-methode om over de array met landen heen te mappen, en zo een <li>-element te maken voor álle landen;
          [v] 11. Zorg er ten slotte voor dat je de response data eerst sorteert op populatie, van laag naar hoog, voor je eroverheen
              mapt om de landen op de pagina weer te geven.

          Bonusopdrachten

          [] Lees paragraaf 8.2 op EdHub door en kijk hoe je dit kunt toepassen in deze opdracht;
          [] Make it look nice! 😍
      */
2. //6 & 7.
   // function printCountrieData() {
   //
   //     fetchCountriesData().then((data) => {
   //             data.sort((b, a) => b.population - a.population);
   //             for (let i = 0; i < data.length; i++) {
   //
   //                 for (let i = 0; i < data.length; i++) {
   //                     const nameElement = document.createElement("li");
   //                     const nameStringInput = document.createTextNode(data[i].name);
   //                     nameElement.setAttribute("style", "color:" + regionColor(data[i].region))
   //                     nameElement.appendChild(nameStringInput);
   //
   //                     const peopleStringElement = document.createElement("li");
   //                     const peopleStringInput = document.createTextNode("Has a population of " + data[i].population + " people");
   //                     peopleStringElement.appendChild(peopleStringInput);
   //
   //                     const flage = document.createElement("IMG");
   //                     flage.setAttribute("src", data[i].flag);
   //                     flage.setAttribute("width", "30")
   //                     flage.setAttribute("height", "30")
   //
   //                     document.getElementById("printCountries").appendChild(flage)
   //                     document.getElementById("printCountries").appendChild(nameElement);
   //                     document.getElementById("printCountries").appendChild(peopleStringElement);
   //
   //
   //                 }
   //             }
   //         }
   //     )
   // }