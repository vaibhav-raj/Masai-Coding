import React from 'react';
import NoteCard from './NoteCard';
import styles from './NoteCard.module.css'

const Notes = ({ data, handleDelete , handleEdit}) => {
  return (
    <div className={styles.main} >
      {data &&
        data.map((item) => (
          <NoteCard key={item.id} data={item} handleDelete={handleDelete} handleEdit={handleEdit} />
        ))}
    </div>
  );
};

export default Notes;
