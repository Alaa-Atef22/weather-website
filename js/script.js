let searchInput = document.getElementById('search');
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let dataList=[];
async function getData(country){
  let resp = await(await fetch(`http://api.weatherapi.com/v1/forecast.json?key=2d296ad93f4f48a8af9145058241401&q=${country}&days=3`)).json();
  dataList= resp;
  displayWeather();
  displaynextDay();
  displayDaythree();
}
getData('cairo');
searchInput.addEventListener('keyup', function(){
  let search = searchInput.value;
  getData(search);
})
function displayWeather(){
    let currentData = new Date(dataList.forecast.forecastday[0].date);
    let day = days[currentData.getDay()];
    let date = currentData.getDate();
    let mons = new Date(dataList.forecast.forecastday[0].date);
    let month = months[mons.getMonth()];
    let weather = ` <div class="card text-white h-100 ">
    <div class="card-header d-flex justify-content-between">
    <span>${day}</span> <span > ${date+month}</span></div> 
    <div class="card-body pt-3 p-2">
      <h5 class="title">${dataList.location.name}</h5>
     <div class="c">
       <span>${dataList.current.temp_c}<sup>o</sup>C</span>
       <img src='https:${dataList.current.condition.icon}' alt="First slide" width="30%">
       <div class="description1 ">
       <p>${dataList.current.condition.text}</p>
     </div>
       </div>
    <div class="icons1"> 
       <div>
       <i class="fa-solid fa-umbrella"></i>
         <span>20%</span>
       </div> 
       <div>
       <i class="fa-solid fa-wind"></i>
         <span>${dataList.current.wind_kph}km/h </span>
       </div>
       <div>
       <i class="fa-regular fa-compass"></i>
         <span>East</span>
       </div>
     </div>
   </div>
   </div>
`;
    document.getElementById('today').innerHTML = weather;
  }
function  displaynextDay(){
    let currentData = new Date(dataList.forecast.forecastday[1].date);
    let day = days[currentData.getDay()];
let nextDay=`
<div class="card  text-white h-100  ">
    <div class="card-header">
      <div class="title2"><span>${day}</span></div>
    </div>
    <div class="card-body">
        <img src='https:${dataList.forecast.forecastday[1].day.condition.icon}' alt="First slide" width="50%">
        <div class="max">
          <span>${dataList.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</span>
        </div>
        <div class="min">
          <span>${dataList.forecast.forecastday[1].day.mintemp_c}<sup>o</sup></span>
        </div>
        <div class="description pt-3 ">
          <span>${dataList.forecast.forecastday[1].day.condition.text}</span>
        </div>
    </div>
    </div>
`;
    document.getElementById('nextDay').innerHTML = nextDay;
}
function  displayDaythree(){
        let currentData = new Date(dataList.forecast.forecastday[2].date);
        let day = days[currentData.getDay()];
    let dayThree=`
    <div class="card  text-white h-100">
    <div class="card-header">
    <div class="title2"><span>${day}</span></div>
  </div>
        <div class="card-body ">
            <img src='https:${dataList.forecast.forecastday[2].day.condition.icon}' alt="First slide" width="50%">
            <div class="max">
              <span>${dataList.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</span>
            </div>
            <div class="min">
              <span>${dataList.forecast.forecastday[2].day.mintemp_c}<sup>o</sup></span>
            </div>
            <div class="description pt-3">
              <span>${dataList.forecast.forecastday[2].day.condition.text}</span>
            </div>
        </div>
        </div>
    `;
        document.getElementById('dayThree').innerHTML =dayThree;
    }




