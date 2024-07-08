import React from 'react'
import ActionListItem from '../action-planner-list-item/action-planner-list-item.component'
import { useActionPlannerContext } from '@/context/action-planner-context/action-planner-context'

const ActionList = () => {
    const { actions } = useActionPlannerContext()
    return (
        <>
            {actions.map((action) => (
                <ActionListItem
                    action={action.action}
                    priority={action.priority}
                    progress={action.progress}
                    id={action.id}
                    key={action.id}
                />
            ))}
        </>
    )
}

export default ActionList
