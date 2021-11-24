


    const appendEverything = document.querySelector("#append-everything")

        const h1ToAppend = document.createElement("h1")
            h1ToAppend.textContent = "Woobly"

            appendEverything.append(h1ToAppend)

    
    




    function h1Component(){

        const h1ToAppend = document.createElement("h1")
        h1ToAppend.textContent = "Woobly!"

        return( h1ToAppend )

        // appendEverything.append(h1ToAppend)

    }
    // h1Component()


    const h1ComponentA =()=>{

        const h1ToAppend = document.createElement("h1")
        h1ToAppend.textContent = "Woobly!!"

        return( h1ToAppend )

        // appendEverything.append(h1ToAppend)

    }
    // h1ComponentA()




    ////////////////////////








    // import cardComponent from "./components/cardComponent.js"


    function cardComponent(props){

        //// js
    
        const divForCard = document.createElement("div")
    
        divForCard.innerHTML = `<div>
        
            <h3>${props.name}</h3>
            <img src=${props.image} />
            <h4>Favortie Color: Gold </h4>
    
        </div>`
    
        ////  js
    
    
    
    
        //// returning some HTML Like Data
        return(divForCard)
        // return(`<div>
        
        //     <h3>${props.name}</h3>
        //     <img src=${props.image} />
        //     <h4>Favortie Color: Gold </h4>
    
        // </div>`)
    
    }
    // export default cardComponent

    
    
    
    const App =(functionToReturnHTMLToAppend)=>{

        console.log("functionToReturnHTMLToAppend: ", functionToReturnHTMLToAppend)


        const appendThis = functionToReturnHTMLToAppend()
        console.log("appendThis: ", appendThis)


        appendEverything.append(appendThis)


    }
    App(h1Component)  //  < h1Component />
    App(h1ComponentA)
    // App(cardComponent)



    



    let samObj = {
       name: "Sam",
       image: "https://ca.slack-edge.com/T02MD9XTF-U018W9H54N6-6bb69b64ec24-512" 
    }

        App( ()=> cardComponent(samObj) ) // < cardComponent samProp={samObj} />

    let notSamObj ={

        name: "notSam",
        image: "https://pbs.twimg.com/profile_images/1441801943916101634/3U5S-guY_400x400.jpg"

    }

        App( ()=> cardComponent(notSamObj) )





















































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











// fetch("https://data.cityofnewyork.us/resource/k5k6-6jex.json")
// .then( response => response.json() )
// .then( data => console.log(data))








// const appendEverything = document.querySelector("#append-everything")

//     const h1ToAppend = document.createElement("h1")
//         h1ToAppend.textContent = "Woobly"

//     appendEverything.append(h1ToAppend)
//         // appendEverything.append(h1Component)
//         // appendEverything.append(h1ComponentA)




// // function App(){   }









//     function h1Component(){

//         const h1ToAppend = document.createElement("h1")
//         h1ToAppend.textContent = "Woobly!"

//         return( h1ToAppend )

//     }
//     const h1ComponentA =()=>{

//         const h1ToAppend = document.createElement("h1")
//         h1ToAppend.textContent = "Woobly!!"

//         return( h1ToAppend )

//     }

//     // createlement div > innerHTML  !!
//     // import w/ Files ```  ~xx





//     const reactBeLike =(thingToAppend)=>{

//         console.log("thingToAppend: ", thingToAppend)

//         const appendThis = thingToAppend()

//         appendEverything.append(appendThis)

//     }
//     // reactBeLike()
//     reactBeLike(h1Component)
//     reactBeLike(h1ComponentA)


// function App(){   

    //     reactBeLike(h1Component)
    //     reactBeLike(h1ComponentA)

// }

