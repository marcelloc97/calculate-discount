const inputs = document.querySelectorAll("input");
const resultDOM = document.getElementById("result-log");

console.log(inputs);
function calculate(type) {
  const fields = {
    p1: 0,
    p2: 0,
  };
  let result;

  switch (type) {
    case "price":
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name == "p1") fields.p1 = Number(inputs[i].value);
        if (inputs[i].name == "p2") fields.p2 = Number(inputs[i].value);
      }

      result = fields.p1 - fields.p2;
      break;

    case "quantity":
      for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].name == "p1") fields.p1 = Number(inputs[i].value);
        if (inputs[i].name == "p2") fields.p2 = Number(inputs[i].value);
        if (inputs[i].name == "q1") fields.q1 = Number(inputs[i].value);
        if (inputs[i].name == "q2") fields.q2 = Number(inputs[i].value);
      }

      result = fields.p1 * fields.q1 - fields.p2 * fields.q2;
      break;
  }
  const li = document.createElement("li");
  li.innerHTML = result;
  resultDOM.appendChild(li);
}

function switchMode(mode) {
  if (mode == "price") {
  }
}
