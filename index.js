function scuberGreetingForFeet(rideDistanceInFeet) {
  if (rideDistanceInFeet <= 400) {
    return 'This one is on me!'
  } else if (rideDistanceInFeet > 400 && rideDistanceInFeet <= 2000) {
    return 'That will be twenty bucks.'
  } else if (rideDistanceInFeet > 2000 && rideDistanceInFeet <= 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }
}

function ternaryCheckCity(city) {
  return city === "NYC" ? 'Ok, sounds good.' : 'No go.'
}

function switchOnCharmFromTip(tipQuality) {
  switch (tipQuality) {
    case 'generous':
      return 'Thank you so much.';
    case 'not as generous':
      return 'Thank you.';
    default:
      return 'Bye.';
  }
}
