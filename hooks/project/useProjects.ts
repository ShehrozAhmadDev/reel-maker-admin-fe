import Project from "@/services/project";
import React, { useEffect, useState } from "react";
import Cookie from "js-cookie";


interface IUser{
  fullName: string;
  email: string;
  password: string;
  role: string;
}
interface IProjects {
  _id: string | number;
  title: string;
  link: string;
  description: string;
  createdBy: IUser;
  createdAt: string | Date;
  updatedAt: string | Date;
}


export default function useProjects() {
  const [loading, setLoading] = useState(false);

  const [projects, setProjects] = useState<IProjects[]>([]);
  const [currentProject, setCurrentProject] = useState<IProjects | null>(null);

  const handleProjectClick = (item: IProjects) => {
    setCurrentProject(item);
  };

  const getAllProjects = async()=>{
    const token = Cookie.get("token");
    try{
      setLoading(true);
    const data = await Project.getAllProjects(token)
    setProjects(data);
    setLoading(false);
  }catch(error){
    console.error(error)
  }
  }

  useEffect(() => {
    getAllProjects()
    // setProjects(projectsData);
   
  }, []);

  return { loading, projects, currentProject, handleProjectClick };
}
