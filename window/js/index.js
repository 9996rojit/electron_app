console.log("Hello world")
let value = 0

const addButton = document.getElementById('add-button');
const textValue = document.getElementById('text-value')
textValue.innerHTML = value
addButton.addEventListener('click', function () {
  console.log("button Clicked ")
  value += 1
  textValue.innerHTML = value
})
const Namevalue = document.getElementById('name');
let Username
Namevalue.addEventListener('change', (e) => {
  Username = e.target.value
  console.log(Username)
  alert("The name that you entered is " + Username)
})

