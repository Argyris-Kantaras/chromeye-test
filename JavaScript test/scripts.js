///////////////////////////////////////////////////
//////primeDividers (n) {} functionality /////////

const searchNumber = document.querySelector(".search-number");
const divideBtn = document.querySelector(".divide-btn");
const dividersResults = document.querySelector(".dividers-results");

const state = {
  finalPrimeDividers: [],
};

const singleDividers = [2, 3, 4, 5, 6, 7, 8, 9];
const primeDividers = function (n) {
  const filtered = [];
  //The actual function (closure) that does the calculation

  const findDividers = function (numbers) {
    numbers.filter((num) => {
      if (Number.isInteger(n / num)) {
        filtered.push(n / num);
      }
    });
    if (filtered.length === 0 || (filtered.includes(1) && Number(n))) {
      state.finalPrimeDividers.push(n);
    }

    for (let i = 0; i <= filtered.length; i++) {
      if (!filtered.includes(1)) {
        numbers.map((num) => {
          if (
            !filtered.includes(filtered[i] / num) &&
            Number.isInteger(filtered[i] / num)
          ) {
            filtered.push(filtered[i] / num);
          }
        });
      }
    }

    //Clearing array from number 1 and ready to use
    filtered.filter((num) => {
      if (num > 1) state.finalPrimeDividers.push(num);
    });
  };

  findDividers(singleDividers);
};

const displayResults = function (results) {
  const markup = `<p class ='result-content'>${results}</p>`;
  dividersResults.insertAdjacentHTML("beforeend", markup);
};

const clickHandler = function (e) {
  e.preventDefault();
  //Clear previous values
  dividersResults.textContent = "";
  state.finalPrimeDividers = [];

  primeDividers(searchNumber.value);
  displayResults(
    state.finalPrimeDividers.length !== 0
      ? state.finalPrimeDividers
      : "No Result, pick another number"
  );
};

divideBtn.addEventListener("click", clickHandler);
/////////////////////////////////////////////End///////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////
//////validateBrackets(str) {} functionality///////

const text = document.querySelector("textarea");
const result = document.querySelector(".result");
const submitBtn = document.querySelector(".submit-btn");

function validateBrackets(str) {
  const bracketsOpeningOrder = [];
  const bracketsClosingOrder = [];
  const rightOrder = ["{", "[", "("];

  if (
    str.split("").includes("{" || "[" || "(") ||
    str.split("").includes("[" || "(") ||
    str.split("").includes("(")
  ) {
    str.split("").filter((letter, i) => {
      if (letter === "{" || letter === "[" || letter === "(") {
        bracketsOpeningOrder.push(letter);
      }
      if (letter === "}" || letter === "]" || letter === ")") {
        bracketsClosingOrder.push(letter);
      }
    });

    if (
      (bracketsOpeningOrder[bracketsOpeningOrder.length - 1] === "(" &&
        bracketsOpeningOrder[bracketsOpeningOrder.length - 2] === "[") ||
      (bracketsOpeningOrder[bracketsOpeningOrder.length - 1] === "[" &&
        bracketsOpeningOrder[bracketsOpeningOrder.length - 2] === "{")
    ) {
      result.textContent = true;
    } else {
      result.textContent = false;
      return;
    }

    for (let i = 0; i <= str.length; i++) {
      //Check if brackets open and close correctly
      if (
        (bracketsOpeningOrder[bracketsOpeningOrder.length - 1] === "{" &&
          bracketsClosingOrder[0] === "}") ||
        (bracketsOpeningOrder[bracketsOpeningOrder.length - 1] === "[" &&
          bracketsClosingOrder[0] === "]") ||
        (bracketsOpeningOrder[bracketsOpeningOrder.length - 1] === "(" &&
          bracketsClosingOrder[0] === ")")
      ) {
        bracketsOpeningOrder.pop();
        bracketsClosingOrder.shift();
      }
    }

    console.log(bracketsOpeningOrder);
  }
  if (bracketsOpeningOrder.length === 0 && bracketsClosingOrder.length === 0) {
    result.textContent = true;
  } else {
    result.textContent = false;
  }
}

submitBtn.addEventListener("click", (e) => {
  result.textContent = "";
  e.preventDefault();
  validateBrackets(text.value);
});
