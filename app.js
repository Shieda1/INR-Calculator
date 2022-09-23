// https://www.omnicalculator.com/health/inr

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const INRRadio = document.getElementById('INRRadio');
const patientsPTRadio = document.getElementById('patientsPTRadio');
const controlPTRadio = document.getElementById('controlPTRadio');
const ISIRadio = document.getElementById('ISIRadio');

let INR;
let patientsPT = v1;
let controlPT = v2;
let ISI = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

INRRadio.addEventListener('click', function() {
  variable1.textContent = 'Patient\'s PT';
  variable2.textContent = 'Control PT';
  variable3.textContent = 'ISI';
  patientsPT = v1;
  controlPT = v2;
  ISI = v3;
  result.textContent = '';
});

patientsPTRadio.addEventListener('click', function() {
  variable1.textContent = 'INR';
  variable2.textContent = 'Control PT';
  variable3.textContent = 'ISI';
  INR = v1;
  controlPT = v2;
  ISI = v3;
  result.textContent = '';
});

controlPTRadio.addEventListener('click', function() {
  variable1.textContent = 'INR';
  variable2.textContent = 'Patient\'s PT';
  variable3.textContent = 'ISI';
  INR = v1;
  patientsPT = v2;
  ISI = v3;
  result.textContent = '';
});

ISIRadio.addEventListener('click', function() {
  variable1.textContent = 'INR';
  variable2.textContent = 'Patient\'s PT';
  variable3.textContent = 'Control PT';
  INR = v1;
  patientsPT = v2;
  controlPT = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(INRRadio.checked)
    result.textContent = `INR = ${computeINR().toFixed(2)}`;

  else if(patientsPTRadio.checked)
    result.textContent = `Patient's PT = ${computepatientsPT().toFixed(2)}`;

  else if(controlPTRadio.checked)
    result.textContent = `Control PT = ${computecontrolPT().toFixed(2)}`;

  else if(ISIRadio.checked)
    result.textContent = `ISI = ${computeISI().toFixed(2)}`;
})

// calculation

// INR = (Patient's PT / Control PT) ^ ISI

function computeINR() {
  return Math.pow((Number(patientsPT.value) / Number(controlPT.value)), Number(ISI.value));
}

function computepatientsPT() {
  return Math.pow(Number(INR.value), 1/Number(ISI.value)) * Number(controlPT.value);
}

function computecontrolPT() {
  return Number(patientsPT.value) / Math.pow(Number(INR.value), 1/Number(ISI.value));
}

function computeISI() {
  return (Number(patientsPT.value) - Number(controlPT.value)) / Number(INR.value);
}