# Colorized Rooms Application Overview

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
I have used ES6 array manipulation to render the colorized floor plan along with React Framework (no 3rd party libs used here).

## Application Logic

Converted given input into different array elements based on the line break, took the maxLength of the wall, iterated through the above array comparing the length of the current wall with max-length wall to identify the rooms.

- Once rooms posibility identified tried to create roomMap to have corresponding color coding to each room
- styled minimal part and added a textarea input field

<br>

## Steps to run

    - Install NodeJS v12.1
    - Navigate to project directory
    - run `npm install`
    - post successfull installation run `npm start`

## Application runs on

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

<br>

### Sample Input

```
##########

#   #    #

#   #    #

## #### ##

#        #

#        #

#  #######

#  #  #  #

#        #

##########

```

<br>

### Plain Javascript Logic

```js
var t = `
##########

#  #  #  #

#        #

##########
##########

#   #    #

#   #    #

## #### ##

#   #    #

#   #    #

##########`;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

rowData = t.split('\n');
maxLen = Math.max(...rowData.map((v) => v.length));
colors = [];
for (var i = 0; i < rowData.length; i++) {
  colors.push(getRandomColor());
}

rowData.reduce((a, c) => {
  let _line; //declaring a section new line
  if (c.match(/#/g)?.length === maxLen) {
    //To diff max-length line
    _line = c;
  } else if (c.length !== 0) {
    _line = c
      .split('#')
      .map((v, i) =>
        v !== ''
          ? v
              .split('')
              .map((l) => {
                return v.length;
              })
              .join('')
          : v,
      )
      .join('#');
  } else _line = c;
  return a + '\n' + _line;
}, '');
```
