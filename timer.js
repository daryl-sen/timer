const args = process.argv.slice(2);

// create a function returns an array that only has number values
const numsOnly = (args) => {
  let newArr = [];
  for (let arg of args) {
    if (!isNaN(arg) && arg > 0) {
      newArr.push(Number(arg));
    }
  }
  return newArr;
};

// create an array containing all the alarms
const alarms = numsOnly(args);

const timer = (alarms) => {
  let time = 0;
  let alarmCount = 0; // increases when any alarm has sounded. Used to evaluate when to stop the interval
  let intervals = setInterval(() => {
    time++;
    if (alarms.includes(time)) {
      process.stdout.write('\x07');
      alarmCount++;
    }
    console.log(`Time: ${time}, Alarms sounded: ${alarmCount}`);
    if (alarmCount === alarms.length) {
      // when the number of alarms is the same as the number of alarms set, stop the timer.
      clearInterval(intervals);
    }
  }, 1000);
};

timer(alarms);
