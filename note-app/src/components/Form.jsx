import { useState, useEffect } from 'react';
import { addNote } from '../Services';
import { v4 as uuidv4 } from 'uuid';
import styles from './Form.module.css'

const getTime = () => {
  var today = new Date();
  var date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
  return date + ' ' + time;
};

const Form = ({ addToData, editMode, updateData }) => {
  const [note, setNote] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {
    const { title, description } = editMode;
    setNote({ title, description });
  }, [editMode]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setNote({ ...note, [name]: value });
  };

  const submitNote = async () => {
    if (note.title && note.description && !editMode.id) {
      let uuid = uuidv4();
      await addNote({ ...note, date: getTime(), id: uuid });
      await addToData({ ...note, date: getTime(), id: uuid });
    } else {
      await updateData(
        { ...note, date: editMode.date || getTime() },
        editMode.id
      );
    }
    setNote({ title: '', description: '' });
  };

  return (
    <div className={styles.navbar}>
      <div className={styles.form} >
      <input
        type='text'
        value={note.title}
        name='title'
        placeholder="Enter Title..."
        onChange={handleChange}
      />
      <textarea
        rows="5"
        cols="10"
        value={note.description}
        name='description'
        placeholder="Enter Description..."
        onChange={handleChange}
      />
      <button onClick={submitNote}>{editMode.title ? "Update Note":"Add Note"}</button>
      </div>
    </div>
  );
};

export default Form;
