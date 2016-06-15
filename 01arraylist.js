var arrayInput = [];

var event1 = document.getElementById("button1");
event1.addEventListener('click',showArrays,false);


function showArrays ()
{
    var result = "";
    
    arrayInput[0] = document.getElementById("input1").value;
    arrayInput[1] = document.getElementById("input2").value;
    arrayInput[2] = document.getElementById("input3").value;
    
    for (var i = 0; i < arrayInput.length; i++)
    {
        result += arrayInput[i] + " ";
        document.getElementById("demo").innerHTML = "The array is compose from:" + result;
    }
    
    document.getElementById("demo2").innerHTML = "The length of the array is " + arrayInput.length;
    
    addAndRemoveArray();
}


function showLenghtArray ()
{
    var arrayInput1 = new Array();
    arrayInput1.push(document.getElementById("input1").value);
    
    var output = "";
    
    for (var i = 0; i < arrayInput1.length; i++)
    {
        output += arrayInput1 + " ";
        document.getElementById("demo").innerHTML = "The push element is: " + output;
        document.getElementById("demo2").innerHTML = "And the length of this array is: " + arrayInput1.length;
    }
}

function addAndRemoveArray()
{
    
    var result = "";
    
    //remove the first element from my array
    arrayInput.shift();
    
    //add an element at the start of my array
    arrayInput.unshift(document.getElementById("input4").value);
    
    //add a new element at the end of my array
    arrayInput.push(document.getElementById("input5").value);
    
    //remove the last element from the array
    arrayInput.pop();
    
    for (var i = 0; i < arrayInput.length; i++)
    {
        result += arrayInput[i] + " ";
        document.getElementById("demo4").innerHTML = "After few modifes the final array is " + result;
    }
    
}