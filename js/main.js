let body = document.getElementsByTagName('body')[0];
let header  = document.getElementsByTagName('header')[0];
//BURGER MENU
let btnBurger = document.querySelector('.burger_menu');
let Burger = document.querySelector('.burger_content');

btnBurger.addEventListener('click',function(){
    btnBurger.classList.toggle('active');
    Burger.classList.toggle('active');

    if(btnBurger.classList == "burger_menu active"){
        body.style.overflow="hidden"
    }else if(btnBurger.classList=="burger_menu"){
        body.style.overflow="";
    }
})

//POP UP
let popup = document.querySelector(".popup");
let btnPop = document.getElementById('send');
btnPop.onclick=()=>{
    popup.style.display="flex";
    header.style.opacity="0.3";

}

let popupClose = document.getElementById('close');
popupClose.onclick=()=>{
    popup.style.display="none";
    header.style.opacity="1";
}
//POP UP 2
let popThanks = document.querySelector('.popup_thanks');
let popSend= document.getElementById('popup_send');
popSend.onclick=()=>{
    popup.style.display="none";
    popThanks.style.display="flex";
}
let popupClose1 = document.getElementById('close1');
popupClose1.onclick=()=>{
    popThanks.style.display="none";
    header.style.opacity="1";
}
let btnok = document.getElementById('thanks_button');
btnok.onclick=()=>{
    popThanks.style.display="none";
    header.style.opacity="1";
}

let sitePrice = document.getElementsByClassName('site_price')[0];
let sitePriceThanks = document.getElementsByClassName('site_price_thanks')[0]
sitePriceThanks.style.display='none';

// get boxes
let priceConteiner1 = document.getElementsByClassName('price_container')[0];
let priceConteiner2 = document.getElementsByClassName('price_container')[1];
let priceConteiner3 = document.getElementsByClassName('price_container')[2];
let priceConteiner4 = document.getElementsByClassName('price_container')[3];

// get buttons
let btnPrice = document.getElementById('price');
let btnPrice1 = document.getElementById('price1');
let btnPrice2 = document.getElementById('price2');
let btnPrice3 = document.getElementById('price3');
let thaksBtn = document.getElementById('thaks_button');

// get slides
let slide1 = document.getElementsByClassName('slide')[0];
let slide2 = document.getElementsByClassName('slide')[5];
let slide3 = document.getElementsByClassName('slide')[10];
let slide4 = document.getElementsByClassName('slide')[15];




    
priceConteiner1.style.display=""
slide1.style.backgroundColor="#45C436"
priceConteiner2.style.display="none";
priceConteiner3.style.display="none";
priceConteiner4.style.display="none";
        
btnPrice.onclick=()=>{
    slide1.style.backgroundColor=""
    slide2.style.backgroundColor="#45C436"
    priceConteiner1.style.display="none"
    priceConteiner2.style.display=""
    
}
        
btnPrice1.onclick=()=>{
    slide1.style.backgroundColor=""
    slide2.style.backgroundColor=""
    slide3.style.backgroundColor="#45C436"
    priceConteiner1.style.display="none"
    priceConteiner2.style.display="none"
    priceConteiner3.style.display=""
}
        
btnPrice2.onclick=()=>{
    slide1.style.backgroundColor=""
    slide2.style.backgroundColor=""
    slide3.style.backgroundColor=""
    slide4.style.backgroundColor="#45C436"
    priceConteiner1.style.display="none"
    priceConteiner2.style.display="none"
    priceConteiner3.style.display="none"
    priceConteiner4.style.display=""
}
        
btnPrice3.onclick=()=>{
    sitePrice.style.display="none"
    sitePriceThanks.style.display=""
}


let box = document.querySelectorAll('.box1');
for( let i = 0;i<box.length;i++){
    box[i].onclick=()=>{
        box[i].style.backgroundColor="#45C436";
    }
    function clear(){box[i].style.backgroundColor="";}
    btnPrice.addEventListener('click',clear)
    btnPrice2.addEventListener('click',clear)
    btnPrice3.addEventListener('click',clear)
}

thaksBtn.addEventListener('click',function(){
    sitePriceThanks.style.display="none";  
    sitePrice.style.display=""
    priceConteiner1.style.display=""
    slide1.style.backgroundColor="#45C436"
    priceConteiner2.style.display="none";
    priceConteiner3.style.display="none";
    priceConteiner4.style.display="none";
    
});

//get images for more

let imgBtn = document.getElementById('project_btn')
let img = document.getElementsByClassName('site_project_images_more')[0];
img.style.display="none";
imgBtn.onclick=()=>{
    img.style.display="";
    imgBtn.style.display="none"
}


// registration

let name = document.getElementById('name');
let phone = document.getElementById('phone');
let resultBtn = document.getElementById('result_btn');


resultBtn.addEventListener('click',function(){
    if(isNaN(name.value) && isNaN(phone.value)==false){
        name.style.border="1px solid #45C436"
        name.style.color="#45C436"
        phone.style.border="1px solid #45C436"
        phone.style.color="#45C436"
    }
    else{
        name.style.border="1px solid red"
        name.style.color="red"
        phone.style.border="1px solid red"
        phone.style.color="red"

    }

    name.value="";
    phone.value=""
})


