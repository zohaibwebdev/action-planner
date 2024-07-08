import React from 'react'
import Header from './action-planner-header/action-planner-header.component'
import ActionList from './actions-planner-list/action-planner-list.component'
import ActionPlannerContainer from '@/context/action-planner-context/action-planner.container'

const ActionPlanner = () => {
    return (
        <ActionPlannerContainer>
            <div className="min-h-[100vh] text-gray-900 flex justify-center">
                <div className="py-10 px-3  max-w-screen-md w-full">
                    <Header />
                    <ActionList />
                </div>
            </div>
        </ActionPlannerContainer>
    )
}

export default ActionPlanner
