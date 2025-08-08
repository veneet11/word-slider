const apiUrl = 'https://script.google.com/macros/s/AKfycby8_N2AYqbOSDeLLAq_a2drsHka2ZDcOMM64UEFAyQXiwrLwPqOqn6rPWtNtH1wfuCzTA/exec';

async function loadNew() {
  document.getElementById("word").innerText = "Loading...";
  document.getElementById("meaning").innerText = "";

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();

    document.getElementById("word").innerText = data["Word"] || data["word"] || "No word";
    document.getElementById("meaning").innerText = data["Meaning"] || data["meaning"] || "No meaning";
  } catch (err) {
    document.getElementById("word").innerText = "❌ Error";
    document.getElementById("meaning").innerText = err.message;
  }
}

window.onload = loadNew;
