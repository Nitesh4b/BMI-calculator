const body = document.querySelector("body")
const header = document.createElement("header")
const main = document.createElement("main")
const footer = document.createElement("footer")

body.appendChild(header)
body.appendChild(main)
body.appendChild(footer)

//header
const headerTitle = document.createElement("div");
headerTitle.classList.add("headerTitle");
headerTitle.textContent = "BMI CALCULATOR";
header.appendChild(headerTitle);

//main
const form = document.createElement("form");

function createInputField(id, labelText) {
  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.textContent = labelText;
  label.classList.add("label");

  const input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("id", id);
  input.classList.add("input");

  const fieldWrapper = document.createElement("div");
  fieldWrapper.classList.add("fieldWrapper");
  fieldWrapper.appendChild(label);
  fieldWrapper.appendChild(input);

  return fieldWrapper; //Instaed of appending here to make reusable
}

form.appendChild(createInputField("height", "Height in CM:"));
form.appendChild(createInputField("weight", "Weight in KG:"));

// Create calculate button
const button = document.createElement("input");
button.setAttribute("type", "submit");
button.setAttribute("id", "btn");
button.setAttribute("value", "Calculate");
form.appendChild(button);

const formContainer = document.createElement("div");
formContainer.classList.add("formContainer");
formContainer.appendChild(form);
main.appendChild(formContainer);

const result = document.createElement("div")
result.classList.add("result")
main.appendChild(result)

//Logic Portion
//wehave to get height and weight after form is submit

form.addEventListener("submit", (e) => {  
  e.preventDefault() //To stop default actions after submit

  const height = parseFloat(document.querySelector("#height").value);
  const weight = parseFloat(document.querySelector("#weight").value);
  const result =document.querySelector(".result");

  if(height<=0 || height==""|| isNaN(height)){
    result.textContent="Enter valid Height"
  }
  else if(weight<=0 || weight==""|| isNaN(weight)){
    result.textContent="Enter valid Weight"
  }
  else{
    const bmi = (weight / ((height / 100) ** 2)).toFixed(2);  // height in cm to m
    if(bmi<=18.6){
      result.textContent=`BMI = ${bmi} --------- Under weight`
    }else if(bmi<=24.9){
      result.textContent=`BMI = ${bmi} --------- Normal weight`
    }
    else{
      result.textContent=`BMI = ${bmi} --------- Over weight`
    }
  }

  const footerContainer = document.querySelector(".footerContainer")
  footerContainer.classList.add("footerAfterSubmit");
});

// Footer
const footerContainer = document.createElement("section");
footerContainer.classList.add("footerContainer");

const footerTitle = document.createElement("div");
footerTitle.classList.add("footerTitle");
footerTitle.textContent = "BMI WEIGHT GUIDE";
footerContainer.appendChild(footerTitle);

const footerContent = document.createElement("div");
footerContent.classList.add("footerContent");
footerContainer.appendChild(footerContent);

function addFooterLine(text) {
  const paragraph = document.createElement("p");
  paragraph.classList.add("footerPara");
  paragraph.textContent = text;
  footerContent.appendChild(paragraph);
}

const paraLines = [
  "Under weight: Less than 18.6",
  "Normal weight: 18.6 - 24.9",
  "Over weight: More than 24.9"
];

paraLines.forEach(addFooterLine);

footer.appendChild(footerContainer);
