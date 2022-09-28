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

