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

function distanceTravelledInFeet(distance) {
  return distanceFromHqInBlocks(distance) * distanceFromHqInFeet(distance);
}