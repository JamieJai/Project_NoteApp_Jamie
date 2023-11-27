import React from 'react'
import { NotesContainer } from '../../styles/styles';
import { Note } from '../../types/note'
import NoteCard from '../NoteCard/NoteCard';

interface MainWrapperProps {
  notes: Note[];
  type: string;
}

const MainWrapper = ({ notes, type }: MainWrapperProps) => {
  return (
    <NotesContainer>
   
    </NotesContainer>
  )
}

export default MainWrapper