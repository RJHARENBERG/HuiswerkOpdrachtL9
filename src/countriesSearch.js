import axios from "axios";


async function fetchPeculiarCountryData() {
    let countryData;
    try {
        const result = await axios.get("https://restcountries.com/v2/name/peru");
        countryData = result.data.map((data) => {
            return data;
        })
    } catch (e) {
        console.error(e);
    }
    return countryData;
}

function injectInformationTextCountriesData() {
    fetchPeculiarCountryData().then(data => {
        const {
            flag,
            name: countryName,
            subregion,
            population,
            capital,
            currencies: {name: valutaName}
        } = data[0]

        const element = document.getElementById("inject-country-information");
        element.innerHTML = `
                    <img src="${flag}" width="20" height="20">
                    <h1>${countryName}</h1>
                    <h2>${countryName} is situated in ${subregion}. It has a population of ${population} people.</h2>
                    <h3>The capital is ${capital} and you can pay with ${valutaName}'s</h3>      
                    `
    });
}
injectInformationTextCountriesData()





