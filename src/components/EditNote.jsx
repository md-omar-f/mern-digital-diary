import { useState, useEffect} from "react";
import { editNote, getNote } from '../service/api.js';
import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom"



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

const EditNote = () => {

     const [note, setNote] = useState(defaultNote);

     const navigate = useNavigate();

     const { id } = useParams();

     useEffect(() => {
          loadNoteDetails();
     }, [])

     const loadNoteDetails = async () => {
          const response = await getNote(id);
          //console.log(response);
          setNote(response.data);
     }

     const onChangeHandle = (e) => {
          setNote({...note, [e.target.name]: e.target.value})
          //console.log(note);
     }

     const editNoteDetails = async () => {
          await editNote(note, id);
          navigate("/all");
     }

     return(
          <Container>
               <Typography variant="h4">Edit New</Typography>
               <FormControl>
                    <InputLabel>Title</InputLabel>
                    <Input onChange={(e) => onChangeHandle(e)} name="title" value={note.title} />
               </FormControl>
               <FormControl>
                    <InputLabel>Event Name</InputLabel>
                    <Input onChange={(e) => onChangeHandle(e)} name="eventname" value={note.eventname} />
               </FormControl>
               <FormControl>
                    <InputLabel>Description</InputLabel>
                    <Input onChange={(e) => onChangeHandle(e)} name="description" value={note.description} />
               </FormControl>
               <FormControl>
                    <InputLabel>image</InputLabel>
                    <Input onChange={(e) => onChangeHandle(e)} name="image" value={note.image} />
               </FormControl>
               <FormControl>
                    <Button variant="contained" onClick={() => editNoteDetails()}>Edit Note</Button>
               </FormControl>
          </Container>
     )
}

export default EditNote;