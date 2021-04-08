import React from 'react'
import Todo from './Todo'
function Todos({todos,filteredtodos,settodos}){
    return(
        <div>
       {filteredtodos.map((item)=>{
           return(
               <Todo key={item.id} todos={todos} text={item.text} settodos={settodos} todo={item}/>
           )
       })}
       </div>
    )
}
export default Todos