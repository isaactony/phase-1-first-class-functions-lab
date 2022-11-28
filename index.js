// Code your solution in this file!

const returnFirstTwoDrivers = function(driversArray) {
    let drivers = [...driversArray.slice(0,2)];
    return drivers;

}

const returnLastTwoDrivers = function(driversArray) {
    let lasttwo = [...driversArray.slice(-2)];
    return lasttwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num) {
    return function(fare) {
        return fare * num;
    }

}

function fareDoubler(fare) {
    const doubler = createFareMultiplier(2)(fare);
    return doubler;
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(driversArray, fnc) {
    return fnc(driversArray);
}