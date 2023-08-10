import shoes from '../images/sketch1622959411967.png'
import girl from '../images/girl_with_a_earl_pearing.jpg'
import sculpture from '../images/sculpture1.jpg'
import skull from '../images/skull.jpg'
import ink_pen from '../images/ink_pen_art.jpg'
import pencil_color from'../images/pencil_color_art.jpg'
import lady from '../images/lady.jpg'
import sculpture2 from '../images/sculpture2.jpg'
import charcoal from '../images/charcoal.jpg'
const artworks = [
  {
    name: 'Girl with a pearl earring',
    description: 'Graphite Work on A3 size paper',
    imageSrc: girl,
    imageAlt: 'pencil sketch',
 
  },
  {
    name: 'Lady',
    description: 'Graphite Work on A3 size paper',
    imageSrc: lady,
    imageAlt: 'pencil sketch',
 
  },
  {
    name: 'Sculpture',
    description: 'Graphite Work on A3 size paper',
    imageSrc: sculpture,
    imageAlt:'pencil sketch',
    
  },
  {
    name: 'Sculpture',
    description: 'Graphite Work on A3 size paper',
    imageSrc: sculpture2,
    imageAlt:'pencil sketch',
    
  },
  {
    name: 'Skull',
    description: 'Graphite Work on A3 size paper',
    imageSrc: skull,
    imageAlt: 'pencil sketch',
  
  },
{
  name: 'Girl',
  description: 'Charcoal Work on A3 size paper',
  imageSrc: charcoal,
  imageAlt:'Charcoal sketch',
  
},
  {
    name: 'Beard Guy',
    description: 'Ink pen art',
    imageSrc: ink_pen,
    imageAlt: 'Ink pen art',
   
  },
  {
    name: 'Music',
    description: 'Quick Pencil Color work',
    imageSrc: pencil_color,
    imageAlt: 'Pencil Color work',
   
  },
  {
    name: 'S Pen art',
    description: 'shoes using Samsung Pen art',
    imageSrc: shoes,
    imageAlt: 'Samsung Pen art',
   
  },
]

export default function Artworks() {
  return (
    <div >
      {/* //transition duration-300 ease-in-out group-hover:scale-110 */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-3xl font-bold tracking-tight
           text-indigo-500 sm:text-4xl
           transition duration-300 ease-in-out hover:scale-110"
           >Artworks</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {artworks.map((art) => (
              <div key={art.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg
                 bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 transition
                  duration-300 ease-in-out group-hover:scale-110 sm:h-64">
                  <img
                    src={art.imageSrc}
                    alt={art.imageAlt}
                    className="h-full w-full object-cover object-center "
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                {art.name}
                </h3>
                <p className="text-base mb-10 ont-semibold text-gray-900">{art.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
