import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Base_Url } from "../../API/BaseUrl";

function ProjectDetails() {
  const { slug } = useParams();

  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProjectDetails = async () => {
    try {
      const res = await axios.get(
        `${Base_Url}/project/${slug}`
      );

      if (res.data.success) {
        setProject(res.data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProjectDetails();
  }, [slug]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-bold text-[#3c0d12]">
        Loading...
      </div>
    );
  }

  if (!project) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-bold text-red-500">
        Project Not Found
      </div>
    );
  }

  return (
    <>
      {/* Banner */}
      <section className="relative h-[600px]">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50"></div>

        <div className="absolute inset-0 flex items-center justify-center text-center px-6">
          <div>
            <h1 className="text-white text-5xl lg:text-7xl font-bold">
              {project.title}
            </h1>

            <p className="text-[#f5e6c5] text-xl mt-4">
              {project.location}
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="lg:py-24 py-10 bg-[#faf7f2]">
        <div className="container mx-auto px-6 lg:px-16">

          {/* Info Cards */}
          <div className="grid lg:grid-cols-3 gap-8">

            <div className="bg-white rounded-3xl p-8 shadow">
              <h4 className="font-semibold text-[#3c0d12]">
                Project Area
              </h4>

              <p className="mt-2 text-gray-600">
                {project.area}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow">
              <h4 className="font-semibold text-[#3c0d12]">
                Project Type
              </h4>

              <p className="mt-2 text-gray-600">
                {project.type}
              </p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow">
              <h4 className="font-semibold text-[#3c0d12]">
                RERA Number
              </h4>

              <p className="mt-2 text-gray-600">
                {project.rera}
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="md:mt-20 mt-10">
            <h2 className="md:text-4xl text-3xl font-bold text-[#3c0d12]">
              Project Overview
            </h2>

            <p className="mt-6 text-gray-600 leading-8 md:text-lg text-md">
              {project.description}
            </p>
          </div>

          {/* Features */}
          <div className="md:mt-20 mt-10">
            <h2 className="md:text-4xl text-3xl font-bold text-[#3c0d12] mb-10">
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {project.features?.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-[#ecd9b0]"
                >
                  <span className="text-[#c89b3c] font-bold">
                    ✓
                  </span>{" "}
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Gallery */}
          <div className="md:mt-20 mt-10">
            <h2 className="md:text-4xl text-3xl font-bold text-[#3c0d12] mb-10">
              Project Gallery
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {project.gallery?.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`gallery-${index}`}
                  className="rounded-3xl h-72 w-full object-cover"
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default ProjectDetails;