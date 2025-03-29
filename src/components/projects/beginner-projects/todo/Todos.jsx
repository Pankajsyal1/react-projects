import { useState } from 'react';
import { initialTodos } from '../../../../data/todos';
import AppHeading from '../../../common/AppHeading';

const TodosApp = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [formValues, setFormValues] = useState({ title: '', desc: '' });
  const [editingId, setEditingId] = useState(null);

  // ✅ Handle Add / Update Todo
  const handleForm = (e) => {
    e.preventDefault();

    if (!formValues.title.trim() || !formValues.desc.trim()) return;

    if (editingId) {
      // Update existing todo
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editingId ? { ...todo, ...formValues } : todo
        )
      );
      setEditingId(null);
    } else {
      const newTodo = {
        id: Date.now(), // ✅ Unique ID
        title: formValues.title,
        desc: formValues.desc,
        completed: false,
      };
      setTodos((prevTodos) => [...prevTodos, newTodo]);
    }

    setFormValues({ title: '', desc: '' }); // Reset form
  };

  // ✅ Handle Delete Todo
  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // ✅ Handle Toggle Status
  const handleStatus = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // ✅ Handle Edit
  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setFormValues({ title: todo.title, desc: todo.desc });
  };

  return (
    <div className="max-w-lg mx-auto mt-8 p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <AppHeading sno={2} title="Todos App" />

      {/* Form */}
      <form onSubmit={handleForm} className="flex flex-col gap-4 bg-slate-800 p-5 rounded-md">
        <h2 className="text-lg font-semibold text-center">
          {editingId ? 'Edit' : 'Add'} Todo
        </h2>
        <input
          type="text"
          placeholder="Enter Title"
          name="title"
          value={formValues.title}
          className="p-2 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none"
          onChange={(e) => setFormValues({ ...formValues, title: e.target.value })}
        />
        <textarea
          placeholder="Enter Description"
          name="desc"
          rows={3}
          value={formValues.desc}
          className="p-2 border border-gray-600 rounded bg-gray-800 text-white focus:outline-none resize-none"
          onChange={(e) => setFormValues({ ...formValues, desc: e.target.value })}
        ></textarea>
        <button
          disabled={!formValues.title || !formValues.desc}
          className={`p-2 rounded transition duration-300 ${formValues.title && formValues.desc
            ? 'bg-green-500 hover:bg-green-600'
            : 'bg-gray-700 cursor-not-allowed'
            }`}
        >
          {editingId ? 'Update' : 'Add'} Todo
        </button>
      </form>

      {/* Todo List */}
      <ul className="mt-6 space-y-3">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <li key={todo.id} className="flex justify-between items-center bg-gray-800 p-3 rounded shadow-sm">
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleStatus(todo.id)}
                  className="w-5 h-5 accent-green-500"
                />
                <div>
                  <h3 className={`text-lg ${todo.completed ? 'line-through text-gray-400' : ''}`}>
                    {todo.title}
                  </h3>
                  <p className={`text-sm ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                    {todo.desc}
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  disabled={todo.completed}
                  className={`text-yellow-400 hover:scale-110 transition ${todo.completed ? 'opacity-50 cursor-not-allowed' : ''}`}
                  onClick={() => handleEdit(todo)}
                >
                  ✍️
                </button>
                <button
                  className="text-red-400 hover:scale-110 transition"
                  onClick={() => handleDelete(todo.id)}
                >
                  ❌
                </button>
              </div>
            </li>
          ))
        ) : (
          <p className="text-center text-gray-400">No todo found</p>
        )}
      </ul>
    </div>
  );
};

export default TodosApp;
