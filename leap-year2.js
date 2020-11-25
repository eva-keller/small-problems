//Prior to 1752, they used the Julian Calendar, leap years occur in any year that is evenly divisible by 4.
//update the function from the previous exercise to determine leap years both before and after 1752.

function isLeapYear(year){
    if(year % 400 === 0) {
        console.log(true);
    }else if ( year % 4 === 0 && year % 100 === 0 && year > 1752){
        console.log(false);
    }else if ( year % 4 === 0 ) {
        console.log(true);
    }else{
        console.log(false);
    }
};
isLeapYear(656);      // true
isLeapYear(657);      // false
isLeapYear(2100);      // false
isLeapYear(100);      // true
isLeapYear(1700);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true