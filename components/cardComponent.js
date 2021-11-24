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
