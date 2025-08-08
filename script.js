const apiBaseUrl = 'https://script.google.com/macros/s/PASTE_YOUR_WEB_APP_URL/exec';

let currentRow = 1;

async function loadRow(rowNumber) {
  const res = await fetch(`${apiBaseUrl}?row=${rowNumber}`);
  const data = await res.json();

  if (data.end) {
    document.getElementById("word").innerText = "✅ Done!";
    document.getElementById("meaning").innerText = "You've reached the end of the list.";
    document.getElementById("nextBtn").disabled = true;
    return;
  }

  document.getElementById("word").innerText = data.word || "No word";
  document.getElementById("meaning").innerText = data.meaning || "No meaning";
}

function loadNext() {
  loadRow(currentRow);
  currentRow++;
}

function reset() {
  currentRow = 1;
  document.getElementById("nextBtn").disabled = false;
  loadNext();
}

window.onload = loadNext;
