import Image from 'next/image'
import Sidebar from './components/Sidebar'
import AddPost from './components/AddPost'
import Posts from './components/Posts'
import Recomendation from './components/Recomendation'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="flex m-auto max-w-6xl mt-12 gap-12 ">
      <div className="fixed  section1  w-2/12">
        <Sidebar />
      </div>
      <div className="space-y-4 ml-64 w-6/12  section2  ">
        <AddPost />
        <Posts />
        {/* */}
      </div>
      <div className="   section3 w-60">
        <Recomendation />
        <Footer />
      </div>
    </div>
  )
}
