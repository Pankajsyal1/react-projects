import { useState } from 'react';
import { initialTodos } from './data/todos';
import AppHeading from '../../components/common/AppHeading';
import { motion, AnimatePresence } from 'framer-motion';
import { FiPlus, FiTrash2, FiEdit3, FiCheck, FiX } from 'react-icons/fi';

const TodosApp = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [formValues, setFormValues] = useState({ title: '', desc: '' });
  const [editingId, setEditingId] = useState(null);

  const handleForm = (e) => {
    e.preventDefault();
    if (!formValues.title.trim()) return;

    if (editingId) {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo.id === editingId ? { ...todo, ...formValues } : todo
        )
      );
      setEditingId(null);
    } else {
      const newTodo = {
        id: Date.now(),
        title: formValues.title,
        desc: formValues.desc,
        completed: false,
      };
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
    }
    setFormValues({ title: '', desc: '' });
  };

  const handleDelete = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleStatus = (todoId) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setFormValues({ title: todo.title, desc: todo.desc });
  };

  return (
    <div className="max-w-2xl mx-auto px-6">
      <AppHeading sno={2} title="Daily Objectives" />

      <div className="mt-12 space-y-12">
        {/* Form Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/70 backdrop-blur-xl border border-dark/5 p-8 rounded-[2.5rem] shadow-xl shadow-dark/5"
        >
          <form onSubmit={handleForm} className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">
                {editingId ? 'Updating Task' : 'New Objective'}
              </h3>
              {editingId && (
                <button
                  type="button"
                  onClick={() => { setEditingId(null); setFormValues({ title: '', desc: '' }); }}
                  className="text-[10px] font-black uppercase tracking-widest text-primary hover:underline"
                >
                  Cancel Edit
                </button>
              )}
            </div>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="What needs to be done?"
                value={formValues.title}
                onChange={(e) => setFormValues({ ...formValues, title: e.target.value })}
                className="w-full bg-dark/5 border-none outline-none py-4 px-6 rounded-2xl font-bold text-dark placeholder:text-secondary/50 focus:ring-2 focus:ring-primary/10 transition-all text-lg"
              />
              <textarea
                placeholder="Any additional details... (Optional)"
                value={formValues.desc}
                onChange={(e) => setFormValues({ ...formValues, desc: e.target.value })}
                rows={2}
                className="w-full bg-dark/5 border-none outline-none py-4 px-6 rounded-2xl font-bold text-dark placeholder:text-secondary/50 focus:ring-2 focus:ring-primary/10 transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={!formValues.title.trim()}
              className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[11px] transition-all duration-300 flex items-center justify-center gap-2 ${formValues.title.trim()
                  ? 'bg-dark text-white hover:bg-primary shadow-xl shadow-dark/10'
                  : 'bg-dark/5 text-secondary cursor-not-allowed'
                }`}
            >
              {editingId ? <><FiEdit3 /> Update Objective</> : <><FiPlus /> Create Task</>}
            </button>
          </form>
        </motion.div>

        {/* Todo List Header */}
        <div className="flex items-center justify-between px-4">
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-secondary">
            Project Scope ({todos.length})
          </h4>
        </div>

        {/* Todo List */}
        <ul className="space-y-4">
          <AnimatePresence mode="popLayout">
            {todos.length > 0 ? (
              todos.map((todo) => (
                <motion.li
                  key={todo.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className={`group flex items-start gap-5 bg-white border p-6 rounded-[2rem] transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-dark/5 ${todo.completed ? 'border-primary/10 bg-primary/[0.02]' : 'border-dark/5'
                    }`}
                >
                  <button
                    onClick={() => handleStatus(todo.id)}
                    className={`shrink-0 w-8 h-8 rounded-xl border-2 flex items-center justify-center transition-all ${todo.completed
                        ? 'bg-primary border-primary text-white'
                        : 'border-dark/10 hover:border-primary text-transparent'
                      }`}
                  >
                    <FiCheck size={16} strokeWidth={4} />
                  </button>

                  <div className="flex-1 space-y-1 pt-0.5">
                    <h3 className={`text-lg font-black tracking-tight transition-all duration-300 ${todo.completed ? 'text-secondary line-through' : 'text-dark'
                      }`}>
                      {todo.title}
                    </h3>
                    {todo.desc && (
                      <p className={`text-sm font-bold leading-relaxed transition-all duration-300 ${todo.completed ? 'text-secondary/50 line-through' : 'text-secondary'
                        }`}>
                        {todo.desc}
                      </p>
                    )}
                  </div>

                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => handleEdit(todo)}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-dark/5 text-secondary hover:bg-dark hover:text-white transition-all shadow-sm"
                    >
                      <FiEdit3 size={16} />
                    </button>
                    <button
                      onClick={() => handleDelete(todo.id)}
                      className="w-10 h-10 flex items-center justify-center rounded-xl bg-red-50 text-red-400 hover:bg-red-500 hover:text-white transition-all shadow-sm"
                    >
                      <FiTrash2 size={16} />
                    </button>
                  </div>
                </motion.li>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-20 flex flex-col items-center justify-center text-center space-y-4 bg-dark/5 rounded-[2.5rem] border border-dashed border-dark/10"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm">
                  <FiCheck size={32} className="text-secondary/20" />
                </div>
                <div>
                  <h3 className="text-sm font-black uppercase tracking-widest text-dark">Clear Horizon</h3>
                  <p className="text-secondary text-xs font-bold mt-1">All objectives secured. Time to rest or plan ahead.</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ul>
      </div>
    </div>
  );
};

export default TodosApp;
