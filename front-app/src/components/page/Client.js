import React from 'react';

class Client extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email : '',
      fitstname : '',
      lastname : '',
      flash : {},
      submited : false
    }

  }

  componentDidMount(){
    this.setState({submited:false})
  }


  handleChange = (event) => {
    const {target} = event;
    this.setState({
      [target.name] : target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({submited:true})
    const data = new FormData(event.target);

    const email = data.get("email");
    const firstname = data.get("firstname");
    const lastname = data.get("lastname");

    const dataForm = {
      firstname : firstname,
      lastname : lastname,
      email : email
    }

    const options = {
      method : 'POST',
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      options : {
        mode : 'no-cors'
      },
      body : JSON.stringify(dataForm)
    };

    const urlApi = 'http://localhost:5000/api/clients';

    fetch(urlApi, options)
    .then(
      res  =>  res.json()
    )
    // .then(
    //   res => this.props.updateAllClients(res)
    // )
    .then(
        res  =>  this.setState({"flash":  res.flash}),
        err  =>  this.setState({"flash":  err.flash})
    )

  }

  render(){
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div>
            <form onSubmit={this.handleSubmit}>
                <h3>Add a client</h3>

                <div className="form-group">
                    <label htmlFor="firstname">Firsname</label>
                    <input id="firstname" name="firstname" type="text" className="form-control" placeholder="Enter firstname" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="lastname">Lastname</label>
                    <input id="lastname" name="lastname" type="text" className="form-control" placeholder="Enter lastname" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input id="email" name="email" type="email" className="form-control" placeholder="Enter email" onChange={this.handleChange} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                {
                  !this.state.submited
                  ? "Save"
                  : "Client submited"
                }
                </button>
            </form>

          </div>
      </div>
    </div>
    )
  }
}


export default Client;
