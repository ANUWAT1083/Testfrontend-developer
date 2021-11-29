const from=document.getElementById('form');
const fristname=document.getElementById('fristname');
const lastname=document.getElementById('lastname');

from.addEventListener('submit',function(e) {
    e.preventDefault();
    if(fristname===""){
        console.log("firstname is empty");
    }else{
        console.log("submit is complete")
    }
});