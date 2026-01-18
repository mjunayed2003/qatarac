import React from "react";

const Home: React.FC = () => {
  return (
    <div className=" bg-gray-50 min-h-screen">
      {/* HERO SECTION */}
      <section className="relative h-[500px] md:h-[650px] w-full overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/55 backdrop-blur-sm"></div>
        </div>

        {/* Content */}
        <div className="pt-20 relative container mx-auto px-4 md:px-16 h-full flex flex-col justify-center items-start text-white">
          <h2 className="text-[#E13232] font-bold font-header text-2xl md:text-3xl uppercase tracking-widest mb-3">
            Professional Cooling
          </h2>

          <h1 className="text-5xl md:text-7xl font-extrabold font-header uppercase leading-tight mb-6">
            Keep Your Home <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-white">
              Cool & Fresh
            </span>
          </h1>

          <p className="max-w-xl text-gray-300 text-lg mb-8 font-sans">
            Best AC maintenance, repair, and installation services in Qatar.
            We are available 24/7 for your emergency needs.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="bg-[#E13232] hover:bg-red-700 text-white px-8 py-3 rounded uppercase font-bold tracking-wider transition"
            >
              Book Service
            </a>

            <a
              href="#"
              className="border-2 border-white hover:bg-white hover:text-black text-white px-8 py-3 rounded uppercase font-bold tracking-wider transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      {/* SERVICE CARD SECTION */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-16">
          <h2 className="text-3xl font-bold text-center mb-10">
            Our Services
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard title="AC Installation" desc="New AC setup with professional installation." />
            <ServiceCard title="AC Repair" desc="Fast repair service for all AC brands." />
            <ServiceCard title="AC Maintenance" desc="Regular check-up & cleaning service." />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{desc}</p>
      <button className="mt-6 bg-[#E13232] text-white px-5 py-2 rounded-full font-semibold">
        Learn More
      </button>
    </div>
  );
};

export default Home;
