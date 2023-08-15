document.getElementById("btn-deposit").addEventListener("click", function () {
  let depositField = document.getElementById("user-deposit");
  let depositAmount = depositField.value;
  depositField.value = "";
  let dCount = document.getElementById("deposit-total").innerText;
  if (parseFloat(depositAmount) == 0 || isNaN(parseFloat(depositAmount))) {
    alert("Enter a valid amount");
    return;
  }
  document.getElementById("deposit-total").innerText =
    parseFloat(dCount) + parseFloat(depositAmount);
  let balance = document.getElementById("balance").innerText;
  document.getElementById("balance").innerText =
    parseFloat(balance) + parseFloat(depositAmount);
});

document.getElementById("btn-withdraw").addEventListener("click", function () {
  let balance = document.getElementById("balance").innerText;
  let withdrawField = document.getElementById("user-withdraw");
  let withdrawAmount = withdrawField.value;
  withdrawField.value = "";
  let wCount = document.getElementById("withdraw-total").innerText;
  if (parseFloat(withdrawAmount) == 0 || isNaN(parseFloat(withdrawAmount))) {
    alert("Enter a valid amount");
    return;
  }
  else if (parseFloat(withdrawAmount) > parseFloat(balance)) {
    alert("Insufficient balance");
    return;
  }
  document.getElementById("withdraw-total").innerText =
    parseFloat(wCount) + parseFloat(withdrawAmount);

  document.getElementById("balance").innerText =
    parseFloat(balance) - parseFloat(withdrawAmount);
});
