class Body extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: [],
            orderObj: [],
            selectedItems: []
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.addNewFruit = this.addNewFruit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.buyNow = this.buyNow.bind(this);
        this.deleteFruit = this.deleteFruit.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.updateFruit = this.updateFruit.bind(this)
    }
    componentDidMount(){
        fetch('/api/v1/fruits.json')
            .then((response) => {return response.json()})
            .then((data) => {this.setState({ fruits: data }) });
    }
    handleFormSubmit(name, description, quantity){
        let body = JSON.stringify({fruit: {name: name, description:   description, quantity: parseInt(quantity)} })
        fetch('http://localhost:3000/api/v1/fruits', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body,
        }).then((response) => {return response.json()})
            .then((fruit)=>{
                this.addNewFruit(fruit)
            })
    }
    addNewFruit(fruit){
        this.setState({
            fruits: this.state.fruits.concat(fruit)
        })
    }
    buyNow(){
        if(this.state.orderObj && Object.keys(this.state.orderObj).length){
            let body = JSON.stringify({order: {orderItems: this.state.orderObj}})
            console.log(body);
            fetch('http://localhost:3000/api/v1/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body,
            }).then((response) => {return response.json()})
                .then((order)=>{
                    console.log(order);
                })
        }
    }
    handleChange(name, value){
        // if(Object.keys(this.state.orderObj).indexOf(name)<0) {
        //     this.setState(
        //         {orderObj: {name: value}});
        // }
        // else
        // {
        if(this.state.selectedItems.indexOf(name)<0){
            this.state.orderObj.push({
                name: name,
                quantity: parseInt(value)
            });
            this.state.selectedItems.push(name);
        }
        else{
            this.state.orderObj.map(
                function iterator( orderItem ) {
                    console.log(orderItem);
                    if(orderItem[name] == name)
                        orderItem[quantity] = parseInt(value)
                }, this);
        }

    }
    handleDelete(id){
        fetch(`http://localhost:3000/api/v1/fruits/${id}`,
            {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
            this.deleteFruit(id)
            console.log('Item was deleted!')
        })
    }
    deleteFruit(id){
        newFruits = this.state.fruits.filter((fruit) => fruit.id !== id)
        this.setState({
            fruits: newFruits
        })
    }
    handleUpdate(fruit){
        fetch(`http://localhost:3000/api/v1/fruits/${fruit.id}`,
            {
                method: 'PUT',
                body: JSON.stringify({fruit: fruit}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => {
            this.updateFruit(fruit)
        })
    }
    updateFruit(fruit){
        let newFruits = this.state.fruits.filter((f) => f.id !== fruit.id)
        newFruits.push(fruit)
        this.setState({
            fruits: newFruits
        })
    }
    render(){
        return(
            <div>
                <NewFruit handleFormSubmit={this.handleFormSubmit}/><br/>
                <AllFruits handleChange={this.handleChange} buyNow={this.buyNow} fruits={this.state.fruits} handleDelete={this.handleDelete} handleUpdate = {this.handleUpdate}/>
            </div>
        )
    }
}