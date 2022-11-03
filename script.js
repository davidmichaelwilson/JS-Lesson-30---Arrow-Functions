// ************ Function 1 ************

// function newKesselRun(parsecs) {
//   return `You made the next Kessel run in ${parsecs} parsecs.`
// }

const newKesselRun = parsecs => `You made the next Kessel run in ${parsecs} parsecs.`

console.log(newKesselRun(27))


// ************ Function 2 ************

// function kesselRun(parsecs) {
//   if(parsecs < 12) {
//     return `You made the Kessel run in ${parsecs} parsecs. Han Solo sends his congratulations`
//   } else {
//     return `Makeing the Kessel run in ${parsecs} parsecs won't beat the record. Too slow drooly Joe.`
//   }
// }

const kesselRun = (parsecs) => {
  if(parsecs < 12) {
    return `You made the Kessel run in ${parsecs} parsecs. Han Solo sends his congratulations!`
  } else {
    return `Makeing the Kessel run in ${parsecs} parsecs won't beat the record. Too slow drooly Joe.`
  }
}

console.log(kesselRun(5))