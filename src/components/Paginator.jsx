import React from 'react'

function Paginator( props ) {
  return (
    <header className="sticky top-0 z-10 flex h-20 select-none bg-white shadow-sm">
      <nav className="mx-auto flex w-[90%] max-w-[1440px] items-center justify-between">
        <span className="block text-sm font-bold text-neutral-800">
          Page: {props.page} of 42
        </span>
        <div className="flex gap-x-2">
          <button
            className="relative inline-flex items-center rounded-md border bg-neutral-800 px-5 py-2 text-sm font-medium text-white"
            onClick={() =>
              props.setPage((props.page >= 1 && props.page - 1) || 1)
            }
          >
            Previous
          </button>
          <button
            className="relative inline-flex items-center rounded-md border bg-neutral-800 px-5 py-2 text-sm font-medium text-white"
            onClick={() =>
              props.setPage((props.page < 42 && props.page + 1) || 42)
            }
          >
            Next
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Paginator