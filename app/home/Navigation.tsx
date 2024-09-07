import Link from 'next/link'

export default function Page() {
  return (<div className="h-2/4 object-center flex flex-col items-center justify-center">
    <Link href="/about" className="w-full">
      <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200 transition w-full">
        About Me
      </button>
    </Link>
    <Link href="/about" className="w-full mt-4">
      <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-200 transition w-full">
        Explore Experiments
      </button>
    </Link>
  </div >)
}