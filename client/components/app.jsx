import React from 'react';
import NoteEditor from "./notes-editor.jsx";
import Note from "./note.jsx";
import NotesGrid from "./notes-gri.jsx";
import axios from 'axios';
//import { apiPrefix } from '../../etc/config.json';

class App extends React.Component {

    handleNoteAdd(data) {
        console.log(data);
        axios.post("http://localhost:8080/", {
            title: data.title,
            text: data.text,
            color: data.color,
            date: new Date()
        }).then(res => console.log(res)).catch(err => alert(err));
        axios.get("http://localhost:8080/").then(res => console.log(res.data));
    }

    render(){
        return(
            <div>
                <h1>Notes</h1>
                <NoteEditor onNoteAdd={this.handleNoteAdd.bind(this)}/>
                <NotesGrid/>
            </div>
        );
    }
}

export default App;