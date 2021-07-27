import axios from "axios";

export const addNote = async (data) => {
  return await axios.post("http://localhost:3001/notes", data);
};

export const getNotes = async () => {
  return await axios.get("http://localhost:3001/notes?_sort=date&_order=desc");
};

export const deleteNote = async (id) => {
  return await axios.delete("http://localhost:3001/notes/" + id);
};

export const updateNote = async (data, id) => {
  return await axios.put("http://localhost:3001/notes/" + id, data);
};

export const getNote = async (id) => {
  return await axios.get("http://localhost:3001/notes/" + id);
};
