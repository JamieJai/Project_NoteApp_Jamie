import React from 'react'

import { DeleteBox, FixedContainer } from '../Modal.styles';
import { Box, Container, TopBox } from './FilterModal.styles';

interface FiltersModalProps {
  handleFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClear: () => void;
  filter: string;
}

const FiltersModal = ({ handleFilter, handleClear, filter }: FiltersModalProps) => {

  return (
    <FixedContainer>
     
    </FixedContainer>
  )
}

export default FiltersModal