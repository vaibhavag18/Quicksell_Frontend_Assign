import React, { useMemo } from 'react';
import TicketCard from '../Card/CardComponent';
import './TicketColumn.css';
import { ReactComponent as AddIcon } from '../../icons_FEtask/add.svg';
import { ReactComponent as ThreeDot } from '../../icons_FEtask/3 dot menu.svg';
import { Ticket, User } from '../../interfaces';
import { getPriorityIcon, getStatusIcon } from '../../utils/helper';
import UserIcon from '../UserIcon';

interface ColumnProps {
  tickets: Ticket[];
  grouping: string;
  groupBy: string;
  userIdToData: Record<string, User>;
}

const TicketColumn: React.FC<ColumnProps> = ({ tickets, grouping, groupBy, userIdToData }) => {
  const title = useMemo(() => {
    if (grouping === "status" || grouping === "priority") return groupBy;
    if (grouping === "user") return userIdToData[groupBy]?.name;
  }, [grouping, groupBy, userIdToData]);

  const icon = useMemo(() => {
    if (grouping === "status") return getStatusIcon(groupBy);
    if (grouping === "priority") return getPriorityIcon(groupBy);
    if (grouping === "user") return <UserIcon name={userIdToData[groupBy]?.name} available={userIdToData[groupBy]?.available} />;
  }, [grouping, groupBy, userIdToData]);

  return (
    <div className="column">
      <div className="column-header">
        <div className="column-header-left-container">
          {icon}
          <div className="column-title">
            {title}
            <span className="count">{tickets.length}</span>
          </div>
        </div>
        <div className="column-header-right-container">
          <AddIcon style={{ width: 14, height: 14, fill: "#e2e2e2" }} />
          <ThreeDot style={{ width: 14, height: 14, fill: "#e2e2e2" }} />
        </div>
      </div>
      <div className="cards-container">
        {tickets.map((ticket) => (
          <TicketCard
            key={ticket.id}
            ticket={ticket}
            user={userIdToData[ticket.userId]}
            hideStatus={grouping === "status"}
            hideProfile={grouping === "user"}
          />
        ))}
      </div>
    </div>
  );
};

export default TicketColumn;
