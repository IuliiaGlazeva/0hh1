import React, {PureComponent} from 'react'
import'./loginButton.css'


export default class LoginForm extends PureComponent {
	state = {}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.onSubmit(this.state)
	}

	handleChange = (event) => {
    const {email, value} = event.target

    this.setState({
      [email]: value
    })
  }

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<div>
					<label htmlFor="email">Email</label>
					<input type="email" name="email" id="email" value={
						this.state.email || ''
					} onChange={ this.handleChange } />
				</div>

				<div>
					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" value={
						this.state.password || ''
					} onChange={ this.handleChange } />
				</div>

				<button className="login" type="submit">Login</button>
			</form>
		)
	}
}
