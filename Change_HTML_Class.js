//* className and classList
//* If we assign something to elem.className it replaces the whole string of classes

//? 1. adds/remove a class
Element.classList.add("className"); //! This will add the class to the element
Element.classList.remove("className"); //! This will remove the class from the element

//? 2. Adds the class if it doesn't exist, otherwise removes it
Element.classList.toggle("className"); //! This will toggle like on or off switch

//? 3. Check for the give class if exist then true otherwise return false
Element.classList.contains("className"); //! If available in the element then return true otherwise false
