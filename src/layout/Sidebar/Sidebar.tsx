import React from 'react'
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { Container, MainBox, StyledLogo, ItemsBox } from './Sidebar.styles';
import { FaArchive, FaLightbulb, FaTag, FaTrash } from 'react-icons/fa';

import { v4 } from 'uuid';

const items = [
  { icon: <FaArchive />, title: "Archive", id: v4() },
  { icon: <FaTrash />, title: "Trash", id: v4() },
]

const Sidebar = () => {

  const { isOpen } = useAppSelector((state) => state.menu);

  return (
    <Container openMenu={isOpen ? "open" : ""}>
      <MainBox openMenu={isOpen ? "open" : ""}>
       
      </MainBox>
    </Container>
  )
}

export default Sidebar

