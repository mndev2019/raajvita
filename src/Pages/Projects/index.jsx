import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Base_Url } from "../../API/BaseUrl";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProjects = async () => {
    try {
      const res = await axios.get(
        `${Base_Url}/project`
      );

      if (res.data.success) {
        setProjects(res.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      {/* Hero */}
      <section className="bg-[#3c0d12] py-32 text-center text-white px-6">
        <p className="uppercase tracking-[5px] text-[#c89b3c] mb-4">
          Our Projects
        </p>

        <h1 className="lg:text-5xl text-3xl font-bold">
          Transforming Land Into Valuable Assets
        </h1>

        <p className="max-w-3xl mx-auto mt-6 text-gray-300">
          Discover thoughtfully planned developments built with trust,
          transparency, and disciplined execution.
        </p>
      </section>

      {/* Projects */}
      <section className="py-24 bg-[#faf7f2]">
        <div className="container mx-auto px-6 lg:px-16">
          
          {loading ? (
            <div className="text-center text-xl font-semibold text-[#3c0d12]">
              Loading...
            </div>
          ) : projects.length === 0 ? (
            <div className="text-center text-xl font-semibold text-[#3c0d12]">
              No Projects Found
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {projects.map((project) => (
                <div
                  key={project._id}
                  className="bg-white rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-500"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-72 object-cover"
                  />

                  <div className="p-7">
                    <h3 className="text-2xl font-semibold text-[#3c0d12]">
                      {project.title}
                    </h3>

                    <p className="text-[#c89b3c] mt-2">
                      {project.location}
                    </p>

                    <p className="text-gray-600 mt-4 leading-7">
                      {project.description?.slice(0, 100)}...
                    </p>

                    <div className="flex items-center justify-between mt-6">
                      <span className="text-sm text-gray-500">
                        {project.area}
                      </span>

                      <Link
                        to={`/projects/${project.slug}`}
                        className="text-[#3c0d12] font-semibold hover:text-[#c89b3c] transition"
                      >
                        View Details →
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default Projects;