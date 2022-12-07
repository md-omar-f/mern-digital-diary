import axios from 'axios';

const URL = "http://localhost:8000";


export const addNote = async (data) => {
     try {
          return await axios.post(`${URL}/add`, data);
     }catch(error) {
          console.log("Error found while calling add api", error);
     }
}

export const getNotes = async () => {
     try {
          return await axios.get(`${URL}/all`);
     } catch(error) {
          console.log("Error while fatching data", error);
     }
}

export const getNote = async (id) => {
     try {
          return await axios.get(`${URL}/${id}`);
     } catch(error){
          console.log("Error while calling getUser api", error);
     }
}

export const editNote = async (note, id) => {
     try {
          return await axios.put(`${URL}/${id}`, note);
     } catch(error){
          console.log("Error while calling editUser api", error);
     }
}

export const deleteNote = async (id) => {
     try {
          return await axios.delete(`${URL}/${id}`)
     } catch(error) {
          console.log("Error while calling deleteUse api", error);
     }
}