function handleInput(event) {
  event.preventDefault();
  
  const answer1 = document.querySelector("input[name='question1']:checked").value;
  const answer2 = document.querySelector("input[name='question2']:checked").value;
  const answer3 = document.querySelector("input[name='question3']:checked").value;
  const answer4 = document.querySelector("input[name='question4']:checked").value;
  const answer5 = document.querySelector("input[name='question5']:checked").value;
  const answer6 = document.querySelector("input[name='question6']:checked").value;
  const answer7 = document.querySelector("input[name='question7']:checked").value;

  if (answer1 === 'yes' && answer2 === 'logical') {
    document.getElementById("result").innerText = "C++";
  } else if (answer2 === 'creative' && answer3 === 'web') {
    document.getElementById("result").innerText = "JavaScript";
  } else if (answer3 === 'software' && answer4 === 'windows') {
    document.getElementById("result").innerText = "Python";
  } else if (answer4 === 'macos' && answer5 === 'desktop') {
    document.getElementById("result").innerText = "Ruby";
  } else if (answer5 === 'mobile' && answer6 === 'yes') {
    document.getElementById("result").innerText = "C#";
  } else if (answer5 === 'mobile' && answer6 === 'no') {
    document.getElementById("result").innerText = "C++";
  } else if (answer5 === 'desktop' && answer6 === 'no') {
    document.getElementById("result").innerText = "Python";
  } else if (answer5 === 'desktop' && answer6 === 'yes') {
    document.getElementById("result").innerText = "JavaScript";
  }

  if (answer7 === 'tab') {
    //show awesome paragraph
  } else {
    //show not so awesome paragraph
  }
  
  document.getElementById("result-container").removeAttribute("class");
}


window.addEventListener("load", function(){
  const form = document.querySelector("form");
  form.addEventListener("submit", handleInput);
})