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
            <>
            <div className="container-scroller">
                <Navbar />
                <div className="container-fluid page-body-wrapper">
                    <Slidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <div className="row">
                                <div className="col-md-6 grid-margin stretch-card">
                                    <div className="card">
                                        <div className="card-body">
                                            <h4 className="card-title">Default form</h4>
                                            <p className="card-description">Basic form layout</p>
                                            <form className="forms-sample">
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputUsername1">Tên thành phố</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleInputUsername1"
                                                        placeholder="Username"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputEmail1">Tên Quận</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        placeholder="Email"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="exampleInputPassword1">Ngày thành lập</label>
                                                    <input
                                                        type="number"
                                                        className="form-control"
                                                        id="exampleInputPassword1"
                                                        placeholder="Password"
                                                    />
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group row">
                                                        <label className="col-sm-4 col-form-label">Status</label>
                                                        <div className="col-sm-12">
                                                            <select className="form-control">
                                                                <option>using</option>
                                                                <option>under construction</option>
                                                                <option>under repair</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <button type="submit" className="btn btn-primary me-2">
                                                    Submit
                                                </button>
                                                <button className="btn btn-light">Cancel</button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
        )
    }
}

export default CreateStreet;