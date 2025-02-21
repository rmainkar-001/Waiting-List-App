Waiting List App

A simple React-based web application that allows users to join a waiting list. The app supports priority-based queuing using invite codes and dynamically updates the waiting list at regular intervals.

Features

Users can enter their name and an invite code to join the waiting list.

Invite codes determine priority placement in the list.

The system automatically adds a new guest user every 10 seconds.

Displays the current waitlist with estimated wait times.

Uses Redux for state management.

Tech Stack

Frontend: React, React Router, Redux

State Management: Redux (without createSlice)

Styling: CSS

Installation

Prerequisites

Make sure you have the following installed:

Node.js

npm or yarn

Steps

Clone the repository:

git clone https://github.com/your-repo/waiting-list-app.git
cd waiting-list-app

Install dependencies:

npm install

or

yarn install

Start the development server:

npm start

or

yarn start

Open the app in your browser at http://localhost:3000.