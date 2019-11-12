import React from 'react'
import axios from 'axios'

class EditProduct extends React.Component{
    constructor(){
        super()
        this.state={
        product_id : '',
        product_name : '',
        product_price : '',
        }
    }

    componentDidMount = async () => {
        const product_id = this.props.match.params.product_id
        const res = await axios.get("http://localhost/reactapi/getProduct.php?product_id="+product_id)
    
        this.setState({
            product_id : res.data.product_id,
            product_name : res.data.product_name,
            product_price : res.data.product_price
        })
    }

    handleChange = (e) =>{
        this.setState({ [e.target.name] : e.target.value })
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        console.log(this.state)
        await axios.post("http://localhost/reactapi/editProduct.php", 
        this.state)
        this.props.history.push('/product');
    }

    render(){
        return(
            <div>
                <h5>Edit Product</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label for="product_id">Id Barang</label>
                        <input type="text" className="form-control"
                        name="product_id" value={this.state.product_id} 
                        onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="product_name">Nama Barang</label>
                        <input type="text" className="form-control"
                        name="product_name" value={this.state.product_name} 
                        onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label for="product_price">Harga Barang</label>
                        <input type="text" className="form-control"
                        name="product_price" value={this.state.product_price} 
                        onChange={this.handleChange} />
                    </div>

                    <button type="submit" className="btn btn-danger">
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}

export default EditProduct