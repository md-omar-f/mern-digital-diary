import { useEffect, useState } from 'react';
import { Table, TableHead, TableCell, TableBody, TableRow, styled, Button } from '@mui/material';
import { getNotes, deleteNote } from '../service/api.js';
import { Link } from 'react-router-dom';


const StyledTable = styled(Table)`
     width: 90%;
     margin: 50px auto 0px auto;
`
const StyledTH = styled(TableHead)`
     background: #000000;
     & > th {
          color: #ffffff;
          font-size: 20px;
     }
`

const StyleTR = styled(TableRow)`
     & > td {
          font-size: 20px;
     }
`



const AllNotes = () => {

     const [notes, setNotes] = useState([]);
     
     useEffect(() => {
          getAllNotes();
     }, []);
     
     const getAllNotes = async () => {
          const response = await getNotes();
          setNotes(response.data);
          console.log(response.data);
     }

     const deleteNoteDetails = async (id) => {
          await deleteNote(id);
          getAllNotes();

     }
     return(
          <StyledTable>
               <StyledTH>
                    <TableCell>ID</TableCell>
                    <TableCell>Title</TableCell>
                    <TableCell>Event Name</TableCell>
                    <TableCell>Description</TableCell>
                    <TableCell>Image</TableCell>
                    <TableCell></TableCell>
               </StyledTH>
               <TableBody>
                    {
                         notes.map((note) => {
                              return(
                              <StyleTR key={note._id}>
                                   <TableCell>{note._id}</TableCell>
                                   <TableCell>{note.title}</TableCell>
                                   <TableCell>{note.eventname}</TableCell>
                                   <TableCell>{note.description}</TableCell>
                                   <TableCell>{note.image}</TableCell>
                                   <TableCell>
                                        <Button variant='contained' style={{marginRight: 10}} component={Link} to={`/edit/${note._id}`}>Edit</Button>
                                        <Button variant='contained' color="secondary" onClick={() => deleteNoteDetails(note._id)}>Delete</Button>
                                   </TableCell>
                              </StyleTR>)
                         })
                    }
               </TableBody>
          </StyledTable> 
     )
}

export default AllNotes;