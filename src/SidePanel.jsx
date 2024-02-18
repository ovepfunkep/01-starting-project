import Button from './templates/Button'

export default function SidePanel({onButtonAddClick, projects, onProjectSelect}) {
    return (
        <div className='bg-zinc-900 border-r-2 h-screen w-96 text-center rounded-r-3xl'>
            <h1 className='text-teal-100 text-4xl pt-20 mb-10 uppercase'>Projects</h1>
            <div className='flex flex-col items-center mb-5'>
                {projects?.map((project) => <Button key={project.title} 
                                                    text={project.title} 
                                                    onClick={() => onProjectSelect(project)}
                                                    className='w-2/3 bg-transparent my-3 text-teal-100 outline-teal-100'/>)}
            </div>
            <Button onClick={onButtonAddClick}/>
        </div>
    )
}