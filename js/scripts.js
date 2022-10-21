function handleInput(event) {
  event.preventDefault();
  
  const answer1 = document.querySelector("input[name='question1']:checked").value;
  const answer2 = document.querySelector("input[name='question2']:checked").value;
  const answer3 = document.querySelector("input[name='question3']:checked").value;
  const answer4 = document.querySelector("input[name='question4']:checked").value;
  const answer5 = document.querySelector("input[name='question5']:checked").value;
  const answer6 = document.querySelector("input[name='question6']:checked").value;
  const answer7 = document.querySelector("input[name='question7']:checked").value;

  
  console.log(answer1, answer2, answer3, answer4, answer5, answer6, answer7);
}


window.addEventListener("load", function(){
  const form = document.querySelector("form");
  form.addEventListener("submit", handleInput);
})