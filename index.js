// Code your solution here
function findMatching(drivers, string){

    //compares each driver's name with the string. use toLowerCase or toUpperCase to make the function case sensitive. 
    return drivers.filter ((drivers) => drivers.toLowerCase() === string.toLowerCase());

}

function fuzzyMatch(drivers, string){

    //The startsWith() method returns true if a string starts with a specified string.
    return drivers.filter ((drivers) => drivers.toLowerCase().startsWith(string.toLowerCase()));
}



function matchName(driverObjects, string){

    //checks if the name property of each driver matches the string.
    return driverObjects.filter (drivers => drivers.name.toLowerCase() === string.toLowerCase());

}

