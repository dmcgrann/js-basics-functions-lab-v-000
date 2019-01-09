// Code your solution in this file!
function distanceFromHqInBlocks(distance) {
  if (distance <= 42) {
    return 42 - distance;
  } else {
    return distance - 42;
  }
}

function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}

function distanceTravelledInBlocks(block1, block2) {
   if (block1 <= block2) {
    return block2 - block1;
  } else {
    return block1 - block2;
  }
}

function distanceTravelledInFeet(block1, block2) {
  return distanceTravelledInBlocks(block1, block2) * 264;
}