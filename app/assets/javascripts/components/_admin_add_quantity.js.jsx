class AdminAddQuantity extends React.Component {
    constructor(props){
        super(props);
        this.state = {quantity: 0, fruits: []};
    }
    // componentDidMount(){
    //     fetch('/api/v1/fruits.json')
    //         .then((response) => {return response.json()})
    //         .then((data) => {this.setState({ fruits: data }) });
    // }
    // handleChange = event => {
    //     this.setState({ quantity: event.target.value });
    // };
    render() {
        return (
            <React.Fragment>
                <form>
                    <label htmlFor="quantity">quantity</label>
                    <input
                        type="number"
                        name="quantity"
                        value={this.state.quantity}
                        onChange={this.handleChange}
                    />
                </form>

                <h3>{}: {this.state.quantity}</h3>
            </React.Fragment>
        );
    }
}