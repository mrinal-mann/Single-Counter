var countInterval;

const startCounter = () => {
  var number = parseInt(document.getElementById("number").value);

  if (isNaN(number)) {
    alert("Please enter a number");
    clearInterval(countInterval);
    return;
  }
  if (number < 1 || number > 9) {
    alert("Range out of bounds");
    clearInterval(countInterval);
    return;
  }
  var currentNo = document.querySelector(".counter .current");
  var nextNo = document.querySelector(".counter .next");
  var count = 0;
  //If user click the button again it will reset the number
  resetNumbers(currentNo, nextNo);

  //Clear the previous interval
  clearInterval(countInterval);

  countInterval = setInterval(() => {
    if (count == number) {
      clearInterval(countInterval);
      alert("Counter Has Stopped");
      return;
    }
    increaseCount(currentNo, nextNo);
    count++;
  }, 1000);
};

const resetNumbers = (currentNo, nextNo, end) => {
  currentNo.innerText = 0;
  nextNo.innerText = 1;
};

const increaseCount = (currentNo, nextNo) => {
  nextNo.classList.add("animate");
  setTimeout(() => {
    currentNo.innerText = nextNo.innerText;
    nextNo.classList.remove("animate");
    nextNo.innerText = parseInt(nextNo.innerText) + 1;
  }, 500);
};
