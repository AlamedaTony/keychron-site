import { Component } from "react";
import { signUp } from '../../utilities/users-service'
//Class component example
export default class SignUpForm extends Component {
    state = {
        name: '',
        email: '',
        password: '',
        confirm: '',
        error: '',
    };

    handleChange = evt => {
        this.setState({
            [evt.target.name]: evt.target.value,
            error:''
        });
    }

    handleSubmit = async evt => {
        //prevents form from being submitted to the server so page doesn't rerender
        evt.preventDefault()

        try {
            // don't want to send the "error" or 'confirm' property,
            // so let's make a copy of the state object, then delete them
            const formData = {...this.state} // creates a copy of the state opbject
            delete formData.error; 
            // the promise returned by the signUp service method
            // will resolve to the user object included in the
            // payload of the JSON Web Token (JWT)
            delete formData.confirm;
            const user = await signUp(formData)
            this.props.setUser(user)
        } catch(err) {
            this.setState({ error: 'Sign Up Failed - Try Again'})
        }
    }

    render() {
        const disable = this.state.password !== this.state.confirm;
        return (
          <div>
            <div className="form-container">
              <form autoComplete="off" onSubmit={this.handleSubmit}>
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} required />
                <label>Email</label>
                <input type="email" name="email" value={this.state.email} onChange={this.handleChange} required />
                <label>Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange} required />
                <label>Confirm</label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange} required />
                <button type="submit" disabled={disable}>SIGN UP</button>
              </form>
            </div>
            <p className="error-message">&nbsp;{this.state.error}</p>
          </div>
        );
      }
}