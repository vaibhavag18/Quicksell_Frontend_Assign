import { ReactComponent as BacklogIcon } from '../icons_FEtask/Backlog.svg';
import { ReactComponent as TodoIcon } from '../icons_FEtask/To-do.svg';
import { ReactComponent as InProgressIcon } from '../icons_FEtask/in-progress.svg';
import { ReactComponent as DoneIcon } from '../icons_FEtask/Done.svg';
import { ReactComponent as CanceledIcon } from '../icons_FEtask/Cancelled.svg';
import { ReactComponent as NoPriorityIcon } from '../icons_FEtask/No-priority.svg';
import { ReactComponent as UrgentIcon } from '../icons_FEtask/SVG - Urgent Priority colour.svg';
import { ReactComponent as HighPriorityIcon } from '../icons_FEtask/Img - High Priority.svg';
import { ReactComponent as MediumPriorityIcon } from '../icons_FEtask/Img - Medium Priority.svg';
import { ReactComponent as LowPriorityIcon } from '../icons_FEtask/Img - Low Priority.svg';



export const getPriorityIcon = (priority: string) => {
    switch (priority) {
        case "No priority": 
            return <NoPriorityIcon style={{ width: 14, height: 14, fill: "#797d84" }} />
        case "Urgent": 
            return <UrgentIcon style={{ width: 14, height: 14, fill: "#fc7840" }} />
        case "High": 
            return <HighPriorityIcon style={{ width: 14, height: 14, fill: "#6b6f76" }} />
        case "Medium": 
            return <MediumPriorityIcon style={{ width: 14, height: 14, fill: "#6b6f76" }} />
        case "Low": 
            return <LowPriorityIcon style={{ width: 14, height: 14, fill: "#6b6f76" }} />
        default: 
        return <UrgentIcon style={{ width: 14, height: 14, fill: "#fc7840" }} />
    }
}


export const getStatusIcon = (status: string) => {
    switch (status) {
        case "Backlog": 
            return <BacklogIcon style={{ width: 14, height: 14, fill: "#e2e2e2" }} />
        case "Todo": 
            return <TodoIcon style={{ width: 14, height: 14, fill: "#e2e2e2" }} />
        case "In progress": 
            return <InProgressIcon style={{ width: 14, height: 14, fill: "#f1ca4b" }} />
        case "Done": 
            return <DoneIcon style={{ width: 14, height: 14, fill: "#5e6ad2" }} />
        case "Canceled": 
            return <CanceledIcon style={{ width: 14, height: 14, fill: "#94a2b3" }} />
        default: 
            return <CanceledIcon style={{ width: 14, height: 14, fill: "#94a2b3" }} />
    }
}