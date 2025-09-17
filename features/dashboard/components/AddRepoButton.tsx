import React from 'react'

const AddRepoButton = () => {
  return (
    <div className='group px-6 py-6 flex flex-row justify-between items-center border rounded-lg bg-muted cursor-pointer 
        transition-all duration-300 ease-in-out
        hover:bg-background hover:border-[#fff] hover:scale-[1.02]
        shadow-[0_2px_10px_rgba(0,0,0,0.0)]
        hover:shadow-[0_10px_30px_rgba(0,0,0,0.0)]'
    >
            Add Github Repo
    </div>
  )
}

export default AddRepoButton