import useProjects from "@/hooks/project/useProjects";
import moment from "moment";
import parse from "html-react-parser";

const ListProjects = () => {
  const { loading, projects, currentProject, handleProjectClick } =
    useProjects();

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4 text-white">Chat</h2>
      <div className="flex gap-5">
        <div
          className={`h-[calc(100vh-150px)] overflow-y-auto pr-5 ${
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
                <p className="text-xs font-bold text-white">
                  by {project.createdBy.fullName}
                </p>
              </span>
              <p className="text-xs text-white/[.50]">
                {moment(project.createdAt).format("DD MM YYYY")}
              </p>
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
                <p>Description: </p>
                <div>{parse(currentProject?.description)}</div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ListProjects;
