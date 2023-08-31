import Image from 'next/image'

export default function Home() {
  return (
    <div className='w-full h-hull flex justify-center items-center relative bg-black'>
      <div className='max-w-screen-lg w-ful h-full flex relative'>
        <section className='fixed w-72 flex flex-col h-screen'>
          {
            NAVIGATION_ITEMS.map((item)=>{
              <div key={item.title}>
                
              </div>
            })
          }
        </section>
        <main>HOme timeline</main>
        <section>right section</section>
      </div>
    </div>
  )
}
