function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    var allText;
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText;
}
function getSmallestinWindow(win,inputs,index)
{
    var get_number=(Math.min.apply(Math,inputs.slice(index,index+win)));
    displaySmallinWindow(get_number);
}
function displaySmallinWindow(number)
{
    document.getElementById("output").appendChild(document.createTextNode(number+" "))
}
function init()
{
   var file_input=readTextFile("http://localhost/plogic/file.txt");
   var window_i=parseInt(file_input.split("\n")[0]);
   var inputs=file_input.split("\n")[1].split(" ").map(Number);
   for (var index = 0; index<inputs.length-window_i; index++) 
   {
    getSmallestinWindow(window_i,inputs,index);
    }
}