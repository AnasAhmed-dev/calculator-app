a = document.getElementById("display")
function valuee(num){
a.value+=num
}

function calc (){
  a.value = eval(a.value)
}


function clearResult (){
    a.value = ""
  }