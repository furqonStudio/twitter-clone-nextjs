import Image from 'next/image'
import Sidebar from './components/Sidebar'
import AddPost from './components/AddPost'
import Posts from './components/Posts'
import Recomendation from './components/Recomendation'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="flex gap-6">
      <div className="space-y-4">
        <AddPost />
        <Posts />
        {/* */}
      </div>
      <div className="w-72">
        <Recomendation />
        <Footer />
      </div>
    </div>
  )
}
