const posts = [
    {    
      id: 1,
      title: 'Inventory Request System for Valley Tech Systems ',
      description:
      'Developed an internal website using Agile methodology and designed the user interface using Figma to streamline the equipment request process for managers at Valley Tech Systems, ensuring effective tracking of requests.',
      category: { title: 'Figma, JavaScript, NodeJS, SQL'},
    }
   ,
    {
      id: 2,
      title: 'E-commerce Website',
      description:
        'Built a fully-fledged ecommerce website with Admin Panel, Redux Toolkit, Stripe Payment, Cloud Deployment, Email Invoice, and many features.',
      category: { title: 'Javascript, React-Redux, Tailwind, NodeJs, MongoDB, REST API'},
    },
    {
      id: 3,
      title: 'GitHub Analytics',
      description:
        'Developed a web app that allows people to view GitHub users profile, stats, and public repositories. Used Redux to keep track of the states and be used by other components in React. Designed the overall web app using React and Material-UI.',
      category: { title: 'React-Redux, Material UI' },
    },
    {
      id: 4,
      title: 'Mobile Design',
      description:
        'Designed the mobile version prototype of the Greater Sacramento Nepalese Community Center website ensuring a user-friendly and visually appealing interface.',
      category: { title: 'Figma'},
    },
    {
      id: 4,
      title: 'Shoe Website',
      description:
        'Built a fully-fledged backend environment and created different routes for a shoe website using NodeJS and Mongo DB.',
      category: { title: 'HTML, CSS, JavaScript, NodeJS, Mongo DB'},
    },
   
    // More posts...
  ]
  
export default function Projects() {
    return (
      <div className=" py-10 sm:py-10">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-indigo-500 sm:text-4xl">Projects</h2>
          </div>
          <div className="mx-auto  grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 
          lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                    <p className="gap-x-4 text-xs relative z-10 rounded-full
                     bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"> 
                     {post.category.title}
                     </p>
                <div className="group relative ">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      {post.title}
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600 transition duration-300 ease-in-out group-hover:scale-110">{post.description}</p>
                </div>
               
              </article>
            ))}
          </div>
        </div>
      </div>
    )
}
  