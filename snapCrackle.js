function snapCrackle(maxValue){
    let arr = []
    
    for(let i = 1; i <= maxValue; i++){
        if (i % 2 === 0){
            arr.push(' Snap')
        }
        if (i % 5 === 0){
            arr.push(' Crackle')
        }
        if (i % 2 > 0 && i % 5 === 0){
            arr.push(' SnapCrackle')
        }
        if (i % 2 === 0 && i % 5 !== 0){
            arr.push(' '+i)
        }
        
    }
    console.log(arr.toString())
}