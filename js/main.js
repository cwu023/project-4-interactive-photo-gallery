//Get input element
let filter = document.getElementById('filter');
//Add events to the input element
filter.addEventListener('keyup', function(){
  //Get values from the input element
  let value = filter.value.toLowerCase();
  console.log(value);
});


let caption = document.getElementsByTagName('a')[0].getAttribute("data-title").toLowerCase();


for (let i = 0; i < caption.length; i++) {

  console.log(caption[i]);
}
