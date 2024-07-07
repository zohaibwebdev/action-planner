import React from 'react'
import Header from './action-planner-header/action-planner-header.component'
import ActionList from './actions-list/action-list.component'

const ActionPlanner = () => {
    return (
        <div className="min-h-[100vh] text-gray-900 flex justify-center">
            <div className="py-10 px-3  max-w-screen-md w-full">
                <Header />
                <ActionList />
            </div>
        </div>
    )
}

export default ActionPlanner
