var arrayInput = [];

var event1 = document.getElementById("button1");
event1.addEventListener('click',showArrays,false);

function showArrays ()
{
    var result = "";
    arrayInput[0] = "apple";
    arrayInput[1] = "orange";
    
    for (var i = 0; i < arrayInput.length; i++)
    {
        result += arrayInput[i] + " ";
        
    }
    document.getElementById("demo").innerHTML = "The original array is :" + result;
    indexPoint();
    document.getElementById("demo3").innerHTML = "The lenght is " + arrayInput.length;
}

function indexPoint()
{
    var newResult = "";
    var userinput1 = document.getElementById("input1").value;
    var userinput2 = parseInt(document.getElementById("input2").value);
    
    if ((userinput2 > 0) && (userinput2 <= arrayInput.length))
        {
            arrayInput.splice(userinput2,0,userinput1);
        }
    
    
    for (var i = 0; i < arrayInput.length; i++)
    {
        newResult += arrayInput[i] + " ";
        document.getElementById("demo2").innerHTML = "The new array is :" + newResult;
    }
}
    