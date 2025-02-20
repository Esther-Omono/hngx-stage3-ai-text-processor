# AI-Powered Text Processor

The AI-Powered Text Processor is a web application that provides language detection, text translation, and summarization features using AI capabilities. It allows users to input text, detect the language, translate it into a chosen target language, and summarize the content efficiently. You can view the demo of the project [here](https://hngx-stage3-ai-text-processor-estheromonos-projects.vercel.app/).

## Table of Content

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Acknowledgement](#acknowledgement)

## Features

- **Language Detection:** Automatically detects the language of the input text.
- **Translation:** Translates text into a selected language.
- **Summarization:** Generates concise summaries of input text.
- **Real-time Processing:** Provides instant results with an intuitive user interface.

## Technologies Used

1. **React.js:** For building the user interface.
2. **React Toastify:** For displaying notifications.
3. **Lucide-react:** For icons.
4. **Chrome AI APIs:** Utilized for language detection, translation, and summarization.
5. **Tailwind CSS:** For styling the components.

## Project Structure

```bash
ai-text-processor/
├── src/
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Chatarea.jsx
│   │   ├── Message.jsx
│   │   └── Inputform.jsx
│   ├── services/
│   │   └── chromeapiservice.js
│   ├── utils/
│   │   └── languageutils.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── package.json
```

## Installation

1. Clone the repository:

```bash
git clone git@github.com:Esther-Omono/hngx-stage3-ai-text-processor.git
```

2. Navigate to the project directory:

```bash
cd hngx-stage3-ai-text-processor
```

3. Install dependencies:

```bash
npm install
```

4. Create a .env file with your Chrome AI API tokens:

```bash
VITE_DETECTOR_TOKEN=your_language_detection_api_token
VITE_SUMMARIZER_TOKEN=your_summarizer_api_token
VITE_TRANSLATOR_TOKEN=your_translator_api_token
```

5. Start the development server:

```bash
npm run dev
```

## Usage

1. Enter text in the input field.
2. Click the Detect Language button to identify the text language.
3. Choose a target language from the dropdown and click Translate to translate the text.
4. Click Summarize to generate a short summary of the text.

## Acknowledgment

This project was inspired by and developed as part of the [HNG12 internship](https://hng.tech/internship), a fast-paced bootcamp for learning digital skills.
