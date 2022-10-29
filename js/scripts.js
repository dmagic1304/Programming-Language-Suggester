function handleInput(event) {
  event.preventDefault();
  
  const name = document.getElementById('input-name').value
  const answer1 = document.querySelector("input[name='question1']:checked").value;
  const answer2 = document.querySelector("input[name='question2']:checked").value;
  const answer3 = document.querySelector("input[name='question3']:checked").value;
  const answer4 = document.querySelector("input[name='question4']:checked").value;
  const answer5 = document.querySelector("input[name='question5']:checked").value;
  const answer6 = document.querySelector("input[name='question6']:checked").value;
  const answer7 = document.querySelector("input[name='question7']:checked").value;
  
  document.getElementById("tab-yes").setAttribute("class", "hidden");
  document.getElementById("tab-no").setAttribute("class", "hidden");

  if (answer1 === 'yes' && answer2 === 'logical') {
    document.getElementById("result").innerText = "C++";
    document.getElementById("result-big").innerText = "C++";
  } else if (answer2 === 'creative' && answer3 === 'web') {
    document.getElementById("result").innerText = "JavaScript";
    document.getElementById("result-big").innerText = "JavaScript";
  } else if (answer3 === 'software' && answer4 === 'windows') {
    document.getElementById("result").innerText = "Python";
    document.getElementById("result-big").innerText = "Python";
  } else if (answer4 === 'macos' && answer5 === 'desktop') {
    document.getElementById("result").innerText = "Ruby";
    document.getElementById("result-big").innerText = "Ruby";
  } else if (answer5 === 'mobile' && answer6 === 'yes') {
    document.getElementById("result").innerText = "C#";
    document.getElementById("result-big").innerText = "C#";
  } else if (answer5 === 'mobile' && answer6 === 'no') {
    document.getElementById("result").innerText = "C++";
    document.getElementById("result-big").innerText = "C++";
  } else if (answer5 === 'desktop' && answer6 === 'no') {
    document.getElementById("result").innerText = "Python";
    document.getElementById("result-big").innerText = "Python";
  } else if (answer5 === 'desktop' && answer6 === 'yes') {
    document.getElementById("result").innerText = "JavaScript";
    document.getElementById("result-big").innerText = "JavaScript";
  }

  if (answer7 === 'tab') {
    document.getElementById("tab-yes").removeAttribute("class");
  } else {
    document.getElementById("tab-no").removeAttribute("class");
  }
  
  document.getElementById("name").innerText = name;
  document.getElementById("result-container").removeAttribute("class");
  document.getElementById("result-container").scrollIntoView({behavior: 'smooth', block: 'center'});
  document.getElementById("submit-button").setAttribute("class", "hidden");
  document.getElementById("reset-button").removeAttribute("class");
  document.getElementById("re-submit-button").removeAttribute("class");
}

function resetBtn() {
  document.getElementById("submit-button").removeAttribute("class");
  document.getElementById("re-submit-button").setAttribute("class", "hidden");
  document.getElementById("result-container").setAttribute("class", "hidden");
  document.getElementById("tab-yes").setAttribute("class", "hidden");
  document.getElementById("tab-no").setAttribute("class", "hidden");
  document.getElementById("form-intro").scrollIntoView();
  document.getElementById("reset-button").setAttribute("class", "hidden");
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  const resetButton = document.getElementById('reset-button');
  form.addEventListener("submit", handleInput);
  resetButton.addEventListener("click", resetBtn);
})