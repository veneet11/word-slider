const apiUrl = "https://script.google.com/macros/s/AKfycby8_N2AYqbOSDeLLAq_a2drsHka2ZDcOMM64UEFAyQXiwrLwPqOqn6rPWtNtH1wfuCzTA/exec";

let data = [];
let currentIndex = 0;

async function fetchData() {
  try {
    const res = await fetch(apiUrl);
    data = await res.json();
    if (data.length === 0) {
      document.getElementById("word").innerText = "No data.";
      return;
    }
    showCurrent();
  } catch (err) {
    document.getElementById("word").innerText = "Error loading data.";
    console.error(err);
  }
}

function showCurrent() {
  const row = data[currentIndex];
  document.getElementById("word").innerText = row.word || "—";
  document.getElementById("meaning").innerText = row.meaning || "—";
}

function nextSlide() {
  if (currentIndex < data.length - 1) {
    currentIndex++;
    showCurrent();
  } else {
    document.getElementById("word").innerText = "✅ Done!";
    document.getElementById("meaning").innerText = "You’ve seen all the words.";
  }
}

function reset() {
  currentIndex = 0;
  showCurrent();
}

window.onload = fetchData;
