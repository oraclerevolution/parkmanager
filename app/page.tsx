import Image from 'next/image'
import { SearchBar, Hero, CustomButton, PlaceCard } from '@/components'
import { fetchParkingPlace } from '@/utils'

export default async function Home() {
  
  const allPlaces = await fetchParkingPlace()
  const isDataEmpty = !Array.isArray(allPlaces) || allPlaces.length < 1 || !allPlaces
  
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className='mt-12 padding-x padding-y max-width' id='discover'>
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Places de parking</h1>
          <p>Gardez un oeil sur votre parking de là où vous êtes.</p>
        </div>
        <div className='home__filters flex justify-start items-center gap-3'>
          <SearchBar />
          <CustomButton title="Où ai-je garer ?" containerStyles='bg-primary-blue text-white rounded-full self-center' />
        </div>

        {!isDataEmpty ? (
          <section>
            <div className='home__cars-wrapper'>
              {allPlaces?.map((place) => (
                <PlaceCard place={place}  />
              ))}
            </div>
          </section>
        ):(
          <div className="home__error-container">
            <h2 className='text-black text-xl font-bold'>Opps, no results</h2>
            <p className='text-gray-500'>We haven't found parking places</p>
          </div>
        )}
      </div>
    </main>
  )
}
