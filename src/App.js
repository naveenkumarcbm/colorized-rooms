import React, { useEffect, useState } from 'react';
import './App.css';

const inp = `
##########

#   #    #

#   #    #

## #### ##

#    #   #

#        #

#  #######

#  #  #  #

#        #

##########`;

//Function to generate random hex colors
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Room map flag and color plan
let _isRoom = false;
let _roomMap = [];

//Generate random 100 Colors 
let _colors = [];
for (var i = 0; i < 100; i++) {
  _colors.push(getRandomColor());
}


function App() {
  const [flrPlan, setFlrPlan] = useState(inp);
  const [rowData, setRowData] = useState([]);
  const [maxLen, setMaxLen] = useState(0);

  useEffect(() => {
    let _rowData = flrPlan.split('\n');
    setRowData(_rowData);
    setMaxLen(Math.max(..._rowData.map((v) => v.length)));
  }, [flrPlan]);

  // Room color generator will be update based on the roomMap
  const getRoomColor = (k, v) => {
    return (
      <span key={k} style={{ background: _roomMap[k] }}>
        &nbsp;&nbsp;
      </span>
    );
  };

  // Input handler to handle change in the input value
  const changePlan = (e) => {
    setFlrPlan(e.target.value)
  };

  return (
    <div className='App'>
      <h3>Colorized Rooms</h3>
      <div className='App-header'>
        <div>
          <p>Provide Floor Plan:</p>
          <textarea defaultValue={flrPlan} onChange={changePlan}></textarea>
          <em>Please provide valid floor plan</em>
        </div>
        <div>
        <p>Colorized Floor Plan:</p>
        {rowData.map((c, i) => {
          let _wallLen = c.match(/#/g)?.length;
          if ([maxLen, maxLen / 2].some((v) => v <= _wallLen)) {
            _roomMap = [];
            _isRoom = false;
          } else if (maxLen / 2 > _wallLen && c !== '') {
            if (!_isRoom) {
              let clrIdx = i;
              console.log(i)
              let _rowPlan = c.split('').map((p, l) => {
                let _mapped = '';
                if (p === '#') {
                  _mapped = p;
                  clrIdx = l || i;
                } else _mapped = _colors[clrIdx];
                return _mapped;
              });
              _roomMap = _rowPlan;
              _isRoom = true;
            }
          }

          return (
            <div className='row' key={'row_' + i}>
              {c.split('').map((v, j) => {
                if (_isRoom) {
                  return v !== '#' ? getRoomColor(j, v) : v;
                } else {
                  return v;
                }
              })}
            </div>
          );
        })}
        </div>
      </div>
    </div>
  );
}

export default App;
