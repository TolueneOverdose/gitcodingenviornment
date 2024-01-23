let score="33"
console.log(typeof score) //string
let valueInNumber=Number(score)
console.log(typeof valueInNumber) //number
//converting anything other than numbers or boolean to Number() will result in NaN
//"22"=> 22 "hello"=> NaN undefined=> NaN 

// true=>1 false=>0

console.log(typeof Number(false)) //number
console.log(Number(true)) //1

//similarly try for boolean using Boolean()
//1=> true 0=> false
//"not empty"=>true  ""=>false