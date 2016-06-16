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
            document.getElementById("demo2").innerHTML = "The name is already in the list." + "<br>" + "Choose another one!";
        }
        else 
            {
                names.push(userinput);
                document.getElementById("demo2").innerHTML = "";
            }
    
    for (var i = 0; i < names.length; i++)
    {    
        listNames += names[i] + "<br>";
        document.getElementById("demo").innerHTML = listNames;
    }
}

function randomWinner()
{
    
    var randomName = Math.floor(Math.random() * names.length);
    
    var winnerName = names[randomName];
    
    document.getElementById("demo2").innerHTML = "The winner is: " + winnerName + "!!!";
    
}

