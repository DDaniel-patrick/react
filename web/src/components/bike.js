function Bike(props){
    const start = () => {
        alert("this is the bees knees")
    }

    const end = (a) => {
        alert(a)
    }
    return (
        <div className="Bike">           
            <h6>Using Bike Component</h6>
            <hr />
            <h2>This Bike is {props.name} Branded</h2>
            <hr />
            <h3>The model of this bike is {props.model}</h3>
            <button onClick={start}>Start The Bike!</button>
            <button onClick={ () => end("Offing Bike Now .....")}>Off The Bike!</button>
        </div>
    )
}

export default Bike;