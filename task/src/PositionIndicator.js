import React from 'react';


function PositionIndicator({number, position}) {
  var items = [];

  const generateBoxes = (num, pos) => {
    if(num<position){pos = 1}
    for(let i=1; i<num+1; i++) { items.push(<div key={(pos+1)*(i)} className={pos === i ? "positionIndicator positionIndicator--active" : 'positionIndicator'}></div>) }
    return items;
  }
  return (
    <div className="positionIndicatorContainer">
      <div className="positionIndicatorContainerFlex">{generateBoxes(number, position)}</div>
    </div>
  );
}

export default PositionIndicator;