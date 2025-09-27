import { Head } from 'next/document'
import Aboutcrypto from '@/component/Homepage/Aboutcrypto/Aboutcrypto'
import Blogs from '@/component/Homepage/Blogs/Blogs'
import Carouselslider from '@/component/Homepage/Carouselslider/Carouselslider'
import Contactinfo from '@/component/Homepage/Contactinfo/Contactinfo'
import Cryptofeature from '@/component/Homepage/Cryptofeature/Cryptofeature'
import Cryptograph from '@/component/Homepage/Cryptograph/Cryptograph'
import Cryptophoneapp from '@/component/Homepage/Cryptophoneapp/Cryptophoneapp'
import Cryptoservice from '@/component/Homepage/Cryptoservice/Cryptoservice'
import Cryptotable from '@/component/Homepage/Cryptotable/Cryptotable'
import Cryptotoken from '@/component/Homepage/Cryptotoken/Cryptotoken'
import Faqs from '@/component/Homepage/Faqs/Faqs'
import Ourteams from '@/component/Homepage/Ourteams/Ourteams'
import Roadmap from '@/component/Homepage/Roadmap/Roadmap'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Carouselslider />
      <Cryptofeature />
      <Aboutcrypto />
      <Cryptotoken />
      <Cryptoservice />
      <Cryptotable />
      <Roadmap />
      <Cryptograph />
      <Cryptophoneapp />
      <Ourteams />
      <Faqs />
      <Blogs />
      <Contactinfo />
    </>
  )
}
