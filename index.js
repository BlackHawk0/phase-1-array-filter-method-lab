// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

const drivers2 = [
        {
          name: 'Bobby',
          hometown: 'Pittsburgh' },
        {
          name: 'Sammy',
          hometown: 'New York' } ,
        {
          name: 'Sally',
          hometown: 'Cleveland' },
        {
          name: 'Annette',
          hometown: 'Los Angeles' },
        {
          name: 'Bobby',
          hometown: 'Tampa Bay' }
      ];





/* returns all drivers that match the passed in name
   returns matching drivers if case does not match but letters do
   returns an empty array if there is no match */
function findMatching(drivers, str){
    const matchedDriver = drivers.filter(element => element.toUpperCase() === str.toUpperCase());
    return matchedDriver;
}
/*   returns a driver if beginning provided letters match
     does not return drivers if only middle or ending letters match
     does not return drivers if only middle or ending letters match
 */
function fuzzyMatch(driver, str){
    const firstLetters = driver.filter(element => element.slice(0,2) === str)
    return firstLetters;
}

// accesses the data structure to check if name matches
function matchName(driver, str){
    const matchingNames = driver.filter(element => element.name.toUpperCase() === str.toUpperCase())
    return matchingNames;
    // return driver.filter(element => element.name=== str);
}
// matchName(drivers2, 'Bobby')