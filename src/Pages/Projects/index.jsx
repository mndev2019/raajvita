import { Link } from "react-router-dom";
import pic from '../../assets/Images/about2.jpg'
import pic2 from '../../assets/Images/about1.jpg'

function Projects() {
  const projects = [
    {
      id: 1,
      slug: "rajvita-greens",
      title: "Rajvita Greens",
      location: "Kanpur, Uttar Pradesh",
      image:pic,
      shortDescription:
        "Premium land development project designed for future-ready investment opportunities.",
    },
    {
      id: 2,
      slug: "rajvita-heights",
      title: "Rajvita Heights",
      location: "Lucknow, Uttar Pradesh",
      image:pic2,
      shortDescription:
        "Strategically planned development offering excellent long-term value.",
    },
    {
      id: 3,
      slug: "rajvita-residency",
      title: "Rajvita Residency",
      location: "Noida, Uttar Pradesh",
      image:pic,
      shortDescription:
        "Modern infrastructure development backed by transparency and trust.",
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-[#3c0d12] py-32 text-center text-white px-6">
        <p className="uppercase tracking-[5px] text-[#c89b3c] mb-4">
          Our Projects
        </p>

        <h1 className="text-5xl font-bold">
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

            {projects.map((project) => (
              <div
                key={project.id}
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
                    {project.shortDescription}
                  </p>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="inline-flex items-center mt-6 text-[#3c0d12] font-semibold"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;