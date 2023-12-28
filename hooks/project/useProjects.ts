import React, { useEffect, useState } from "react";

interface IProjects {
  _id: string | number;
  title: string;
  link: string;
  description: string;
}

const projectsData: IProjects[] = [
  {
    _id: 1,
    title: "Project 1",
    link: "project1.com",
    description: "lorem espem",
  },
  {
    _id: 2,
    title: "Project 2",
    link: "project2.com",
    description: "lorem espem",
  },
];

export default function useProjects() {
  const [loading, setLoading] = useState(false);

  const [projects, setProjects] = useState<IProjects[]>([]);
  const [currentProject, setCurrentProject] = useState<IProjects | null>(null);

  const handleProjectClick = (item: IProjects) => {
    setCurrentProject(item);
  };

  useEffect(() => {
    setProjects(projectsData);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return { loading, projects, currentProject, handleProjectClick };
}
