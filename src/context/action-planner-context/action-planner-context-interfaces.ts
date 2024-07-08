export interface IActionPlannerContext {
  actions: Array<IActionPlannerList>
  addAction: (action: string, priority: priorityTypes) => void
  editAction: (action: string, priority: priorityTypes) => void
  deleteAction: (id: string) => void
  updateProgress: (id: string, progress: progressTypes) => void
}

export interface IActionPlannerList {
  action: string
  priority: priorityTypes
  progress: progressTypes
  id: string
}

export enum priorityTypes {
  LOW = 'Low',
  MEDIUM = 'Medium',
  HIGH = 'High',
}
export enum progressTypes {
  TODO = 'To Do',
  INPROGRESS = 'In Progress',
  DONE = 'Done',
}

export const actionPlannerDefaultValues: IActionPlannerContext = {
    actions: [
        {
            action: 'todo todo todo',
            priority: priorityTypes.MEDIUM,
            progress: progressTypes.INPROGRESS,
            id: 'ladjfldf&ad',
        },
        {
            action: 'todo number 2',
            priority: priorityTypes.LOW,
            progress: progressTypes.DONE,
            id: 'ladjfldf&adad',
        },
    ],
    addAction: function (): void {
        throw new Error('Function not implemented.')
    },
    editAction: function (): void {
        throw new Error('Function not implemented.')
    },
    deleteAction: function (): void {
        throw new Error('Function not implemented.')
    },
    updateProgress: function (): void {
        throw new Error('Function not implemented.')
    },
}
