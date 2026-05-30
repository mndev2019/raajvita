import { useParams } from "react-router-dom";

function ProjectDetails() {
  const { slug } = useParams();

  const project = {
    title: "Rajvita Greens",
    location: "Kanpur, Uttar Pradesh",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
    area: "25 Acres",
    type: "Land Development",
    rera: "RERA123456",
    description:
      "Rajvita Greens is a premium land development project focused on creating long-term value through disciplined planning, transparent documentation, and legally secure processes.",
    gallery: [
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    ],
    features: [
      "Prime Location",
      "Transparent Documentation",
      "Legal Verification",
      "Investment Potential",
      "Infrastructure Development",
      "Secure Transactions",
    ],
  };

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
      <section className="py-24 bg-[#faf7f2]">
        <div className="container mx-auto px-6 lg:px-16">

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
          <div className="mt-20">

            <h2 className="text-4xl font-bold text-[#3c0d12]">
              Project Overview
            </h2>

            <p className="mt-6 text-gray-600 leading-8 text-lg">
              {project.description}
            </p>
          </div>

          {/* Features */}
          <div className="mt-20">

            <h2 className="text-4xl font-bold text-[#3c0d12] mb-10">
              Key Features
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

              {project.features.map((feature, index) => (
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
          <div className="mt-20">

            <h2 className="text-4xl font-bold text-[#3c0d12] mb-10">
              Project Gallery
            </h2>

            <div className="grid md:grid-cols-3 gap-6">

              {project.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
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