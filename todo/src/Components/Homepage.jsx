import { useState } from "react"

const Homepage = ()=>{
    const [todotext , setTodoText] = useState({name : ""})
    const [todo , setTodo] = useState([])

    const handleChange = (event)=>{
        setTodoText({...todo ,[event.target.name]:event.target.value })
        // console.log(todotext)
    }

    function handleSubmit(event){
        event.preventDefault()
        setTodo([...todo , todotext])
        console.log(todo)
        setTodoText("")
    }

    function deleteTodo (index){
        const items = todo
        items.splice(index , 1)
        console.log(items.length)
        setTodo([...items])
    // console.log(index)
    }
    return(
        <>
        <h1>ToDo</h1>

            <form onSubmit={handleSubmit}>
                <input style={{width:'50%',height:'50px'}} type="text"  name="todo" value={todo.name} onChange={handleChange}/>
                <input type="submit" value="add " />
           
            </form>


            <section>
                {todo?.length ? <div>
                    {todo.map((todo,index)=>(
                        <div style={{display:'flex'}} key={index}>
                           <div key={index} style={{width:'50px'}}>{index+1}</div> 
                           <div style={{border:"1px solid red",width:'500px'}}>  {todo.todo}</div>
                            <button onClick={()=>deleteTodo(index)}>delete</button>
                       
                        </div>
                        
                    ))}
                </div> : <div>Add Todo</div> }
            </section>
        </>
    )
}

export default Homepage