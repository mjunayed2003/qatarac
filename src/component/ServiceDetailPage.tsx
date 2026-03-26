import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion, useScroll, useTransform, easeOut } from "framer-motion";
import {
  FaSnowflake,
  FaTools,
  FaWrench,
  FaFan,
  FaThermometerHalf,
  FaCompress,
  FaGasPump,
  FaBolt,
  FaMicrochip,
  FaTruckMoving,
  FaTint,
  FaHeadset,
  FaCheckCircle,
  FaPhoneAlt,
  FaStar,
  FaClock,
  FaShieldAlt,
  FaArrowRight,
  FaWhatsapp,
} from "react-icons/fa";

// ==============================
// TYPES
// ==============================
interface ServiceDetail {
  id: number;
  title: string;
  slug: string;
  tagline: string;
  desc: string;
  longDesc: string;
  image: string;
  icon: React.ReactNode;
  features: string[];
  steps: { title: string; desc: string }[];
  price: string;
  duration: string;
  warranty: string;
  badge?: string;
}

// ==============================
// SERVICES DATA (Full Detail)
// ==============================
const servicesDetail: ServiceDetail[] = [
  {
    id: 1,
    title: "AC Installation",
    slug: "ac-installation",
    tagline: "Precision Fit. Perfect Cool.",
    desc: "Professional split & window AC unit installation.",
    longDesc:
      "Our certified technicians ensure your AC unit is installed with manufacturer-grade precision — from mounting the indoor bracket to commissioning the system. We handle all brands and tonnage with zero damage to your walls or furniture.",
    image: "/images/image3.jpeg",
    icon: <FaTools />,
    badge: "Most Popular",
    features: [
      "All brands supported (Samsung, Daikin, LG, Carrier)",
      "Copper pipe + insulation included",
      "Electrical wiring & circuit breaker check",
      "Test run & cooling performance check",
      "Post-install cleanup guaranteed",
    ],
    steps: [
      { title: "Site Survey", desc: "We assess your room and select optimal placement for maximum cooling efficiency." },
      { title: "Wall Mounting", desc: "Indoor unit is mounted using heavy-duty anchors with perfect leveling." },
      { title: "Piping & Wiring", desc: "Copper pipes and electrical lines are routed neatly and safely." },
      { title: "Outdoor Unit Setup", desc: "Condenser is placed on anti-vibration stands with proper clearance." },
      { title: "Commissioning", desc: "System is powered up, gas pressure checked, and performance verified." },
    ],
    price: "From QAR 250",
    duration: "2–3 Hours",
    warranty: "3 Months",
  },
  {
    id: 2,
    title: "AC Repair",
    slug: "ac-repair",
    tagline: "Diagnosed Right. Fixed Fast.",
    desc: "Expert diagnosis for cooling & noise issues.",
    longDesc:
      "Whether your AC is making strange noises, failing to cool, or completely dead — our repair team uses advanced diagnostic tools to pinpoint faults and restore your system to full working condition, fast.",
    image: "/images/image2.jpeg",
    icon: <FaWrench />,
    features: [
      "Full electrical & mechanical diagnosis",
      "Same-day repair in most cases",
      "Genuine spare parts used",
      "All inverter & non-inverter models",
      "90-day repair guarantee",
    ],
    steps: [
      { title: "Fault Diagnosis", desc: "Comprehensive check of electrical, refrigerant, and mechanical systems." },
      { title: "Parts Assessment", desc: "Faulty components are identified and quoted transparently." },
      { title: "Repair Execution", desc: "Certified technicians carry out repairs with proper tools." },
      { title: "System Test", desc: "Full operational test to confirm the issue is resolved." },
    ],
    price: "From QAR 150",
    duration: "1–4 Hours",
    warranty: "90 Days",
  },
  {
    id: 3,
    title: "AC Maintenance",
    slug: "ac-maintenance",
    tagline: "Service Today. Save Tomorrow.",
    desc: "Routine servicing to extend machine lifespan.",
    longDesc:
      "Regular maintenance is the key to long AC life and peak efficiency. Our comprehensive service covers everything from filter cleaning to refrigerant checks — keeping your energy bills low and comfort high.",
    image: "/images/image4.jpeg",
    icon: <FaSnowflake />,
    features: [
      "Filter wash & coil brushing",
      "Gas pressure verification",
      "Electrical connection tightening",
      "Drainage pipe flush",
      "Performance efficiency report",
    ],
    steps: [
      { title: "Filter & Coil Clean", desc: "Filters removed, washed, and indoor coils brushed clean." },
      { title: "Drain Check", desc: "Condensate drain is flushed to prevent water leakage." },
      { title: "Refrigerant Check", desc: "Gas pressure measured and topped if required." },
      { title: "Electrical Inspection", desc: "All terminals, relays and contactors inspected." },
    ],
    price: "From QAR 100",
    duration: "1–2 Hours",
    warranty: "30 Days",
  },
  {
    id: 4,
    title: "AC Cleaning",
    slug: "ac-cleaning",
    tagline: "Clean Air. Better Life.",
    desc: "Deep cleaning of filters, coils & drainage.",
    longDesc:
      "Over time, dust, bacteria, and mold accumulate inside your AC, degrading air quality and efficiency. Our deep cleaning service removes all contaminants for fresher, healthier air and better cooling performance.",
    image: "/images/image9.jpeg",
    icon: <FaFan />,
    features: [
      "High-pressure foam washing",
      "Anti-bacterial coil treatment",
      "Blower fan deep clean",
      "Drain pan sanitization",
      "Indoor & outdoor unit cleaning",
    ],
    steps: [
      { title: "Disassembly", desc: "Front panel, filters, and coil cover carefully removed." },
      { title: "Foam Wash", desc: "Specialized foaming agent applied to all surfaces and coils." },
      { title: "Pressure Rinse", desc: "High-pressure water rinse removes all foam and contaminants." },
      { title: "Reassembly & Test", desc: "Unit reassembled and performance confirmed." },
    ],
    price: "From QAR 80",
    duration: "1–2 Hours",
    warranty: "30 Days",
  },
  {
    id: 5,
    title: "AC Not Cooling",
    slug: "ac-not-cooling",
    tagline: "We Find the Freeze.",
    desc: "Fixing thermostat & airflow blockages.",
    longDesc:
      "If your AC is running but not cooling, the cause could be low refrigerant, a dirty coil, a faulty thermostat, or blocked airflow. We diagnose the root cause quickly and restore optimal cooling.",
    image: "/images/image5.jpeg",
    icon: <FaThermometerHalf />,
    features: [
      "Refrigerant leak detection",
      "Thermostat calibration",
      "Airflow & duct inspection",
      "Expansion valve check",
      "Same-day resolution",
    ],
    steps: [
      { title: "Temperature Test", desc: "Inlet/outlet temperature difference measured to assess cooling capacity." },
      { title: "Refrigerant Check", desc: "Gas pressure tested with manifold gauge set." },
      { title: "Coil & Filter Inspect", desc: "Evaporator coil checked for icing or blockage." },
      { title: "Fix & Verify", desc: "Root cause fixed and cooling performance confirmed." },
    ],
    price: "From QAR 120",
    duration: "1–3 Hours",
    warranty: "60 Days",
  },
  {
    id: 6,
    title: "Compressor Change",
    slug: "compressor-change",
    tagline: "The Heart of Your AC, Restored.",
    desc: "Replacing faulty compressors with genuine parts.",
    longDesc:
      "The compressor is the most critical — and expensive — component of your AC. Our technicians carefully replace faulty compressors with OEM-equivalent parts and ensure correct refrigerant charge after replacement.",
    image: "/images/image6.jpeg",
    icon: <FaCompress />,
    features: [
      "OEM-equivalent compressor units",
      "Refrigerant recovery & recharge",
      "Capacitor & contactor replaced",
      "Vacuum pump down before recharge",
      "6-month compressor warranty",
    ],
    steps: [
      { title: "Refrigerant Recovery", desc: "Existing gas safely recovered before opening the system." },
      { title: "Compressor Removal", desc: "Old compressor unbolted and disconnected." },
      { title: "New Unit Install", desc: "Replacement compressor fitted and brazed." },
      { title: "Vacuum & Recharge", desc: "System vacuumed, leak-tested, and recharged to spec." },
    ],
    price: "From QAR 600",
    duration: "3–5 Hours",
    warranty: "6 Months",
  },
  {
    id: 7,
    title: "Gas Filling",
    slug: "gas-filling",
    tagline: "Leak-Free. Pressure Perfect.",
    desc: "Refrigerant top-up and leak detection.",
    longDesc:
      "Low refrigerant is a top cause of poor cooling. We check for leaks first, repair them, then recharge your system with the correct refrigerant type (R22, R32, R410A) to manufacturer specifications.",
    image: "/images/image7.avif",
    icon: <FaGasPump />,
    features: [
      "Leak detection with electronic sensor",
      "All refrigerant types (R22, R32, R410A)",
      "Manifold gauge pressure check",
      "Leak repair before recharge",
      "Cooling performance confirmed",
    ],
    steps: [
      { title: "Leak Scan", desc: "Electronic leak detector used on all joints and valves." },
      { title: "Pressure Test", desc: "System pressure measured with calibrated manifold gauges." },
      { title: "Gas Recharge", desc: "Correct refrigerant added to manufacturer specifications." },
      { title: "Performance Check", desc: "Cooling output verified with digital thermometer." },
    ],
    price: "From QAR 120",
    duration: "1–2 Hours",
    warranty: "60 Days",
  },
  {
    id: 8,
    title: "Capacitor Replace",
    slug: "capacitor-replace",
    tagline: "Start Strong. Run Cool.",
    desc: "Quick fix for outdoor unit starting issues.",
    longDesc:
      "A faulty capacitor is one of the most common causes of AC failure — the outdoor unit hums but won't start. We replace it with a correctly rated capacitor and have your system running within the hour.",
    image: "/images/image8.jpg",
    icon: <FaBolt />,
    features: [
      "Correct MFD & voltage rated capacitors",
      "Compressor & fan capacitors available",
      "Under 1-hour fix in most cases",
      "Electrical safety check included",
      "30-day part warranty",
    ],
    steps: [
      { title: "Symptom Check", desc: "Unit behavior analyzed — hard start, hum, no start." },
      { title: "Capacitor Test", desc: "Capacitance measured with multimeter for confirmation." },
      { title: "Replacement", desc: "Faulty capacitor swapped for correctly rated unit." },
      { title: "System Start Test", desc: "AC powered up and compressor/fan operation verified." },
    ],
    price: "From QAR 80",
    duration: "30–60 Minutes",
    warranty: "30 Days",
  },
  {
    id: 9,
    title: "AC Circuit Repair",
    slug: "ac-circuit-repairing",
    tagline: "Smart Fix for Smart ACs.",
    desc: "Advanced PCB repair for inverter ACs.",
    longDesc:
      "Modern inverter ACs rely on complex PCBs and control boards. Our electronics technicians diagnose and repair faulty PCBs, IPM modules, and sensor circuits — saving you the cost of a full board replacement.",
    image: "/images/image1.jpeg",
    icon: <FaMicrochip />,
    features: [
      "Inverter PCB diagnosis",
      "IPM module testing",
      "Sensor & thermistor replacement",
      "Error code reading & clearing",
      "Component-level board repair",
    ],
    steps: [
      { title: "Error Code Read", desc: "Fault codes extracted via remote or test points." },
      { title: "Board Inspection", desc: "PCB visually inspected for burnt components." },
      { title: "Component Replace", desc: "Faulty ICs, caps, or MOSFETs replaced at component level." },
      { title: "Test Run", desc: "System run through all modes to verify repair." },
    ],
    price: "From QAR 200",
    duration: "2–4 Hours",
    warranty: "90 Days",
  },
  {
    id: 10,
    title: "AC Shifting",
    slug: "ac-shifting",
    tagline: "Move It. Without Losing It.",
    desc: "Safe dismantling and re-installation service.",
    longDesc:
      "Moving home or office? We carefully dismantle your AC, transport it safely, and re-install at the new location — including any new piping runs, electrical connections, and commissioning.",
    image: "/images/image10.jpeg",
    icon: <FaTruckMoving />,
    features: [
      "Safe refrigerant recovery before move",
      "Wall repair after bracket removal",
      "New copper piping at new site",
      "Full reinstallation & commissioning",
      "All brands handled",
    ],
    steps: [
      { title: "Gas Recovery", desc: "Refrigerant safely recovered before dismantling." },
      { title: "Dismantle", desc: "Indoor and outdoor units carefully removed." },
      { title: "Transport", desc: "Units safely transported to new location." },
      { title: "Reinstall", desc: "Full re-installation with new piping and commissioning." },
    ],
    price: "From QAR 350",
    duration: "3–5 Hours",
    warranty: "3 Months",
  },
  {
    id: 11,
    title: "Water Leaking",
    slug: "water-leaking",
    tagline: "Stop the Drip. Start the Cool.",
    desc: "Fixing indoor unit leakage & blocked pipes.",
    longDesc:
      "Water dripping from your indoor unit is a sign of a blocked drain, frozen coil, or improper tilt. We identify the exact cause and fix it permanently — protecting your walls and furniture from water damage.",
    image: "/images/image11.jpeg",
    icon: <FaTint />,
    features: [
      "Condensate drain pipe flush",
      "Coil ice-up investigation",
      "Unit re-leveling if required",
      "Drain pan crack inspection",
      "Same-day fix available",
    ],
    steps: [
      { title: "Leak Source ID", desc: "Technician pinpoints whether leak is drain, coil, or fitting." },
      { title: "Drain Flush", desc: "Condensate pipe cleared with pressure or suction." },
      { title: "Coil Check", desc: "Evaporator checked for icing caused by low gas or airflow." },
      { title: "Level & Seal", desc: "Unit re-leveled and any gaps or cracks sealed." },
    ],
    price: "From QAR 100",
    duration: "1–2 Hours",
    warranty: "60 Days",
  },
  {
    id: 12,
    title: "Emergency Service",
    slug: "emergency-service",
    tagline: "24/7. No Wait. No Worry.",
    desc: "24/7 Priority support for urgent breakdowns.",
    longDesc:
      "AC failure in Qatar's summer heat is a genuine emergency. Our 24/7 response team reaches you within 60 minutes, fully equipped to diagnose and repair on the spot — day or night, weekday or weekend.",
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop",
    icon: <FaHeadset />,
    badge: "24/7 Available",
    features: [
      "60-minute response guarantee",
      "Night & holiday coverage",
      "Fully equipped emergency van",
      "Senior technician dispatched",
      "Transparent emergency pricing",
    ],
    steps: [
      { title: "Call / WhatsApp", desc: "Contact us and describe the fault — we dispatch immediately." },
      { title: "Technician En Route", desc: "Nearest available expert heads to your location." },
      { title: "On-Site Diagnosis", desc: "Fast fault finding with van-stocked spare parts." },
      { title: "Fix & Confirm", desc: "Repair completed, system tested, and you're back to cool." },
    ],
    price: "From QAR 200",
    duration: "60 Min Response",
    warranty: "90 Days",
  },
];

