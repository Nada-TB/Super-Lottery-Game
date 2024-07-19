# Super Lottery Game

## Introduction

The Super Lottery Game is a web-based application that allows users to participate in a lottery game using PHP and JavaScript. The game generates a random combination of numbers each time the user clicks the "Go" button. The user is granted up to 10 trials to match a winning combination. The application provides an engaging experience by checking the generated numbers against a winning condition and displaying the results interactively.

## Demo
https://user-images.githubusercontent.com/50797024/174049684-c4f68f2f-a7e3-42a5-a89d-9a22d9264383.mp4 

## Requirements

- A web server with PHP support (e.g., Apache, Nginx)
- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)

## Installation

1. **Download the Project:**
   - Clone or download the project repository.

2. **Setup Web Server:**
   - Ensure your web server supports PHP.
   - Place the project files in the web server's root directory.

3. **Access the Application:**
   - Open your web browser and navigate to `http://localhost/your-project-folder`.

## Usage

1. **Start the Game:**
   - Click the "Go" button to generate a random combination of six numbers.

2. **Check Results:**
   - If the generated combination matches the winning criteria, you win!
   - If not, you can continue playing until you have used all 10 trials.

3. **Play Again:**
   - Click the "Play Again" link to restart the game.

## Features

- **Random Number Generation:** Uses PHP to generate a unique combination of numbers for each trial.
- **User Trials:** Provides up to 10 trials for the user to match a winning combination.
- **Dynamic Updates:** Utilizes JavaScript and AJAX for real-time updates without refreshing the page.
- **Responsive Design:** Ensures usability across different screen sizes.

## Technologies Used

- **HTML:** For structuring the web page.
- **CSS:** For styling and layout of the game interface.
- **JavaScript:** For handling user interactions and updating the game dynamically.
- **PHP:** For server-side logic and number generation.
- **AJAX:** For asynchronous communication between client and server.

## Project Structure

```plaintext
your-repo-name/
├── index.html             # Main HTML file for the lottery game
├── style.css              # CSS file for styling the game interface
├── main.js                # JavaScript file for handling user interactions
├── lottery.php            # PHP script for generating random lottery numbers
├── composer.json          # Composer configuration file (if applicable)
└── README.md              # Project documentation
```

## Challenges and Learnings

1. **Challenge:** Real-Time Number Generation and Display
   - **Action:** Implemented AJAX requests to fetch random numbers from the PHP backend and updated the UI dynamically.
   - **Result:** Provided a smooth user experience with real-time feedback without page reloads.

2. **Challenge:** Managing User Trials
   - **Action:** Incorporated a counter to track the number of trials and display appropriate messages based on the user's progress.
   - **Result:** Ensured users could only attempt the lottery a limited number of times and received clear feedback on their attempts.

3. **Challenge:** Responsive Design
   - **Action:** Designed the interface to adapt to different screen sizes using CSS media queries.
   - **Result:** Enhanced usability on both desktop and mobile devices.

## Future Improvements

- **Enhanced Game Logic:** Introduce more complex winning criteria or multiple levels of difficulty.
- **User Interface Improvements:** Refine the design and layout for a more polished and engaging user experience.
- **Additional Features:** Add sound effects, animations, or leaderboards to increase user engagement.

## Contact

- GitHub: [Nada-TB](https://github.com/Nada-TB)


## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

