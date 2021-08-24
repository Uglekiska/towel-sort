module.exports = function towelSort (matrix) {
    if(matrix === undefined) {return []}
    let arr = [];
    for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {let columns = i % 2 === 0 ? j : (matrix[i].length - j - 1);
        var newArr = arr.push(matrix[i][columns]);
    }} 
    return arr;
};
