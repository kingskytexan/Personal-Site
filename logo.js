var item = document.getElementById("picture");
item.addEventListener("mouseover", func, false);
item.addEventListener("mouseout", func1, false);

function func()
{   
   document.getElementById("text").setAttribute("style", "display:block;")
}

function func1()
{  
    document.getElementById("text").setAttribute("style", "display:none;")
}