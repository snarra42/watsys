import imgWaterSupply from '../assets/Water_Supply_Systems.png';
import imgUGD from '../assets/Underground_Drainage_UGD_Sewer.png';
import imgNRW from '../assets/NRW.png';
import imgHydraulic from '../assets/HYDRAULIC.png';
import imgGIS from '../assets/GIS.png';
import imgDPR from '../assets/DPR.png';
import realPhoto1 from '../assets/new-project-photo-1.jpeg';
import realPhoto2 from '../assets/new-project-photo-2.jpeg';
import realPhoto3 from '../assets/new-project-photo-3.jpeg';

export const services = [
    {
        id: "water-supply",
        title: "Water Supply Systems",
        shortDesc: "End-to-end consultancy for continuous water supply planning and hydraulic design.",
        description: "We provide comprehensive engineering services for urban and rural water supply schemes. From source sustainability assessments to the design of complex transmission and distribution networks, our solutions ensure reliable and equitable pure water delivery.",
        icon: "Droplets",
        image: imgWaterSupply,
        realImage: realPhoto1,
        benefits: ["Optimized network lifecycle", "Reduced pumping costs", "Equitable pressure distribution"],
        process: ["System Assessment", "Hydraulic Modeling", "Network Design", "Continuous Supply Planning (24x7)"]
    },
    {
        id: "ugd-sewer",
        title: "Underground Drainage (UGD) & Sewer",
        shortDesc: "Advanced design for wastewater collection, conveyance, and strategic STP placement.",
        description: "Our UGD designs prioritize gravity-flow optimization and safe conveyance of wastewater. We specialize in designing deep sewer networks, lift stations, and trunk mains conforming to CPHEEO manual standards.",
        icon: "Waves",
        image: imgUGD,
        realImage: realPhoto2,
        benefits: ["Prevention of water logging", "Improved urban sanitation", "Cost-effective construction depths"],
        process: ["Topographical Analysis", "Sewer Network Design", "Pumping Station Design", "Wastewater Infrastructure Planning"]
    },
    {
        id: "nrw-reduction",
        title: "NRW/UFW Reduction",
        shortDesc: "Data-driven strategies to audit water loss and establish functional DMAs.",
        description: "Non-Revenue Water (NRW) or Unaccounted For Water (UFW) is a critical challenge. We design strategies to isolate networks into District Metered Areas (DMAs), conduct water balances, and pinpoint physical leaks and commercial losses.",
        icon: "Activity",
        image: imgNRW,
        realImage: realPhoto3,
        benefits: ["Increased utility revenue", "Water conservation", "Deferred capital expenditure"],
        process: ["Water Loss Analysis", "Leak Detection Planning", "DMA Design", "Metering Strategy"]
    },
    {
        id: "hydraulic-modeling",
        title: "Hydraulic Modeling & Engineering Analysis",
        shortDesc: "Advanced simulation of water and wastewater networks.",
        description: "Using industry-standard software like Bentley WaterGEMS and SewerGEMS, we simulate network behaviors under various demand scenarios, helping utilities foresee bottlenecks and optimize operations.",
        icon: "Network",
        image: imgHydraulic,
        benefits: ["Predictive operational insights", "Surge and transient analysis", "Energy optimization"],
        process: ["Data Collection", "Model Calibration", "Extended Period Simulation", "Optimization Scenarios"]
    },
    {
        id: "gis-survey",
        title: "GIS Mapping and Survey Services",
        shortDesc: "Precision mapping of utility infrastructure and consumer indexing.",
        description: "Accurate field data forms the bedrock of our engineering designs. Our survey teams deploy advanced DGPS, Total Stations, and Drone surveys to capture high-fidelity spatial data essential for infrastructure planning.",
        icon: "MapPin",
        image: imgGIS,
        benefits: ["Centimeter-level accuracy", "Digital twin foundations", "Streamlined project execution"],
        process: ["Topographical Survey", "DGPS Survey", "Consumer Survey & Indexing", "Asset Mapping"]
    },
    {
        id: "dpr-prep",
        title: "DPR Preparation & Technical Documentation",
        shortDesc: "Creating bankable Detailed Project Reports for government approvals.",
        description: "We prepare exhaustive Detailed Project Reports (DPRs) that meet the rigorous standards of funding agencies and government bodies, covering technical, financial, and environmental feasibilities.",
        icon: "FileText",
        image: imgDPR,
        benefits: ["Faster funding approvals", "Accurate cost estimations", "Clear implementation roadmaps"],
        process: ["Feasibility Studies", "Cost Estimation (BOQ)", "Technical Specifications", "Final DPR Compilation"]
    }
];
