//start counter section//
var counter = 0;

function increament(){


    counter++;
    document.getElementById("coun").innerHTML= counter;
  
}

function decreament(){


    counter--;
    document.getElementById("coun").innerHTML= counter;
   
}
//end counter section//


//start dollar section//
function validate(){
    var x = document.getElementById("dollar").value;
    var result = document.getElementById("mon");
   
    if(x==""){
        result.innerHTML="please enter number";
        return false;
    }
    else if(isNaN(x))
    {
        result.innerHTML="Enter number not text";
        return false;

    } 
    else if (x<0)
    {
        result.innerHTML="Enter positive number";
        return false;
    }
    else {
        result.innerHTML = x*50 + " " + "Egyptian pound";
        return false;
    }

   


}
// end dollar section//