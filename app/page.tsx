import Video from 'next-video'
import ford from '@/videos/ford.mp4'


// npx next-video sync


export default function Home() {
  return (
    <section className='py-24'>
      <div className='container'>
        <h1 className='text-3xl font-bold text-purple-600'>
          Next video component
        </h1>

        <div className='mt-8'>
          
          <Video
            src={ford}
            accentColor='#9333ea'
            className='max-w-[50vw]'
          />
        </div>
      </div>
    </section>
  )
}
