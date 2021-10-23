import React, {useState, useEffect, useContext} from 'react'
import { Link } from 'react-navi'
import { Card } from 'react-bootstrap'

import { ThemeContext, StateContext } from './Contexts'

import { useResource } from 'react-request-hook'
import { useNavigation } from 'react-navi'

import axios from 'axios'

export default function Todo ({
  title, author, description, dateCreated, complete, dateCompleted, id,
  hidden }) {
       const {dispatch} = useContext(StateContext)
       const {secondaryColor} = useContext(ThemeContext)
  //console.log(title, author, description, dateCreated, complete, dateCompleted, id,
  //hidden)
  
  const [todo , delTodo ] = useResource(({ id }) => ({
        url: '/todos/' + id,
        method: 'delete',
        data: { id }
    }))
  
  const [todox , upTodo ] = useResource(({ id }) => ({
        url: '/todos/'+ id,
        method: 'put',
        data: {id, complete: true, dateCompleted: Date.now()  }
        //body: {id, complete: true, dateCompleted: Date.now() }
    }))  
  const navigation = useNavigation()

  
  function handleUpdate(id) {
    
    fetch('http://localhost:4000/todos/' + id, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({id, complete: true, dateCompleted: Date.now() ,title, description,
      author,dateCreated,hidden})
    //body: JSON.stringify({id, complete: true, dateCompleted: Date.now() , })
    //~ "title": "i",
      //~ "description": "iujiuh",
      //~ "author": "a",
      //~ "dateCreated": 1634873345765,
      //~ "complete": false,
      //~ "dateCompleted": null,
      //~ "hidden": false,
      //~ "id": 1
    })
    .then(response => response.json());
  }
  
  
  function handleDel () {
    
    //~ axios.delete('/todos/' + id)
        //.then(() => setStatus('Delete successful'));
    delTodo({ id })
    dispatch({ type: 'DELETE_TODO', id: id })
               
        
    }

    useEffect(() => {////
        //~ if (todo && todo.data) {
            //~ dispatch({ type: 'DELETE_TODO', id: todo.data.id })
            //~ //console.log(post.data)
            //~ navigation.navigate(`/`)
       //~ }
    }, [todo,todox])


  return (
   <div>
    {hidden == true ? '' :
      <div>
        <h3>{title}</h3>
        <div>ID: {id}</div>
        <div>Description: {description}</div>
        <div>Date created: {new Date(dateCreated).toISOString().split('T')[0]}</div>
        <div>Completed:  
         {complete==true ?
           <input type="checkbox" checked disabled /> :
           <input type="checkbox" 
               onClick={e => {
                 let dc = Date.now();
                 dispatch({type:"TOGGLE_TODO", id: id, dateCompleted: dc});
                 e.target.disabled = true;
                 let j = document.createElement('div');
                 j.innerText = 'Date completed: ' + 
                   new Date(dc).toISOString().split('T')[0];
                 e.target.parentNode.parentNode.appendChild(j);
                handleUpdate(id);
                //upTodo(id);
               }}
             />
          } 
        
       </div>
        
        <i>Written by <b>{author}</b></i>
        
        {complete == true ? 
          <div id={"id-" + id}>Date completed: 
           {new Date(dateCompleted).toISOString().split('T')[0]}</div> :
           ""
        } 
        <div>
          <button 
            onClick={e => {
              e.preventDefault();
              handleDel();
               //dispatch({type:"DELETE_TODO", id: id});
               
             }}
          >Delete</button>
        </div>
      </div>
    }
  </div> 
 )
}



//~ import React, {useContext} from 'react'
//~ import { Link } from 'react-navi'
//~ import { Card } from 'react-bootstrap'

//~ import { ThemeContext, StateContext } from './Contexts'

//~ function Post ({ title, content, author, complete, completedOn, postId, short = false }) {
     
     //~ const {secondaryColor} = useContext(ThemeContext)
     //~ const {dispatch} = useContext(StateContext)

     //~ let processedContent = content

     //~ if (short) {
          //~ if (content.length > 30) {
               //~ processedContent = content.substring(0, 30) + '...'
          //~ }
     //~ }

     
     //~ return (
          //~ <Card>
          //~ <Card.Body>
              //~ <Card.Title><Link style={{ color: secondaryColor }} href={`/post/${postId}`}>{title}</Link>
              //~ </Card.Title>
              //~ <Card.Subtitle>
              //~ <i>Written by <b>{author}</b></i>
              //~ </Card.Subtitle>
              //~ <Card.Text>
                  //~ {processedContent}
              //~ </Card.Text>
              //~ {short && <Link href={`/post/${postId}`}>View full post</Link>}
            
          //~ </Card.Body>
          //~ </Card>

 //~ )
//~ }

//~ export default React.memo(Post);
