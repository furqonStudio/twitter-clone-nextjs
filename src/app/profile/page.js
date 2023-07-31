import Image from 'next/image'
import PostItem from '../components/PostItem'

const page = () => {
  return (
    <div className="relative">
      <div>
        <Image
          src="https://picsum.photos/1240/300"
          alt="Avatar"
          className="avatar"
          width={1240}
          height={300}
        />
        <div className="absolute top-36 left-8">
          <div className="avatar placeholder ">
            <div className="bg-neutral-focus text-neutral-content rounded-full w-48 h-48">
              <span className="text-xl">K</span>
            </div>
          </div>
        </div>
        <div className="ml-72 mt-8 mb-16 flex items-center justify-between">
          <div className="left-content">
            <p className="text-2xl font-bold">Full Name</p>
            <p>Username</p>
          </div>
          <button className="btn btn-primary">Edit Profile</button>
        </div>
        <div className="tabs ">
          <a className="tab w-40 tab-bordered tab-active">Posts</a>
          <a className="tab w-40 tab-bordered">Likes</a>
          <a className="tab w-40 tab-bordered">Saved</a>
        </div>
        <div className="flex gap-4">
          <PostItem />
          <div className="border border-slate-800 w-60 ">
            <div className="stats stats-vertical shadow">
              <div className="stat">
                <div className="stat-title">Downloads</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">Jan 1st - Feb 1st</div>
              </div>

              <div className="stat">
                <div className="stat-title">New Users</div>
                <div className="stat-value">4,200</div>
                <div className="stat-desc">↗︎ 400 (22%)</div>
              </div>

              <div className="stat">
                <div className="stat-title">New Registers</div>
                <div className="stat-value">1,200</div>
                <div className="stat-desc">↘︎ 90 (14%)</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
