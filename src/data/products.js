import labIslandTable from '../assets/laboratory-island-table.png';
import wallBenchSystem from '../assets/wall-bench-system.png';
import fumeHoodExpert from '../assets/fume-hood-expert.png';
import antiVibrationTable from '../assets/anti-vibration-table.png';
import chemicalStorageCabinet from '../assets/chemical-storage-cabinet.png';
import labStools from '../assets/lab-stools.png';
import labCenter from '../assets/lab-center.png';
import scientist from '../assets/scientist.png';
import showcase1 from '../assets/showcase-1.png';
import showcase2 from '../assets/showcase-2.png';
import showcase3 from '../assets/showcase-3.png';
import thumbMan from '../assets/thumb-man.png';
import thumbLike from '../assets/thumb-like.png';
import thumbCircle from '../assets/thumb-circle.png';
import labFurniture1 from '../assets/lab-furniture-1.jpg';
import labFurniture2 from '../assets/lab-furniture-2.jpg';
import labFurniture3 from '../assets/lab-furniture-3.jpg';
import labFurniture4 from '../assets/lab-furniture-4.jpg';
import fumeHood1 from '../assets/fume-hood-1.png';
import fumeHood2 from '../assets/fume-hood-2.jpg';
import fumeHood3 from '../assets/fume-hood-3.jpg';
import fumeHood4 from '../assets/fume-hood-4.jpg';
import antiVibration1 from '../assets/anti-vibration-1.jpg';
import antiVibration2 from '../assets/anti-vibration-2.jpg';
import fumeExtractor1 from '../assets/fume-extractor-1.jpg';
import fumeExtractor2 from '../assets/fume-extractor-2.jpg';
import blower1 from '../assets/exhaust-blower-1.png';
import blower2 from '../assets/exhaust-blower-2.png';
import blower3 from '../assets/exhaust-blower-3.png';
import workTable1 from '../assets/lab-working-table/working-table-1.png';
import workTable2 from '../assets/lab-working-table/working-table-2.png';
import workTable3 from '../assets/lab-working-table/working-table-3.png';
import workTable4 from '../assets/lab-working-table/working-table-4.png';
import islandTable1 from '../assets/island-table/island-table-1.png';
import islandTable2 from '../assets/island-table/island-table-2.jpg';
import islandTable3 from '../assets/island-table/island-table-3.png';
import overhead1 from '../assets/overhead-storage/overhead-1.jpg';
import overhead2 from '../assets/overhead-storage/overhead-2.jpg';
import overhead3 from '../assets/overhead-storage/overhead-3.jpg';
import overhead4 from '../assets/overhead-storage/overhead-4.jpg';
import glassware1 from '../assets/glassware-storage/glassware-1.png';
import glassware2 from '../assets/glassware-storage/glassware-2.jpg';
import glassware3 from '../assets/glassware-storage/glassware-3.jpg';
import glassware4 from '../assets/glassware-storage/glassware-4.jpg';
import chemical1 from '../assets/chemical-storage/chemical-storage-1.jpg';

