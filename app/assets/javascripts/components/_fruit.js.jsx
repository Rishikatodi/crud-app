class Fruit extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            editable: false
        }
        this.handleEdit = this.handleEdit.bind(this)
    }

    handleEdit(){
        if(this.state.editable){
            let name = this.name.value
            let quantity = this.quantity.value
            let id = this.props.fruit.id
            let fruit = {id: id, name: name, quantity: quantity}
            this.props.handleUpdate(fruit)
        }
        this.setState({
            editable: !this.state.editable
        })
    }

    render(){
        let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.fruit.name}/>:<h3>{this.props.fruit.name}</h3>
        let quantity = this.state.editable ? <input type='text' ref={input => this.quantity = input} defaultValue={this.props.fruit.quantity}/>:<p>{this.props.fruit.quantity}</p>
        return(
            <div>
                {name}
                {quantity}
                {/*<span>{this.props.fruit.name}</span> -*/}
                {/*<span>{this.props.fruit.quantity}</span>*/}
                <button onClick={() => this.handleEdit()}>{this.state.editable? 'Submit' : 'Edit'}</button>
                <button style={{marginLeft: '20px'}} onClick={() => this.props.handleDelete(this.props.fruit.id)}>Delete</button>
                <br/>
                <UserInputs name={this.props.fruit.name} handleChange={this.props.handleChange}></UserInputs>
                <br/>
                <br/>
            </div>
        )
    }
}