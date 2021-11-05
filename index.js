// console.log("👀")  //


////  The DOM Section of JS

let something = document.querySelector("h1")
console.log("This is Something ->", something)  //

// something.textContent = "Y'all Are Doing Awesome! 💛"
something.innerText = "Y'all Are Doing Awesome! 💛"


//////////////////////////////////////////////////
















////  The Logical Section of JS


let variable1 = 1
// console.log("This is variable1 ->", variable1)  //


function changeAVariable(placeholderParameter){
    console.log("---- INSIDE: changeAVariable ----")  //
    console.log("This is placeholderParameter ->", placeholderParameter)  //

    placeholderParameter = 2

        console.log("This is placeholderParameter ->", placeholderParameter)  //

    return placeholderParameter

}

// changeAVariable(    )

// changeAVariable(variable1)





function aFunctionWithoutParameters(){
    console.log("---- INSIDE: aFunctionWithoutParameters ----")  //
}
// aFunctionWithoutParameters()


//////////////////////////////////////////////////
