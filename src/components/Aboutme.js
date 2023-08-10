import me from '../images/me.jpg'
const features = [
    { name: 'Programming Languages', description: 'C++, Java, Javascript, python, Html, Css' },
    { name: 'Frameworks', description: 'ReactJS, Angular, NodeJS, Tailwind, React-Redux,' },
    { name: 'Databases', description: 'MySql, MongoDb' },
    { name: 'Relevent Courses', description: 'Assembly Language, Data structure, Discrete Structure' },
    { name: 'Internships', title: 'NSTEM (Apr 2022 - Aug 2022)', 
    description: 'Developed a check out page to sell organization merchandise using React Native Which increased 20% of the merchandise sales.' },
    { name: 'Employments', 
      title: 'Price Common, Wisconsin (Sep 2021 - Dec 2021)', 
      description: 'Set up Fast Foods/Pizza/Sub Cook, Campus Dining, Stocker, Cashier', 
      tittle1: 'The cultural Art and Digital Print (Feb 2019 to Aug 2021)',
      description1: 'Handling and responding to mails, scanning, printing and fulfilling office supplies.'
    },
  ]
  
export default function Aboutme() {
    return (
      <div >
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24
                         lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight
             text-indigo-500 sm:text-4xl
             transition duration-300 ease-in-out hover:scale-110">
              About me</h2>
            <p className="mt-4 text-gray-500 transition duration-300 ease-in-out hover:scale-110">
            I am highly motivated and result driven computer science student seeking opportunities to contribute and grow in 
            the tech industry with my  strong programming skills and expertise in web development Frameworks. Beside programming
            I am a self taught Artisan.
            </p>
  
            <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-8 lg:gap-x-8">
              {features.map((feature) => (
                <div key={feature.name} className="border-t border-gray-200 pt-4
                transition duration-300 ease-in-out hover:scale-105">
                  <dt className="font-medium text-gray-900
                  ">{feature.name}</dt>
                  <dd className=' text-medium text-gray-800
                  transition duration-300 ease-in-out hover:scale-110'>{feature.title}</dd>
                  <dd className="mt-2 text-medium text-gray-500">{feature.description}</dd>
                  <dd className=' mt-2 text-medium text-gray-800
                  transition duration-300 ease-in-out hover:scale-110'>{feature.tittle1}</dd>
                  <dd className=" text-medium text-gray-500">{feature.description1}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 gap-4 sm:gap-6 lg:gap-8">
            <img
              src={me}
              alt="Picture of myself"
              className="rounded-lg bg-gray-100 transition duration-300 ease-in-out hover:scale-105"
            />
          </div>
        </div>
      </div>
      
    )
  }