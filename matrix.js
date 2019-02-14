// export const Matrix = () => {
//     constructor(input){
//         const arr =input.split('/n')
//         console.log(arr)
//         this.rows =[]
//         this.columns =[]
//     }
        
// }
// Matrix()

// new Matrix()

function columnsFromRows(rows) {
    const columns = [];
  
    rows.forEach((row) => {
      row.forEach((n, index) => {
        columns[index] = columns[index] || [];
        columns[index].push(n); 
      });
    });
  
    return columns;
  }
  
  function parseRows(description) {
    return description.split('\n').map(row => row.split(' ').map(char => parseInt(char, 10)));
  }
  
  export class Matrix {
    constructor(description) {
      this.rows = parseRows(description);
      this.columns = columnsFromRows(this.rows);
    }
  }
  