import useProjects from "@/hooks/project/useProjects";

const ListProjects = () => {
  const { loading, projects, currentProject, handleProjectClick } =
    useProjects();

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-white">Chat</h2>
      <div className="flex gap-5">
        <div
          className={`${
            currentProject ? " w-[20%]" : "w-[80%]"
          } flex flex-col gap-2 transition-all duration-300 `}
        >
          {projects?.map((project) => (
            <div
              className={`flex ${
                currentProject
                  ? "flex-col"
                  : "flex-row justify-between items-end"
              }  p-3 border-[1px] border-white ${
                project?._id === currentProject?._id
                  ? "bg-white/[.30]"
                  : "bg-transparent"
              } rounded-lg cursor-pointer`}
              onClick={() => handleProjectClick(project)}
            >
              <span>
                <p className="text-lg font-bold text-white">{project.title}</p>
                <p className="text-xs font-bold text-white">by user1</p>
              </span>
              <p className="text-xs text-white/[.50]">Nov 10,23 - Saturday</p>
            </div>
          ))}
        </div>
        {currentProject && (
          <div className="bg-transparent border border-white/[.20] rounded-lg shadow-md w-full">
            {loading ? (
              <p className="text-white font-bold my-2">Loading....</p>
            ) : (
              <div className="h-[calc(100vh-190px)] overflow-y-auto p-4 text-white">
                <h1>Title: {currentProject?.title}</h1>
                <p>Link: {currentProject?.link}</p>
                <p>Description: {currentProject?.description}</p>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListProjects;
