/**
    *Date:
        | JavaScript Date objects represent a single moment in time in a platform-independent format. 
        Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch). 

        | Date has been a long-standing pain point in ECMAScript. 
        This is a proposal for Temporal, a global Object that acts as a top-level namespace (like Math), 
        That brings a modern date/time API to the ECMAScript language.

    *Time:
        | 
*/




let Mydate = new Date();
console.log(Mydate);

//There are multiple function that can be applied to it such as,
console.log(Mydate.toString()); //-------------->  Mon Jan 22 2024 16:54:58 GMT+0530 (India Standard Time)
console.log(Mydate.getFullYear()); //----------->  2024
console.log(Mydate.toLocaleTimeString());//----->  4:54:58 PM
console.log(Mydate.toDateString());//----------->  Mon Jan 22 2024
console.log(Mydate.toLocaleString());//--------->  1/22/2024, 4:54:58 PM
console.log(Mydate.toJSON());//----------------->  2024-01-22T11:27:21.494Z
console.log(typeof Mydate);//------------------->  object

//There is also a way, if we want a specific date to be printed
let newDate = new Date(2023, 0, 15); //------------------->  2023-year ; 0-month(0(jan), 1(fab), 2(mar)...) ; 15-date
console.log(newDate.toLocaleString());

//We can also provide a fix time
let newDate2 = new Date(2023, 1, 25, 6,45);
console.log(newDate2.toLocaleString());

//We can also get specific format of date [(mm/dd/yy)(dd/mm/yy)...]
let newDate3 = new Date("05-01-2023")//---------------->mm/dd/yy
console.log(newDate3.toLocaleString());

