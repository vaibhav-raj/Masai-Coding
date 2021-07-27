import React from 'react';
import styles from './NoteCard.module.css'

const NoteCard = ({ data, handleDelete,handleEdit }) => {
  const { title, description, date, id } = data;
  return (
    <div className={styles.card}>
      <h2>Title</h2>
      <p>{title}</p>
      <h2>Description</h2>
      <p>{description}</p>
      <h2>Date and Time</h2>
      <p>{date}</p>
      <button className={styles.dlt} onClick={() => handleDelete(id)}>Delete</button>
      <button className={styles.edt} onClick={() => handleEdit(id)}>Edit</button>
    </div>
  );
};

export default NoteCard;
