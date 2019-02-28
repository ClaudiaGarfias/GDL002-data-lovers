const resultsObject = {};

const filterData = (country,indicatorNm,year) =>{
  const countryData = WORLDBANK[country];
  const countryIndicators = countryData.indicators;
   for (let i= 0;  i < countryIndicators.length; i++){
    const indicatorData= countryIndicators[i];
    if (indicatorData.indicatorName == indicatorNm ){
     const statistic = indicatorData.data[year];
     resultsObject[year] = statistic;
 
     if (statistic == ""){
         return  `<p id= "year">${year} : "ND"</p>`;
         
     }
     
 
     const resultOk = `<p id= "resultOk">  ${year} : ${statistic.toFixed(1)}</p>`;
     return resultOk;
 
    }
 
   }

 };
 
 const rangeFilterData = (country, indicatorNm, sinceYear, untilYear) => {
  const yearsData = [];
  for (let currentYear = sinceYear; currentYear <= untilYear; currentYear++){
    yearsData [currentYear -sinceYear]= filterData(country, indicatorNm, currentYear);
 
  }
  calcAvg();
  alert(sortkey());
  return yearsData.join("");
 
 
 };



 const calcAvg =() => {
  const dataAvg = Object.values(resultsObject);
  let dataFilter = dataAvg.filter(x => x != "");
  if (0 < dataFilter.length) {
    let avg =dataFilter.reduce(function(a, b){ return a + b; });
    let promedio =  avg /dataFilter.length;
    console.log(promedio);
  }
 };



 
const sortkey = () => {
  const orderkey = Object.values(resultsObject);
orderkey.sort((a,b) => {
  if (a > b) {
    return 1;
  }
  if (a< b) {
    return -1;
  }
  return 0;
});
return orderkey;

 };

  

 //};
 
 
 window.filterData = filterData;
 window.rangeFilterData = rangeFilterData;

