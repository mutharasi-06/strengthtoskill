// script.js

function submitQuiz() {
  const userId = "123"; // replace with logged-in user ID

  // Collect quiz results from your existing quiz structure
  // Example: each question has: { domain, score, maxScore, weight }
  const quizResults = [];

  // Assuming your quiz questions have class 'quiz-question' and data attributes
  const questions = document.querySelectorAll(".quiz-question");
  questions.forEach(q => {
    const domain = q.dataset.domain; // e.g., "JavaScript"
    const score = parseInt(q.querySelector("input:checked").value); // selected option score
    const maxScore = parseInt(q.dataset.max); // max score for the question
    const weight = parseInt(q.dataset.weight); // weight for difficulty

    quizResults.push({ domain, score, maxScore, weight });
  });

  // Send results to backend
  fetch("http://localhost:5000/quiz/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userId, quizResults })
  })
  .then(res => res.json())
  .then(data => {
    console.log("Skill levels:", data.domainSkills);
    showSkillLevels(data.domainSkills);
  })
  .catch(err => console.error(err));
}

// Display skill levels on the page
function showSkillLevels(domainSkills) {
  const resultDiv = document.getElementById("quiz-results");
  resultDiv.innerHTML = ""; // clear previous results

  for (let domain in domainSkills) {
    const skill = domainSkills[domain];
    const div = document.createElement("div");
    div.innerHTML = `<strong>${domain}:</strong> ${skill.level} (${skill.percentage}%)`;
    resultDiv.appendChild(div);
  }
}