import Summary from "./Summary"
import Navigation from "./Navigation"

const Home = () => {
  return (
    <div className="flex h-full">
      <div className="w-1/2 bg-white flex items-center justify-center">
        <Summary />
      </div>
      <div className="w-1/2 bg-blue-600 flex items-center justify-center">
        <Navigation />
      </div>
    </div>
  )
}

export default Home