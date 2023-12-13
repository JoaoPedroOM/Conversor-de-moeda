const btn = document.querySelector("button")
const inputMoney = document.getElementById("input-money")

const areaCurrency = document.getElementById("currencySelect")

const dolar = 4.95
const euro = 5.36
const bitcoin = 205193.07

const convertMoney = () =>{
  
  const realValue = document.getElementById("realValue")
  const convertValue = document.getElementById("convertValue")


  realValue.innerHTML =  new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(inputMoney.value)

  if(areaCurrency.value === "US$ Dólar americano")
  {
    convertValue.innerHTML =  new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(inputMoney.value/ dolar)
  }

  else if(areaCurrency.value === "€ Euro"){
    convertValue.innerHTML =  new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(inputMoney.value/ euro)
  }

  else if (areaCurrency.value === "₿ Bitcoin") {
    const valorEmBitcoin = inputMoney.value / bitcoin;
    convertValue.innerHTML = new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "BTC",
      minimumFractionDigits: 8 
    }).format(valorEmBitcoin);

}
}

const changeCurrency = () => {
  const currencyName = document.getElementById("currency-name")
  const currencyImage = document.getElementById("currency-image")

  if(areaCurrency.value === "€ Euro"){
    currencyName.innerHTML = "Euro"
    currencyImage.src = "./img/euro.svg"
  }
  else if(areaCurrency.value === "₿ Bitcoin"){
    currencyName.innerHTML = "Bitcoin"
    currencyImage.src = "./img/bitcoin.svg"
  }
  else{
    currencyName.innerHTML = "Dólar americano"
    currencyImage.src = "./img/estados-unidos.svg"
  }
  
  convertMoney()
}

btn.addEventListener("click", convertMoney)
areaCurrency.addEventListener("change", changeCurrency)