import axios from "axios";


async function fetchPeculiarCountriesData() {
    let countriesData;
    try {
        const result = await axios.get("https://restcountries.com/v2/name/peru");
        countriesData = result.data.map((data) => {
            return data;
        })
    } catch (e) {
        console.error(e);
    }
    return countriesData;
}

function testData (){
    fetchPeculiarCountriesData().then(data => {
        console.log(data[0])
    });
}

testData();
