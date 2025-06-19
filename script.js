let qnaModel;

const questionInput = document.getElementById("question");
const answerDisplay = document.getElementById("answer");
const contextElement = document.getElementById("context-text");

const context = `
Machine learning (ML) is a field of artificial intelligence (AI) concerned with the development of algorithms that allow computers to learn patterns from data and make decisions or predictions based on that data. ML is seen as a part of data science and can be supervised, unsupervised, or reinforcement-based.

Supervised learning involves labeled datasets where the model is trained on input-output pairs. Common algorithms include linear regression, logistic regression, decision trees, and support vector machines. Unsupervised learning involves finding patterns in data without labels, using techniques like clustering and dimensionality reduction. Reinforcement learning is based on an agent learning to make decisions by receiving rewards or penalties.

Applications of machine learning include image recognition, speech processing, recommendation systems, fraud detection, autonomous vehicles, and self-driving cars.

Training a machine learning model involves feeding it data, adjusting model weights through an optimization process, and evaluating its performance using metrics.

Evaluation metrics in machine learning include accuracy, precision, recall, and F1 score. Precision measures the proportion of true positive predictions among all positive predictions made by the model.

Overfitting occurs when a model learns noise instead of actual patterns in the training data. Techniques like cross-validation and regularization help prevent overfitting.

Bias in machine learning refers to systematic errors that can occur due to incorrect assumptions in the model or imbalanced training data. Bias can lead to unfair or inaccurate predictions.

AI ethics is the field concerned with the moral implications of artificial intelligence, including issues such as bias, data privacy, explainability, transparency, and accountability in decision-making systems.

K-means clustering is an unsupervised learning algorithm that divides data into K groups based on similarity, without needing labeled data.
`;


// Load the QnA model on page load
async function loadModel() {
  qnaModel = await qna.load();
  console.log("✅ QnA model loaded");
}

async function askQuestion() {
  const question = questionInput.value.trim();
  if (!question) {
    answerDisplay.textContent = "Please enter a question.";
    return;
  }

  answerDisplay.textContent = "Thinking...";
  contextElement.innerHTML = "";

  if (!qnaModel) {
    answerDisplay.textContent = "Model is still loading. Please wait.";
    return;
  }

  try {
    const answers = await qnaModel.findAnswers(question, context);
    if (answers.length > 0) {
      // Show all answers with scores
      answerDisplay.innerHTML = answers
  .map(ans => {
    let score = ans.score;
    if (score > 1) score = score / 100; // Normalize overly large scores
    const confidence = Math.min((score * 100), 100).toFixed(1);
    return `<p>${ans.text} <em>(Confidence: ${confidence}%)</em></p>`;
  })
  .join("");


      // Highlight top answer in context
      const highlight = answers[0].text;
      const regex = new RegExp(`(${highlight})`, "i");
      contextElement.innerHTML = context.replace(regex, '<mark>$1</mark>');
    } else {
      answerDisplay.textContent = "No answer found.";
    }
  } catch (err) {
    console.error(err);
    answerDisplay.textContent = "Error: Could not process the question.";
  }
}

// Load model when page is ready
loadModel();