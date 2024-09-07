export default function Tab() {

  return <>
    <div className="flex w-full  mt-[10vh]">
      <div>
        <button className="flex-1 text-center py-2  min-w-32 border-t-2 border-l-2 border-r-2 rounded-t-md">
          Tab 1
        </button>
        <button className="flex-1 text-center py-2 hover: bg-gray-200 min-w-32 border-b-2">
          Tab 2
        </button>
      </div>
    </div>
    <div  className=" w-full min-h-full">
      This is me test
    </div>
  </>
}