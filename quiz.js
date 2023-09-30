const qData =[
    {
        question:"How many legs does a spider have?",
        options : ["8","6","4","10"],
        answer:"8"
    },  {
        question:"What is the color of an emerald?",
        options : ["yellow","green","blue","white"],
        answer:"white"
    },   {
        question:"How many pairs of wings do bees have?",
        options : ["three","one","two","four"],
        answer:"two"
    }, {
        question:"How many days are in a year?",
        options : ["362","364","360","365"],
        answer:"365"
    }, {
        question:"What kind of animal was Abu in Aladdin?",
        options : ["monkey","parrot","genie","cat"],
        answer:"monkey"
    }]

//let questionUpdate=document.querySelector('#question');
const question = document.getElementById("ques");
const opt = document.getElementById("opt");
let currentquestionIndex=0;
let TotalQuestionIndex=4;
let score=0;
let userAnswer='';
//updateQuestion();

function loadQues() {


	question.textContent = qData[currentquestionIndex].question; 
	opt.innerHTML = ""

	for (let i = 0; i < qData[currentquestionIndex].options.length; i++) {
		const choicesdiv = document.createElement("div");
		const choice = document.createElement("input");
		const choiceLabel = document.createElement("label");

		choice.type = "radio";
		choice.name = "answer";
		choice.value = i;

		choiceLabel.textContent = qData[currentquestionIndex].options[i];

		choicesdiv.appendChild(choice);
		choicesdiv.appendChild(choiceLabel);
		opt.appendChild(choicesdiv);
	}
    progress();
    next_submit();
    
}

loadQues();

 

 function progress(){
    document.getElementById('progress').innerText=("Question "+ (currentquestionIndex+1) + " of " + (TotalQuestionIndex+1));
 }
 function next_submit(){
    if(currentquestionIndex===TotalQuestionIndex)
        document.getElementById('next').innerText="Finish Test";
 }

 

 function nextQuestion() {
    
	if (currentquestionIndex < qData.length - 1) {
		currentquestionIndex++;
		loadQues();
	} else {
		document.getElementById("opt").remove();
		resultupdate();
	}
}

function checkAnswer() {
	const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);   

	if (qData[currentquestionIndex].options[selectedAns] == qData[currentquestionIndex].answer) {
		score++;
		console.log("Correct");
		nextQuestion();
	} else {
		nextQuestion();
	}
}

function resultupdate(){
    question.innerText="Your Quiz Evaluation:"
    document.getElementById("question_options").innerHTML=("You Score: "+ score);
    document.getElementById('next').remove();
    document.getElementById('progress').remove();

}

document.getElementById('next').addEventListener('click',checkAnswer);