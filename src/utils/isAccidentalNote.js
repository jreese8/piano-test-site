import NOTES from '../components/Constants/note';
export default (note) => {
    return NOTES.includes(note) && note.includes('#')
}