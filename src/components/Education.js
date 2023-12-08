const img = require("../images/sac-state.png")
const education = [
    {
      name: 'California State University, Sacramento',
      role: 'Bachelors in Computer Science (expected graduation 2025)',
      image: img,
      date: '2023 to 2025',
      GPA: '(GPA 3.40)',
      link : 'https://www.csus.edu/'
    },
    {
      name: 'American River College, Sacramento',
      role: 'Bsc in Computer Science ',
      image: 'https://inside.arc.losrios.edu/arc/shared/img/logos/arc-footer.svg',
      date: '2022 to 2023',
      GPA: '(GPA 3.38)',
      link : 'https://arc.losrios.edu/',
    },
    {
      name: 'Prasadi Academy Secondary School, Lalitpur',
      role: 'High School',
      image: 'https://is1-ssl.mzstatic.com/image/thumb/Purple112/v4/4e/92/2c/4e922cba-6a99-3c6d-7f07-634861564777/contsched.ussrogac.png/230x0w.webp',
      date: '2018 to 2020',
      GPA: '(GPA 3.50)',
      link : 'https://www.prasadi.edu.np/'
      }
  ]


  
  export default function Education() {
    return (
      <div className="bg-white py-24 sm:py-32  ">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-indigo-500 
            sm:text-4xl transition duration-300 ease-in-out hover:scale-110">Education</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 transition duration-300 ease-in-out hover:scale-110">
              "Imagination is more important than knowledge" - Albert Einstein
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {education.map((school) => (
              <li key={school.name}>
                <a target="_blank" href={school.link} rel="noreferrer">
                <div className="flex items-center gap-x-6 
                transition duration-300 ease-in-out hover:scale-105 
                hover:shadow-xl px-4 rounded-lg">
                  <img className="h-16 w-16 scale-110 rounded-md" src={school.image} alt="" />
                  <div>
                    <h3 className="text-lg font-bold leading-7 tracking-tight text-gray-800">{school.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-gray-500">{school.date} {school.GPA}</p>
                    <p className="text-sm font-semibold leading-7 text-gray-600">{school.role}</p>
                  </div>
                </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  