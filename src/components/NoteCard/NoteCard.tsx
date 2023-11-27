import { NotesIconBox } from '../../styles/styles';
import { Card, ContentBox, FooterBox, TagsBox, TopBox } from './NoteCard.styles';
import { Note } from '../../types/note';


interface NoteCardProps {
  note: Note,
  type: string
}

const NoteCard = ({ note, type }: NoteCardProps) => {
  
  return (
    <>
      <Card >
       
      </Card>
    </>
  )
}

export default NoteCard