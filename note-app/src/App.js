import { useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Notes from "./components/Notes";
import { getNotes, deleteNote, getNote, updateNote } from "./Services";

function App() {
  const [data, setData] = useState([]);
  const [deleted, setDeleted] = useState(false);
  const [editing, setEditing] = useState({});
  const [edited, setEdited] = useState(false);

  useEffect(async () => {
    let res = await getNotes();
    setData(res.data);
    setDeleted(false);
    setEditing(0);
    setEdited(false);
  }, [deleted, edited]);

  const addToData = (note) => {
    setData([...data, note]);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    setDeleted(true);
  };

  const handleEdit = async (id) => {
    let res = await getNote(id);
    setEditing(res.data);
  };

  const updateData = async (data, id) => {
    await updateNote(data, id);
    setEdited(true);
  };

  return (
    <div className="App">
      <Form addToData={addToData} editMode={editing} updateData={updateData} />
      <Notes data={data} handleDelete={handleDelete} handleEdit={handleEdit} />
    </div>
  );
}

export default App;
