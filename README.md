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

2. Backend Setup (Python/Flask)

The backend of Jarvis AI is built using Python and Flask. To set up and run the backend, follow these steps:

1.1.	Navigate to the Backend Directory:
•	From the root directory of the project, go into the backend folder:
   ```bash
   cd backend
   ```
1.2.	Activate Virtual Environment:
•	On macOS/Linux:
   ```bash
   source venv/bin/activate
   ```
•  On windows
   ```bash
   venv\Scripts\activate
   ```
1.3.	Install Dependencies:
•	Ensure that you install all the necessary Python packages required by the backend. While the virtual environment is active, run:
   ```bash
  pip install -r requirements.txt
   ```
•	The backend server will be running at http://localhost:5000.
   
3.	Frontend Setup (React)
The frontend of Jarvis AI is built using React.js and can be found in the frontend directory. To set up and run the frontend, follow these steps:
•	First, navigate to the frontend directory:
   ```bash
   cd frontend
   ```
•	Install the necessary dependencies using npm:
   ```bash
   npm install
   ```
•	Start the React development server:
   ```bash
   npm start
   ```
The frontend will run on http://localhost:3000, and you can view the interactive chatbot interface in your browser.

To run both at the same time and test the app, either the backend and the frontend has to be oppened in separate terminals at the same time

If you want to make it work with the OpenAI API get the API from Openai.com, log in with your credentials and get your API key, then create a folder called .env inside the backend folder and create this code:

```bash
  OPENAI_API_KEY= your key should be pasted here with no quotes, just paste it
```
