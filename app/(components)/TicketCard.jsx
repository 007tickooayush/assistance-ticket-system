import React from 'react'
import DeleteBlock from './DeleteBlock';
import PreiorityDisplay from './PreiorityDisplay';
import ProgressDisplay from './ProgressDisplay';

const TicketCard = () => {
  return (
    <div>
        <DeleteBlock />
        <PreiorityDisplay />
        <ProgressDisplay />
    </div>
  )
}

export default TicketCard;