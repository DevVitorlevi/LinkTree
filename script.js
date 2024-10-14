const switch_ = document.querySelector('.switch')
const html=document.documentElement
let img=document.querySelector('.profile img')

switch_.addEventListener('click',()=>{
    html.classList.toggle('ligth')
    
    if(html.classList.contains('ligth')){
        img.src='img/avatar-light.png'
    }else{
        img.src='./img/avatar.png'
    }
})





