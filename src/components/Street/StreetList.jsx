import axios from 'axios';
import React, { Component } from 'react';
class StreetList extends Component {
    constructor() {
        super();
        this.state = {
           streets: [],
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        fetch('https://assignment-jpa.herokuapp.com/api/v1/streets')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    products: res
                })
            })
    }

    deleteProduct = (id) => {
        const url = `https://spring-summer.herokuapp.com/api/v1/products/${id}`;
        // fetch(url, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type':'application/json',
        //       },
        //       body: JSON.stringify({})
        // })
        //     .then(res => res.json())
        //     .then(res => {
        //     })
        //     this.fetchData();

        axios.delete(url)
        .then(res => {
            this.fetchData();
        });

    }

    render() {
        return (
            <div>
                <h1>Hello ProductList</h1>
                <ul>
                    {
                        this.state.streets.map((street, index) => {
                            return (
                                <li key={index}>{street.name} - Price: {street.description} 
                                <button onClick={() => this.deleteProduct(street.id)}>Delete</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default StreetList;