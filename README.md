# Gabel Integrated Services and Farms Limited

This is a Node.js application for Gabel Integrated Services and Farms Limited. It uses Express.js for handling server routes, Nodemailer for sending emails, and various other middlewares to ensure smooth functionality.

## Features

- Render different views using EJS templates.
- Handle form submissions and send emails using Nodemailer.
- Provide CORS support and parse incoming request bodies.
- Log HTTP requests with Morgan.
- Serve static files from the 'public' directory.

## Prerequisites

- Node.js (v12 or higher)
- npm (Node package manager)

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/Vicoprince/Gabel-Integrated-services-and-farms-Limited.git
    cd Gabel-Integrated-services-and-farms-Limited
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Set up environment variables for your Gmail credentials:
    - Create a `.env` file in the root directory.
    - Add your Gmail credentials:
    ```plaintext
    EMAIL_USER=your-email@gmail.com
    EMAIL_PASS=your-email-password
    ```

## Running the Application

1. Start the server:
    ```sh
    npm start
    ```

2. Open your browser and navigate to `http://localhost:3002`.

## Project Structure

- `app.js`: The main application file that sets up the Express server and routes.
- `views/`: Contains EJS templates for different pages (index, about, services, contact, etc.).
- `public/`: Contains static files such as CSS and JavaScript.

## Routes

### GET Routes

- `/`: Renders the homepage.
- `/about`: Renders the about page.
- `/services`: Renders the services page.
- `/why_us`: Renders the "Why Us" page.
- `/contact`: Renders the contact page.

### POST Routes

- `/quote_request`: Handles quote requests from the homepage form and sends an email.
- `/quote_services`: Handles quote requests from the services page form and sends an email.
- `/send_message`: Handles contact form submissions and sends an email.
- `/signup`: Handles newsletter signups and sends an email.
