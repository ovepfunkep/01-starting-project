import Input from "./templates/Input";
import Button from "./templates/Button";

export default function ProjectEdit({project, onProjectSave}) {
    console.log('ProjectEdit component rendered')
    console.log(project)
    function handleFormSubmit(event) {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const newProject = Object.fromEntries(formData.entries());
        newProject.id = +newProject.id
        onProjectSave(newProject);
      }

    return (
        <form className="px-96 py-20 center flex-grow" method='post' onSubmit={handleFormSubmit}>
            <h1 className="text-4xl w-full text-center font-semibold text-teal-800 mb-10 uppercase">Edit project</h1>
            <Input label='Id' name='id' type='number' readOnly defaultValue={project.id}/>
            <Input label='Title' name='title' type='text' required defaultValue={project.title}/>
            <Input label='Description' name='description' type='text' defaultValue={project.description}/>
            <Input label='Due date' name='dueDate' type='date' defaultValue={project.dueDate}/>
            <div className='flex justify-between mt-14'>
                <Button text='Delete' type='button' className='w-32 bg-red-400'></Button>
                <Button text='Save' type='submit' className='w-44'></Button>
            </div>
        </form>
    )
}