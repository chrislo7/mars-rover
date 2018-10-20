# Mars-Rover

Coding Challenge

## The Problem

A squad of robotic rovers are to be landed by NASA on a plateau on Mars.
This plateau, which is curiously rectangular, must be navigated by the rovers so that their on-board cameras can get a complete view of the surrounding terrain to send back to Earth.

A rover's position and location is represented by a combination of x and y coordinates and a letter representing one of the four cardinal compass points.

The plateau is divided up into a grid to simplify navigation. An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

In order to control a rover, NASA sends a simple string of letters. The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot. 'M' means move forward one grid point, and maintain the same heading.

Assume that the square directly North from (x, y) is (x, y+1).
It must be possible to supply input data to your application via a text file specified on the command line.

## Instructions

1. Clone the files using git clone

2. Run ```npm install``` to download all dependencies

3. Run tests with mocha and chai using ```npm run test ```

4. To play around with the code, you can create new input files under ```/input/```

5. Define grid using ```/input/define-grid.txt```

6. Define rover positions and navigation instructions with ```/input/rover(number).txt``` (Side note, you can create as many rovers as you want!)

7. Run the code with ```node execution.js input/define-grid.txt input/rover1.txt input/rover2.txt input/rover3.txt``` (Add more rovers if you have more)

8. View the output in terminal or within the ```/output/``` directory, if the output file did not exist before, it will now!

9. You can now apply for NASA at ```https://nasajobs.nasa.gov/```


## Code Design

**Grid Design**
In accordance to the problem, the grid was designed to contain the rovers within the defined X by Y area, without possibility to go out of bounds either by its maximum boundaries or minimum boundaries.

**Read/Write File Design**
I have designed the code to input code from ```input/rover(number).txt``` and seperate each rover individually.
This is due to a possibility in a real-world scenario, a file containing a rover's information would likely not only include its initial coordinates and navigation instructions (e.g. it may contain information such as specs, what else is needed to run the rover, power...etc. ). As such, this code would only take in the coordinates alongside navigation instructions (and not other information regarding the rover).

Similarily, the code outputs to its individual files under the ```output/rover(number).txt``` for the same reason. If necessary, it will be able to output other information in the future.


## Future Ideas

- Create a React page to render information visually
- In the same page, allow users to type or upload rover information

## Dependencies

- Mocha
- Chai