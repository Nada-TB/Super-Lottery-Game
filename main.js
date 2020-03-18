'use strict';

/**************************************************variables****************************** */
const BtnGo= document.getElementById('go');
var count=0;

/***********************************************functions********************************** */

function changeContent(target, text){
    target.textContent=text;
}

function ChangeStyle(target, value){
    target.style.display=value;
}

function  disabled(){
    BtnGo.setAttribute('disabled', 'disabled');
}

// the render function, we pass it as parameter
function render(elt){
    let response=JSON.parse(elt.response);

    if(response[0]%2===0 && response[5]%6===0){
        changeContent(document.getElementById('result'),"Kudos, you are the lucky winner!");
        disabled(); 
        ChangeStyle(document.getElementById('start'),'block');

    }else if(count===10){
        changeContent(document.getElementById('result'), "Hard luck");
        ChangeStyle(document.getElementById('start'),'block');  
        disabled();
    
    }else{
        changeContent(document.getElementById('result'), 'You still have '+ (10-count)+' trial(s)');
    }

    response=response.map(element=>{
        return '<input value='+ element + '>';
    });
        document.getElementById('root').innerHTML=response.join(' ');
}
    

// Asyn function 
function lottery(url,func){
    var xhttp= new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
            func(this);
        }
    };
    xhttp.open('GET', url, true);
    xhttp.send();
}


/**********************************************Events**************************************** */

BtnGo.addEventListener('click', function(){
        lottery('lottery.php', render);
        count++;
        
});

