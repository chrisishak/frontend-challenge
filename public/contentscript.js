console.log('Contentscript injected');

let element = document.createElement('div');
// const injectedText = document.createTextNode(`Extension-like element`);

// element.appendChild(injectedText);

const parentElement = document.querySelector(
  '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > div:nth-child(2) > h2',
);
parentElement.appendChild(element);


const parentElement_btn = document.querySelector(
    '#root > div > div > div.makeStyles-mainPanel-3 > div.makeStyles-scrollbars-5 > div:nth-child(1) > div > section > h1')

let button = document.createElement('button');
button.setAttribute("id", "btb-btn");
button.style.cssText="display:inline-flex; position:relative; top:10%; width:30%; float:right; margin-right:10%; background-color:#0c2169"
let div = document.createElement('div');
div.style.cssText="float:left;margin:3%";
div.classList.add('makeStyles-logo-11');

let value = document.getElementsByClassName('makeStyles-btb-27');
value = value[0].innerHTML

let btn_text = document.createElement('span');
btn_text.innerText = `Budget-to-beat: `+ value;
btn_text.style.cssText="margin:3%; color: white;font-size:clamp(1.5rem, 1vw, 1rem); text-margin:5%;";

button.appendChild(div)
button.appendChild(btn_text)
button.onmouseover = function() {mouseOver()};
button.onmouseout =  function() {mouseOut()};
  function mouseOver() {
    button.style.backgroundColor = "#6c80c4";
    tooltip.style.display = 'block'
  }
  function mouseOut() {
    button.style.backgroundColor = "#0c2169"
    tooltip.style.display = 'none'
  }
  
parentElement_btn.appendChild(button);

let tooltip = document.createElement('div');
tooltip.style.cssText ='display:none; clear:both; float:right; margin-right:15%; background: #6c80c4; width: 25%; font-size: 16px; color:black; text-align: center';
tooltip.innerText = "Something about climate change. consectetur adipiscing elit."

parentElement_btn.appendChild(tooltip);