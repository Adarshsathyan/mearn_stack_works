

function fetchCountries(){
    let country_name=cntry.value;
    fetch(`https://restcountries.com/v2/name/${country_name}?fullText=true`)
    .then((res)=>res.json())
    .then(data=> displayDetails(data[0]))
    .catch(err=>swal("Not Found ","sorry for the inconvience","error"))
    
}
function displayDetails(country){
    let html_element = ``;
    let c_name = country.name;
    let population = country.population;
    let currency = country.currencies[0].name;
    let symbol = country.currencies[0].symbol;
    let region = country.region;
    let timezone = country.timezones[0];
    let img = country.flags.svg;
    let capital = country.capital
    html_element+=`
    
    <div class="row">
        <div class="col-md-6 col-12 col-lg-6 col-xl-6">
            <img src=${img}
                alt="" class="img-fluid col-md-12 col-12 image">
        </div>
        <div class="col-md-6 col-12 col-lg-6 col-xl-6">
            <div class="col-md-6 col-12 mb-5 ">
                <p class="text-muted ">Country</p>
                <p class="h1 " style="font-family: 'Poppins', sans-serif; letter-spacing: 2px;">
                    ${c_name}</p>
            </div>
            <div class="row mb-5  ">
                <div class=" col-md-4">
                    <p class="text-muted">Population</p>
                    <p class="h4" style="font-family: 'Poppins', sans-serif;">${population}</p>
                </div>
                <div class=" col-md-4">
                    <p class="text-muted">Capital</p>
                    <p class="h4" style="font-family: 'Poppins', sans-serif;">${capital}</p>
                </div>
                <div class=" col-md-4">
                    <p class="text-muted">Region</p>
                    <p class="h4" style="font-family: 'Poppins', sans-serif;"> ${region}</p>
                </div>
            </div>
            <div class="row ">
                <div class=" col-md-4">
                    <p class="text-muted">Currency</p>
                    <p class="h4" style="font-family: 'Poppins', sans-serif;">
                        ${currency}
                    </p>
                </div>
                <div class=" col-md-4">
                    <p class="text-muted">Time Zones</p>
                    <p class="h4" style="font-family: 'Poppins', sans-serif;">
                        ${timezone}
                    </p>
                </div>
                <div class=" col-md-4">
                    <p class="text-muted">Symbol</p>
                    <p class="h4" style="font-family: 'Poppins', sans-serif;">
                       ${symbol}
                    </p>
                </div>
            </div>
        </div>
    </div>
`
display_content.style.display="block";
body.style.backgroundColor = 'rgb(32, 32, 32)';
body.style.color="white";
document.querySelector("#display_content").innerHTML=html_element;
main_content.style.display="none";


}