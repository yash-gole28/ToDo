import { useState } from "react"

const Homepage = () => {
    const [todotext, setTodoText] = useState({ todo: "" })
    const [todo, setTodo] = useState([])
    const [check, setCheck] = useState(false)

    const handleChange = (event) => {
        setTodoText({ ...todo, [event.target.name]: event.target.value })

        // console.log(todotext)
    }

    function handleSubmit(event) {
        event.preventDefault()
        setTodo([...todo, {...todotext}])
        setTodoText({todo:""})
        console.log(todo)
    }

    function deleteTodo(index) {
        const items = todo
        items.splice(index, 1)
        console.log(items.length)
        setTodo([...items])
        setCheck(!check)
        // console.log(index)  
    }
    
    function changeCheck(){
        
        console.log(check)
    }
    

    const handleCheck = check ? "active-check" : "inactive-check";
    return (
        <>
            <h1>ToDo</h1>

            <form onSubmit={handleSubmit}>
                <input style={{ width: '50%', height: '50px' }} type="text" name="todo" value={todotext.todo} onChange={handleChange} />
                <input type="submit" value="add " />

            </form>


            <section>
                {todo?.length ? <div>
                    {todo.map((todo, index) => (
                        <div style={{ display: 'flex' }} key={index}>
                            <div key={index} style={{ width: '50px' }}>{index + 1}</div>
                            <div style={{ border: "1px solid red", width: '500px' }}>  {todo.todo}</div>
                            <input type="checkbox" onClick={changeCheck} onChange={()=>setCheck(!check)} className={handleCheck} />
                            <button className="delete" onClick={() => deleteTodo(index)}>delete</button>

                        </div>

                    ))}
                </div> : <div>Add Todo</div>}
            </section>
        </>
    )
}

export default Homepage