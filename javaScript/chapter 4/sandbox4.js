// const para = document.querySelector('body > h1')
// console.log(para);

/*const paras = document.querySelectorAll('p');
const errors = document.querySelectorAll('.error')
//paras.forEach(para => {
  //  console.log(para)
//});

console.log(errors);*/

// get an element by ID
//const title = document.getElementById('page-title');
//console.log(title);

//get elements by class name
/*const errors = document.getElementsByClassName('errors');
console.log(errors);
console.log(errors[0]);*/

//get element by tagName

/*const paras = document.getElementsByTagName('p');
console.log(paras);
console.log(paras[1]);*/
//const para= document.querySelector('p');
//console.log(para.innerText);
//para.innerText = 'ninjas are awosome';
/*const paras = document.querySelectorAll('p');
paras.forEach(para =>{
  console.log(para.innerText);
  para.innerText += 'new text';
// });*/
//const content = document.querySelector('.content');
 //console.log(content.innerHTML);
 //content.innerHTML += '<h2> THIS IS NEW H2</h2>';

 /*const link = document.querySelector('a');
 console.log(link.getAttribute('href'));
 link.setAttribute('href','https://www.thenetninja.co.uk');
 link.innerText = 'TheNet Ninja Website';
 const mssg = document.querySelector('p');
 console.log(mssg.getAttribute('class'));
 mssg.setAttribute('class', 'sucess')
 mssg.setAttribute('style', 'color:green;')*/

 //const title = document.querySelector('h1');
 //title.setAttribute('style', 'margin:50px;');
//console.log(title.(property) ElementCSSInlineStyle.style:CSSStyleDecleration;
//console.log(title.style);
//console.log(title.style.color);
//title.style.margin = '50px';

/*const content = document.querySelector('p');

console.log(content.classList);
content.classList.add('error');
content.classList.remove('error')*/

/*const paras = document.querySelectorAll('p');

paras.forEach(p => {
  console.log(p.textContent)
});*/

const paras =document.querySelectorAll('p');
paras.forEach(p=> {
  if(p.textContent.includes('error')){
  p.classList.add('error')
  }
  if(p.textContent.includes('success')){
    p.classList.add('success')
}
});
 const title = document.querySelector('.title');
 title.classList.toggle('test');
 title.classList.toggle('test');
  
