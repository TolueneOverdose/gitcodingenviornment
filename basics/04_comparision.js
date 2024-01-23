




//comparison between two different data types is confusing

console.log('2'==2)//true
console.log('3'<0)//false

console.log(null>0)//false  (> < >= converts null to 0)
console.log(null==0)//false (== does not convert null to 0)
console.log(null>=0)//true

console.log(NaN>0)//false  (> < >= converts null to 0)
console.log(NaN==0)//false (== does not convert null to 0)
console.log(NaN>=0)//false

// use === for hard comparision with type taken into consideration
console.log('0'=== 0) //false