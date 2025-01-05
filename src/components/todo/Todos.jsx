import { useState } from 'react';
import styles from './Todos.module.css';
import { initialTodos } from '../../data/todos';
import AppHeading from '../AppHeading';

const TodosApp = () => {
  const [todos, setTodos] = useState(initialTodos);
  const [formValues, setFormValues] = useState({ title: '', desc: '' });
  const [editingId, setEditingId] = useState(null);

  const handleForm = (e) => {
    e.preventDefault();

    if (editingId) {
      // Update existing todo
      setTodos(todos.map(todo =>
        todo.id === editingId ? { ...todo, ...formValues } : todo
      ));
      setEditingId(null);
    } else {
      // Add new todo
      const newTodo = {
        id: todos.length + 1,
        title: formValues.title,
        desc: formValues.desc,
        completed: false,
      };
      setTodos([...todos, newTodo]);
    }

    // Reset form
    setFormValues({ title: '', desc: '' });
  };


  const handleDelete = (id) => {
    setTodos(todos.filter(t =>
      t.id !== id
    ))
  }

  const handleStatus = (e, todo) => {
    setTodos(todos.map(t =>
      t.id === todo.id ? { ...todo, completed: e.target.checked } : t
    ))
  }

  const handleEdit = (todo) => {
    setEditingId(todo.id);
    setFormValues({ title: todo.title, desc: todo.desc });
  };

  return (
    <div className={styles.container}>
      <AppHeading sno={1} title={"Todos App"} />
      <form onSubmit={handleForm} className={styles.form}>
        <h2 className={styles.subtitle}>{editingId ? "Edit" : "Add"} Todo</h2>
        <input
          type="text"
          placeholder="Please Enter the Title"
          name="title"
          id="title"
          value={formValues.title}
          className={styles.input}
          onChange={(e) => setFormValues({ ...formValues, title: e.target.value.trim() })}
        />
        <input
          type="text"
          placeholder="Please Enter the Description"
          name="desc"
          id="desc"
          value={formValues.desc}
          className={styles.input}
          onChange={(e) => setFormValues({ ...formValues, desc: e.target.value.trim() })}
        />
        <button disabled={!formValues.title || !formValues.desc} className={styles.addButton}>Add Todo</button>
      </form>

      <ul className={styles.todoList}>
        {todos.length > 0 ?
          <>{todos.map((todo) => (
            <li key={todo.id} className={styles.todoItem}>
              <div className={styles.todoContent}>
                <input type='checkbox' checked={todo.completed} onChange={(e) => handleStatus(e, todo)} />
                <h3 style={{ textDecoration: todo.completed ? 'line-through' : '' }} className={styles.todoTitle}>{todo.title}</h3>
                <p style={{ textDecoration: todo.completed ? 'line-through' : '' }} className={styles.todoDesc}>{todo.desc}</p>
              </div>
              <button
                disabled={todo.completed}
                className={styles.actionButton}
                onClick={() => handleEdit(todo)}
              >
                ✍️
              </button>
              <button
                className={styles.actionButton}
                onClick={() => handleDelete(todo.id)}
              >
                ❌
              </button>
            </li>
          ))}
          </> : <p>No todo found</p>}
      </ul>
    </div>
  );
}

export default TodosApp