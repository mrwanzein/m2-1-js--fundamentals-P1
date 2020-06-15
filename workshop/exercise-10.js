// Q10
// Write a loop that makes seven calls to console.log to output the following triangle:
// #
// ##
// ###
// ####
// #####
// ######
// #######

let string = `#`;

for(let i=1; i<=7; i++){
    console.log(string);
    string += `#`;

}