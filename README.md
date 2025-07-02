# Simple Calculator

A web-based calculator application built with HTML, CSS, and JavaScript. This project demonstrates fundamental web development skills, including DOM manipulation, event handling, and UI design.

## Features

- **Basic Arithmetic Operations:** Addition, subtraction, multiplication, and division.
- **Clear/Reset Functionality:** Easily reset the calculator to its initial state.
- **Input Validation:** Handles invalid input and prevents errors such as multiple decimals or divide by zero.
- **Responsive UI:** Clean and modern interface styled with CSS Grid and Flexbox.
- **Keyboard/Mouse Support:** All operations are accessible via on-screen buttons.

## Project Structure

```
├── index.html        # Main HTML file containing the calculator layout
├── styles.css        # CSS file for styling the calculator
├── main.js           # JavaScript file with calculator logic and event handling
├── calculator.txt    # Project objectives and checkpoints
└── README.md         # Project documentation
```

## Getting Started

1. **Clone or Download the Repository**
2. **Open `index.html` in your web browser**
3. **Use the calculator interface to perform calculations**

No build tools or dependencies are required.

## Usage

- Click the number and operator buttons to enter your calculation.
- Use `AC` to clear the display and reset the calculator.
- Use `+/-` to toggle the sign of the current input.
- Use `%` to calculate percentages.
- Press `=` to evaluate the expression.

## Implementation Details

- **Dynamic Button Generation:** All calculator buttons are generated dynamically in JavaScript for flexibility and maintainability.
- **Event Handling:** Each button is assigned an event listener to handle user input and update the display accordingly.
- **Calculation Logic:** Supports chained operations and handles edge cases (e.g., multiple decimals, divide by zero).
- **Styling:** The calculator uses CSS Grid for button layout and custom styles for a modern look.

## Example

![Calculator Screenshot](screenshot.png)

## Project Objectives & Learning Outcomes

See `calculator.txt` for detailed objectives, checkpoints, and recommended topics to review before starting.

## License

This project is open source and available under the MIT License.
