const filterData = (country,indicatorNm,year) =>{
  const countryData = WORLDBANK[country];
  const countryIndicators = countryData.indicators;
   for (let i= 0;  i < countryIndicators.length; i++){
    const indicatorData= countryIndicators[i];
    if (indicatorData.indicatorName == indicatorNm ){
     const figure = indicatorData.data[year];
 
     if (figure == ""){
         return `<p id="resultOk">${year} : "ND"</p>`;
     }
     
 
     const resultOk = `<p id="resultOk">${year} : ${figure.toFixed(1)}</p>`;
     return resultOk;
 
    }
 
   }
 };
 
 const rangeFilterData = (country, indicatorNm, sinceYear, untilYear) => {
  const yearsData = [];
  for (let currentYear = sinceYear; currentYear <= untilYear; currentYear++){
    yearsData [currentYear -sinceYear]= filterData(country, indicatorNm, currentYear);
 
  }

  return yearsData.join("");
 
 
 };





 

 //const calcAvg =() => {


 //};
 
 
 //const sortData = () => {

 //};
 
 
 window.filterData = filterData;
 window.rangeFilterData = rangeFilterData;

