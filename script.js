const defaultRates=[
{name:"Boiler Kata Hua",price:250,icon:"🍗"},
{name:"Khada Boiler",price:160,icon:"🐔"},
{name:"Cockrel",price:250,icon:"🐓"},
{name:"Layer",price:200,icon:"🐔"}];

function getRates(){try{const x=JSON.parse(localStorage.getItem("tajRates"));return Array.isArray(x)&&x.length===4?x:defaultRates}catch{return defaultRates}}
function renderRates(){document.getElementById("ratesGrid").innerHTML=getRates().map(x=>`<article class="rate"><div class="icon">${x.icon}</div><h3>${x.name}</h3><div class="price">₹${Number(x.price).toLocaleString("en-IN")} <span class="unit">/ kg</span></div></article>`).join("")}
function status(){const h=new Date().getHours(),open=h>=8&&h<19;document.getElementById("openText").textContent=open?"OPEN NOW":"CLOSED NOW";document.getElementById("openDot").style.background=open?"#34a853":"#a5231d"}
document.getElementById("today").textContent=new Date().toLocaleDateString("en-IN",{day:"numeric",month:"short",year:"numeric"});
document.getElementById("year").textContent=new Date().getFullYear();renderRates();status();
