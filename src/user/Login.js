import React, {useState} from 'react'

export default function Login({ dispatchUser }) {

    //const [username, setUsername] = useState('');
	const [ formData, setFormData ] = useState({
		username: "",
		password: ""
	})

   return (
        <form onSubmit={evt => {evt.preventDefault(); dispatchUser({type:"LOGIN", username: formData.username})} }>
            <label htmlFor="login-username">Username:</label>
            <input type="text" name="login-username" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})}  id="login-username" />
            <label htmlFor="login-password">Password:</label>
            <input type="password" name="password" value={formData.password} id="login-password" onChange={e => setFormData({...formData, password: e.target.value})} />
            <input type="submit" value="Login" disabled={formData.username.length === 0 || formData.password.length === 0} />
        </form>
    )
}
