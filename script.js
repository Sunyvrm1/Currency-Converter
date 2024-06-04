
fetch(
  "https://api.currencybeacon.com/v1/currencies?api_key=u2VEikC2wTnK5EaFBZQCFyotOk5t8QNk"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    data.response.map((suny) => {
      const currencyFrom = document.getElementById("currencyFrom");
      const currencyTo = document.getElementById("currencyTo");
      currencyFrom.insertAdjacentHTML(
        "beforeend",
        `
          <option value="${suny.short_code}">${suny.short_code} - ${suny.name}</option>
          `
      );
      currencyTo.insertAdjacentHTML(
        "beforeend",
        `
          <option value="${suny.short_code}">${suny.short_code} - ${suny.name}</option>
          `
      );
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const currencyFrom = document.getElementById("currencyFrom").value;
      const currencyTo = document.getElementById("currencyTo").value;
      const CurrencyInput = document.getElementById("CurrencyInput").value;
      console.log(currencyFrom);
      console.log(currencyTo);
      console.log(CurrencyInput);
      fetch(
        `https://api.currencybeacon.com/v1/convert?api_key=u2VEikC2wTnK5EaFBZQCFyotOk5t8QNk&from=${currencyFrom}&to=${currencyTo}&amount=${CurrencyInput}`
      )
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const convertCurrency = document.getElementById("convertCurrency");
          convertCurrency.innerHTML = `
          ${CurrencyInput} ${data.from} = <br>
          ${data.value} ${data.to}`;
        });
    });

    const currencySwap = document.querySelector(".currencySwap");
    currencySwap.addEventListener("click", () => {
      let a;
      const currencyFrom = document.getElementById("currencyFrom").value;
      const currencyTo = document.getElementById("currencyTo").value;
      currencyFrom == a;
      currencyTo == currencyFrom;
      a == currencyTo;
      console.log(currencyFrom, "currencyFrom");
      console.log(currencyTo, "currencyTo");
    })

  });

// API links
