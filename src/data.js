const filterData = (country,indicatorNm,year) => {
  const countryData = WORLDBANK[country]
  const countryIndicators = countryData.indicators
   for (let i= 0;  i < countryIndicators.length; i++) {
    const indicatorData= countryIndicators[i]
    if (indicatorData.indicatorName == indicatorNm ) {
     return indicatorData.data[year];
    }
 
   };
 }
 
 
 
 
 window.filterData = filterData 


          

