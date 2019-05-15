class Matrix{
    constructor(rows, cols){
       this.rows = rows
       this.cols  = cols

       this.data  = []

       //Constrói a bidimensionalidade em JS
       for (let i = 0; i < rows; i++) {
            let arr = []
           for (let j = 0; j < cols; j++) {
                arr.push(0) 
           }
           this.data.push(arr)
       }
    }
    static arrayToMatrix(arr){
        let matrix = new Matrix(arr.length, 1)
        
        matrix.map((elm, i, j)=>{
            return arr[i]
        })
        return matrix
    }
    static transpose(A){
        var matrix = new Matrix(A.cols, A.rows)
        matrix.map((num, i, j)=>{
            return A.data[j][i]
        })
        return matrix
    }
    print(){
        console.table(this.data)
    }
    randomize(){
        this.map((elm, i, j)=>{
            return Math.random()*2 - 1
        })
    }
    static map(A, func){
        let matrix = new Matrix(A.rows, A.cols)

        matrix.data = matrix.data.map((arr, i)=>{
            return arr.map((num, j) => {
                return func(num, i, j)
            })
        })
        return matrix
    }
    //ReMapeia os arrays
    map(func){
        this.data = this.data.map((arr, i)=>{
            return arr.map((num, j) => {
                return func(num, i, j)
            })
        })
        return this
    }
    static escalar_multiply(A, escalar){
        var matrix = new Matrix(A.rows, A.cols)

        matrix.map((num, i, j)=>{
            return A.data[i][j] * escalar
        })
        return matrix
    }
    static hadamard(A, B){
        var matrix = new Matrix(A.rows, A.cols)

        matrix.map((num, i, j)=>{
            return A.data[i][j] * B.data[i][j]
        })
        return matrix
    }
    //Falta implementar uma maneira de tratar os erros no cálculo de matrizes com valores vazios
    //Soma as matrizes
    static add(A, B){
        var matrix = new Matrix(A.rows, A.cols)

        matrix.map((num, i, j)=>{
            return A.data[i][j] + B.data[i][j]
        })
        return matrix
    }
    //Subtração de Matrizes
    static subtract(A, B){
        var matrix = new Matrix(A.rows, A.cols)

        matrix.map((num, i, j)=>{
            return A.data[i][j] - B.data[i][j]
        })
        return matrix
    }
    //Multiplica as matrizes
    static multiply(A, B){
        var matrix = new Matrix(A.rows, B.cols)

        matrix.map((num, i, j)=>{
            let sum = 0
            for (let k = 0; k < A.cols; k++) {
                const elementA = A.data[i][k]
                const elementB = B.data[k][j]

                sum += elementA * elementB
            }
            return sum
        })
        return matrix
    }
}