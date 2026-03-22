async function submitQuiz() {

const data = {
userId: "user1",
quizResults: [
{ domain: "JavaScript", score: 8, maxScore: 10, weight: 1 },
{ domain: "Python", score: 6, maxScore: 10, weight: 1 }
]
};

const res = await fetch("http://localhost:5000/quiz/submit", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify(data)
});

const result = await res.json();

document.getElementById("result").innerHTML =
`JavaScript: ${result.domainSkills.JavaScript.level} <br>
Python: ${result.domainSkills.Python.level}`;

}