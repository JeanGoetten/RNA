function setup(){

    var A = new Matrix(2,2)
    var B = new Matrix(2,2)

    A.randomize()
    A.print()
    B.randomize()
    B.print()

    var C = Matrix.subtract(A, B)

    C.print()

    
}
