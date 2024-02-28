
/**
    > For...Of Loop: 
        | Basically it is array specified loop.
        | The for...of statement executes a loop that operates on a sequence of values sourced from an iterable object.
        | Iterable objects include instances of built-ins such as Array, String, TypedArray, Map, Set, NodeList (and other DOM collections)
        | NOTE: It is not applicable on objects.

    > Map:
        | The Map object holds key-value pairs and remembers the original insertion order of the keys. 
        | Any value (both objects and primitive values) may be used as either a key or a value.
        | It do store duplicates and all the vales are unique.
*/


//For Array
const arr = [9,6,5,8,2];
for (const index of arr) {
    console.log(index);
}

//For String
const wish = "Good Work";
for (const w of wish) {
    //we can also make condition in this loop
    if (w == " ") {
        continue;
    }

    console.log(w);
}


//Map
const MapArr = new Map();
MapArr.set('IN','India');
MapArr.set('CN','Canada');
MapArr.set('USA','States')
console.log(MapArr);
//For...of on Map
for (const [key, values] of MapArr) {
    console.log(key, 'of' , values);
}