export const products = [
  {
    id: "laboratory-furniture",
    title: "Laboratory Furniture",
    heroTitle: "Laboratory furniture",
    heroSubtitle: "Engineered for precision and durability, our tables provide a stable foundation for critical research and analysis.",
    images: [labFurniture1, labFurniture2, labFurniture3, labFurniture4],
    description: "LabEquip Inc. offers a modular type of working / instrument table with 3 unique types of frame design. This provides greater flexibility and Interchangeability according to your laboratory room space. We strictly adhere to International safety & manufacturing standards during production, assembly, and installation of all laboratory furniture.",
    specs: [
      {
        heading: "Material Selection",
        items: [
          "Galvanized Iron (GI) sheet with epoxy powder coating",
          "Stainless Steel (SS 304/316) for high corrosion resistance",
          "Wood-based core with chemical resistant laminate"
        ]
      },
      {
        heading: "Worktop Options",
        items: [
          "Black Granite (18mm thick) with chamfered edges",
          "Epoxy Resin worktop for superior chemical resistance",
          "Phenolic Resin (Trepsa) for heavy-duty use"
        ]
      }
    ],
    notes: [
      "We can design an island table as per the user's specific requirement and laboratory workflow.",
      "All metal parts are epoxy powder coated with 60-80 micron thickness for durability."
    ],
    features: [
      "Centrally mounted reagent rack with power connections for easy access and flexibility to work.",
      "Users can get the benefit of a side mounted washing facility, like sink & multi nozzle faucet to wash glassware & get tapping water for process.",
      "Offer an eye shower for eye safety near the sink."
    ],
    subProducts: [
      {
        id: "lab-working-table",
        title: "Lab Working Table",
        heroTitle: "Lab Working Table",
        heroSubtitle: "Engineered for central lab space optimization and collaborative workflows.",
        images: [workTable1, workTable2, workTable3, workTable4],
        description: "Our Island Workbenches provide a central hub for laboratory operations. Designed for accessibility from all sides, these units feature integrated utility systems and modular storage to enhance research productivity.",
        specs: [
          { heading: "Configuration", items: ["Double-sided access", "Centrally mounted reagent racks", "Integrated power channels"] }
        ],
        notes: ["Available in various lengths from 1200mm to 3600mm.", "Customizable drawer and cabinet configurations."],
        features: ["Heavy-duty C-frame support", "Chemical resistant worktops", "Adjustable shelving"]
      },
      {
        id: "island-table",
        title: "Island Table",
        heroTitle: "Island Table",
        heroSubtitle: "High-performance central workstations designed for multi-user collaboration.",
        images: [islandTable1, islandTable2, islandTable3],
        description: "Our Island Tables are engineered to be the functional centerpiece of any laboratory, providing ample workspace and integrated utility access from all sides.",
        specs: [
          { heading: "Mounting", items: ["Floor mounted pedestals", "Suspended cabinet systems", "Cantilevered worktops"] }
        ],
        notes: ["Standard depth: 750mm or 900mm.", "Height options for sitting or standing work."],
        features: ["Backsplash for wall protection", "Easy-to-clean smooth surfaces", "Integrated cable management"]
      },
      {
        id: "overhead-storage-cabinet",
        title: "overhead Storage Cabinet",
        heroTitle: "Overhead Storage Cabinet",
        heroSubtitle: "Space-saving wall-mounted storage solutions for laboratory essentials.",
        images: [overhead1, overhead2, overhead3, overhead4],
        description: "Our Overhead Storage Cabinets are designed to maximize vertical space in the laboratory. Featuring transparent glass panels for easy inventory visibility and secure locking mechanisms, these units provide safe and organized storage for glassware, reagents, and documentation.",
        specs: [
          { heading: "Material", items: ["Powder-coated GI", "Stainless Steel 304", "Heavy-duty tempered glass"] }
        ],
        notes: ["Multiple tier levels available.", "Adjustable height for large bottles."],
        features: ["Chemical spill containment lips", "Integrated electrical sockets", "Modular add-on capability"]
      },
      {
        id: "glassware-storage-cabinet",
        title: "Glassware Storage Cabinet",
        heroTitle: "Glassware Storage Cabinet",
        heroSubtitle: "Premium high-capacity storage for laboratory glassware and precision instruments.",
        images: [glassware1, glassware2, glassware3, glassware4],
        description: "Our Glassware Storage Cabinets are designed for high-capacity organization of laboratory glass and supplies. Featuring full-height glass doors and adjustable shelving, these units provide clear visibility and easy access while protecting delicate items from dust and contamination.",
        specs: [
          { heading: "Type", items: ["Mobile under-bench cabinets", "Fixed pedestal units", "Wall-mounted overheads"] }
        ],
        notes: ["Soft-close hinges and drawer slides.", "Chemical resistant internal lining."],
        features: ["Lockable doors for security", "Adjustable internal shelving", "Ventilation options for chemical storage"]
      },
      {
        id: "chemical-storage-cabinet",
        title: "Chemical Storage Cabinet",
        heroTitle: "Chemical Storage Cabinet",
        heroSubtitle: "Safe and ventilated containment systems for hazardous laboratory chemicals.",
        images: [chemical1],
        description: "Our Chemical Storage Cabinets are purpose-built for the secure containment of hazardous substances. Featuring integrated ventilation ports, chemical-resistant internal surfaces, and reinforced locking mechanisms, these units ensure laboratory safety by preventing the buildup of toxic fumes and unauthorized access.",
        specs: [
          { heading: "Safety Features", items: ["Integrated ventilation port", "Chemical-resistant G.I. construction", "Multi-point locking system"] }
        ],
        notes: ["Available in various RAL colors.", "Optional fire-rated construction."],
        features: ["Spill containment shelves", "Hazard identification labeling", "Adjustable ventilation airflow"]
      }
    ]
  },
  {
    id: "laboratory-fume-hood",
    title: "Laboratory Fume Hood",
    heroTitle: "Laboratory Fume Hood",
    heroSubtitle: "Optimized wall-side workstation for maximum space utilization in compact laboratories.",
    images: [fumeHood1, fumeHood2, fumeHood3, fumeHood4],
    description: "Our Wall Bench Systems are designed to provide stable and ergonomic work surfaces along the laboratory walls. These units are perfect for titration, microscope work, and general chemical analysis where floor space is at a premium.",
    specs: [
      {
        heading: "Frame Design",
        items: [
          "C-Frame for legroom flexibility",
          "H-Frame for heavy equipment support",
          "Pedestal type for maximum storage"
        ]
      }
    ],
    notes: [
      "Standard heights available: 750mm (Sitting) and 900mm (Standing).",
      "Available with under-bench mobile or fixed cabinets."
    ],
    features: [
      "Integrated wall-mounted reagent shelving.",
      "Ducting space for gas and utility lines.",
      "Heavy-duty leveling bolts for uneven floors."
    ]
  },
  {
    id: "anti-vibration-table",
    title: "Anti Vibration Table",
    heroTitle: "Anti Vibration Table",
    heroSubtitle: "Stable platforms for high-sensitivity measurements and analytical weighing.",
    images: [antiVibration1, antiVibration2, labCenter, scientist],
    description: "Designed for analytical balances and sensitive optical equipment, our anti-vibration tables isolate high-frequency vibrations from the building structure to ensure accurate results.",
    specs: [
      {
        heading: "Stability Mechanism",
        items: [
          "Heavy Marble/Granite slab on rubber mounts",
          "Pneumatic air-spring isolation system",
          "Active vibration damping"
        ]
      }
    ],
    notes: [
      "Tested as per ASHRAE 110 and EN 14175 standards.",
      "Built-in scaffolding for apparatus setup."
    ],
    features: [
      "Automatic sash closing system for energy efficiency.",
      "Chemical storage cabinets below with exhaust connection.",
      "LED lighting and digital airflow monitor."
    ]
  },
  {
    id: "fume-spot-extractor",
    title: "Fume Spot Extractor",
    heroTitle: "Fume Spot Extractor",
    heroSubtitle: "Targeted suction for localized removal of hazardous fumes and vapors.",
    images: [fumeExtractor1, fumeExtractor2, labCenter, scientist],
    description: "Our articular suction arms are designed for maximum flexibility and targeted fume extraction. Perfect for chemical research, pharmaceutical labs, and electronics soldering where localized exhaust is required.",
    specs: [
      {
        heading: "Extraction Performance",
        items: [
          "Articular arm length: 1m to 3m",
          "Suction capacity: 150 to 300 m3/h",
          "High-grade polypropylene construction"
        ]
      }
    ],
    notes: [
      "Slab isolated from the outer frame to prevent user-induced vibration.",
      "Standard size: 900x600mm or custom."
    ],
    features: [
      "Independent internal slab for instrument placement.",
      "Outer work surface for recording and note-taking.",
      "Leveling indicators for perfect balance."
    ]
  },
  {
    id: "exhaust-blower-scrubber",
    title: "Exhaust Blower & Scrubber",
    heroTitle: "Exhaust Blower & Scrubber",
    heroSubtitle: "High-performance industrial ventilation and air pollution control systems.",
    images: [blower1, blower2, blower3, scientist],
    description: "Our high-efficiency centrifugal blowers and wet scrubbers are designed to handle corrosive fumes and ensure environmental compliance. Built with corrosion-resistant materials for long-lasting performance in harsh laboratory environments.",
    specs: [
      {
        heading: "System Capabilities",
        items: [
          "Blower static pressure: up to 1500 Pa",
          "Scrubber efficiency: >95% for acidic fumes",
          "PP/FRP construction for maximum durability"
        ]
      }
    ],
    notes: [
      "Adjustable shelving with spill containment lips.",
      "Double-walled construction for thermal insulation."
    ],
    features: [
      "Mechanical ventilation ports (100mm dia).",
      "Keyed lock system for restricted access.",
      "Chemical-resistant internal lining."
    ]
  },
  {
    id: "stainless-steel-furniture",
    title: "Stainless Steel Furniture",
    heroTitle: "Stainless Steel Furniture",
    heroSubtitle: "Comfortable and durable seating designed for long hours of scientific work.",
    images: [labStools, thumbMan, labCenter, scientist],
    description: "Our laboratory chairs and stools are built with easy-to-clean materials that resist chemical spills. Ergonomic adjustments ensure proper posture during focused lab tasks.",
    specs: [
      {
        heading: "Material & Finish",
        items: [
          "PU (Polyurethane) Integral Foam",
          "Vinyl upholstery with antimicrobial coating",
          "Stainless Steel frame options"
        ]
      }
    ],
    notes: [
      "Height adjustment via pneumatic gas lift.",
      "Equipped with glides or castors as per floor type."
    ],
    features: [
      "Adjustable foot-ring for height-appropriate support.",
      "360-degree swivel for easy movement.",
      "Backrest with height and depth adjustment."
    ]
  },
];
