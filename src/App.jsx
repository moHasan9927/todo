import React,{useState} from 'react'
import { FaMoon } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { ImCross } from "react-icons/im";
const App = () => {

  const [todo, setTodo] = useState("")
  const [allTodo, setAllTodo ] = useState([])

  const handleSubmit = (e) =>{
    e.preventDefault();
    const copyAllTodos = [...allTodo]
    copyAllTodos.push({ todo, completed: false })
    setAllTodo(copyAllTodos)
    console.log(allTodo)
    setTodo("");
  }

  const handleDelete = (idx) =>{
    const copy = [...allTodo]
    copy.splice(idx, 1)
    setAllTodo(copy)
  }

  const handleCheck = (idx) => {
  const copyTodos = [...allTodo]
  copyTodos[idx] = {
    ...copyTodos[idx],
    completed: !copyTodos[idx].completed
  }

  setAllTodo(copyTodos)
}


  
  
  
  return (
    <div className='bg-[#000000] min-h-screen font-sans p-4 md:p-7 lg:p-10'>
      <nav className='flex justify-between items-center'>
        <h1 className='font-bold text-5xl bg-gray-800 text-white p-3 rounded-2xl cursor-pointer transition-all active:scale-50 duration-150 shadow-gray-700 shadow-xl'>TO-DO</h1>
        <section className='text-4xl bg-gray-800 text-white p-4 rounded-full cursor-pointer transition-all duration-150 group shadow-gray-700 shadow-xl active:scale-95'>
          <IoMdSunny className='transition-transform duration-150 group-active:rotate-180 '></IoMdSunny>
          <FaMoon className='hidden'></FaMoon>
        </section>
      </nav>

      <main className='flex justify-center items-center mt-20 '>
        <div className='bg-gray-700 text-white p-10 shadow-gray-800 shadow-2xl rounded-3xl w-5/12'>
          <form 
          onSubmit={(e) =>handleSubmit(e)}
          className='grid grid-cols-5 gap-2'>
          <input 
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder='Enter Your Text'
          className='bg-white rounded-xl p-4 text-black placeholder:text-gray-300 placeholder:font-semibold text-xl font-semibold col-span-4'/>
          <button className='bg-gray-800 text-white font-bold px-4 rounded-xl cursor-pointer active:scale-95 transition-all duration-75 text-xl'>Add Task</button>
          </form>

          <div className='mt-8'>
            {allTodo.map((e,idx) =>{
            return  (
            <section
            key={idx}
            className='flex justify-between items-center  bg-gray-600 mb-3 px-3 py-3 rounded-lg'>
                <div className='flex gap-3 justify-center items-center'>
                  <input
                    type="checkbox"
                    checked={e.completed}
                    onChange={() => handleCheck(idx)}
                    className="h-5 w-5 accent-blue-500 cursor-pointer"
                  />
                  <h1
                    className={`font-semibold text-xl ${
                      e.completed ? "line-through text-gray-400" : ""
                    }`}
                  >
                  {idx+1}. {e.todo}
                </h1>

                </div>
                <button
                  disabled={e.completed}
                  onClick={() => handleDelete(idx)}
                  className={`bg-black rounded-full p-2 active:scale-95 ${
                    e.completed
                      ? "opacity-40 cursor-not-allowed"
                      : "hover:bg-gray-800 cursor-pointer"
                  }`}
                >
  <ImCross />
</button>


              </section>
          )
        })}
          </div>

        </div>
      </main>
    </div>
  )
}

export default App