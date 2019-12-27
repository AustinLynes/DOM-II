// Your code goes here
const _html = document.documentElement;

const __nav = document.querySelector('nav');

addEventListener('load', () => {
    alert("Welcome To Fun Bus!")
});

const _header = document.querySelector('header');

const imgs = document.querySelectorAll('img');

for(let i = 0; i < imgs.length;i++){
    imgs[i].addEventListener('dblclick',(event)=>{
        event.target.style.border = '1px solid orange';
    });
}

addEventListener('scroll',(event)=>{
    if(document.documentElement.scrollTop >50){
        _header.style.display = 'none';
    }else{
        _header.style.display = 'flex';
    }
});
addEventListener('resize', () => {
    if (this.window.innerWidth <= 500) {
        __nav.style.display = 'none';
    } else {
        __nav.style.display = 'flex';
    }
});
const _p = document.querySelectorAll('p');
for (let i = 0; i < _p.length; i++) {
    _p[i].addEventListener('keydown', (e) => {
        _p[i].style.color = 'red';
    });
    // _p[i].addEventListener('keyup', (e) => {
    //     _p.style.color = "black";
    // });
}

var btns = document.querySelectorAll('.btn');

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (event) => {
        alert('Sorry We are Under Matinence... please try again later.... ');
    });
    btns[i].addEventListener('mouseover', (event) => {
        event.target.style.background = 'orange';
    });
    btns[i].addEventListener('mouseout', (event) => {
        event.target.style.background = '#17A2B8';
    });
}





console.log(_html);
console.log('--------')
console.log(__nav)
