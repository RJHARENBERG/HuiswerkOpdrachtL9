import axios from "axios";

let countryName = "nederland"

async function fetchPeculiarCountryData() {
    let countryData;
    try {
        const result = await axios.get(`https://restcountries.com/v2/name/${countryName}`);
        countryData = result.data.map((data) => {
            return data;
        })
    } catch (e) {
        console.error(e.message);
        console.log("massage" + e.message)
        const element = document.getElementById("inject-country-information");
        element.innerHTML = `
                    <h1>Sorry maar dit land bestaat niet</h1>
                    `
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
        } = data[0]

        let valuta = ""
        if (data[0].currencies.length === 2) {
            const [first, second] = data[0].currencies
            const {name: valutaName1} = first
            const {name: ValutaName2} = second
            valuta = `${valutaName1} and ${ValutaName2}'s`
        } else {
            const [first] = data[0].currencies
            const {name: valutaName} = first
            valuta = `${valutaName}`
        }

        const element = document.getElementById("inject-country-information");
        element.innerHTML = `
                    <img src="${flag}" width="20" height="20">
                    <h1>${countryName}</h1>
                    <h2>${countryName} is situated in ${subregion}. It has a population of ${population} people.</h2>
                    <h3>The capital is ${capital} and you can pay with ${valuta}</h3>      
                    `
    });
}

function CountrySearchButtonClick() {
}

const countryInputButon = document.getElementById("search-button")
countryInputButon.addEventListener("click", CountrySearchButtonClick)

function handelCountryInput(e) {
    const currentValue = e.target.value
    console.log(`${currentValue}`)
    countryName = currentValue.toLowerCase()
}

const countryNameInputField = document.getElementById("country-name")
countryNameInputField.addEventListener("keyup", handelCountryInput)


function handelSubmit(e) {
    e.preventDefault()
    fetchPeculiarCountryData();
    injectInformationTextCountriesData();
}

const countryInformationRequest = document.getElementById("country-information-request");
countryInformationRequest.addEventListener('submit', handelSubmit)






