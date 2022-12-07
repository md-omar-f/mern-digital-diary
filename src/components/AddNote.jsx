import React from "react";
import { addNote } from '../service/api.js';
import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import { useNavigate } from "react-router-dom"



const Container = styled(FormGroup)`
     width: 50%;
     margin: 5% auto 0 auto;
     & > div {
          margin-top: 20px;
     }
     `
const defaultNote = {
     title: "",
     eventname: "",
     description: "",
     image: ""
}

const AddNote = () => {

     const [note, setNote] = React.useState(defaultNote);

     const navigate = useNavigate();

     const onChangeHandle = (e) => {
          setNote({...note, [e.target.name]: e.target.value})
          console.log(note);
     }

     const addNoteDetails = async () => {
          await addNote(note);
          navigate("/all");
     }

     return(
          <Container>
               <Typography variant="h4">Add New</Typography>
               <FormControl>
                    <InputLabel>Title</InputLabel>
                    <Input onChange={(e) => onChangeHandle(e)} name="title" />
               </FormControl>
               <FormControl>
                    <InputLabel>Event Name</InputLabel>
                    <Input onChange={(e) => onChangeHandle(e)} name="eventname" />
               </FormControl>
               <FormControl>
                    <InputLabel>Description</InputLabel>
                    <Input onChange={(e) => onChangeHandle(e)} name="description"/>
               </FormControl>
               <FormControl>
                    <InputLabel>Remarks</InputLabel>
                    <Input onChange={(e) => onChangeHandle(e)} name="image"/>
               </FormControl>
               <FormControl>
                    <Button variant="contained" onClick={() => addNoteDetails()}>Add Note</Button>
               </FormControl>
          </Container>
     )
}

export default AddNote;