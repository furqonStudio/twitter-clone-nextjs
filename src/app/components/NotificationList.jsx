import React from 'react'

const NotificationList = () => {
  return (
    <div className="flex gap-4 p-4 items-center">
      <div className="avatar placeholder">
        <div className="bg-neutral-focus text-neutral-content rounded-full w-10 h-10">
          <span className="text-xl">K</span>
        </div>
      </div>
      <div>
        <p className="">Username - mulai mengikuti Anda</p>
        <p className="text-xs">Date uploaded</p>
      </div>
      <button className="btn btn-sm btn-primary">Action</button>
    </div>
  )
}

export default NotificationList
