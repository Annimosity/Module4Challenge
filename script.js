 //add more questions to this array
    const questions = [{

        question:"what is the purpose of css",
    
        answers:["To style your webpage", "To structure your webpage" , "To protect your webpage", "To provide action your webpage"],
    
        correctAnswer:"To style your webpage",
    }];
    var i = 0 
    const QuizContainer = document.getElementById("QuizContainer");
    
    const startButton = document.getElementById("startButton");
    
    startButton.addEventListener("click", function() {
        console.log("click")
        document.getElementById("QuestionHeader").textContent = questions[i].question
        QuizContainer.classList.remove("hidden");var answers = document.querySelectorAll(".answers")
        for (let a = 0; a < answers.length; a++) {  
            console.log(answers[a]);
            console.log(questions[0].answers[a]);
        }
      });
 
