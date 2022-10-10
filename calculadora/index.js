const cleanScreen = () => {
    let textInput = document.querySelector(".text-input");
    textInput = textInput.innerText = "";
}

const equal = () => {
    const textInput = document.querySelector(".text-input");
    const newResult = textInput.innerText;
    textInput.outerHTML = `<p class ='text-input'>${eval(newResult)}</p>`;
}

const negative = () => {
    const textInput = document.querySelector(".text-input");
    const newResult = (textInput.innerText)*(-1);
    textInput.outerHTML = `<p class ='text-input'>${eval(newResult)}</p>`;
}

const addEventListeners = () => {
    const cleanButton = document.querySelector(".borrar")
    cleanButton.addEventListener("click", cleanScreen);

    const equalButton = document.querySelector(".igual")
    equalButton.addEventListener("click", equal);

    const negativeButton = document.querySelector(".negativo")
    negativeButton.addEventListener("click", negative);

    const numButtons = document.querySelectorAll(".num");
    numButtons.forEach((numbutton) => {
    numbutton.addEventListener("click", (event) => {
      document.querySelector(".text-input").innerText += event.target.innerText;
    });
  });

    const operadorButtons = document.querySelectorAll(".operador");
    operadorButtons.forEach((operadorButton) => {
    operadorButton.addEventListener("click", (event) => {
      document.querySelector(".text-input").innerText += event.target.innerText;
    });
    })

    const accButtons = document.querySelectorAll(".acc");
    accButtons.forEach((accButton) => {
    accButton.addEventListener("click", (event) => {
      document.querySelector(".text-input").innerText += event.target.innerText;
    });
  });
};

const calcular = () => {
    addEventListeners();
  };

calcular();