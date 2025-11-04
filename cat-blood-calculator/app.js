
const form = document.getElementById('calculatorForm');
const result = document.getElementById('result');
form.addEventListener('submit', function(e) {
  e.preventDefault();
  const weight = parseFloat(document.getElementById('weight').value);
  const age = parseFloat(document.getElementById('age').value);
  const hasDisease = document.getElementById('hasDisease').checked;
  let text = '', className = '';
  if(weight<3){text="Not eligible: weight too low."; className='not-eligible';}
  else if(age<1){text="Not eligible: too young."; className='not-eligible';}
  else if(hasDisease){text="Not eligible: disease detected."; className='not-eligible';}
  else{text="Eligible for blood donation!"; className='eligible';}
  result.textContent = text;
  result.className = 'result-card show '+className;
});
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('service-worker.js')
    .then(()=>console.log('Service Worker registered'))
    .catch(err=>console.log('Service Worker registration failed',err));
}
