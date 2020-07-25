const btn = document.querySelector('.btn');
let inputOne = document.querySelector('.inputOne');
let input2 = document.querySelector('.input2');
let input3 = document.querySelector('.input3');
let input4 = document.querySelector('.input4');
let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');
let div3 = document.querySelector('.div3');
let div4 = document.querySelector('.div4');
const btn1 = document.querySelector('.btn1');
const im1 = document.querySelector('.im1');
const im2 = document.querySelector('.im2');
const im3 = document.querySelector('.im3');
const im4 = document.querySelector('.im4');
const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const p3 = document.querySelector('.p3');
const p4 = document.querySelector('.p4');

btn.addEventListener('click',function(){
    btn.style.display = 'none'
    let a = inputOne.value
    let b = input2.value
    let g = input3.value
    let f = input4.value

    inputOne.style.display = 'none'
    input2.style.display = 'none'
    input3.style.display = 'none'
    input4.style.display = 'none'

    div1.style.display = 'inline-block'
    div2.style.display = 'inline-block'
    div3.style.display = 'inline-block'
    div4.style.display = 'inline-block'

    div1.textContent = a + ':'
    div2.textContent = b + ':'
    div3.textContent = g + ':'
    div4.textContent = f + ':'

    im1.style.display = 'block'
    im2.style.display = 'block'
    im3.style.display = 'block'
    im4.style.display = 'block'

    p1.textContent = a
    p2.textContent = b 
    p3.textContent = g 
    p4.textContent = f 

    p1.style.display = 'block'
    p2.style.display = 'block'
    p3.style.display = 'block'
    p4.style.display = 'block'


    btn1.style.display = 'inline-block'
    btn1.addEventListener('click',function(){
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min; 
          }

    let num = getRandomInt(1,5)

    if(num == 1){
        alert('выйграл данный человек :' + a)
        let i = 0
        i++
        div1.textContent = a +':'+ i 

    }else if(num == 2){
        alert('выйграл данный человек :' + b)
        let i = 0
        i++
        div2.textContent = b +':' + i
    }else if(num == 3){
        alert('выйграл данный человек :' + f)
        let i = 0
        i++
        div3.textContent = g +':' + i
    }else if(num == 4){
        alert('выйграл данный человек :' + g)
        let i = 0
        i++
        div4.textContent = f +':'+ i
    }        

    })

})
