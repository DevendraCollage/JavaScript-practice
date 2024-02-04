let id1 = document.getElementById("id1"); //? This will access this element from the html page through this id
console.log(id1.matches(".id2")); //? If this id will matches with this id id2 then this will give you the true else false
//* To check if element matches the given CSS selector

console.log(id1.closest("id1")); //* To look for the nearest ancestor that matches the give css - selector. The elem itself is also checked

console.log(elem.contains(id1)); //* Return true if id1 is inside elem (a descendant of elem) or when elem==id1
