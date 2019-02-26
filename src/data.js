//const filterData = (country,indicatorNm,year) => {
  /*const countryData = WORLDBANK[country];
  const countryIndicators = countryData.indicators;
   for (let i= 0;  i < countryIndicators.length; i++) {
    const indicatorData= countryIndicators[i];
    if (indicatorData.indicatorCode = indicatorNm ) {
     const figure = indicatorData.data[year];

     if (figure == "") {
     	return "ND";
     }
     return figure;
    }
 
   };
 };
const rangeFilterData = (country, indicatorNm, sinceYear, untilYear) => {;
  const yearsData = [];
  for (let currentYear = sinceYear; currentYear <= untilYear; currentYear++){
    yearsData [currentYear -sinceYear]= filterData(country, indicatorNm, currentYear);

  }
  return yearsData;

};

 window.filterData = filterData 
 window.rangeFilterData = rangeFilterData;
window.WORLDBANK = worldbank.js; */

const filterData = (country,indicatorNm,year) => {
  const countryData = WORLDBANK[country]
  const countryIndicators = countryData.indicators
   for (let i= 0;  i < countryIndicators.length; i++) {
    const indicatorData= countryIndicators[i]
    if (indicatorData.indicatorCode = indicatorNm ) {
     const figure = indicatorData.data[year];
 
     if (figure == "") {
         return `<p id="resultOk">${year} : "ND"</p>`
     }
     //console.log(year);
     //console.log(figure);
 
     const resultOk = `<p id="resultOk">${year} : ${figure.toFixed(1)}</p>`;
     return resultOk;
 
    }
 
   };
 }
 
 const rangeFilterData = (country, indicatorNm, sinceYear, untilYear) => {
  const yearsData = [];
  for (let currentYear = sinceYear; currentYear <= untilYear; currentYear++){
    yearsData [currentYear -sinceYear]= filterData(country, indicatorNm, currentYear);
 
  }
  //console.log(yearsData);
  return yearsData.join("");
 
 
 };
 
 
 
 
 
 window.filterData = filterData
 window.rangeFilterData = rangeFilterData

