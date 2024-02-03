//* Table elements support the following properties

table.rows; //? Collection of tr elements
table.caption; //? Reference to <caption>
table.tHead; //? Reference to <thead>
table.tFoot; //? Reference to <tfoot>
table.tBodies; //? Collection of <tbody> elements
table.rows; //? Collection of <tr> inside
tr.cells; //? Collection of td and th
tr.sectionRowIndex; //? Index of tr insider enclosing
tr.rowIndex; //? Row number starting from 0
td.cellIndex; //? No of cells inside enclosing <tr>

//* Quick-Quiz: Print typeof document and typeof window in the console and see what it prints.
console.log(typeof document); //? Output: object
console.log(typeof window); //? Output: object
