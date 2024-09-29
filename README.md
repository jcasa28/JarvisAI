# Jarvis AI

**Jarvis AI** is a full-stack chatbot application designed to assist users in various tasks. It leverages cutting-edge technologies,
including the OpenAI API, React.js, Python, Flask, and PostgreSQL, to deliver a seamless user experience and Jarvis behavior for fun :)

## Features

- Interactive chatbot interface using React.js
- Backend services powered by Python and Flask
- Data storage and management using PostgreSQL
- Integration with OpenAI API for intelligent responses

## Technologies Used

- **Frontend:** React.js
- **Backend:** Python, Flask
- **Database:** PostgreSQL
- **API:** OpenAI API

## Installation

To get started with **Jarvis AI**, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/jcasa28/JarvisAI.git
   cd JarvisAI
   ```

You should install the requirements packages under backend directory

```bash
  pip install -r requirements.txt
```

To modify the backend and run it is under the "backend" directory

To modify the front end and run is is under the "frontend" directory

To run both at the same time and test the app, either the backend and the frontend has to be oppened in separate terminals at the same time

If you want to make it work with the OpenAI API get the API from Openai.com, log in with your credentials and get your API key, then create a folder called .env inside the backend folder and create this code:

```bash
  OPENAI_API_KEY= your key should be pasted here with no quotes, just paste it
```
