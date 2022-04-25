//1.
import axios from "axios";

//2 & 3.
async function fetchCountriesData() {
    let countriesData;
    try {
        const result = await axios.get("https://restcountries.com/v2/all");
        countriesData = result.data.map((data) => {

            return data;
        })
    } catch (e) {
        console.error(e);
    }
    return countriesData;
}

//4.
function logFirstName() {
    fetchCountriesData().then((data) => {
        console.log(data[0].name)
    })
}
logFirstName();

//6 & 7
function printCountrieData() {

    fetchCountriesData().then((data) => {
            sortData(data);

            const element = document.getElementById("printCountries");

            element.innerHTML = data.map((data) => {
                return `
                <div class="all-info">
                    <div class="countrie-id">
                        <img src="${data.flag}" alt="" width="50px" height="40px">                       
                        <h2 style="color: ${regionColor(data.region)}">${data.name}</h2>                                                   
                    </div>  
                    <p>Has a population of ${data.population} people</p>   
                </div>                
                    `
            })
        }
    )
}
printCountrieData();

//8
function regionColor(regionName) {
    let colorCode;
    switch (regionName) {
        case "Africa":
            colorCode = "#0000FF"
            break
        case "Americas":
            colorCode = "#008000"
            break
        case "Asia":
            colorCode = "#FF0000"
            break
        case "Europe":
            colorCode = "#FFFF00"
            break
        case "Oceania":
            colorCode = "#800080"
            break
        default:
            console.log("niet gevonden")
    }
    return colorCode
}

//11.
function sortData (data){
    data.sort((b, a) => b.population - a.population);
}
