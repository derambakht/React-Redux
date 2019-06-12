import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { simpleAction } from './actions/simpleAction';
import {addProduct, getProducts} from './actions/productAction'

class App extends Component {

  simpleAction = (event) => {
    this.props.simpleAction();
  }

  addNewProduct = () => {
    let product = {id:101, title:'sumsung aaaa', price:100};
    this.props.addNewProduct(product);
  }

  render() {
    return (
      <div className="App">
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={this.simpleAction}>Test redux action</button>
        <button onClick={this.addNewProduct}>Add New Product</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products:state.productReducer,
  simpleReducer : state.simpleReducer
})

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction()),
  addNewProduct : (data) => dispatch(addProduct(data)),
  getAllProducts : () => dispatch(getProducts()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);