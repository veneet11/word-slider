const apiBaseUrl = 'https://script.google.com/macros/s/PASTE_YOUR_WEB_APP_URL/exec';

let currentRow = 1;

async function loadNext() {
  document.getElementById("word").innerText = "Loading...";
  document.getElementById("meaning").innerText = "";

  const res = await fetch(`${apiBaseUrl}?row=${currentRow}`);
  const data = await res.json();

  if (data.end) {
    document.getElementById("word").innerText = "✅ Done!";
    document.getElementById("meaning").innerText = "You've reached the end of the list.";
    document.querySelector("button").disabled = true;
    return;
  }

  document.getElementById("word").innerText = data.word || "No word";
  document.getElementById("meaning").innerText = data.meaning || "No meaning";

  currentRow++; // Move to next for next button click
}

window.onload = loadNext;
