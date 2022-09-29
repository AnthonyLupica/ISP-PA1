// Javascript file for project 1 - ISP

window.onload = function whatBrowser() 
{
    // idexOf() returns -1 if the string is not found within the user-agent header

    // firefox
    if (navigator.userAgent.indexOf("Firefox/") != -1 ) 
    {
        alert("Browser/version--> " + navigator.userAgent.split(" ")[10]); 
        return;
    }

    // chrome
    else if (navigator.userAgent.indexOf("Chrome/") != -1 ) 
    {
        alert("Browser/version--> " + navigator.userAgent.split(" ")[10]); 
        return;
    } 

    // internet explorer
    else if (navigator.userAgent.indexOf("MSIE/") != -1 ) 
    {
        alert("Browser/version--> " + navigator.userAgent.split(" ")[10]); 
        return;
    } 

    // edge
    else if (navigator.userAgent.indexOf("Edg/") != -1 ) 
    {
        alert("Browser/version--> " + navigator.userAgent.split(" ")[10]); 
        return;
    } 

    // safari
    else if (navigator.userAgent.indexOf("Safari/") != -1 ) 
    {
        alert("Browser/version--> " + navigator.userAgent.split(" ")[10]); 
        return;
    } 

    else
    {
        alert("Cannot detect browser");
        return;
    }
}

function move(input)
{
    document.getElementById('display').style.display = "none";

    if (input < 0)
    {
        alert('"please... negative numbers confuse me"');
        return;
    }

    let smooth = null;
    const unown = document.getElementById("animate");   
    
    // offsets for x and y axis
    let posY = 0;
    let posX = 0;

    clearInterval(smooth);
    // call frame once every 5 milliseconds 
    smooth = setInterval(frame, 7.5);
  
    function frame() 
    {
        if (posY == 285) 
        {
            // stop animation
            clearInterval(smooth);
            // call to display result
            doFactorial(input);
            
            return;
        } 
        else 
        {
            ++posY; 
            posX += 2;
            
            unown.style.top = posY + "px"; 
            unown.style.right = posX + "px"; 
        }
    }
}

function doFactorial(input)
{
    let result = 1;
    for (let i = 1; i <= input; ++i)
    {
        result *= i;
    }

    document.getElementById("display").innerHTML = '"I, the factorial Unown, declare the result: ' + result + '"';
    document.getElementById('display').style.display = "block";
}
