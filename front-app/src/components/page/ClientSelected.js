import React from 'react';
import { BrowserRouter as Route, Link} from "react-router-dom";

class ClientSelected extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id : '',
      email : '',
      fitstname : '',
      lastname : '',
      flash : {},
      isSubmit : false,
      deleted : false
    }

  }

  componentDidMount(){
    let url = window.location.href;
    var arrayURL = url.split("/");
    this.setState({
      email : arrayURL[7],
      lastname : arrayURL[6],
      firstname : arrayURL[5],
      id : arrayURL[4],
      isSubmit : false,
      deleted : false
    })
  }


  handleChange = (event) => {
    const {target} = event;
    this.setState({
      [target.name] : target.value
    })
  }

  submited = () => {
    this.setState({
      isSubmit : true
    })
  }


  handleSubmit = (event) => {
    event.preventDefault();
    this.submited();
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
      method : 'PUT',
      headers : {
        'Accept' : 'application/json',
        'Content-Type' : 'application/json'
      },
      options : {
        mode : 'no-cors'
      },
      body : JSON.stringify(dataForm)
    };

    const urlApi = `http://localhost:5000/api/clients/${this.state.id}`;

    fetch(urlApi, options)
    .then(response  =>  response.json())
    .then(
        res  =>  this.setState({"flash":  res.flash}),
        err  =>  this.setState({"flash":  err.flash})
    )
  }

  deleteClient = () => {
    this.setState({deleted:true});
    const options = {
      method : 'DELETE'
    }
    const urlApi = `http://localhost:5000/api/clients/${this.state.id}`;

    fetch(urlApi, options)
    .then(response  =>  response.json())
  }

  render(){
    return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <div>
            <form onSubmit={this.handleSubmit}>
                <h3>Edit client</h3>

                <div className="form-group">
                    <label htmlFor="firstname">Firsname</label>
                    <input id="firstname" name="firstname" type="text" value={this.state.firstname} className="form-control" onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="lastname">Lastname</label>
                    <input id="lastname" name="lastname" type="text" className="form-control" value={this.state.lastname}  onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input id="email" name="email" type="email" className="form-control" value={this.state.email}  onChange={this.handleChange} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">
                  {
                    !this.state.isSubmit
                    ? "Save"
                    : "Client has been editing"
                  }
                </button>


            </form>

              <p> </p>
              <Link to="/clients" className="btn btn-primary btn-block" onClick={() => this.deleteClient()}>
              {
                !this.state.deleted
                ? "Delete"
                : "Client has been deleted"
              }
              </Link>

          </div>
      </div>
    </div>
    )
  }
}


export default ClientSelected;
// value={this.props.selectedClient[1]}
