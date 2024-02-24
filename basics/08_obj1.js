 //two ways to define a obj <no diff in performance>

 //type 1: singleton ::  -->using constructors -->object.Create()
 
 //type2: object literals::
    
    //creating an object
    let jsUser={
            key1: "hello",
            key2: "world",
            "full name": "tapan kapre",
            name: "tapan",
            company: "hehe",
            activeDays: ["monday", "wednesday"]  
    }; 
//<--------------------------------------------------------------------------------------------->

    //accessing objects two ways::
        //type1
        jsUser.name
    
        //type2
        jsUser["name"]
        jsUser["full name"] //not possible using type1

//<--------------------------------------------------------------------------------------------->

    //adding keys::
    jsUser.newkey="keynew"
    jsUser["newkey2"]="keyrepeat"

//<--------------------------------------------------------------------------------------------->

    //making functions:
    jsUser.greetings=function(){
        console.log("hello user")
    };
    //referencing data member of same obj
    jsUser.greetings2=function(){
        console.log(`hello user ${this.name}`)
    }
    jsUser.greetings2()





//Symbols
    
    //Defining Symbol
    const mySym1=Symbol("key1")
    const mySym2=Symbol("key2")

//<--------------------------------------------------------------------------------------------->

    //Using Symbol as a key of an object
    symCheck={
        [mySym1]: "mykeys1",
        mySym2: "mykeys2"
    }

    console.log(typeof(symCheck["mySym1"])) //gives undefined
    console.log(typeof(symCheck["mySym2"])) //gives string
    console.log(symCheck)

//<--------------------------------------------------------------------------------------------->
