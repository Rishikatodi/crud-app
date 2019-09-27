class UserInputs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputs: [],
            name: props.name
        };
        this.input = React.createRef();

        this.addInput = this.addInput.bind(this);
    }

    addInput(){
        this.setState(prev => ({ inputs: [...prev.inputs, 'Hi'] }))
    }

    render() {
        return (
            <div>
                <button onClick={this.addInput}>Add To Cart</button>
                {this.state.inputs.map(node => <input ref={this.input} style={{marginLeft: '10px'}} placeholder={'Enter qty to be purchased'} onChange={()=>this.props.handleChange(this.state.name, this.input.current.value)}/>)}
            </div>
        )
    }
}

//ReactDOM.render(<InputBox/>, document.getElementById('root'))