/*show the nav in movil*/

addEventListener('DOMContentLoaded',() =>{
    const btn__menu = document.querySelector('.btn__menu');
        if(btn__menu){
            btn__menu.addEventListener('click',()=>{
                const nav__menu = document.querySelector('.nav__menu');
                    nav__menu.classList.toggle('show');
            })
        }
})

/* esto es para el commit*/