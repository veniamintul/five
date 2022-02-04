

//var a=10;
//console.log(a);



alert("js подключен");

//var a=10;
//console.log(a);

const burger = document.querySelector('#burger');
const privet= document.querySelector('#privet');


burger.addEventListener('click',function(event){ 
  burger.classList.toggle('activ');   //тогл переключает одни состояния в другие
  privet.classList.toggle('activ'); 
  //burger.appendChild(privet);

burger.removeChild(privet);

  if(event.target===privet){   // свойство таргет указывает на фактический блок срабатывания события
    closeElement.click()
  }

  
});

closeElement.addEventListener("click",function(event){ 
  body.removeChild(privet); 
});
