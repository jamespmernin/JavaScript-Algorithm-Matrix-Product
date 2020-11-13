// MATRIX PRODUCT
// I can't take credit for this solution. I researched the problem and found this elegant solution using higher-order functions at https://stackoverflow.com/a/48694670.

const matrixProduct = (matrix1, matrix2) => {
  var result = new Array(matrix1.length).fill(0).map(row => new Array(matrix2[0].length).fill(0));

  return result.map((row, i) => {
    return row.map((val, j) => {
      return matrix1[i].reduce((sum, elm, k) => sum + (elm * matrix2[k][j]), 0)
    })
  })
}

console.table(
  matrixProduct(
    [
      [1, 2],
      [3, 2]
    ],
    [
      [3, 2],
      [1, 1]
    ]
  )
)

module.exports = {
  matrixProduct
}