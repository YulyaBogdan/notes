import React from 'react';

class NoteEditor extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: '',
            text: '',
            color: '#FFFFFF'
        };
    }


    handleTextChange(event) {
        this.setState({ text: event.target.value });
    }

    handleTitleChange(event) {
        this.setState({ title: event.target.value });
    }

    handleNoteAdd() {
        const newNote = {
            title: this.state.title,
            text: this.state.text,
            color: this.state.color
        };

        this.props.onNoteAdd(newNote);
        this.setState({ text: '', title: '', color: '#FFFFFF'});
    }

    render() {
        return (
            <div>
                <input
                    type='text'
                    className='NoteEditor_title'
                    placeholder='Enter title'
                    value={this.state.title}
                    onChange={this.handleTitleChange.bind(this)}
                />
                <textarea
                    className='NoteEditor_text'
                    placeholder='Enter note text'
                    value={this.state.text}
                    onChange={this.handleTextChange.bind(this)}
                    rows={5}
                />
                <div className='NoteEditor_footer'>
                    <button
                        className='NoteEditor_button'
                        disabled={!this.state.text}
                        onClick={this.handleNoteAdd.bind(this)}
                    >
                        Add
                    </button>
                </div>
            </div>
        )
    }
}

export default NoteEditor;