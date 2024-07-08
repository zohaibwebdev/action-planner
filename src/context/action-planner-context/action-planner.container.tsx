import React, { FC, PropsWithChildren, useState } from 'react'
import {
    actionPlannerDefaultValues,
    IActionPlannerContext,
    IActionPlannerList,
    priorityTypes,
    progressTypes,
} from './action-planner-context-interfaces'
import { ActionPlannerProvider } from './action-planner-context'
import { nanoid } from 'nanoid'

const ActionPlannerContainer: FC<PropsWithChildren> = ({ children }) => {
    const [state, setState] = useState<IActionPlannerContext>(actionPlannerDefaultValues)

    function deleteAction(id: string) {
        const filterActions = state.actions.filter((action) => action.id !== id)
        setState(function (prev) {
            return {
                ...prev,
                actions: filterActions,
            }
        })
    }

    function updateProgress(id: string, progress: string) {
        let progressToBeSet = ''
        if (progress === progressTypes.TODO) {
            progressToBeSet = progressTypes.INPROGRESS
        }
        if (progress === progressTypes.INPROGRESS) {
            progressToBeSet = progressTypes.DONE
        }
        if (progress === progressTypes.DONE) {
            progressToBeSet = progressTypes.TODO
        }
        const actionIndex = state.actions.findIndex((action) => action.id === id)
        if (actionIndex === -1) {
            return
        }
        setState(function (prev) {
            state.actions[actionIndex].progress = progressToBeSet as progressTypes
            return {
                ...prev,
            }
        })
    }

    function addAction(action: string, priority: priorityTypes) {
        const newAction: IActionPlannerList = {
            action,
            priority: priority as priorityTypes,
            progress: progressTypes.TODO,
            id: nanoid(),
        }
        setState((prev) => ({
            ...prev,
            actions: [...prev.actions, newAction],
        }))
    }

    return (
        <ActionPlannerProvider value={{ ...state, deleteAction, updateProgress, addAction }}>
            {children}
        </ActionPlannerProvider>
    )
}

export default ActionPlannerContainer
