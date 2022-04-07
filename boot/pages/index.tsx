import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4">
      <div className='grid grid-cols-4 gap-4'>
        <Image src='/img/nicole1.jpg' alt='gay' width={100} height={100}/>
      </div>
      <div className='grid grid-cols-4 gap-4'>
      <Image src='/img/pinky8.jpg' alt='gay' width={100} height={100}/>
      </div>
      <div className='grid grid-cols-4 gap-4'>
      <Image src='/img/pinky17.jpg' alt='gay' width={100} height={100}/>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <video width="320" height="240" controls>
          <source src="/video/ankha2.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='grid grid-cols-4 gap-4'>
      <video width="320" height="240" controls>
          <source src="/video/creamheart.mp4" type="video/mp4" />
        </video>
      </div><div className='grid'>
      <video width="320" height="240" controls>
          <source src="/video/edashaan.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='grid grid-cols-4 gap-4'>
      <video width="320" height="240" controls>
          <source src="/video/yorhabAss.mp4" type="video/mp4" />
        </video>
      </div>
      <div className='grid grid-cols-4 gap-4'>
        <Image src='/video/peach.gif' alt='gay' width={100} height={100}/>
        <Image src='/video/peach.gif' alt='gay' width={100} height={100}/>
        <Image src='/video/peach.gif' alt='gay' width={100} height={100}/>
      </div>
    <div>
      <Link href='/gay'>
        gayfffdfdd
      </Link>
    </div>
    </div>
  )
}

export default Home
