import Image from 'next/image'
import Sidebar from './components/Sidebar'
import AddPost from './components/AddPost'
import Posts from './components/Posts'
import Recomendation from './components/Recomendation'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="flex m-auto max-w-6xl mt-12">
      <div className="fixed left-24 section1  w-2/12">
        <Sidebar />
      </div>
      <div className="space-y-4 left-56 relative w-7/12  section2  ">
        <AddPost />
        <Posts />
        {/* */}
      </div>
      <div className="fixed right-24  section3 w-60">
        <Recomendation />
        <Footer />
      </div>
    </div>
  )
}
