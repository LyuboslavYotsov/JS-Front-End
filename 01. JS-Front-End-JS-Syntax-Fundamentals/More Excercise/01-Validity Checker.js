function validatePoint(x1, y1, x2, y2) {
  let pointNumber = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

  if (pointNumber % 1 === 0) {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
  } else {
    console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invvalid`);
  }
}

function checkCoordinates(x1, y1, x2, y2) {
  function validatePoint(x1, y1, x2, y2) {
    let pointNumber = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

    if (pointNumber % 1 === 0) {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
      console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
  }
  validatePoint(x1, y1, 0, 0);
  validatePoint(x2, y2, 0, 0);
  validatePoint(x1, y1, x2, y2);
}

checkCoordinates(2, 1, 1, 1);
