import me from '../images/me.jpg'
const features = [
    { name: 'Programming Languages', description: 'C++, Java, Javascript, python, Html, Css' },
    { name: 'Frameworks', description: 'ReactJS, Angular, NodeJS, Tailwind, React-Redux,' },
    { name: 'Databases', description: 'MySql, MongoDb' },
    { name: 'Others', description: 'Numpy, Pandas, Figma, Slack, Vim' },
    { name: 'Relevent Courses', description: 'Assembly Language, Data structure, Discrete Structure, Unix, Network Fundamentals, Computer Organization, Theory of Computation' },
    { name: 'Employments', 
      title: 'Hornet Leadership(Feb 2024 - Present)',
      description: 'Engaged in a National Science Foundation (NSF) funded Program, enhancing leadership skills while spearheading a project to introduce a power bank loan service, addressing student needs and fostering collaboration with peers and STEM professionals.',
      title1: 'Math Tutor, California State University, Sacramento(Aug 2023 - Dec 2023)', 
      description1: 'I provide tailored guidance in Calculus I, II, and III to a diverse group of undergraduate students.', 
      title2: 'The cultural Art and Digital Print (Feb 2019 to Aug 2021)',
      description2: 'Handling and responding to mails, scanning, printing and fulfilling office supplies.'
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
                  transition duration-300 ease-in-out hover:scale-110'>{feature.title1}</dd>
                  <dd className=" text-medium text-gray-500">{feature.description1}</dd>
                  <dd className=' mt-2 text-medium text-gray-800
                  transition duration-300 ease-in-out hover:scale-110'>{feature.title2}</dd>
                  <dd className=" text-medium text-gray-500">{feature.description2}</dd>
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