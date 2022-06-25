import React, { Component } from 'react';

class CreateStreet extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            districtId: '',
            establishment: '',
            description: '',
            status: 1,
        }
    }

    componentDidMount() {
    }

    fetchData = () => {
        fetch('https://assignment-jpa.herokuapp.com/api/v1/streets')
            .then(res => res.json())
            .then(res => {
                
            })
    }

    submitForm = () => {
        fetch('https://assignment-jpa.herokuapp.com/api/v1/streets', {
            method: 'POST',
            body: JSON.stringify( {
                name: this.state.name,
                districtId: this.state.districtId,
                description: this.state.description,
                establishment: this.state. establishment,
                status: this.state.status
            }),
            headers: {
                'Content-Type': 'application/json',
              },
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
            })
    }

    render() {
        return (
            <div>
                <h1>Hello CreateProduct</h1>
             Name:   <input type="text" onChange={(ev) => this.setState({ name: ev.target.value }) }/> <br/>
             Description:   <input type="text" onChange={(ev) => this.setState({ description: ev.target.value }) }/> <br/>
             Status:   <select onChange={(ev) => this.setState({ status: ev.target.value }) }>
                <option value={1}>Active</option>
                <option value={2}>Deactive</option>
             </select>
             <button onClick={this.submitForm} type="sumit">Submit</button>
            </div>
        )
    }
}

export default CreateStreet;