import vpn from '../assets/vpn.png'
import trms from '../assets/TRMS.png'
import Footer from './Footer'
interface ProjectCardProps {
    image: {};
    title: string;
    description: string;
    git: string;
    technologies: string[];
}
const ProjectCard = ({ image, title, description, git, technologies }:ProjectCardProps) => {
    return (
        <div className="max-w-sm sm:max-w-sm md:max-w-sm bg-gray-900 border border-neutral-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            {title==='Snap Shot' && <button type="button">
                <img className="w-full rounded-t-lg h-auto object-cover " src={trms} alt="trms" />
            </button>}
            {title==='TRMS Website' && <button type="button">
                <img className="w-full rounded-t-lg h-auto object-cover " src={trms} alt="" />
            </button>}
            <div className="p-4 sm:p-6">
                <button className="text-2xl sm:text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-white bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-pink-500 cursor-pointer">
                    {title}
                </button>
                <p className="font-normal text-sm sm:text-base md:text-lg text-gray-300 dark:text-gray-400">{description}</p>
            </div>
            <div className='m-2 sm:m-4 lg:m-6 flex justify-between'>
                <div className='flex flex-wrap gap-2 pl-2'>
                    {technologies.map((tag, index) => (
                        <p
                            key={`${index}-${tag}`}
                            className='text-[14px] text-blue-500'
                        >
                            #{tag}
                        </p>
                    ))}
                </div>
                <a href={git} className="text-red-300 border border-gray-200 rounded-lg shadow p-1 sm:p-2 lg:p-3 hover:text-green-500 duration-300">GitHub</a>
            </div>
        </div>
    );
};
  
const Projects = () => {
    return (
        <div className="bg-black">
            <div className="flex flex-wrap gap-7 justify-center items-center m-12 p-12">
                {project.map((item, index) => (
                    <ProjectCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        description={item.description}
                        // links={item.links}
                        git={item.git}
                        technologies={item.technologies}
                    />
                ))}
            </div>
            <Footer/>
        </div>
    );
}


export const project = [
    {
        title: "TRMS Website",
        description: "TRMS is a streamlined web application I developed using HTML, CSS, EJS, and MongoDB. This project simplifies the process of booking auditoriums and activity rooms in colleges, reducing paperwork and enhancing efficiency. Users can book, view, and cancel reservations seamlessly, while admins have additional management capabilities.",
        image: {trms},
        git: "https://github.com/Raju7250/TRMS",
        technologies: ["HTML", "CSS", "EJS", "MongoDB", "NodeJS"]
    },
    {
        title:'Snap Shot',
        description:'SnapShot is a stunning portfolio that I exclusively designed using React JS and tailwind CSS.This Project serves as a representation of a photographer’s work, highlighting their portfolio and services.',
        image: {trms},
        git:"https://github.com/nithingooud/vpn_studios",
        technologies:[ 'React JS', 'tailwind CSS']
    }
]

export default Projects