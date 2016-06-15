var event1 = document.getElementById("button1");
var event2 = document.getElementById("button2");
var names = [];

event1.addEventListener('click', entryNames, false);
event2.addEventListener('click', randomWinner, false);

function entryNames()
{
    var userinput = document.getElementById("input1").value;
    var doubleNames = names.indexOf(userinput);
 
    var listNames = "";
    
    if (doubleNames >= 0)
        {   
            names.pop();
            document.getElementById("demo2").innerHTML = "The name is already in the list";
        }
        else 
            {
                names.push(userinput);
            }
    
    for (var i = 0; i < names.length; i++)
    {    
        listNames += names[i] + ", ";
        document.getElementById("demo").innerHTML = listNames;
    }
}

function randomWinner()
{
    var result = "";
    
    for (var i = 0; i < names.length; i++)
         {
         result += "The winner is: " + i + "!!!"
         document.getElementById("demo2").innerHTMl = result;
         }
}

