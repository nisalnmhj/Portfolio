import linkedin from '../images/LinkedIn_Logo.svg.png'
import github from '../images/github.svg'
import map from '../images/Google_Maps_Logo.svg.png'
import gmail from '../images/gmail.png'
import Youtube from '../images/YouTube_dark_logo_(2017).svg.png'
export default function Contactme() {
    return (
      <div className="bg-white py-10 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold 
           text-indigo-500 sm:text-4xl transition
           duration-300 ease-in-out hover:scale-105">
            Contact me 
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 
          gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none 
          lg:grid-cols-5">
            <a href='https://www.linkedin.com/in/nishanmaharjan/' target="_blank" rel="noreferrer" >
                <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1
                transition duration-300 ease-in-out hover:scale-110 "
                src= {linkedin}
                alt="linkedin"
                width={158}
                height={48}
                />
            </a>
            <a href='https://github.com/nisalnmhj' target="_blank" rel="noreferrer" >
                <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1
                transition duration-300 ease-in-out hover:scale-110 "
                src={github}
                alt="github"
                width={158}
                height={48}
                />
            </a>        
            <a href='https://www.youtube.com/channel/UCYSWAUAqjmOpXX1DGHnmVPg' target="_blank" rel="noreferrer" >
                <img
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1
                transition duration-300 ease-in-out hover:scale-110 "
                src={Youtube}
                alt="Youtube"
                width={158}
                height={48}
                />
            </a>
            <a href='mailto:nisaln.maharzan@gmail.com' rel="noreferrer"  > 
              <img
                className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1
                transition duration-300 ease-in-out hover:scale-110 "
                src={gmail}
                alt="gmail"
                width={158}
                height={48}
              />
            </a>    
            <a href='https://goo.gl/maps/6cTSS66oqmkPhWNN7' target="_blank" rel="noreferrer" >
                <img
                className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto 
                lg:col-span-1 transition duration-300 ease-in-out hover:scale-110 "
                src={map}
                alt="map"
                width={158}
                height={48}
                />
            </a> 
          </div>
        </div>
      </div>
    )
  }
  