const connectBtn = document.getElementById("connectBtn");
const walletInfo = document.getElementById("walletInfo");
const addressSpan = document.getElementById("address");
const showBalanceBtn = document.getElementById("showBalanceBtn");
const balanceDisplay = document.getElementById("balanceDisplay");
const balanceSpan = document.getElementById("balance");

connectBtn.addEventListener("click", () => {
  const fakeAddress = "ALGO-" + Math.random().toString(36).substring(2, 10).toUpperCase();
  addressSpan.textContent = fakeAddress;
  walletInfo.classList.remove("hidden");
  balanceDisplay.classList.add("hidden");
});

showBalanceBtn.addEventListener("click", () => {
  const fakeBalance = (Math.random() * 15 + 0.1).toFixed(4);
  balanceSpan.textContent = fakeBalance;
  balanceDisplay.classList.remove("hidden");
});
