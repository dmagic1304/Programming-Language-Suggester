function handleInput(event) {
  event.preventDefault();
  
  const answer1 = document.querySelector("input[name='question1']:checked").value;
  const answer2 = document.querySelector("input[name='question2']:checked").value;
  const answer3 = document.querySelector("input[name='question3']:checked").value;
  const answer4 = document.querySelector("input[name='question4']:checked").value;
  const answer5 = document.querySelector("input[name='question5']:checked").value;
  const answer6 = document.querySelector("input[name='question6']:checked").value;
  const answer7 = document.querySelector("input[name='question7']:checked").value;

  if (answer1 === 'yes') {
    document.getElementById("result").innerText = "Ruby";
  }
  
  document.getElementById("result-container").removeAttribute("class");
}


window.addEventListener("load", function(){
  const form = document.querySelector("form");
  form.addEventListener("submit", handleInput);
})