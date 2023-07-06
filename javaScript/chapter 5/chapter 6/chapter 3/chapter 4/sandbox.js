function greet(){
    console.log('hello there');
  }
  
  const speak =function() {
    console.log('good day!');
  };
  
  greet();
  speak();
  loud();
  
  function loud(){
    console.log('hellooooooooooooooo');
  }
  
  //arguments & parameters
  const speak1 = function(name4, time1){
    console.log(`good ${time1} ${name4}`);
  };
  
  speak1('mario','morning');
  
  const speak2 = function(name5 = 'lungi', time2 = 'night'){
    console.log(`good ${time2} ${name5}`);
  };
  
  speak2();
  speak2('shaun');
  
  const calcArea = function(radius){
    let area = 3.14 * radius**2;
    return area;
  }
  
  const area = calcArea(5);
  console.log(area);
  
  const calcArea1 = function(radius){
    return 3.14 * radius**2;
  }
  
  const area1 = calcArea(5);
  console.log(area1);
  
  //arrow function
  const calcArea2 = radius1 => {
    return 3.14 * radius1**2;
  }
  
  const area3 = calcArea2(5);
  console.log('area is: ', area);
  
  const calcArea3 = radius2 => 3.14 * radius2**2;
  const area4 = calcArea3(5);
  console.log('area is: ', area4);
  
  const greet1 = () => 'hello, world';
  const result = greet1();
  console.log(result);
  
  const bill = function(products, tax){
    let total = 0;
    for(let i = 0; i < products.length; i++){
      total += products[i] + products[i]*tax;
    }
    return total;
  }
  
  const bill1 = (products, tax) => {
    let total = 0;
    for(let i = 0; i < products.length; i++){
      total += products[i] + products[i]*tax;
    }
    return total;
  
  }
  
  console.log(bill([10,25,30],0.2));
  console.log(bill1([10,25,30],0.2));
  
  //functions
  const greet5 = () => 'hello';
  
  let resultOne = greet5();
  console.log(resultOne);
  
  //method
  name6 = 'sajid';
  let resultTwo = name6.toUpperCase();
  console.log(resultTwo);
  
  //callback func
  const myFunc = (callbackFunc) => {
    let value = 50;
    callbackFunc(value);
  };
  
  myFunc(function(value){
    console.log(value);
  });
  
  let people = ['mario','luigi','hafsa','Iqbal','Shkh']
  
  people.forEach(function(){
    console.log('something');
  });
  
  people.forEach(function(person){
    console.log(person);
  });
  
  people.forEach((person,index) => {
    console.log(index,person);
  });
  
  const logPerson = (person, index) => {
    console.log(`${index} - hello ${person}`);
  }
  
  people.forEach(logPerson);
  
  //get a reference to the 'ul'
  const ul = document.querySelector('.people1');
  const people1 =['mario','luigi','hafsa','Iqbal','Shkh'];
  let html = ``;
  people1.forEach(function(person){
    html += `<li style="color: purple">${person}</li>`;
  });
  
  console.log(html);
  