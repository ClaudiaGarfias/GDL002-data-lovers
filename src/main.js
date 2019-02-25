const ctSelector = document.getElementById("select-country") ;   // llamar el selector de país
const indSelector = document.getElementById("select-indicator"); // Declarar una variable para que me genere los indicadores de los paises
const yrSelectorSince = document.getElementById("since-year"); // Declarar una variable para que me genere el rango de los años automaticamente en mi selector para año 
const yrSelectorUntil = document.getElementById ("until-year");
const countryNameToCountryCode = {}; //objeto creado para almacenar los nombres de los países y hacer cambio Perú:PER
const indicatorNameToIndicatorCode ={}; //objeto creado para almacenar los nombres de los indicadores y hacer cambio nombre:código

// Función para cargar países
const loadCountry = (loadIndicator) => {//El parámetro es la funcion loadIndicator 

    for (let i = 0; i < Object.keys(WORLDBANK).length; i++) {  // itera en las keys
        const ctCode = Object.keys(WORLDBANK)[i]; //trae el indice de cada key
        countryNameToCountryCode[WORLDBANK[ctCode].indicators[0].countryName] = ctCode; 
        //crea la propiedad Name y le da el valor del código en el objeto countryNameToCountryCode
        ctSelector.options[i + 1] = new Option(WORLDBANK[ctCode].indicators[0].countryName, i + 1); 
        //empuja cada nombre del país a cada opción del selector "país"
    }
};


// Función para cargar indicadores 
const loadIndicator = (countrySelectedByUser) => { 
    const countrySelected = ctSelector.options[countrySelectedByUser.target.value].innerHTML;
    //trae el valor de País seleccionado por el usuario del selector "país"
    const countryIndicators = WORLDBANK[countryNameToCountryCode[countrySelected]].indicators; 
    //llama el valor seleccionado del objeto countryNameToCountryCode,cambia Perú por PER y trae sus indicadores
    for (let i =0; i < countryIndicators.length; i++) {;//itera en los índices de los indicadores
        //console.log(i);

        const indicatorIdx = countryIndicators[i];
        //console.log(indicatorIdx);

        const getIndicatorName = countryIndicators[i].indicatorCode;
        //trae el código de cada indice de los indicadores
        const getIndicatorCode = countryIndicators[i].indicatorName;
        //trae el nombre de cada indice de los indicadores

        indicatorNameToIndicatorCode[getIndicatorCode] = getIndicatorName;
        //crea la propiedad indicatorCode y le asigna el valor de indicatorName en el objeto indicatorNameToIndicatorCode

        //console.log(indicatorNameToIndicatorCode);

        indSelector.options [i+1] = new Option (getIndicatorCode, i +1);
    }
   
};


// Función para cargar años al selector de año desde
const loadYear = () => { 
    for (let i = 1960; i <= 2017 ; i++) { // Implementar el ciclo para indicar los años
        yrSelectorSince.options[i - 1959] = new Option(i, i - 1959); // se utiliza la resta para saltarme la opción seleccionar de mi html (ya que no es parte de mi objeto )
    }
};

// Función para año hasta  //*Tarea juntar las funciones de año
const loadYear2 = () => {  
    for (let i = 1960; i <= 2017 ; i++) { // Implementar el ciclo para indicar los años
        yrSelectorUntil.options[i - 1959] = new Option(i, i - 1959) // se utiliza la resta para saltarme la opción seleccionar de mi html (ya que no es parte de mi objeto )
    }
};


////////////FUNCION CARGAR AÑOS DE CLAUDIA///////////////////////////
// const loadYearClaudia =(indicatorSelectedByUser, selectorId) => {

//     const indicatorSelected = indSelector.options[indicatorSelectedByUser.target.value].innerHTML;
//     //trae valor de indicador seleccionado por el usuario

//     const dataFromIndicator = WORLDBANK[countryNameToCountryCode[countrySelected]].indicators[indicatorSelected].data;

//     for (let i=dataFromIndicator[0]; i<=dataFromIndicator.length; i++ ) {

//         const yearSelectorToLoad = document.getElementById(selectorId).options [i+1] = new Option(i);
//     }

// };
//////////////////////////////////////////////////////////////////////


// invocar funciones para iniciar
loadCountry();
loadYear();
loadYear2 ();
ctSelector.addEventListener ("change", loadIndicator) 


//FUNCION CARGAR AÑOS DE CLAUDIA
//indSelector.addEventListener("change", loadYearClaudia)




//Función para mostrar resultados

const showResults = () => {  // mostrar resultados
    const selectedCountryID = ctSelector.value;
    const countryName =  ctSelector.options[selectedCountryID].innerHTML; //nombre del pais como fue escogido por el usuario
    //console.log(countryName);

    const countryCode= countryNameToCountryCode[countryName]; //codigo del pais tomado del objeto creado countryNameToCountryCode
    //console.log(countryCode);
    
    // const indicatorsID = indSelector.value;
    // const indicatorName = indSelector.options[indicatorsID].innerHTML;
      
    const indicatorsID = parseInt(indSelector.value);
//console.log(indicatorsID); //codigo del indicador como fue escogido por el usuario
    const indicatorName = indSelector.options[indicatorsID].innerHTML;
    const sinceYearsID = yrSelectorSince.value;
    const yearNumberSince = yrSelectorSince.options[sinceYearsID].innerHTML;
    const untilYearID = yrSelectorUntil.value;
    const yearNumberUntil = yrSelectorUntil.options[untilYearID].innerHTML;

    
    //const untilYears = document.getElementById("until-year").value;
     result = rangeFilterData  (countryCode, indicatorsID, yearNumberSince, yearNumberUntil); 
     document.getElementById("indicator-result").innerHTML = `<strong>Nombre del Indicador:</strong> ${indicatorName}<br>`;
    document.getElementById("figure-result").innerHTML =`<strong>Cantidad o porcentaje:</strong> ${result}<br>`;
    document.getElementById("year-result").innerHTML = `<strong>Rango de años:</strong> ${yearNumberSince} - ${yearNumberUntil}<br>`;

    search  ();
}
document.getElementById("search").addEventListener ("click",showResults);

// bOTON PARA PASAR A LA PAGINA SIGUIENTE
const search = () => {
    document.getElementById("choose-data").style.display = "none";
    document.getElementById("results").style.display = "inline";
}
// boton para regresar a la pagina anterior

 
const reload = () => {
    location.reload (true);   
};

document.getElementById("reload").addEventListener ("click", reload);

    