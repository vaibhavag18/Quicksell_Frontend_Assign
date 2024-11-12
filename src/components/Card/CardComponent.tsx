import React from 'react';
import styles from './CardStyles.module.css';
import UserIcon from '../UserIcon';
import { LuMoreHorizontal } from 'react-icons/lu';
import { Ticket, User } from '../../interfaces';
import { getStatusIcon } from '../../utils/helper';
import { ReactComponent as NoPriorityIcon } from '../../icons_FEtask/No-priority.svg';
import { ReactComponent as UrgentIcon } from '../../icons_FEtask/SVG - Urgent Priority grey.svg';
import { ReactComponent as HighPriorityIcon } from '../../icons_FEtask/Img - High Priority.svg';
import { ReactComponent as MediumPriorityIcon } from '../../icons_FEtask/Img - Medium Priority.svg';
import { ReactComponent as LowPriorityIcon } from '../../icons_FEtask/Img - Low Priority.svg';

interface CardProps {
  ticket: Ticket;
  user: User;
  hideStatus?: boolean; 
  hideProfile?: boolean; 
}

const CardComponent: React.FC<CardProps> = ({ ticket, user, hideStatus, hideProfile }) => {
  // Function to return the corresponding priority icon based on ticket.priority
  const getPriorityIcon = (priority: number) => {
    switch (priority) {
      case 4:
        return <UrgentIcon className={styles.priorityIcon} />;
      case 3:
        return <HighPriorityIcon className={styles.priorityIcon} />;
      case 2:
        return <MediumPriorityIcon className={styles.priorityIcon} />;
      case 1:
        return <LowPriorityIcon className={styles.priorityIcon} />;
      case 0:
      return <NoPriorityIcon className={styles.priorityIcon} />;
      default:
        return <UrgentIcon className={styles.priorityIcon} />
    }
  };

  return (
    <div className={styles.cardContainer}>
      <div className={styles.header}>
        <div className={styles.ticketId}>{ticket.id}</div>
        {!hideProfile && <UserIcon name={user.name} available={user.available} />}
      </div>
      <div className={styles.content}>
        {!hideStatus && getStatusIcon(ticket.status)}
        <div className={styles.ticketTitle}>{ticket.title}</div>
      </div>
      <div className={styles.footer}>
        <div className={styles.priorityIconContainer}>
          {getPriorityIcon(ticket.priority)} {/* Display priority icon */}
        </div>
        {ticket.tag.map((tag: string) => (
          <div key={tag} className={styles.tag}>
            <div className={styles.tagIcon}></div>
            <div className={styles.tagText}>{tag}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardComponent;
