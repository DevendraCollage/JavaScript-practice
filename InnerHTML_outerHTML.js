console.log(); //? this shows the element DOM
console.dir(); //? this shows the element as an object with its properties

//? tagName - only exists for Element nodes
//? nodeName - defined for any node element (text, comment, etc)

//* innerHTML and outerHTML
//? The innerHTML property allows to get the HTML inside the element as a string.
//? The outerHTML property contains the full HTML, innerHTML + the element itself.
//? innerHTML is valid only for element nodes. For other node types we can use nodeValue or data.

//* Text Content
//? Provides access to the text inside the element: only text

//* The hidden property
//? The "hidden" attribute and the DOM property specifies weather the element is visible or not.
/*
* <div hidden> I am hidden </div>
* <div id = “element”> I can be hidden </div>

* <script>
* element.hidden = true;
* </script>
*/
