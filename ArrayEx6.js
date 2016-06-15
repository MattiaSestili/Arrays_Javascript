var countries = 
["England", "France", "Italy", "Mexico", "Poland" , "Russia", "China", "Greece", "Egypt", "India"];

var event1 = document.getElementById("button1");
event1.addEventListener('click', countriesInTheArray, false);

function countriesInTheArray()
{
 checkCountries();   
}

function checkCountries()
{
    var userinput = document.getElementById("input1").value;
    var serchResult = countries.indexOf(userinput);
    
    if (serchResult >= 0)
        {
            document.getElementById("demo").innerHTML = 
                "The country is :" + userinput + " and it is in the array";
        }
        else 
        {
            document.getElementById("demo").innerHTML = 
                "The country selected is not present in the list ";
        }
}