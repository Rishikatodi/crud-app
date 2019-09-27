const AllFruits = (props) => {

    var fruits = props.fruits.map((fruit) => {
        return(
            <div key={fruit.id}>
                <Fruit fruit={fruit} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} handleChange={props.handleChange}/>
            </div>
        )
    })

    return(
        <div>
            {fruits}
            <button style={{ backgroundColor: 'turquoise', height: '30px'
            }} onClick={()=>props.buyNow()}>Buy Now</button>
        </div>
    )
}