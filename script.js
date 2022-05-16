let primaryColor = document.querySelector('#primary-color');
let secondaryColor = document.querySelector('#secondary-color');
let card = document.querySelector('.card');
let backFace = document.querySelector('.back-face');

primaryColor.addEventListener('click',()=>{
    card.classList.add('card-hover');
    document.querySelector('.show-primary').style.display = 'flex';
    document.querySelector('.show-secondary').style.display = 'none';
})

secondaryColor.addEventListener('click',()=>{
    card.classList.add('card-hover');
    document.querySelector('.show-secondary').style.display = 'flex';
    document.querySelector('.show-primary').style.display = 'none';
});

backFace.addEventListener('click',()=>{
    card.classList.remove('card-hover');
});