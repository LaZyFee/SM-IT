//  Write a function that checks if a given year is a leap year.
const checkLeapYear = (year) => {
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        console.log(`${year} is leap year`);
    } else {
        console.log(`${year} is not leap year`);
    }
}
checkLeapYear(2020);