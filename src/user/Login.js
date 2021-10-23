//~ import React, {useState} from 'react'

//~ export default function Login({ dispatchUser }) {

    //~ //const [username, setUsername] = useState('');
	//~ const [ formData, setFormData ] = useState({
		//~ username: "",
		//~ password: ""
	//~ })

   //~ return (
        //~ <form onSubmit={evt => {evt.preventDefault(); dispatchUser({type:"LOGIN", username: formData.username})} }>
            //~ <label htmlFor="login-username">Username:</label>
            //~ <input type="text" name="login-username" value={formData.username} onChange={e => setFormData({...formData, username: e.target.value})}  id="login-username" />
            //~ <label htmlFor="login-password">Password:</label>
            //~ <input type="password" name="password" value={formData.password} id="login-password" onChange={e => setFormData({...formData, password: e.target.value})} />
            //~ <input type="submit" value="Login" disabled={formData.username.length === 0 || formData.password.length === 0} />
        //~ </form>
    //~ )
//~ }

import React, {useState, useEffect} from 'react'
import { useContext } from 'react/cjs/react.development';

import { StateContext } from '../Contexts';
import { useResource } from 'react-request-hook';

import { Modal, Form, Button } from 'react-bootstrap';

export default function Login({show, handleClose}) {

    const {dispatch} = useContext(StateContext)

    const [username, setUsername] = useState('');
    const [ password, setPassword ] = useState('')
    const [ loginFailed, setLoginFailed ] = useState(false)

    function handleUsername (evt) { setUsername(evt.target.value) } 
    function handlePassword (evt) { setPassword(evt.target.value) }

    const [ user, login ] = useResource((username, password) => ({
        url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
        method: 'get'
    }))

    useEffect(() => {
        if (user && user.data) {
            if (user.data.length > 0) {
                            setLoginFailed(false)
                            dispatch({ type: 'LOGIN', username: user.data[0].username })
            } else {
                            setLoginFailed(true)
            }
        } 
    }, [user])

   return (
        <Modal show={show} onHide={handleClose}>
        <Form onSubmit={e => { e.preventDefault(); login(username, password); handleClose() }}>
        <Modal.Header closeButton>
            <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="login-username">Username:</Form.Label>
          <Form.Control type="text" value={username} onChange={handleUsername} name="login-username" id="login-username" />
          <Form.Label htmlFor="login-password">Password:</Form.Label>
          <Form.Control type="password" value={password} onChange={handlePassword} name="login-password" id="login-password" />
          {loginFailed && <Form.Text style={{ color: 'red' }}>Invalid username or password</Form.Text>}
          </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
            <Button variant="primary" disabled={username.length === 0} type="submit">Login</Button>
        </Modal.Footer>
    </Form>
    </Modal>

    )
}

