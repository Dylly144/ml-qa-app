# Natural Language Question Answering with TensorFlow.js and BERT

This project is a browser-based web application that answers natural language questions about the basics of machine learning using a pre-trained BERT model via TensorFlow.js.

## 🔍 Features

- Ask free-form questions like "What is supervised learning?"
- Get relevant answers from a fixed knowledge base
- Highlights the answer in the original context
- Displays confidence scores
- Runs entirely in the browser (no server required)

## 🚀 Demo

👉 Live Site: [https://Dylly144.github.io/ml-qa-app/](https://Dylly144.github.io/ml-qa-app/)

## 🧠 Context Domain

The app is focused on **Basics of Machine Learning**, using a cleaned and enhanced version of [Wikipedia’s Machine Learning article](https://en.wikipedia.org/wiki/Machine_learning).

## 🛠 Technologies

- HTML, CSS, JavaScript
- TensorFlow.js
- MobileBERT via `@tensorflow-models/qna`

## 📈 Evaluation

| Question                        | Answer Returned? | Confidence (%) | Correct? | Notes |
|--------------------------------|------------------|----------------|----------|-------|
| What is supervised learning?   | ✅               | 23.1           | ✅       | Good match |
| What is overfitting?           | ✅               | 18.6           | ✅       | Clear result |
| What are ML applications?      | ✅               | 5.3            | ✅       | Good |
| What is reinforcement learning?| ✅               | 20.2           | ✅       | Good |
| What is bias in ML?            | ✅               | 19.5           | ✅       | Good match |
| How is a model trained?        | ❌               | —              | ❌       | No answer found |
| What is k-means clustering?    | ✅               | 8.6            | ✅       | Match |
| What is precision?             | ✅               | 13.6           | ✅       | Clear answer |
| What is unsupervised learning? | ✅               | 18.8           | ✅       | Clearly explained |
| What is AI ethics?             | ✅               | 14.8           | ✅       | Good match |

✅ **9 out of 10 questions answered correctly.**

## 📜 License

For educational use only.
