import { useState } from 'react'
import Navbar from './assets/sections/navbar/navbar'
import Banner from './assets/sections/banner/banner'
import Destination from './assets/sections/destination/destination'
import Package from './assets/sections/package/package'
import Destination2 from './assets/sections/destination2/destination2'
import Gallery from './assets/sections/gallery/gallery'
import Counter from './assets/sections/counter/counter'
import Newsletter from './assets/sections/newsletter/newsletter'
import Brand from './assets/sections/brand/brand'
import Review from './assets/sections/review/review'
import Msg from './assets/sections/msg/msg'
import { Footer } from './assets/sections/footer/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
    <Banner />
    <Destination />
    <Package />
    <Destination2 />
    <Gallery />
    <Counter />
    <Newsletter />
    <Brand />
    <Review />
    <Msg />
    <Footer />


    </>
  )
}

export default App
