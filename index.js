const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

// const totalBatteries = batteryBatches.reduce(function(total, batches){
//     return batches + total
//     }
//   )

let totalBatteries = batteryBatches.reduce((total, batches) => total + batches)

//   let sum = data.reduce((acc, val) => {
//     return val.country == 'China' ? acc : acc + val.pop;
//   }, 0);