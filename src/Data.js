export const fetchdata=()=>{
    return fetch('https://api.covid19api.com/summary')
           .then(response=>response.json())
           .then(data=>data)
}

export const fetchdailydata=(country)=>{
    let d=new Date();
    let DD= d.getUTCDate().toString();
    let country_n=country.charAt(0).toUpperCase()+country.slice(1)

    const url= `https://api.covid19api.com/country/${country_n}/status/confirmed?from=2020-06-01T00:00:00Z&to=2020-06-${DD}T00:00:00Z`
     
    return fetch(url)
            .then(res=>res.json())
            .then(data=>data)
}