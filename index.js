// Code your solution here:


function driversWithRevenueOver(drivers, num) {
  return drivers.filter(driver => driver.revenue > num)
}

function driverNamesWithRevenueOver(drivers, num) {
  return driversWithRevenueOver(drivers, num).map(driver => driver.name)
}

function exactMatch(drivers, object) {
  return drivers.filter(function (driver) {
    let keys = Object.keys(object);
    return driver[keys[0]] === object[keys[0]];
  })
}
  function exactMatchToList(drivers, object) {
  let result = []
  let filteredDrivers = exactMatch(drivers, object);
  result = filteredDrivers.map(function(driver) {
    return driver.name;
  });
  return result;
}
