
import { Tag } from '../../../types/tag';
import { DeleteBox, FixedContainer } from '../Modal.styles';

interface TagsModalProps {
  type: string;
  addedTags?: Tag[];
  handleTags?: (tag: string, type: string) => void
}

const TagsModal = ({ type, addedTags, handleTags }: TagsModalProps) => {
  
  return (
    <FixedContainer>
     
    </FixedContainer>
  )
}

export default TagsModal