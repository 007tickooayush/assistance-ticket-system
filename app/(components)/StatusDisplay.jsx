import React from 'react'

const StatusDisplay = ({ status }) => {
    const statusDisp = status.split().map(w => w.replace(w[0],w[0].toUpperCase())).toString().concat()

    return (
        <span className='inline-block rounded-full px-2 py-1 text-xs font-semibold text-gray-700 bg-green-200'>
            {statusDisp}
        </span>
    )
}

export default StatusDisplay;