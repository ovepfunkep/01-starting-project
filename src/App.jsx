import SidePanel from './SidePanel';
import { useState } from 'react';
import { getNewProject } from './utils/projectsUtils';
import ProjectEdit from './ProjectEdit';

function App() {
  const [projects, setProjects] = useState([{id: 1, title: 'Project 1', description: 'Project 1 description', dueDate: '2020-01-01'}]);
  const [currentProject, setCurrentProject] = useState(undefined)
  
  function handleButtonAddClick(){
    const newProject = getNewProject()
    setCurrentProject(newProject)
  }

  function handleProjectSave(newProject){
    if (projects.findIndex((p) => p.id !== newProject.id && p.title === newProject.title) !== -1) {
      alert('Project with this name already exists. Please select a different name.')
    }
    else {
      console.log('========')
      console.log(projects.findIndex((p) => p.id === newProject.id))
      if (projects.findIndex((p) => p.id === newProject.id) === -1) {
        newProject.id = (projects.map((p) => p.id).sort().reverse()[0] ?? 0) + 1
        setProjects([...projects, newProject])
        setCurrentProject(null)
      }
      else {
        const newProjects = [...projects]
        newProjects[projects.findIndex((p) => p.id === newProject.id)] = newProject
        setProjects(newProjects)
      }
    }
    console.log(newProject)
    console.log('========')
  }

  function handleProjectSelect(project) {
    setCurrentProject(project)
  }

  return (
    <div className='flex flex-row'>
      <SidePanel onButtonAddClick={handleButtonAddClick} projects={projects} onProjectSelect={handleProjectSelect}/>
      {currentProject && <ProjectEdit project={currentProject} onProjectSave={handleProjectSave}/>}
    </div>
  );
}

export default App;
