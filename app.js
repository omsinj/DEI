// Simulated data for trivia questions and video content
let triviaQuestions = {
    bold: [
        { question: "Who is the current CEO of BOLD?", options: ["John Doe", "Jane Smith", "Michael Johnson", "Sarah Williams"], answer: "Jane Smith" },
        { question: "When was BOLD founded?", options: ["2005", "2010", "2015", "2020"], answer: "2010" },
    ],
    vets: [
        { question: "When was VETS BRG established?", options: ["2000", "2005", "2010", "2015"], answer: "2010" },
        { question: "What does VETS BRG stand for?", options: ["Veterans Bureau Resource Group", "Veterans Business Resource Group", "Veterans Building Resource Group", "Veterans Benefits Resource Group"], answer: "Veterans Business Resource Group" },
    ],
    aspire: [
        { question: "What is the goal of the ASPIRE program?", options: ["Mentoring women in leadership roles", "Advancing LGBTQ+ rights", "Promoting diversity in tech", "Supporting military veterans"], answer: "Mentoring women in leadership roles" },
        { question: "Who founded the ASPIRE initiative?", options: ["John Adams", "Mary Johnson", "Emily Watson", "David Brown"], answer: "Emily Watson" },
    ],
    women: [
        { question: "What percentage of women are in tech roles worldwide?", options: ["20%", "30%", "40%", "50%"], answer: "20%" },
        { question: "Which tech company has the highest percentage of women in leadership roles?", options: ["Google", "Facebook", "Amazon", "Microsoft"], answer: "Facebook" },
    ],
    pride: [
        { question: "When is Pride Month celebrated?", options: ["June", "July", "August", "September"], answer: "June" },
        { question: "Which city hosted the first Pride parade?", options: ["San Francisco", "New York City", "Los Angeles", "Chicago"], answer: "San Francisco" },
    ]
};

let videoSources = {
    beginner: "videos/beginner_level.mp4",
    intermediate: "videos/intermediate_level.mp4",
    expert: "videos/expert_level.mp4"
};

let quizQuestions = {
    beginner: [
        { question: "What continent is known as the 'cradle of civilization'?", options: ["Africa", "Asia", "Europe", "South America"], answer: "Africa" },
        { question: "Which country is known for its vibrant Bollywood film industry?", options: ["India", "China", "Japan", "South Korea"], answer: "India" },
    ],
    intermediate: [
        { question: "Which festival is celebrated by lighting oil lamps and fireworks?", options: ["Diwali", "Holi", "Eid", "Hanukkah"], answer: "Diwali" },
        { question: "Which continent is home to the Amazon rainforest?", options: ["South America", "Africa", "Asia", "Australia"], answer: "South America" },
    ],
    expert: [
        { question: "What is the largest desert in the world?", options: ["Sahara Desert", "Gobi Desert", "Arabian Desert", "Antarctica Desert"], answer: "Sahara Desert" },
        { question: "Which city is known as the 'City of Love'?", options: ["Paris", "Rome", "Venice", "Barcelona"], answer: "Paris" },
    ]
};

// Function to start the trivia game based on category selection
function startTrivia(category) {
    let triviaCategory = triviaQuestions[category];
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById('question-container').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    document.getElementById('next-btn').style.display = 'none';
    showQuestion(triviaCategory[currentQuestionIndex]);
}

// Function to display trivia questions
function showQuestion(questionObj) {
    let questionContainer = document.getElementById('question-container');
    let questionHTML = `
        <h3>${questionObj.question}</h3>
        <ul>
            ${questionObj.options.map((option, index) => `
                <li><button onclick="checkAnswer('${option}', '${questionObj.answer}')">${option}</button></li>
            `).join('')}
        </ul>
    `;
    questionContainer.innerHTML = questionHTML;
}

// Function to check the selected answer
function checkAnswer(selectedOption, correctAnswer) {
    let resultContainer = document.getElementById('result');
    if (selectedOption === correctAnswer) {
        resultContainer.innerHTML = '<p>Correct answer!</p>';
        score++;
    } else {
        resultContainer.innerHTML = '<p>Wrong answer. Try again!</p>';
    }
    // Disable all answer buttons after selection
    let answerButtons = document.querySelectorAll('#question-container ul li button');
    answerButtons.forEach(button => {
        button.disabled = true;
    });
    document.getElementById('next-btn').style.display = 'inline-block';
}

// Function to load the next question or end the game
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < triviaQuestions.length) {
        showQuestion(triviaQuestions[currentQuestionIndex]);
        document.getElementById('result').innerHTML = '';
        // Enable answer buttons for the new question
        let answerButtons = document.querySelectorAll('#question-container ul li button');
        answerButtons.forEach(button => {
            button.disabled = false;
        });
        document.getElementById('next-btn').style.display = 'none';
    } else {
        // Display final score or completion message
        document.getElementById('question-container').innerHTML = `<p>Trivia completed! Your score: ${score}/${triviaQuestions.length}</p>`;
        document.getElementById('next-btn').style.display = 'none';
        // Optionally, display a certificate or shareable option
    }
}

// Function to start the video simulation based on difficulty level
function startVideoSimulation(difficulty) {
    let videoPlayer = document.getElementById('video-player');
    let videoSource = videoSources[difficulty];
    videoPlayer.innerHTML = `
        <video id="simulation-video" controls>
            <source src="${videoSource}" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `;
    document.getElementById('video-controls').style.display = 'block';
    loadVideoQuestions(difficulty);
}

// Function to load video-related questions
function loadVideoQuestions(difficulty) {
    let videoQuestions = quizQuestions[difficulty];
    currentVideoQuestionIndex = 0;
    showVideoQuestion(videoQuestions[currentVideoQuestionIndex]);
}

// Function to display video-related questions
function showVideoQuestion(questionObj) {
    let videoQuestionsContainer = document.getElementById('video-questions');
    let questionHTML = `
        <h3>${questionObj.question}</h3>
        <ul>
            ${questionObj.options.map((option, index) => `
                <li><button onclick="checkVideoAnswer('${option}', '${questionObj.answer}')">${option}</button></li>
            `).join('')}
        </ul>
    `;
    videoQuestionsContainer.innerHTML = questionHTML;
}

// Function to check the selected video answer
function checkVideoAnswer(selectedOption, correctAnswer) {
    if (selectedOption === correctAnswer) {
        // Provide feedback for correct answer
        alert('Correct answer! You earned a badge.');
        nextVideoQuestion();
    } else {
        // Provide feedback for wrong answer
        alert('Wrong answer. Try again!');
    }
}

// Function to load the next video question or end the simulation
function nextVideoQuestion() {
    currentVideoQuestionIndex++;
    let videoQuestions = quizQuestions[difficulty];
    if (currentVideoQuestionIndex < videoQuestions.length) {
        showVideoQuestion(videoQuestions[currentVideoQuestionIndex]);
    } else {
        // Optionally, display completion message or allow replay/challenge
        alert('Video simulation completed!');
    }
}
