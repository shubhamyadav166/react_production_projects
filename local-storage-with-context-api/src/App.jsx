import { useEffect, useState } from "react"
import { TodoProvider } from "./context"
import TodoForm from "./components/TodoForm"
import { TodoItem } from "./components"


function App() {
  // context api-works

  const [todos, setTodo] = useState([])

  const addTodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), todo }, ...prev])
  }

  const updateTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => (prevTodo.id === id ? prev : prevTodo)))
  }
  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((preVal) => (preVal.id !== id)))
  }
  const toggleComplete = (id) => {
    setTodo((prev) => prev.map((preVal) => preVal.id === id ? { ...preVal, completed: !preVal.completed } : preVal))
  }
  // local storage

  // useEffect(() => {
  //   try {
  //     const todos = JSON.parse(localStorage.getItem("todos"))
  //   } catch (error) {
  //     console.log("Can not get any item Error:", error);

  //   }
  // }, [])

  // useEffect(() => {
  //   try {
  //     localStorage.setItem("todos", JSON.stringify(todos))
  //   } catch (error) {
  //     console.log("Can not get Local Value form local Storage Error:", error);

  //   }
  // }, [])

  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo, deleteTodo, toggleComplete }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            {/* Todo form goes here */}

            {<TodoForm />}
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (

              <div key={todo.id} className="w-full"> <TodoItem todo={todo} /> </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
