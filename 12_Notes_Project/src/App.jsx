
import { useState } from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    setTask([...task, { title, detail }])
    setTitle('')
    setDetail('')
  }

  const deleteNote = (idx) => {
    setTask(task.filter((_, index) => index !== idx))
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-950 via-blue-950 to-indigo-950 text-amber-50 lg:flex gap-6 p-6">

      {/* LEFT FORM SECTION */}
      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-4 p-8 lg:w-1/2
        bg-white/10 backdrop-blur-lg rounded-3xl shadow-xl"
      >
        <h1 className="text-4xl font-extrabold text-center">
          Add Notes
        </h1>

        <input
          type="text"
          placeholder="Write your task"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
          className="px-5 py-3 rounded-xl font-bold text-amber-100
          outline-none border-2 border-transparent
          focus:border-amber-400 focus:ring-2 focus:ring-amber-300
          transition-all"
        />

        <textarea
          placeholder="Write details here"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          className="px-5 py-3 h-40 rounded-xl font-medium text-amber-100
          resize-none outline-none border-2 border-transparent
          focus:border-amber-400 focus:ring-2 focus:ring-amber-300
          transition-all"
        />

        <button
          className="bg-amber-50 text-black h-12 rounded-xl font-extrabold
          transition-all hover:bg-amber-400 hover:scale-[1.02]
          active:scale-95 cursor-pointer"
        >
          Add Note
        </button>
      </form>

      {/* RIGHT NOTES SECTION */}
      <div
        className="lg:w-1/2 p-6 lg:p-8 bg-white/10 backdrop-blur-lg
        rounded-3xl shadow-xl flex flex-col
        h-[85vh] lg:h-auto"
      >
        <h1 className="text-4xl font-extrabold">
          Recent Notes
        </h1>

        {task.length === 0 && (
          <p className="text-gray-300 italic mt-8">
            No notes yet. Start by adding ✨
          </p>
        )}

        {/* NOTES LIST (SCROLLS SAFELY ON MOBILE) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6
        overflow-y-auto flex-1 pr-2">
          {task.map((elem, idx) => (
            <div
              key={idx}
              style={{
                backgroundImage:
                  "url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)"
              }}
              className="h-65 w-52 rounded-xl pt-9 pb-4 px-4
              bg-cover text-black
              shadow-md transition-all duration-300
              hover:scale-105 hover:rotate-1 hover:shadow-xl
              flex flex-col"
            >
              <div>
                <h3 className="text-xl font-bold underline">
                  {elem.title}
                </h3>

                <textarea
                  readOnly
                  className="mt-2 h-27.5 w-full resize-none overflow-y-auto
                  leading-relaxed text-sm font-semibold text-gray-700
                  bg-transparent outline-none "
                >
                  {elem.detail}
                </textarea>
              </div>

              <button
                onClick={() => deleteNote(idx)}
                className="mt-auto w-full bg-red-500 py-1 rounded-2xl
                font-bold text-white transition-all
                hover:bg-red-600 hover:scale-[1.02]
                active:scale-95 cursor-pointer"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App


