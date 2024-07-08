import { createContext, useContext } from 'react'
import { actionPlannerDefaultValues, IActionPlannerContext } from './action-planner-context-interfaces'

const ActionPlannerContext = createContext<IActionPlannerContext>(actionPlannerDefaultValues)
export const ActionPlannerProvider = ActionPlannerContext.Provider

export const useActionPlannerContext = () => useContext(ActionPlannerContext)
