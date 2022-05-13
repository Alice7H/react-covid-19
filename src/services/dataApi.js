
const requestOptions = {method: 'GET', redirect: 'follow'}

export async function getCountries() {
    const request = `${process.env.REACT_APP_BASE_API}/api/countries`
    let response = await fetch(request, requestOptions)
    response = await response.json() 
    return response;
}

export async function getDataByCountryDate(country, today) {
    let request = `${process.env.REACT_APP_BASE_API}/api/${today}/country/${country}`
    let response = await fetch(request, requestOptions)    
    let data = await response.json()
    return data;
}

export async function getDataBrazil(day){
    let request = `${process.env.REACT_APP_BASE_API}/api/${day}/country/Brazil`;
    let response = await fetch(request, requestOptions)    
    response = await response.json()
    return response;
}
