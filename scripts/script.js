
var buttons=document.querySelectorAll('.button1');
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(){
        var list=document.querySelectorAll('.ul');
        var display=list[i].style.display;
        if(display=="none"){
            list[i].style.display= 'block';      
        }else{
            list[i].style.display= 'none';
        }   
        //list[i].style.backgroundColor='#ffe6ce';
    }) 
}
