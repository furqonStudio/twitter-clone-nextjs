const RecomendationList = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2 pr-3">
        <div className="avatar placeholder">
          <div className="bg-neutral-focus text-neutral-content rounded-full w-10 h-10">
            <span className="text-xl">K</span>
          </div>
        </div>
        <p className="text-sm ">Friend recommendation</p>
      </div>
      <button className="btn btn-xs">follow</button>
    </div>
  )
}

export default RecomendationList
