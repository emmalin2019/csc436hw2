import React, { useContext } from 'react'

import CreateTodo from '../CreateTodo'
import UserBar from '../user/UserBar'
import Header from '../Header'
import ChangeTheme from '../ChangeTheme'

import { Link } from 'react-navi'

import { Navbar, Nav, Container } from 'react-bootstrap'

import { ThemeContext, StateContext } from '../Contexts'

export default function HeaderBar ({setTheme }) {
    const theme = useContext(ThemeContext)
    const {state} = useContext(StateContext)
    const {user} = state;

    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/"><Header text="My Todos" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {user && <Nav.Link><Link href="/todo/create">Create New Todo</Link></Nav.Link>}
              <ChangeTheme theme={theme} setTheme={setTheme} />
            </Nav>
            <React.Suspense fallback={"Loading..."}>
              <UserBar />
            </React.Suspense>
          </Navbar.Collapse>
        </Container>
        </Navbar>



    )
}