// Related services (show 3 others)
const getRelated = (slug: string) =>
  servicesDetail.filter((s) => s.slug !== slug).slice(0, 3);

// ==============================
// ANIMATIONS
// ==============================
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: easeOut },
  }),
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

// ==============================
// MAIN COMPONENT
// ==============================
const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const service = servicesDetail.find((s) => s.slug === slug);

  const heroRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#F9FAFB]">
        <h1 className="text-3xl font-bold text-[#050614] mb-4">Service Not Found</h1>
        <button
          onClick={() => navigate("/service")}
          className="flex items-center gap-2 bg-[#E13232] text-white px-6 py-3 rounded-full font-semibold"
        >
          Back to Services
        </button>
      </div>
    );
  }

  const related = getRelated(service.slug);

  return (
    <div className="bg-[#F9FAFB] min-h-screen font-sans overflow-x-hidden">
      <Helmet>
        <title>{service.title} in Doha | Qatar AC Services</title>
        <meta name="description" content={service.longDesc} />
        <link rel="canonical" href={`https://qatarac.com/service/${service.slug}`} />
        <meta property="og:title" content={`${service.title} | Qatar AC`} />
        <meta property="og:description" content={service.longDesc} />
        <meta property="og:image" content={service.image} />
      </Helmet>

      {/* ─────────────────────────────────────
          HERO SECTION
      ───────────────────────────────────── */}
      <div ref={heroRef} className="relative h-[70vh] min-h-[480px] overflow-hidden">
        {/* Parallax BG */}
        <motion.div style={{ y: heroY }} className="absolute inset-0 scale-110">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050614]/90 via-[#050614]/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050614]/70 via-transparent to-transparent" />

        {/* Badge */}
        {service.badge && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute top-6 right-6 z-20 bg-[#E13232] text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-widest"
          >
            {service.badge}
          </motion.div>
        )}

        {/* Hero Content */}
        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 md:px-16 lg:px-24 max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-3 mb-4"
          >
            <div className="w-10 h-10 bg-[#E13232] rounded-xl flex items-center justify-center text-white text-lg shadow-lg shadow-red-500/40">
              {service.icon}
            </div>
            <span className="text-[#E13232] font-bold uppercase tracking-widest text-sm">
              AC Service
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-3"
          >
            {service.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-[#E13232] text-lg md:text-2xl font-bold italic mb-2"
          >
            "{service.tagline}"
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.65 }}
            className="text-white/70 text-sm md:text-base max-w-xl"
          >
            {service.desc}
          </motion.p>
        </motion.div>

        {/* Decorative bottom wave */}
        <div className="absolute bottom-0 left-0 right-0 z-10">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 60 L0 30 Q360 0 720 30 Q1080 60 1440 30 L1440 60 Z" fill="#F9FAFB" />
          </svg>
        </div>
      </div>

      {/* ─────────────────────────────────────
          STATS BAR
      ───────────────────────────────────── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 md:px-8 lg:px-16 -mt-2 mb-12"
      >
        <div className="grid grid-cols-3 gap-4 bg-white rounded-2xl shadow-xl shadow-gray-100 border border-gray-100 p-5 md:p-8">
          {[
            { icon: <FaClock className="text-[#E13232]" />, label: "Duration", value: service.duration },
            { icon: <FaShieldAlt className="text-[#E13232]" />, label: "Warranty", value: service.warranty },
            { icon: <FaStar className="text-[#E13232]" />, label: "Starting Price", value: service.price },
          ].map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              custom={i}
              className="flex flex-col items-center text-center gap-1"
            >
              <div className="text-xl md:text-2xl mb-1">{stat.icon}</div>
              <p className="text-[10px] md:text-xs text-gray-400 uppercase tracking-widest font-bold">
                {stat.label}
              </p>
              <p className="text-sm md:text-xl font-extrabold text-[#050614]">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* ─────────────────────────────────────
          MAIN CONTENT GRID
      ───────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">

        {/* LEFT — Description + Steps */}
        <div className="lg:col-span-2 space-y-10">

          {/* About This Service */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-1 h-8 bg-[#E13232] rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#050614]">
                About This Service
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-base md:text-lg">
              {service.longDesc}
            </p>
          </motion.div>

          {/* Process Steps */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-1 h-8 bg-[#E13232] rounded-full"></div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-[#050614]">
                How It Works
              </h2>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#E13232] via-red-300 to-transparent hidden md:block"></div>

              <div className="space-y-5">
                {service.steps.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    custom={i}
                    className="flex gap-5 items-start"
                  >
                    {/* Step number circle */}
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#E13232] text-white font-extrabold text-sm flex items-center justify-center shadow-md shadow-red-200 z-10">
                      {i + 1}
                    </div>
                    <div className="bg-white rounded-xl p-4 md:p-5 flex-1 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h4 className="font-bold text-[#050614] mb-1">{step.title}</h4>
                      <p className="text-gray-500 text-sm">{step.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — Features + CTA Sticky Card */}
        <div className="space-y-6">

          {/* Features Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center text-[#E13232]">
                <FaCheckCircle />
              </div>
              <h3 className="text-lg font-extrabold text-[#050614]">What's Included</h3>
            </div>
            <ul className="space-y-3">
              {service.features.map((f, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  custom={i}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <FaCheckCircle className="text-[#E13232] mt-0.5 flex-shrink-0" />
                  <span>{f}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#050614] to-[#1a1a3e] rounded-2xl p-6 md:p-8 text-white relative overflow-hidden"
          >
            {/* BG decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E13232]/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>

            <h3 className="text-xl font-extrabold mb-2 relative z-10">Book This Service</h3>
            <p className="text-white/60 text-sm mb-5 relative z-10">
              Certified technicians available today in Doha.
            </p>

            {/* Rating stars */}
            <div className="flex items-center gap-1 mb-5 relative z-10">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 text-xs" />
              ))}
              <span className="text-white/60 text-xs ml-1">4.9 / 5 (200+ reviews)</span>
            </div>

            <a
              href="tel:+97412345678"
              className="flex items-center justify-center gap-2 w-full bg-[#E13232] hover:bg-red-600 text-white font-bold py-3 px-5 rounded-xl transition-all mb-3 shadow-lg shadow-red-900/30 relative z-10 group"
            >
              <FaPhoneAlt className="text-sm group-hover:rotate-12 transition-transform" />
              Call Now
            </a>

            <a
              href="https://wa.me/97412345678"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-5 rounded-xl transition-all shadow-lg shadow-green-900/30 relative z-10 group"
            >
              <FaWhatsapp className="text-base group-hover:scale-110 transition-transform" />
              WhatsApp Us
            </a>

            <p className="text-white/40 text-xs text-center mt-4 relative z-10">
              ⚡ Average response in 45 minutes
            </p>
          </motion.div>
        </div>
      </div>

      {/* ─────────────────────────────────────
          WHY CHOOSE US STRIP
      ───────────────────────────────────── */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="bg-[#050614] py-14 mb-16"
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-16">
          <motion.p
            variants={fadeUp}
            className="text-center text-[#E13232] font-bold uppercase tracking-widest text-xs mb-2"
          >
            Why Qatar AC?
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="text-center text-white text-2xl md:text-3xl font-extrabold mb-10"
          >
            Trusted by 5,000+ Homes in Doha
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: "🏆", title: "10+ Years", sub: "In Qatar's HVAC industry" },
              { icon: "⚡", title: "Same Day", sub: "Service in most areas" },
              { icon: "🔧", title: "All Brands", sub: "Split, Cassette, Central" },
              { icon: "💳", title: "Transparent", sub: "Pricing, no hidden fees" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                custom={i}
                className="text-center p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#E13232]/40 hover:bg-white/10 transition-all"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-white font-extrabold text-lg mb-1">{item.title}</p>
                <p className="text-white/50 text-xs">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ─────────────────────────────────────
          RELATED SERVICES
      ───────────────────────────────────── */}
      <div className="container mx-auto px-4 md:px-8 lg:px-16 mb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="w-1 h-8 bg-[#E13232] rounded-full"></div>
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#050614]">
            Related Services
          </h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {related.map((rel, i) => (
            <motion.div
              key={rel.id}
              variants={fadeUp}
              custom={i}
              whileHover={{ y: -6 }}
              onClick={() => { navigate(`/service/${rel.slug}`); window.scrollTo(0, 0); }}
              className="cursor-pointer group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <div className="absolute inset-0 bg-[#050614]/20 group-hover:bg-[#050614]/10 transition-all z-10" />
                <motion.img
                  src={rel.image}
                  alt={rel.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 z-20 bg-white/90 backdrop-blur-sm p-1.5 rounded-lg text-[#E13232] text-sm">
                  {rel.icon}
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-extrabold text-[#050614] group-hover:text-[#E13232] transition-colors mb-1">
                  {rel.title}
                </h3>
                <p className="text-gray-500 text-sm mb-4">{rel.desc}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-gray-400 group-hover:text-[#E13232] uppercase tracking-wide transition-colors">
                    View Details
                  </span>
                  <FaArrowRight className="text-xs text-[#E13232] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

    </div>
  );
};

export default ServiceDetailPage;