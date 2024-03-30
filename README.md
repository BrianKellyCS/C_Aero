# Compressible Aerodynamics Calculator

This project is a web-based compressible aerodynamics calculator designed for calculating various flow parameters in isentropic flows for a perfect gas. It allows users to input a range of gamma values and Mach numbers to generate detailed tables and graphs of flow properties.

## Features

- **User Input for Gamma and Mach Ranges**: Users can specify the start, end, and step values for both gamma and Mach number ranges.
- **Dynamic Table Generation**: For each gamma value, the calculator generates a table of flow properties (p/p0, rho/rho0, T/T0, p/p*, rho/rho*, T/T*) for the specified range of Mach numbers.
- **Graphical Data Representation**: Users can request graphs for a specific gamma value, showcasing the calculated ratios versus Mach number.
- **Data Export**: Allows users to save the generated tables for further analysis in Excel.
- **Interactive Web Interface**: The project includes an HTML interface with input fields, calculation triggers, and display areas for tables and graphs.

## Setup

To run this project locally, follow these steps:

1. Clone the repository:
    ```
    git clone https://github.com/BrianKellyCS/C_Aero
    ```

2. Open the `index.html` file in a web browser.

3. Input the desired gamma and Mach number ranges and click `Calculate` to view the results.

## Notable Dependencies

- **Chart.js**: Used for generating dynamic charts of the flow properties.
- **CanvasJS**: An alternative charting library used alongside Chart.js for specific graphing functionalities.
- **Underscore.js**: A JavaScript library that provides utility functions for common programming tasks, enhancing code readability and efficiency.
