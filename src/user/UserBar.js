//~ import React from 'react'

//~ import Logout from './Logout'
//~ import Register from './Register'
//~ import Login from './Login'

//~ export default function UserBar() {
  
  //~ const user = ''

  //~ if (user) {
      //~ return <Logout user={user} />
  //~ } else {
      //~ return (
          //~ <>
            //~ <Login />
            //~ <hr/>
            //~ <Register />
          //~ </>
      //~ )
  //~ }
//~ }


import React, {useState} from 'react'

import Logout from './Logout'
import Register from './Register'
import Login from './Login'

export default function UserBar({user, dispatchUser}) {
  
  if (user) {
      return <Logout user={user} dispatchUser={dispatchUser} />
  } else {
      return (
          <>
            <Login dispatchUser={dispatchUser} />
            <Register dispatchUser={dispatchUser} />
          </>
      )
  }
}
