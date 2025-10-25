import { Equipment } from './types';

export const EQUIPMENT_LIST: Equipment[] = [
  // =================================================================
  // Bioreactors
  // =================================================================
  {
    id: 'stirred_tank_br_1',
    name: 'Stirred-Tank Bioreactor ST-101',
    type: 'Bioreactors',
    params: {
      temperature: { name: 'Temperature', min: 35, max: 37.5, unit: '°C' },
      pressure: { name: 'Pressure', min: 1.1, max: 1.3, unit: 'bar' },
      ph: { name: 'pH', min: 6.8, max: 7.2, unit: '' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 30, max: 50, unit: '%' },
      stirrer_speed: { name: 'Stirrer Speed', min: 150, max: 250, unit: 'RPM' },
    },
    use: "Cultivation of aerobic microbial cultures (e.g., bacteria, yeast, fungi) for the production of biologics, enzymes, or other metabolites.",
    principle: "Provides a controlled, sterile environment with uniform conditions. A motor-driven agitator ensures homogenization of nutrients, cells, and gases, while spargers introduce oxygen for aerobic processes. Probes monitor critical parameters to maintain optimal growth conditions.",
    mechanism: "A top-driven agitator with multiple impellers creates axial and radial flow, mixing the liquid medium. A sparger below the bottom impeller releases fine gas bubbles, which are dispersed by the agitation, maximizing the gas-liquid mass transfer rate for oxygen supply. A jacket or internal coils control temperature.",
    construction: "Constructed primarily from 316L stainless steel for sterility and corrosion resistance. Consists of a cylindrical vessel with a domed top and bottom, multiple ports for sensors and additions, a motor-driven agitator shaft, baffles to prevent vortexing, and a sparging system.",
    precautions: "Ensure proper sterilization (SIP) before use. Maintain positive pressure to prevent contamination. Avoid creating a vortex during agitation which can shear cells. Monitor for foam formation and use antifoam agents judiciously. Calibrate all sensors regularly."
  },
  {
    id: 'stirred_tank_br_lab',
    name: 'Lab Scale Stirred-Tank BR-5L',
    type: 'Bioreactors',
    params: {
      temperature: { name: 'Temperature', min: 36.5, max: 37.5, unit: '°C' },
      ph: { name: 'pH', min: 7.0, max: 7.2, unit: '' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 40, max: 60, unit: '%' },
      stirrer_speed: { name: 'Stirrer Speed', min: 200, max: 500, unit: 'RPM' },
    },
    use: "Small-scale process development, media optimization, and strain screening for microbial or cell cultures.",
    principle: "Mimics the functionality of larger stirred-tank bioreactors but on a smaller scale, allowing for rapid testing of various process parameters in a controlled environment.",
    mechanism: "A scaled-down version of a production bioreactor, typically featuring a glass vessel for observation. It includes a magnetic or direct-drive agitator, micro-sparger, and ports for miniature sensors to control pH, temperature, and dissolved oxygen.",
    construction: "Usually a borosilicate glass vessel with a stainless steel headplate. All components are designed for autoclaving to ensure sterility. Compact design for laboratory benchtop use.",
    precautions: "Handle glass vessel with care. Ensure all seals and o-rings are intact before autoclaving to maintain sterility. Use appropriate sensor calibration standards for small volumes."
  },
  {
    id: 'stirred_tank_br_pilot',
    name: 'Pilot Scale Stirred-Tank BR-200L',
    type: 'Bioreactors',
    params: {
      temperature: { name: 'Temperature', min: 36.8, max: 37.2, unit: '°C' },
      pressure: { name: 'Pressure', min: 1.1, max: 1.2, unit: 'bar' },
      ph: { name: 'pH', min: 6.9, max: 7.1, unit: '' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 35, max: 55, unit: '%' },
      stirrer_speed: { name: 'Stirrer Speed', min: 100, max: 300, unit: 'RPM' },
    },
    use: "Intermediate-scale production, process scale-up studies, and producing material for clinical trials.",
    principle: "Bridges the gap between lab-scale development and full-scale production, providing data on how a process behaves at a larger volume. It validates the control strategies and parameters determined at the lab scale.",
    mechanism: "Functionally identical to lab and production scale reactors, but with dimensions and instrumentation that provide scalable data. It often includes more sophisticated control systems (e.g., PLC/SCADA) than lab models.",
    construction: "Typically made from 316L stainless steel with a high-quality finish. It is often a geometrically similar, scaled-down version of the production vessel to ensure predictable scale-up.",
    precautions: "Pay close attention to scale-up parameters like tip speed and power per unit volume (P/V) to ensure consistency with smaller and larger scales. Ensure utility connections (steam, water, air) are adequate for this size."
  },
  {
    id: 'stirred_tank_br_prod',
    name: 'Production Stirred-Tank ST-20000L',
    type: 'Bioreactors',
    params: {
      temperature: { name: 'Temperature', min: 36.5, max: 37.5, unit: '°C' },
      pressure: { name: 'Pressure', min: 1.2, max: 1.4, unit: 'bar' },
      ph: { name: 'pH', min: 6.8, max: 7.2, unit: '' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 25, max: 45, unit: '%' },
      stirrer_speed: { name: 'Stirrer Speed', min: 80, max: 150, unit: 'RPM' },
    },
    use: "Large-scale commercial manufacturing of biopharmaceutical products.",
    principle: "To produce large quantities of a target product by growing massive volumes of cells or microorganisms under tightly controlled, optimal conditions.",
    mechanism: "Employs large, robust agitation systems with multiple impellers to handle the high volume. Advanced process control systems manage automated feeding, gas mixing, and harvesting sequences. Heat exchange is critical and managed via a large jacket and sometimes internal coils.",
    construction: "Massive 316L stainless steel vessel with extensive piping for utilities, additions, and transfers. Integrated with plant-wide automation systems. Requires significant infrastructure for operation and maintenance.",
    precautions: "Validation of cleaning (CIP) and sterilization (SIP) is critical. Process automation alarms must be carefully managed. Due to high value of batch, any deviation must be investigated immediately."
  },
  {
    id: 'single_use_br_1',
    name: 'Single-Use Bioreactor SUB-1000L',
    type: 'Bioreactors',
    params: {
      temperature: { name: 'Temperature', min: 36.8, max: 37.2, unit: '°C' },
      pressure: { name: 'Pressure', min: 1.05, max: 1.15, unit: 'bar' },
      ph: { name: 'pH', min: 7.0, max: 7.2, unit: '' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 35, max: 55, unit: '%' },
      stirrer_speed: { name: 'Stirrer Speed', min: 120, max: 200, unit: 'RPM' },
    },
    use: "Manufacturing of clinical and commercial biologics where flexibility and rapid turnaround are critical. Eliminates need for cleaning and sterilization validation.",
    principle: "Uses a pre-sterilized, disposable bag instead of a stainless-steel vessel. This reduces cross-contamination risk and downtime between batches.",
    mechanism: "A disposable plastic bag (biocontainer) is placed in a non-sterile stainless steel support housing. A disposable agitator (often magnetically coupled) mixes the contents. Disposable sensors are integrated into the bag.",
    construction: "The core is a multi-layered plastic polymer bag. The support hardware includes the motor, heating/cooling system, and control unit.",
    precautions: "Inspect bag for any leaks or damage before installation. Risk of leachable and extractable compounds from the plastic must be assessed. Limited to lower pressure operations compared to stainless steel."
  },
  {
    id: 'single_use_br_2',
    name: 'Single-Use Bioreactor SUB-2000L',
    type: 'Bioreactors',
    params: {
      temperature: { name: 'Temperature', min: 36.9, max: 37.1, unit: '°C' },
      ph: { name: 'pH', min: 7.0, max: 7.1, unit: '' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 40, max: 50, unit: '%' },
      rocker_speed: { name: 'Rocker Speed', min: 20, max: 40, unit: 'RPM' },
    },
    use: "Large-scale single-use cell culture applications, particularly for monoclonal antibodies and vaccines.",
    principle: "Similar to other SUBs, it provides a sterile, disposable environment but at a larger working volume, enabling commercial-scale production without extensive capital investment in traditional reactors.",
    mechanism: "Often uses advanced mixing technologies suitable for large, flexible containers, such as bottom-mounted agitators or rocking platforms, to ensure gentle yet effective mixing for shear-sensitive cells.",
    construction: "Features a robust, multi-layer polymer bag designed to handle the weight and pressure of 2000L of media. The support structure is a key component, providing stability and integrating heating/cooling and control systems.",
    precautions: "Proper installation and handling of the large bag are critical to prevent punctures or stress. Ensure the support hardware is correctly calibrated for the bag's geometry. Waste disposal of the large bag must be considered."
  },
  {
    id: 'airlift_br_1',
    name: 'Airlift Bioreactor AL-203',
    type: 'Bioreactors',
    params: {
      temperature: { name: 'Temperature', min: 28, max: 32, unit: '°C' },
      pressure: { name: 'Pressure', min: 1.0, max: 1.2, unit: 'bar' },
      ph: { name: 'pH', min: 6.5, max: 7.0, unit: '' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 60, max: 80, unit: '%' },
      gas_flow_rate: { name: 'Gas Flow', min: 5, max: 10, unit: 'L/min' },
    },
    use: "Cultivation of shear-sensitive organisms like plant cells, animal cells, or filamentous fungi. Also used in wastewater treatment.",
    principle: "Achieves mixing and aeration without mechanical agitation, using the buoyancy of sparged gas bubbles to circulate the liquid.",
    mechanism: "The reactor contains a draft tube that divides the vessel into a riser and a downcomer section. Gas is sparged into the bottom of the riser. The gas-liquid mixture in the riser has a lower density than the liquid in the downcomer, creating a pressure difference that drives fluid circulation.",
    construction: "Typically a tall, cylindrical vessel with a high aspect ratio (height to diameter). The key internal component is the draft tube. It has a gas sparger at the bottom.",
    precautions: "Mixing is less intense than in stirred tanks, which can lead to gradients. Prone to foaming. The geometry and gas flow rate are critical for performance."
  },
  {
    id: 'packed_bed_br_1',
    name: 'Packed-Bed Bioreactor PB-50',
    type: 'Bioreactors',
    params: {
      temperature: { name: 'Temperature', min: 36.5, max: 37.5, unit: '°C' },
      perfusion_rate: { name: 'Perfusion Rate', min: 1, max: 2, unit: 'VVD' },
      ph: { name: 'pH', min: 7.1, max: 7.3, unit: '' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 50, max: 70, unit: '%' },
    },
    use: "Used for adherent cell cultures (e.g., vaccine production) or with immobilized enzymes. Allows for very high cell densities.",
    principle: "Cells grow on the surface of solid packing materials (carriers) within a column. A nutrient medium is continuously perfused through the bed to provide nutrients and remove waste.",
    mechanism: "A column is filled with porous or non-porous carriers (e.g., beads, fibers). Cells are inoculated and allowed to attach. The medium is then pumped through the bed, creating a plug-flow-like reactor environment.",
    construction: "Consists of a column (bed) to hold the packing material, an inlet for fresh medium, an outlet for spent medium, and a system to oxygenate and recirculate the medium.",
    precautions: "Potential for clogging and formation of gradients (nutrient, oxygen, pH) along the bed. Difficult to monitor cell growth directly. Scale-up can be challenging."
  },
  {
    id: 'hollow_fiber_br_1',
    name: 'Hollow-Fiber Bioreactor HF-10',
    type: 'Bioreactors',
    params: {
      temperature: { name: 'Temperature', min: 37.0, max: 37.4, unit: '°C' },
      recirculation_rate: { name: 'Recirculation Rate', min: 200, max: 400, unit: 'mL/min' },
      ph: { name: 'pH', min: 7.2, max: 7.4, unit: '' },
      glucose_level: { name: 'Glucose', min: 1.0, max: 2.5, unit: 'g/L' },
    },
    use: "High-density culture of animal cells for continuous production of secreted products like monoclonal antibodies or proteins.",
    principle: "Mimics the in vivo capillary system. Cells grow in a dense mass in the extra-capillary space, while medium flows through the inside of semi-permeable hollow fibers, allowing for nutrient and waste exchange.",
    mechanism: "A cartridge contains thousands of hollow fibers. Cells are cultured on the outside of the fibers. Medium is pumped through the fiber lumens. The fiber walls act as a membrane, allowing small molecules (nutrients, waste) to pass but retaining large molecules (product) and cells.",
    construction: "A compact cartridge containing the hollow fibers, connected to a media reservoir and a pump for recirculation. The system operates continuously.",
    precautions: "Prone to pressure buildup and clogging. Gradients can form within the cartridge. Requires careful monitoring of metabolic rates to adjust perfusion."
  },
  {
    id: 'wave_bioreactor_1',
    name: 'Wave Bioreactor WB-50L',
    type: 'Bioreactors',
    params: {
      temperature: { name: 'Temperature', min: 36.5, max: 37.5, unit: '°C' },
      rocking_rate: { name: 'Rocking Rate', min: 15, max: 30, unit: 'rpm' },
      angle: { name: 'Angle', min: 6, max: 9, unit: '°' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 40, max: 60, unit: '%' },
    },
    use: "Seed culture expansion and small-scale production of mammalian and insect cells. Ideal for shear-sensitive cells.",
    principle: "A disposable, pre-sterilized bag is placed on a rocking platform. The rocking motion induces a wave in the liquid culture, providing gentle mixing and efficient gas transfer through the surface.",
    mechanism: "The rocking motion continuously exposes fresh liquid surface to the headspace gas, facilitating oxygen transfer. This gentle agitation minimizes cell shear stress compared to traditional stirred tanks.",
    construction: "Consists of a rocking platform with integrated heating and connections for gas supply, and a disposable bag (Cellbag) with ports for inoculation, sampling, and feeding.",
    precautions: "Limited scalability compared to stirred tanks. Oxygen transfer capacity can be a limitation for very high-density cultures. Ensure the bag is placed correctly on the platform to avoid kinks."
  },
  {
    id: 'photobioreactor_1',
    name: 'Photobioreactor (Algae) PBR-1000L',
    type: 'Bioreactors',
    params: {
      temperature: { name: 'Temperature', min: 22, max: 28, unit: '°C' },
      ph: { name: 'pH', min: 7.5, max: 8.5, unit: '' },
      light_intensity: { name: 'Light Intensity', min: 150, max: 300, unit: 'µmol/m²/s' },
      co2_flow: { name: 'CO₂ Flow', min: 0.5, max: 1.5, unit: 'L/min' },
    },
    use: "Cultivation of photosynthetic microorganisms like microalgae, cyanobacteria, or plant cells for production of biofuels, pigments, or high-value compounds.",
    principle: "Provides a controlled environment that optimizes the supply of light, CO₂, and nutrients to photosynthetic cultures.",
    mechanism: "A transparent vessel (tubular, flat-panel, or column) is used to maximize light penetration. Light is supplied by LEDs or sunlight. A gas mixture (air enriched with CO₂) is sparged into the culture to provide carbon and create mixing.",
    construction: "Made of transparent materials like glass or polycarbonate. The design focuses on a high surface-area-to-volume ratio. Often includes internal lighting systems and advanced gas control.",
    precautions: "Biofouling on the transparent surfaces can block light and reduce efficiency. Overheating due to light sources must be managed. Maintaining a pure culture can be challenging."
  },
  {
    id: 'membrane_bioreactor_1',
    name: 'Membrane Bioreactor MBR-WW-1',
    type: 'Bioreactors',
    params: {
      transmembrane_pressure: { name: 'Transmembrane Pressure', min: 0.1, max: 0.5, unit: 'bar' },
      permeate_flux: { name: 'Permeate Flux', min: 15, max: 25, unit: 'LMH' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 2, max: 4, unit: 'mg/L' },
      cod_reduction: { name: 'COD Reduction', min: 90, max: 99, unit: '%' },
    },
    use: "Advanced wastewater treatment, combining a biological process (like activated sludge) with membrane filtration.",
    principle: "Uses a membrane to separate treated water from the biological sludge. This replaces the need for a secondary clarifier and allows for higher concentrations of microorganisms, leading to a more efficient process and smaller footprint.",
    mechanism: "Wastewater is treated in an aeration tank to break down organic matter. The mixed liquor is then passed through micro- or ultra-filtration membranes. Clean water (permeate) is drawn through the membrane, while solids and bacteria are retained in the tank.",
    construction: "Consists of an aeration tank and a membrane tank, or membranes submerged directly in the aeration tank. Includes blowers for aeration and pumps for creating suction on the membranes.",
    precautions: "Membrane fouling is the primary operational challenge, requiring regular cleaning (backwashing, chemical cleaning). Sharp objects in the wastewater can damage membranes."
  },
  {
    id: 'fixed_bed_br_1',
    name: 'Fixed-Bed Bioreactor FBBR-AN-2',
    type: 'Bioreactors',
    params: {
      temperature: { name: 'Temperature', min: 35, max: 40, unit: '°C' },
      hydraulic_retention_time: { name: 'HRT', min: 6, max: 12, unit: 'hours' },
      organic_loading_rate: { name: 'OLR', min: 5, max: 15, unit: 'kg-COD/m³/d' },
    },
    use: "Wastewater treatment and bioremediation. Particularly effective for high-strength industrial wastewater.",
    principle: "Microorganisms grow as a biofilm on a stationary (fixed) support medium within the reactor. Wastewater flows past the biofilm, where pollutants are degraded.",
    mechanism: "The reactor is filled with a high-surface-area packing material (e.g., plastic rings, rock). A microbial biofilm develops on this material. Wastewater is pumped through the reactor, and the large, stable microbial population efficiently treats the waste stream.",
    construction: "A tank or column filled with support media. Includes a distribution system to ensure even flow of wastewater through the bed.",
    precautions: "Risk of clogging or 'short-circuiting' if flow is not properly distributed. The biofilm can be sensitive to toxic shocks in the influent stream."
  },
  {
    id: 'glass_autoclavable_br_1',
    name: 'Glass Autoclavable Bioreactor GBR-15L',
    type: 'Bioreactors',
    params: {
      temperature: { name: 'Temperature', min: 30, max: 37, unit: '°C' },
      ph: { name: 'pH', min: 6.8, max: 7.2, unit: '' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 30, max: 60, unit: '%' },
      stirrer_speed: { name: 'Stirrer Speed', min: 100, max: 800, unit: 'RPM' },
    },
    use: "Versatile use in research, process development, and small-scale production for a wide range of microbial and cell culture applications.",
    principle: "A reusable bioreactor system where the glass vessel and components are sterilized by heat and pressure in an autoclave before each use, ensuring a high degree of sterility.",
    mechanism: "A glass vessel is fitted with a stainless steel headplate that holds the agitator, sparger, sensors, and addition ports. The entire assembly is placed in an autoclave for sterilization. It's then connected to a control tower for operation.",
    construction: "Features a borosilicate glass vessel, 316L stainless steel headplate, and various probes and fittings. The system is connected to a separate control unit that manages temperature, pH, DO, etc.",
    precautions: "Handle glass vessel with extreme care to avoid thermal shock or mechanical damage. Ensure all fittings are properly tightened before autoclaving. Verify that all components, especially sensor o-rings, are rated for autoclave temperatures."
  },
  // =================================================================
  // Fermenters
  // =================================================================
  {
    id: 'bacterial_ferm_1',
    name: 'Bacterial Fermenter BF-5000L',
    type: 'Fermenters',
    params: {
      temperature: { name: 'Temperature', min: 30, max: 37, unit: '°C' },
      pressure: { name: 'Pressure', min: 1.2, max: 1.5, unit: 'bar' },
      ph: { name: 'pH', min: 6.5, max: 7.5, unit: '' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 20, max: 40, unit: '%' },
      agitation_speed: { name: 'Agitation Speed', min: 200, max: 400, unit: 'RPM' },
    },
    use: "Large-scale cultivation of bacteria (e.g., E. coli) for producing recombinant proteins, enzymes, and antibiotics.",
    principle: "Provides an optimized environment for rapid bacterial growth, which involves high oxygen demand and significant heat generation. Designed for robust agitation and efficient cooling.",
    mechanism: "High-speed agitators with Rushton impellers provide high shear to break up gas bubbles and ensure rapid oxygen dispersion. A powerful cooling jacket is essential to remove the large amount of metabolic heat produced.",
    construction: "Robust stainless steel construction to handle high agitation speeds and pressures. Often has multiple Rushton turbine impellers and extensive baffling.",
    precautions: "Aseptic technique is critical as bacteria grow fast and contamination can occur easily. High oxygen demand requires a reliable aeration system. Effective foam control is necessary."
  },
  {
    id: 'yeast_ferm_1',
    name: 'Yeast Fermenter YF-10KL',
    type: 'Fermenters',
    params: {
      temperature: { name: 'Temperature', min: 25, max: 30, unit: '°C' },
      ph: { name: 'pH', min: 4.5, max: 5.5, unit: '' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 10, max: 20, unit: '%' },
      agitation_speed: { name: 'Agitation Speed', min: 150, max: 250, unit: 'RPM' },
    },
    use: "Cultivation of yeast (e.g., S. cerevisiae, P. pastoris) for producing proteins, vaccines, and biofuels like ethanol.",
    principle: "Maintains conditions favorable for yeast growth, which often includes a slightly acidic pH and moderate aeration. Can be run aerobically or anaerobically depending on the desired product.",
    mechanism: "Similar to bacterial fermenters but may use different impeller types (e.g., pitched-blade) for good axial flow. Control of pH is crucial, often requiring addition of base to counteract acidification.",
    construction: "Large stainless steel vessel. For ethanol production, it may be designed for anaerobic conditions with CO₂ removal systems.",
    precautions: "Some yeast strains are Crabtree positive, meaning they produce ethanol even in the presence of oxygen if glucose levels are too high. This requires careful feeding strategies (fed-batch) for protein production."
  },
  {
    id: 'solid_state_ferm_1',
    name: 'Solid-State Fermenter SSF-TRAY-500',
    type: 'Fermenters',
    params: {
      temperature: { name: 'Temperature', min: 28, max: 32, unit: '°C' },
      moisture_content: { name: 'Moisture Content', min: 50, max: 70, unit: '%' },
      air_flow_rate: { name: 'Air Flow Rate', min: 0.5, max: 1.5, unit: 'vvm' },
    },
    use: "Growing microorganisms (mainly fungi) on a solid substrate with little or no free water. Used for enzyme, organic acid, and bioremediation applications.",
    principle: "Mimics the natural environment of fungi, growing on solid materials. The low water content can lead to higher product concentrations.",
    mechanism: "A solid substrate (e.g., bran, rice, grains) is inoculated and spread in trays or a rotating drum. Humidified, temperature-controlled air is passed over or through the substrate to provide oxygen and remove heat and CO₂.",
    construction: "Can be as simple as a room with controlled temperature and humidity containing trays of substrate, or a more complex rotating drum or packed-bed system.",
    precautions: "Heat removal is a major challenge due to the poor thermal conductivity of the solid substrate. Maintaining uniform moisture and aeration can be difficult. Monitoring biomass is complex."
  },
  {
    id: 'mycelial_ferm_1',
    name: 'Mycelial Fermenter MF-15KL',
    type: 'Fermenters',
    params: {
      temperature: { name: 'Temperature', min: 24, max: 28, unit: '°C' },
      ph: { name: 'pH', min: 5.0, max: 6.5, unit: '' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 25, max: 50, unit: '%' },
      agitation_speed: { name: 'Agitation Speed', min: 100, max: 200, unit: 'RPM' },
    },
    use: "Cultivation of filamentous fungi (e.g., Penicillium, Aspergillus) for the production of antibiotics like penicillin or enzymes.",
    principle: "Designed to handle the challenges of growing filamentous organisms, which can form viscous broths or pellets, affecting mixing and oxygen transfer.",
    mechanism: "Often uses specialized impellers or slower agitation speeds to avoid shearing the delicate mycelial structures. The broth rheology changes significantly during fermentation, requiring a control system that can adapt.",
    construction: "Stainless steel vessel similar to other fermenters but may have modified baffles and impellers. The viscosity can put high torque loads on the agitator motor.",
    precautions: "High broth viscosity can impede oxygen transfer and heat removal. Fungal morphology (pellets vs. dispersed mycelia) is a critical process parameter that is difficult to control but affects productivity."
  },
  {
    id: 'pilot_ferm_1',
    name: 'Pilot Scale Fermenter PF-300L',
    type: 'Fermenters',
    params: {
      temperature: { name: 'Temperature', min: 28, max: 35, unit: '°C' },
      pressure: { name: 'Pressure', min: 1.1, max: 1.4, unit: 'bar' },
      ph: { name: 'pH', min: 6.0, max: 7.0, unit: '' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 20, max: 80, unit: '%' },
      agitation_speed: { name: 'Agitation Speed', min: 150, max: 500, unit: 'RPM' },
    },
    use: "Scale-up studies for fermentation processes, optimizing parameters before moving to large-scale production, and producing material for testing.",
    principle: "Acts as an intermediate step between laboratory and production scales, providing crucial data for process validation and ensuring the process is robust and scalable.",
    mechanism: "A fully-featured fermenter that is a smaller, often geometrically similar, version of the production-scale unit. It has a comprehensive set of sensors and a sophisticated control system to mimic the final manufacturing environment.",
    construction: "High-quality 316L stainless steel construction. Equipped with full CIP/SIP capabilities and advanced automation to generate reliable scale-up data.",
    precautions: "Ensuring geometric similarity and maintaining key scale-up parameters (e.g., kLa, tip speed, P/V) are crucial for the data to be meaningful for the production scale."
  },
  {
    id: 'gas_lift_ferm_1',
    name: 'Gas Lift Fermenter GLF-5KL',
    type: 'Fermenters',
    params: {
      temperature: { name: 'Temperature', min: 25, max: 35, unit: '°C' },
      ph: { name: 'pH', min: 6.5, max: 7.5, unit: '' },
      gas_flow_rate: { name: 'Gas Flow Rate', min: 1, max: 2, unit: 'vvm' },
    },
    use: "For processes that are shear-sensitive or require gentle mixing. Often used for animal and plant cell culture, or for specific microbial fermentations.",
    principle: "A variation of the airlift bioreactor, using sparged gas to both aerate and mix the culture, eliminating the need for mechanical agitation.",
    mechanism: "Gas is sparged at the bottom of the fermenter. The design of the vessel (often tall with a draft tube) promotes a circular flow of the liquid, providing mixing. The efficiency of mixing and aeration is controlled by the gas flow rate.",
    construction: "Typically a tall, cylindrical vessel, sometimes with an internal draft tube or an external loop to guide the circulation of the liquid.",
    precautions: "Mixing is generally less intense than in stirred tanks, which can lead to gradients. It can be prone to foaming. Not suitable for highly viscous fermentations."
  },
  {
    id: 'anaerobic_ferm_1',
    name: 'Anaerobic Fermenter AF-ETHANOL-100K',
    type: 'Fermenters',
    params: {
      temperature: { name: 'Temperature', min: 32, max: 38, unit: '°C' },
      ph: { name: 'pH', min: 4.0, max: 5.0, unit: '' },
      pressure: { name: 'Pressure', min: 1.0, max: 1.1, unit: 'bar' },
    },
    use: "Production of biofuels (ethanol, butanol), organic acids, and for anaerobic digestion of waste.",
    principle: "Cultivation of microorganisms in the complete absence of oxygen. The process extracts chemical energy from carbohydrates without using O₂ as an electron acceptor.",
    mechanism: "The fermenter is sealed to prevent air ingress. Mixing is achieved by a slow-speed agitator or by gas production (e.g., CO₂) from the fermentation itself. A key feature is a system to vent the produced gases while maintaining sterility.",
    construction: "Large, sealed stainless steel or carbon steel tank. Lacks a complex aeration system but requires robust temperature and pH control. A gas outlet with a sterile filter or water trap is essential.",
    precautions: "Maintaining strict anaerobic conditions is the biggest challenge. Any oxygen leak can inhibit or kill the anaerobic culture. The produced gas (e.g., CO₂, H₂) may be flammable and must be handled safely."
  },
  {
    id: 'chemostat_ferm_1',
    name: 'Continuous Culture (Chemostat) CCF-10L',
    type: 'Fermenters',
    params: {
      temperature: { name: 'Temperature', min: 36, max: 37, unit: '°C' },
      ph: { name: 'pH', min: 7.0, max: 7.2, unit: '' },
      dilution_rate: { name: 'Dilution Rate', min: 0.1, max: 0.5, unit: 'h⁻¹' },
    },
    use: "Primarily used in research to study microbial physiology under steady-state conditions. Can be used for continuous production of some products like single-cell protein.",
    principle: "Achieves a steady state where cell growth is limited by the concentration of one key nutrient. The cell growth rate is equal to the dilution rate (the rate at which fresh medium is added and culture is removed).",
    mechanism: "Fresh sterile medium is continuously fed into the fermenter from a reservoir, and culture broth is simultaneously removed at the same rate to keep the volume constant. This maintains a constant chemical environment and cell density.",
    construction: "A standard lab-scale fermenter equipped with high-precision pumps for feed and harvest. A level sensor or overflow weir is used to maintain a constant volume.",
    precautions: "Maintaining long-term sterility is very difficult. The system is sensitive to pump failures or changes in feed concentration. Wall growth can disrupt the steady state."
  },
  {
    id: 'fed_batch_ferm_1',
    name: 'Fed-Batch Fermenter FBF-1000L',
    type: 'Fermenters',
    params: {
      temperature: { name: 'Temperature', min: 28, max: 32, unit: '°C' },
      ph: { name: 'pH', min: 6.5, max: 7.0, unit: '' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 20, max: 30, unit: '%' },
      feed_rate: { name: 'Feed Rate', min: 10, max: 50, unit: 'L/hr' },
    },
    use: "A very common mode of operation in industrial fermentations to achieve high cell densities and high product yields, especially for recombinant proteins in E. coli or yeast.",
    principle: "Starts as a batch culture, then a concentrated feed solution is added incrementally during the fermentation. This allows for control of the growth rate and avoids the accumulation of inhibitory byproducts or substrate inhibition.",
    mechanism: "The fermentation begins with an initial volume of medium. Once the initial carbon source is nearly depleted, a feeding strategy is initiated. The feed rate is often controlled based on a parameter like dissolved oxygen or pH to keep the culture growing at an optimal, controlled rate.",
    construction: "A standard fermenter equipped with a system for sterile feeding, including a feed tank, sterile filters, and a precision pump connected to the control system.",
    precautions: "Developing an effective feeding strategy is complex and critical for success. Maintaining sterility of the feed solution over a long period is essential. The final volume must be accounted for in the vessel design."
  },
  {
    id: 'airlift_internal_loop_ferm_1',
    name: 'Airlift Internal Loop Fermenter AILF-2KL',
    type: 'Fermenters',
    params: {
      temperature: { name: 'Temperature', min: 30, max: 35, unit: '°C' },
      ph: { name: 'pH', min: 6.8, max: 7.2, unit: '' },
      gas_flow_rate: { name: 'Gas Flow Rate', min: 0.8, max: 1.5, unit: 'vvm' },
    },
    use: "Cultivation of shear-sensitive cells (animal, plant) and certain microbial cultures. Common in wastewater treatment.",
    principle: "Uses pneumatic agitation where mixing and circulation are driven by the injection of gas, avoiding mechanical shear.",
    mechanism: "The fermenter contains an internal draft tube that separates the vessel into a central riser and an outer downcomer. Gas is sparged into the bottom of the riser, creating a density difference that drives a well-defined liquid circulation path: up through the riser and down through the downcomer.",
    construction: "A tall vessel with a concentric draft tube. The geometry of the vessel and the draft tube are critical for efficient circulation.",
    precautions: "Mixing is less vigorous than in stirred tanks. Not suitable for highly viscous broths. The design must be optimized to prevent dead zones."
  },
  {
    id: 'bubble_column_ferm_1',
    name: 'Bubble Column Fermenter BCF-3KL',
    type: 'Fermenters',
    params: {
      temperature: { name: 'Temperature', min: 25, max: 30, unit: '°C' },
      ph: { name: 'pH', min: 5.5, max: 6.5, unit: '' },
      gas_hold_up: { name: 'Gas Hold-up', min: 0.1, max: 0.3, unit: '' },
    },
    use: "For processes with low viscosity where high gas-liquid mass transfer is needed. Used in chemical reactions, wastewater treatment, and single-cell protein production.",
    principle: "The simplest form of pneumatic agitation. Liquid is mixed and aerated by gas bubbles rising through it from a sparger at the bottom.",
    mechanism: "Gas is sparged at the base of a cylindrical column containing the liquid. The rising bubbles induce liquid circulation and turbulence, causing mixing. There are no internal mechanical parts or draft tubes.",
    construction: "A simple, tall cylindrical vessel with a gas sparger at the bottom. The lack of moving parts makes it easy to construct and maintain.",
    precautions: "Mixing is less controlled and can be chaotic, leading to back-mixing and potential gradients. The flow regime (bubbly flow vs. churn-turbulent flow) depends heavily on the gas velocity and sparger design."
  },
  {
    id: 'prod_ferm_1',
    name: 'Production Scale Fermenter PRODF-20KL',
    type: 'Fermenters',
    params: {
      temperature: { name: 'Temperature', min: 28, max: 32, unit: '°C' },
      pressure: { name: 'Pressure', min: 1.3, max: 1.6, unit: 'bar' },
      ph: { name: 'pH', min: 6.5, max: 7.5, unit: '' },
      dissolved_oxygen: { name: 'Dissolved O₂', min: 15, max: 35, unit: '%' },
      agitation_speed: { name: 'Agitation Speed', min: 100, max: 200, unit: 'RPM' },
    },
    use: "Commercial, large-volume manufacturing of fermentation-derived products like antibiotics, enzymes, and amino acids.",
    principle: "To reliably and reproducibly execute a validated fermentation process at a large scale to meet market demand, with a strong focus on process consistency and yield.",
    mechanism: "Integrates robust, automated systems for process control (temperature, pH, DO, feeding), sterilization (SIP), and cleaning (CIP). The agitation and aeration systems are designed for high performance and reliability to handle the large volume.",
    construction: "A very large (often >20,000 L) stainless steel vessel integrated into a manufacturing facility with extensive utility support (plant steam, chilled water, compressed air). Features advanced SCADA control systems.",
    precautions: "The economic consequences of a batch failure are enormous. Therefore, process validation, raw material control, and preventative maintenance are of paramount importance. Aseptic connections for all additions and sampling are critical."
  },
  // =================================================================
  // Downstream Processing
  // =================================================================
  {
    id: 'chroma_skid_1',
    name: 'Chromatography Skid CS-P-1',
    type: 'Downstream Processing',
    params: {
        column_pressure: { name: 'Column Pressure', min: 1, max: 5, unit: 'bar' },
        flow_rate: { name: 'Flow Rate', min: 5, max: 15, unit: 'L/min' },
        conductivity: { name: 'Conductivity', min: 0, max: 150, unit: 'mS/cm' },
        uv_absorbance: { name: 'UV Absorbance', min: 0, max: 2, unit: 'AU' },
    },
    use: "Purification of biomolecules (like proteins, antibodies) from complex mixtures based on their specific properties (size, charge, affinity).",
    principle: "Separation occurs as a liquid mobile phase carrying the mixture is pumped through a column packed with a solid stationary phase (resin). Different molecules travel through the column at different rates depending on their interaction with the resin.",
    mechanism: "The skid precisely pumps various buffers (mobile phase) through a packed column. A sample is injected, and as it flows, molecules separate. Detectors (UV, conductivity, pH) monitor the column outlet, and a fraction collector gathers the purified product.",
    construction: "A stainless steel frame (skid) mounting multiple pumps, valves, pressure sensors, flow meters, and detectors. All tubing and components are sanitary grade. Controlled by a PLC or dedicated software.",
    precautions: "Avoid introducing air bubbles into the column, which ruins separation. Column pressure must be monitored to prevent over-pressurization, which can destroy the column. Ensure buffer compatibility with the resin."
  },
  {
    id: 'tff_1',
    name: 'Tangential Flow Filtration (TFF) System',
    type: 'Downstream Processing',
    params: {
        feed_pressure: { name: 'Feed Pressure', min: 1.5, max: 3.0, unit: 'bar' },
        permeate_flow: { name: 'Permeate Flow', min: 0.5, max: 2.0, unit: 'L/min' },
        temperature: { name: 'Temperature', min: 15, max: 25, unit: '°C' },
    },
    use: "Concentrating protein solutions (ultrafiltration) or buffer exchange (diafiltration). Also used for cell harvesting and clarification.",
    principle: "The feed solution is pumped tangentially (parallel) across the surface of a membrane. This cross-flow action sweeps away retained molecules (retentate), preventing the filter from clogging, while pressure forces the solvent and smaller molecules (permeate) through the membrane.",
    mechanism: "A pump circulates the feed solution through a TFF cassette or hollow fiber module. Pressure is applied, and the permeate is collected. The retentate, now more concentrated, is recirculated back to the feed tank.",
    construction: "A system including a feed tank, a pump (typically peristaltic or diaphragm), pressure gauges, a filter holder/module, and tubing.",
    precautions: "Monitor transmembrane pressure (TMP) to avoid fouling the membrane. Choose a membrane with the correct molecular weight cut-off (MWCO) for the target molecule. Do not let the membrane dry out."
  },
  {
    id: 'industrial_centrifuge_1',
    name: 'Industrial Centrifuge D-10',
    type: 'Downstream Processing',
    params: {
        bowl_speed: { name: 'Bowl Speed', min: 4000, max: 8000, unit: 'RPM' },
        g_force: { name: 'G-Force', min: 5000, max: 10000, unit: 'x g' },
        vibration_level: { name: 'Vibration', min: 0, max: 5, unit: 'mm/s' },
        temperature: { name: 'Temperature', min: 2, max: 8, unit: '°C' },
    },
    use: "Separating solids from liquids, such as harvesting cells from culture media or recovering precipitated proteins.",
    principle: "Utilizes centrifugal force, generated by high-speed rotation, to accelerate the sedimentation of particles. Denser components (solids) are forced to the outer wall of the rotating bowl, while the less dense liquid (supernatant) forms an inner layer.",
    mechanism: "A process fluid is fed into a rapidly spinning bowl. The high G-force separates solids, which collect on the bowl wall. The clarified liquid is continuously discharged. In some designs (disc-stack), the solids can also be discharged intermittently or continuously.",
    construction: "Consists of a high-speed motor, a rotating bowl assembly, inlet and outlet ports, and a robust housing. Often includes a cooling system to remove heat generated by friction.",
    precautions: "The machine must be perfectly balanced to avoid dangerous vibrations. Never operate with the lid open. Regular maintenance of bearings and seals is critical for safety and performance."
  },
  {
    id: 'homogenizer_1',
    name: 'High-Pressure Homogenizer HPH-20K',
    type: 'Downstream Processing',
    params: {
        pressure: { name: 'Pressure', min: 500, max: 1000, unit: 'bar' },
        flow_rate: { name: 'Flow Rate', min: 10, max: 25, unit: 'L/hr' },
        temperature: { name: 'Product Temp', min: 4, max: 10, unit: '°C' },
    },
    use: "Cell disruption (lysis) to release intracellular products (e.g., proteins from E. coli). Also used to create stable emulsions and dispersions.",
    principle: "Forces a liquid stream through a narrow, adjustable gap (homogenizing valve) at very high pressure. The rapid pressure drop, combined with high shear and impact forces, disrupts particles or cells.",
    mechanism: "A high-pressure pump forces the fluid into the valve assembly. As it passes through the small gap, its velocity increases dramatically, and pressure drops. The combination of turbulence, shear, and cavitation breaks open the cells or reduces droplet size.",
    construction: "Comprises a powerful positive displacement pump and a specially designed homogenizing valve made of very hard materials like tungsten carbide or ceramics.",
    precautions: "The process generates significant heat, so a cooling system is almost always required to protect the product. High pressure presents a safety hazard; regular inspection of fittings is necessary."
  },
  {
    id: 'virus_filter_1',
    name: 'Virus Filtration System VF-01',
    type: 'Downstream Processing',
    params: {
      pressure: { name: 'Pressure', min: 1.5, max: 2.5, unit: 'bar' },
      flux_rate: { name: 'Flux Rate', min: 50, max: 150, unit: 'LMH' },
      pressure_decay: { name: 'Pressure Decay', min: 0, max: 0.1, unit: 'bar/min' },
    },
    use: "A critical step in biopharmaceutical manufacturing to remove potential viral contaminants from the product stream, ensuring patient safety.",
    principle: "Separation based on size exclusion. The product solution is passed through a membrane filter with a very precise and narrow pore size distribution, small enough to retain viruses but large enough to allow the therapeutic protein to pass through.",
    mechanism: "The system operates in either direct flow filtration (DFF) or tangential flow filtration (TFF) mode. The product is pumped through the virus filter module under controlled pressure. The filter's performance is validated to demonstrate a specific log reduction value (LRV) for viruses.",
    construction: "A sanitary skid with a pump, pressure sensors, and a housing to hold the disposable virus filter cartridges. An integrity tester is a key part of the system to verify filter integrity before and after use.",
    precautions: "Pre-filtration is essential to prevent premature clogging of the expensive virus filter. The filter must be integrity tested before and after use to ensure it was not damaged. The process must be run at a constant, validated pressure."
  },
  {
    id: 'prep_hplc_1',
    name: 'Preparative HPLC System PREP-HPLC-80',
    type: 'Downstream Processing',
    params: {
      column_pressure: { name: 'Column Pressure', min: 50, max: 100, unit: 'bar' },
      flow_rate: { name: 'Flow Rate', min: 100, max: 500, unit: 'mL/min' },
      column_temp: { name: 'Column Temp', min: 20, max: 30, unit: '°C' },
    },
    use: "High-resolution purification of small molecules, peptides, and oligonucleotides at a larger scale than analytical HPLC. Used for producing active pharmaceutical ingredients (APIs).",
    principle: "Same as analytical HPLC but with the goal of isolating and collecting quantities of pure compound rather than just identifying and quantifying them. Uses larger columns and higher flow rates.",
    mechanism: "A powerful pump pushes the mobile phase and sample through a wide-bore column packed with stationary phase. The separated compounds elute from the column at different times and are collected in fractions based on the detector signal (typically UV).",
    construction: "Features high-flow-rate pumps, a large sample injector, a wide-diameter column, a UV detector with a high-concentration flow cell, and an automated fraction collector.",
    precautions: "Solvent consumption is very high. Proper solvent waste management is required. Column overloading must be carefully managed to balance throughput with purity. High pressures require robust fittings and safety measures."
  },
  {
    id: 'protein_a_chroma_1',
    name: 'Protein A Affinity Chromatography Column',
    type: 'Downstream Processing',
    params: {
      column_pressure: { name: 'Column Pressure', min: 1, max: 3, unit: 'bar' },
      flow_rate: { name: 'Flow Rate', min: 20, max: 40, unit: 'L/min' },
    },
    use: "The primary capture step for purifying monoclonal antibodies (mAbs) from harvested cell culture fluid. Highly specific and efficient.",
    principle: "Affinity chromatography. The stationary phase resin contains Protein A (or a recombinant version), a bacterial protein that specifically binds to the Fc region of IgG-type antibodies. Other proteins and contaminants do not bind and are washed away.",
    mechanism: "The clarified harvest is loaded onto the column. The mAb binds to the Protein A resin. The column is then washed with a buffer to remove impurities. Finally, a low-pH elution buffer is used to disrupt the binding and release the purified mAb, which is then collected.",
    construction: "A glass or acrylic column packed with expensive Protein A resin. It is operated as part of a larger chromatography skid.",
    precautions: "The resin is very expensive and has a limited lifetime; it must be cleaned and stored carefully. The low-pH elution can sometimes cause antibody aggregation, so pH neutralization of the collected product is required immediately."
  },
  {
    id: 'ion_exchange_chroma_1',
    name: 'Ion Exchange Chromatography Skid IXC-ANION-1',
    type: 'Downstream Processing',
    params: {
      column_pressure: { name: 'Column Pressure', min: 2, max: 5, unit: 'bar' },
      flow_rate: { name: 'Flow Rate', min: 15, max: 25, unit: 'L/min' },
      conductivity_gradient: { name: 'Conductivity Gradient', min: 1, max: 1, unit: 'OK' },
    },
    use: "A polishing step in protein purification to remove host cell proteins, DNA, and other charged impurities. Can be anion exchange (binds negative molecules) or cation exchange (binds positive molecules).",
    principle: "Separation based on net surface charge. The stationary phase resin has charged functional groups. Molecules with the opposite charge bind to the resin, while others flow through. Bound molecules are then eluted by increasing the salt concentration or changing the pH of the mobile phase.",
    mechanism: "The product solution is loaded onto the column at a low salt concentration. The target protein either binds (bind-elute mode) or flows through (flow-through mode). A salt gradient is then applied to the column, causing bound proteins to detach and elute at different salt concentrations based on their charge density.",
    construction: "A chromatography skid and column. The skid must be capable of accurately mixing buffers to create precise salt or pH gradients.",
    precautions: "The pH and conductivity of the loading buffer are critical for proper binding. The gradient slope must be optimized for the best separation. The resin must be regenerated with a high-salt solution after each run."
  },
  {
    id: 'hic_skid_1',
    name: 'Hydrophobic Interaction Skid HIC-PHENYL-2',
    type: 'Downstream Processing',
    params: {
      column_pressure: { name: 'Column Pressure', min: 2, max: 4, unit: 'bar' },
      flow_rate: { name: 'Flow Rate', min: 10, max: 20, unit: 'L/min' },
    },
    use: "A polishing chromatography step, often used to separate protein aggregates from the monomeric product. Also removes other process impurities.",
    principle: "Separation based on hydrophobicity. In high-salt conditions, hydrophobic patches on proteins are exposed and can bind to a weakly hydrophobic resin. Proteins are then eluted by decreasing the salt concentration.",
    mechanism: "The product is loaded onto the column in a high-salt buffer (e.g., ammonium sulfate), which promotes binding. A reverse salt gradient (from high salt to low salt) is then applied. More hydrophobic proteins remain bound longer and elute at lower salt concentrations.",
    construction: "A chromatography skid capable of running reverse salt gradients, and a column packed with a HIC resin (e.g., Phenyl, Butyl, or Octyl Sepharose).",
    precautions: "High salt concentrations can be corrosive, so the system must be constructed from compatible materials. Temperature can affect hydrophobic interactions and should be controlled. The type of salt used is an important parameter."
  },
  {
    id: 'depth_filtration_skid_1',
    name: 'Depth Filtration Skid DF-POD-5',
    type: 'Downstream Processing',
    params: {
      inlet_pressure: { name: 'Inlet Pressure', min: 0.5, max: 1.5, unit: 'bar' },
      differential_pressure: { name: 'Differential Pressure', min: 0.1, max: 1.0, unit: 'bar' },
      turbidity: { name: 'Turbidity', min: 1, max: 50, unit: 'NTU' },
    },
    use: "Clarification of cell culture harvests to remove cells and cell debris before chromatography. Also used for pre-filtration before sterile filtration.",
    principle: "Removal of particles through a thick, porous filter medium. It works by a combination of size exclusion and adsorption within the tortuous path of the filter matrix.",
    mechanism: "The process fluid is pumped through the depth filter media (often made of cellulose fibers and filter aids). Larger particles are trapped on the surface, while smaller particles are captured within the filter's matrix. The filtrate that exits is significantly clarified.",
    construction: "A skid with a pump and pressure sensors, designed to hold single-use filter pods or lenticular cartridges. This allows for quick changeover without cleaning.",
    precautions: "The filter has a finite capacity and will eventually clog, indicated by a rapid increase in differential pressure. Flow rate should be controlled to prevent compressing the filter medium. The filter is not an absolute barrier; it is rated for nominal particle removal."
  },
  {
    id: 'diafiltration_skid_1',
    name: 'Diafiltration Skid DF-TFF-100',
    type: 'Downstream Processing',
    params: {
      feed_pressure: { name: 'Feed Pressure', min: 2.0, max: 3.5, unit: 'bar' },
      permeate_flow: { name: 'Permeate Flow', min: 1.0, max: 3.0, unit: 'L/min' },
      temperature: { name: 'Temperature', min: 18, max: 25, unit: '°C' },
    },
    use: "Buffer exchange or removal of small molecule impurities from a protein solution. Essential for formulating the final drug substance.",
    principle: "A type of tangential flow filtration where buffer is added to the retentate at the same rate that permeate is being removed. This effectively washes out the old buffer components while maintaining a constant product concentration and volume.",
    mechanism: "The TFF system is first used to concentrate the product slightly. Then, diafiltration begins by adding the new formulation buffer to the feed tank. The process continues for a set number of diavolumes (e.g., 5-7) to achieve the desired level of buffer exchange.",
    construction: "A standard TFF system with an added line and pump for diafiltration buffer addition, often controlled by a level sensor in the feed tank or by matching the permeate flow rate.",
    precautions: "Ensure the diafiltration buffer is correctly formulated. The process can be time-consuming, so product stability in the system must be considered. Monitor TMP to prevent membrane fouling."
  },
  {
    id: 'viral_inactivation_skid_1',
    name: 'Viral Inactivation Skid VI-LOWPH-1000L',
    type: 'Downstream Processing',
    params: {
      ph: { name: 'pH', min: 3.5, max: 3.8, unit: '' },
      temperature: { name: 'Temperature', min: 20, max: 25, unit: '°C' },
      hold_time: { name: 'Hold Time', min: 60, max: 90, unit: 'min' },
    },
    use: "A dedicated step to inactivate enveloped viruses that might be present in the product stream. Typically performed after Protein A chromatography.",
    principle: "Robust virus inactivation by chemical means. The most common method is low pH hold, where the product solution is held at a pH of around 3.5 for a specific time (e.g., 60 minutes), which denatures and inactivates enveloped viruses.",
    mechanism: "The purified protein solution is transferred to a validated inactivation tank. Acid (e.g., citric acid) is added to lower the pH to the target value. The solution is mixed gently and held at a controlled temperature for the validated time. Afterwards, a base is added to neutralize the pH before the next purification step.",
    construction: "A skid consisting of a jacketed, stirred tank, pH and temperature probes, and validated pumps for acid and base addition. The system must ensure accurate pH control and uniform mixing.",
    precautions: "The stability of the target protein at low pH must be confirmed; some proteins may denature or aggregate. The pH must be lowered and neutralized slowly to avoid localized extremes. The hold time and temperature must be strictly controlled and documented."
  },
  // =================================================================
  // Core Processing
  // =================================================================
  {
    id: 'lyophilizer_1',
    name: 'Lyophilizer (Freeze Dryer) LD-50',
    type: 'Core Processing',
    params: {
        shelf_temp: { name: 'Shelf Temp', min: -40, max: 20, unit: '°C' },
        chamber_pressure: { name: 'Chamber Pressure', min: 50, max: 300, unit: 'mTorr' },
        condenser_temp: { name: 'Condenser Temp', min: -80, max: -50, unit: '°C' },
    },
    use: "Drying heat-sensitive products like vaccines, antibodies, and other biologics to create a stable powder (cake) that can be stored for long periods and reconstituted before use.",
    principle: "Freeze drying, or lyophilization, is a dehydration process that involves freezing the product, lowering the pressure, and then removing the ice by sublimation (transitioning directly from solid to gas).",
    mechanism: "The product, in vials, is placed on shelves in a chamber and frozen. A vacuum is pulled on the chamber. The shelves are then slowly heated (primary drying) to provide the energy for the ice to sublimate. The water vapor is collected on a very cold condenser. Finally, a secondary drying phase at a higher temperature removes any remaining unfrozen water molecules.",
    construction: "A system with a product chamber with temperature-controlled shelves, a powerful vacuum pump, and a refrigeration system for a very cold condenser coil.",
    precautions: "The recipe (freezing rate, vacuum level, temperature ramps) is critical and product-specific. Vials must be stoppered under vacuum or nitrogen backfill. Ensure the condenser is cold enough before starting the vacuum pump."
  },
  {
    id: 'fluid_bed_dryer_1',
    name: 'Fluid Bed Dryer FBD-60',
    type: 'Core Processing',
    params: {
      inlet_air_temp: { name: 'Inlet Air Temp', min: 60, max: 85, unit: '°C' },
      product_temp: { name: 'Product Temp', min: 35, max: 45, unit: '°C' },
      air_flow: { name: 'Air Flow', min: 200, max: 400, unit: 'CFM' },
    },
    use: "Drying of wet granules or powders produced during wet granulation. It provides fast and uniform drying.",
    principle: "Heated air is blown through a perforated bottom plate of a product container, lifting and suspending the wet granules in a stream of air. This fluidization creates a large surface area for heat and mass transfer, leading to rapid drying.",
    mechanism: "Wet granules are loaded into the product bowl. The dryer forces a high volume of filtered and heated air upwards through the bowl. The granules are lifted and move about in a turbulent, fluidized state. Moisture evaporates and is carried away by the exhaust air.",
    construction: "Consists of an air handling unit (filters, heater), a product container (bowl), an expansion chamber, and filter bags to prevent product loss in the exhaust.",
    precautions: "The material must have the right particle size distribution to fluidize properly. The filter bags must be checked for integrity to avoid product loss. The equipment must be properly grounded to prevent static electricity buildup, which can be an explosion hazard with solvent-based granules."
  },
  {
    id: 'granulator_1',
    name: 'High-Shear Granulator HSG-200',
    type: 'Core Processing',
    params: {
        impeller_speed: { name: 'Impeller Speed', min: 100, max: 300, unit: 'RPM' },
        chopper_speed: { name: 'Chopper Speed', min: 1000, max: 3000, unit: 'RPM' },
        motor_load: { name: 'Motor Load', min: 10, max: 80, unit: 'Amps' },
        temperature: { name: 'Bowl Temp', min: 30, max: 50, unit: '°C' },
    },
    use: "Mixing and agglomerating dry powders with a granulating fluid to form dense, uniform granules, improving flowability and compressibility for tablet manufacturing.",
    principle: "High-intensity mixing and shearing forces are applied to a powder bed while a liquid binder is added. This causes the powder particles to densify and stick together, forming granules.",
    mechanism: "Dry powders are mixed in a sealed bowl by a large, low-speed impeller. A high-speed chopper blade breaks up any large lumps. Granulating fluid is sprayed onto the moving powder bed. The impeller's shear force creates dense granules. The endpoint is determined by time or by monitoring the motor load (amperage), which increases as granules form.",
    construction: "A stainless steel bowl with a top- or bottom-driven main impeller and a side-mounted high-speed chopper. Includes a port for spraying the binder solution.",
    precautions: "Over-granulation can lead to a hard, unusable mass. The amount of binder and the spray rate are critical parameters. The process must be contained due to dust generation."
  },
  {
    id: 'tablet_press_1',
    name: 'Tablet Press Machine TP-5000',
    type: 'Core Processing',
    params: {
        compression_force: { name: 'Compression Force', min: 20, max: 80, unit: 'kN' },
        turret_speed: { name: 'Turret Speed', min: 30, max: 100, unit: 'RPM' },
        tablet_hardness: { name: 'Tablet Hardness', min: 4, max: 8, unit: 'kp' },
        tablet_weight: { name: 'Tablet Weight', min: 495, max: 505, unit: 'mg' },
    },
    use: "Compressing granulated or powdered active pharmaceutical ingredients (APIs) and excipients into solid, uniform tablets of a specific size, shape, and weight.",
    principle: "Compaction of a powder blend between two punches (upper and lower) within a die. The force applied by the punches causes the particles to bond together.",
    mechanism: "A rotating turret holds a series of dies. The dies are filled with the powder blend from a hopper. The turret rotates, carrying the filled dies through a set of rollers that apply pressure to the upper and lower punches, compressing the powder. The finished tablets are then ejected from the dies.",
    construction: "Features a rotating turret, multiple stations of dies and punches, a powder feeding system, and compression rollers. Modern presses have sophisticated control and monitoring systems for tablet weight, hardness, and thickness.",
    precautions: "Tooling (punches and dies) must be clean, in good condition, and correctly installed. The powder blend must have good flow and compression properties. Dust extraction is essential for operator safety and to prevent cross-contamination."
  },
  {
    id: 'tablet_press_2',
    name: 'High-Speed Tablet Press TP-XLR8',
    type: 'Core Processing',
    params: {
        compression_force: { name: 'Compression Force', min: 10, max: 100, unit: 'kN' },
        turret_speed: { name: 'Turret Speed', min: 50, max: 150, unit: 'RPM' },
        rejection_rate: { name: 'Rejection Rate', min: 0, max: 2, unit: '%' },
        feeder_speed: { name: 'Feeder Speed', min: 40, max: 80, unit: 'RPM' },
    },
    use: "Large-scale, high-volume manufacturing of tablets. Designed for maximum output and efficiency.",
    principle: "Operates on the same principle as a standard tablet press but is engineered for higher speeds and longer run times.",
    mechanism: "Features a larger turret with more punch/die stations. It uses forced feeders to ensure the dies are filled uniformly even at very high turret speeds. Advanced instrumentation provides real-time monitoring and automatic rejection of out-of-spec tablets.",
    construction: "Robust construction to handle the high forces and speeds. Often includes features like exchangeable turrets for quick changeovers and wash-in-place (WIP) systems for easier cleaning.",
    precautions: "Heat generation can be an issue at high speeds and may affect temperature-sensitive products. The formulation must be specifically designed to withstand high-speed compression without issues like capping or lamination. Requires highly skilled operators and maintenance personnel."
  },
  {
    id: 'capsule_filler_1',
    name: 'Capsule Filling Machine CF-100',
    type: 'Core Processing',
    params: {
      machine_speed: { name: 'Machine Speed', min: 80, max: 120, unit: 'kCaps/hr' },
      dosing_weight: { name: 'Dosing Weight', min: 245, max: 255, unit: 'mg' },
      vacuum_pressure: { name: 'Vacuum Pressure', min: 15, max: 25, unit: 'inHg' },
    },
    use: "Filling empty hard gelatin or HPMC capsules with powders, granules, pellets, or even small tablets.",
    principle: "Automates the process of orienting, opening, filling, closing, and ejecting capsules at high speed.",
    mechanism: "Empty capsules are fed from a hopper and oriented. A vacuum system separates the capsule bodies and caps. The bodies pass under a dosing station where they are filled with the product (e.g., via a tamping pin or dosator nozzle system). The caps are then rejoined with the filled bodies, and the closed capsules are ejected.",
    construction: "A rotary or linear machine with stations for each step of the process. Includes capsule and product hoppers, and systems for vacuum and dust collection.",
    precautions: "The properties of the powder (flowability, density) are critical for accurate filling. Proper capsule size selection is essential. The machine must be carefully set up to avoid damaging the capsules (denting or splitting)."
  },
  {
    id: 'coating_pan_1',
    name: 'Tablet Coating Pan TCP-50',
    type: 'Core Processing',
    params: {
      pan_speed: { name: 'Pan Speed', min: 8, max: 16, unit: 'RPM' },
      inlet_air_temp: { name: 'Inlet Air Temp', min: 50, max: 70, unit: '°C' },
      spray_rate: { name: 'Spray Rate', min: 100, max: 200, unit: 'mL/min' },
      atomization_pressure: { name: 'Atomization Air', min: 1.5, max: 2.5, unit: 'bar' },
    },
    use: "Applying a thin, uniform coating to tablets. Reasons include taste masking, protecting the drug, controlling its release (enteric coating), or improving appearance.",
    principle: "A coating solution is sprayed onto a tumbling bed of tablets while heated air is passed through the bed to evaporate the solvent, leaving a dry coat on the tablets.",
    mechanism: "Tablets are placed in a perforated rotating drum (pan). Spray guns atomize the coating solution and apply it evenly to the tablet bed. Hot air is drawn through the perforations in the pan, drying the tablets as they tumble. Baffles in the pan ensure gentle mixing.",
    construction: "Consists of a perforated stainless steel pan, an air handling unit to supply heated air, spray guns, a solution delivery pump, and an exhaust system.",
    precautions: "The process is a delicate balance between spray rate and drying rate. Too wet can cause tablets to stick together (twinning); too dry can cause a rough finish (orange peel). Inlet air temperature, humidity, and airflow are critical parameters."
  },
  {
    id: 'v_blender_1',
    name: 'V-Blender VB-500',
    type: 'Core Processing',
    params: {
      rotation_speed: { name: 'Rotation Speed', min: 10, max: 25, unit: 'RPM' },
      run_time: { name: 'Run Time', min: 10, max: 20, unit: 'min' },
      load_percentage: { name: 'Load', min: 40, max: 60, unit: '%' },
    },
    use: "Gentle blending of dry powders and granules. Ideal for mixing lubricants into a granule blend just before tableting.",
    principle: "Tumble blending. The V-shaped shell causes the material to split and merge with each rotation, leading to a diffusive mixing action that is low-shear and efficient.",
    mechanism: "The blender is loaded with the powders to be mixed (typically to 50-60% of its total volume). The shell is then rotated on a horizontal axis. The splitting and merging of the powder bed as it tumbles from one leg of the V to the other creates a homogenous mixture.",
    construction: "A V-shaped vessel made of stainless steel, mounted on trunnions that allow it to rotate. It has access ports for loading and unloading.",
    precautions: "Do not overfill the blender, as this will impede the mixing action. The rotation speed should not be too high, to avoid centrifugal forces that would cause the powder to stick to the walls. Proper grounding is necessary to prevent static buildup."
  },
  {
    id: 'aseptic_filler_1',
    name: 'Aseptic Filling Line AF-V10',
    type: 'Core Processing',
    params: {
      fill_volume: { name: 'Fill Volume', min: 9.9, max: 10.1, unit: 'mL' },
      line_speed: { name: 'Line Speed', min: 180, max: 220, unit: 'vials/min' },
      differential_pressure: { name: 'Grade A Pressure', min: 15, max: 20, unit: 'Pa' },
    },
    use: "Filling sterile liquid drug products into vials, syringes, or cartridges under strictly sterile (aseptic) conditions to prevent microbial contamination.",
    principle: "The entire process, from sterile container feeding to filling and closing, must take place within an extremely clean environment (Grade A or ISO 5) to ensure the final product is sterile.",
    mechanism: "Sterilized containers (e.g., vials) are fed into a filling area, which is protected by a laminar air flow hood or an isolator. High-precision pumps dispense the exact volume of sterile drug product into each container. Stoppers are then inserted, and the vials are sealed. The process is highly automated.",
    construction: "A complex, integrated line of equipment including a vial washer, depyrogenation tunnel, filling machine, and capper, all housed within a controlled cleanroom environment.",
    precautions: "Maintaining sterility is the highest priority. Regular environmental monitoring (air and surface samples) is mandatory. All operator interventions must be minimized and performed using aseptic technique. Media fills are used to validate the process."
  },
  {
    id: 'multilayer_tablet_press_1',
    name: 'Multi-layer Tablet Press TP-ML-3',
    type: 'Core Processing',
    params: {
        compression_force_1: { name: 'Force Layer 1', min: 10, max: 30, unit: 'kN' },
        compression_force_2: { name: 'Force Layer 2', min: 20, max: 80, unit: 'kN' },
        turret_speed: { name: 'Turret Speed', min: 20, max: 60, unit: 'RPM' },
    },
    use: "Producing tablets with two or more distinct layers. Used for combination therapies (two different drugs), modified-release formulations (e.g., an immediate-release layer and a sustained-release layer), or for separating incompatible APIs.",
    principle: "Multiple compression steps are used to form a single tablet. Each layer is filled and lightly compressed before the next layer is added.",
    mechanism: "The press has multiple filling stations. The die is first filled with the powder for the first layer and then subjected to a light 'tamping' compression. The turret rotates to the next filling station, where the second layer's powder is added on top. The combined layers then go through the main compression station to form the final, bonded tablet.",
    construction: "A specialized rotary tablet press with multiple hoppers, feed frames, and two or more compression stations.",
    precautions: "Cross-contamination between the layers must be prevented. The tamping force is critical to ensure proper bonding between the layers without causing issues in the final compression. The physical properties of each layer's blend must be compatible."
  },
  {
    id: 'tablet_deduster_1',
    name: 'Tablet Deduster TDU-UP-1',
    type: 'Core Processing',
    params: {
        vibration_level: { name: 'Vibration Level', min: 50, max: 80, unit: '%' },
        air_pressure: { name: 'Air Pressure', min: 2, max: 4, unit: 'bar' },
        throughput: { name: 'Throughput', min: 200000, max: 500000, unit: 'tabs/hr' },
    },
    use: "Removing the fine layer of surface dust from tablets as they exit the tablet press. This is essential before coating or packaging.",
    principle: "Uses vibration and air jets to gently dislodge and remove loose powder from the surface of the tablets.",
    mechanism: "Tablets are fed from the press outlet into the deduster. They travel up a vibrating spiral path. As they vibrate, they tumble and rub against each other, and jets of clean compressed air blow off any loose dust. The dust is collected by a vacuum system.",
    construction: "A cylindrical stainless steel unit with an internal spiral track. It features a vibration drive and ports for compressed air and dust extraction.",
    precautions: "The vibration and air pressure must be gentle enough to not cause any damage (breakage or chipping) to the tablets. The dust collection system must be effective to prevent dust from escaping into the room."
  },
  {
    id: 'metal_detector_1',
    name: 'Metal Detector (Pharma) MD-CONV-12',
    type: 'Core Processing',
    params: {
        fe_sensitivity: { name: 'Fe Sensitivity', min: 0.5, max: 0.5, unit: 'mm' }, // Should be fixed
        ss_sensitivity: { name: 'SS Sensitivity', min: 1.0, max: 1.0, unit: 'mm' }, // Should be fixed
        rejection_count: { name: 'Rejection Count', min: 0, max: 5, unit: '' },
    },
    use: "A quality control checkpoint to ensure that no metal contaminants (e.g., from broken machine parts) are present in the final product (tablets, capsules).",
    principle: "Generates a balanced electromagnetic field. When a piece of metal passes through, it disrupts the field. The detector senses this disruption and triggers an alarm and a rejection mechanism.",
    mechanism: "Tablets or capsules pass through an aperture in the detector head on a conveyor belt. If metal is detected, a signal is sent to an automated rejection device (e.g., an air blast or a retracting belt section) that removes the contaminated product from the line.",
    construction: "An electronic control unit, an aperture (tunnel) containing the transmit and receive coils, and a rejection system. All product-contact parts are non-metallic.",
    precautions: "Must be regularly challenged with certified test pieces (ferrous, non-ferrous, stainless steel) to verify its sensitivity and that the rejection mechanism is working correctly. Vibration can sometimes cause false rejects."
  },
  {
    id: 'checkweigher_1',
    name: 'Checkweigher CW-PHARMA-300',
    type: 'Core Processing',
    params: {
      speed: { name: 'Speed', min: 250, max: 350, unit: 'units/min' },
      accuracy: { name: 'Accuracy', min: 5, max: 15, unit: 'mg' },
    },
    use: "In-line, 100% weight checking of individual tablets, capsules, or packaged products to ensure they are within the specified weight range.",
    principle: "Uses a highly sensitive electromagnetic force restoration (EMFR) weigh cell to rapidly and accurately measure the weight of products as they move along a conveyor.",
    mechanism: "Products are fed one by one from the production line onto the checkweigher's conveyor. They pass over a weigh cell, which measures their weight. The control system compares the weight to pre-set tolerance limits and activates a rejection device to remove any out-of-spec (underweight or overweight) products.",
    construction: "Consists of an infeed conveyor, a weighing conveyor with a load cell, and an outfeed conveyor, along with a rejection system and a control interface.",
    precautions: "Must be isolated from external vibrations to ensure accuracy. Regular calibration with certified weights is required. The spacing between products on the belt is important for accurate individual weighing."
  },
  {
    id: 'roller_compactor_1',
    name: 'Dry Compactor / Roller Compactor RC-100',
    type: 'Core Processing',
    params: {
      roll_pressure: { name: 'Roll Pressure', min: 20, max: 100, unit: 'bar' },
      roll_speed: { name: 'Roll Speed', min: 5, max: 20, unit: 'RPM' },
      gap_width: { name: 'Gap Width', min: 1.5, max: 3.0, unit: 'mm' },
    },
    use: "A form of dry granulation. It densifies powders by pressing them between two counter-rotating rollers to form a solid ribbon or flakes. This ribbon is then milled to produce granules. Used for moisture- or heat-sensitive drugs.",
    principle: "Densification of powder by applying high pressure. This avoids the use of liquid binders and the need for a drying step, as in wet granulation.",
    mechanism: "A screw feeder delivers powder consistently into the gap between two rollers. The rollers apply high pressure, compacting the powder into a solid ribbon. This ribbon is then fed into a milling unit (e.g., a cone mill) that breaks it down into granules of the desired size.",
    construction: "A system composed of a feeding system, two compaction rollers, and an integrated milling system for size reduction of the compacted ribbon.",
    precautions: "The process generates a lot of fine dust, requiring good containment. The properties of the final granules (density, flowability) are highly dependent on the roll pressure and gap width. The feeding of powder to the rollers must be very consistent."
  },
  // =================================================================
  // Mixing
  // =================================================================
  {
    id: 'ribbon_blender_1',
    name: 'Ribbon Blender RB-1000',
    type: 'Mixing',
    params: {
        speed: { name: 'Speed', min: 20, max: 50, unit: 'RPM' },
        motor_load: { name: 'Motor Load', min: 30, max: 70, unit: '%' },
        temperature: { name: 'Temperature', min: 20, max: 40, unit: '°C' },
    },
    use: "Blending dry powders, granules, and other solid materials. Also suitable for adding small amounts of liquids to a solid bed.",
    principle: "Achieves mixing through the convective movement of material within a stationary U-shaped trough.",
    mechanism: "A horizontal agitator consisting of inner and outer helical ribbons rotates within the trough. The outer ribbon moves material from the ends towards the center, while the inner ribbon moves it from the center towards the ends. This counter-current action creates thorough blending.",
    construction: "A U-shaped trough with a lid, a central agitator shaft with helical ribbons, and a discharge valve at the bottom.",
    precautions: "It is not ideal for very gentle blending as some shear is involved. There can be 'dead spots' at the very ends of the trough. A discharge valve at the center bottom is most common."
  },
  {
    id: 'v_blender_2',
    name: 'V-Blender VB-2000L',
    type: 'Mixing',
    params: {
      rotation_speed: { name: 'Rotation Speed', min: 8, max: 20, unit: 'RPM' },
      run_time: { name: 'Run Time', min: 15, max: 25, unit: 'min' },
      load_percentage: { name: 'Load', min: 45, max: 65, unit: '%' },
    },
    use: "Precise and gentle blending of dry powders and granules, especially for free-flowing materials. Common for final blends in pharmaceutical manufacturing.",
    principle: "Diffusion blending (tumble blending). The V-shape of the rotating vessel causes the product to repeatedly split and recombine, creating a highly uniform mixture with minimal shear.",
    mechanism: "As the V-shaped shell rotates, the batch of material is alternately collected in the bottom and then split into two streams as it falls into the two legs. This continuous splitting and merging randomizes the particle positions, leading to a homogeneous blend.",
    construction: "A vessel made of two cylinders joined at an angle (typically 90 degrees) to form a 'V'. It is mounted on a rotational axis. Some models include an intensifier bar for breaking small lumps.",
    precautions: "Should not be overfilled (typically 50-60% of total volume) to allow room for the material to tumble. Not suitable for powders with very different particle sizes or densities, as segregation can occur."
  },
  {
    id: 'double_cone_blender_1',
    name: 'Double Cone Blender DCB-500',
    type: 'Mixing',
    params: {
      rotation_speed: { name: 'Rotation Speed', min: 10, max: 25, unit: 'RPM' },
      motor_current: { name: 'Motor Current', min: 5, max: 15, unit: 'A' },
    },
    use: "Effective blending of free-flowing solids like granules and powders. Its shape allows for easy loading, unloading, and cleaning.",
    principle: "A low-impact tumble blender that relies on the sliding of material at different angles as the vessel rotates to achieve a uniform mix.",
    mechanism: "The material inside the rotating cone-shaped vessel is moved in a multi-axial direction. The cone shape helps in directing the material flow, ensuring that particles from the top layer move towards the center and vice versa, leading to efficient mixing.",
    construction: "Consists of two cone-shaped sections joined by a central cylindrical part. It rotates on a horizontal axis. A large manhole allows for easy access.",
    precautions: "Similar to a V-blender, it should not be overfilled. The blending time and rotation speed are key parameters to optimize for a given product. Best for materials that are free-flowing."
  },
  {
    id: 'planetary_mixer_1',
    name: 'Planetary Mixer PM-50L (High Viscosity)',
    type: 'Mixing',
    params: {
      planetary_speed: { name: 'Planetary Speed', min: 20, max: 80, unit: 'RPM' },
      vessel_temp: { name: 'Vessel Temp', min: 25, max: 60, unit: '°C' },
      vacuum: { name: 'Vacuum', min: -0.8, max: 0, unit: 'bar' },
    },
    use: "Mixing, kneading, and dispersing high-viscosity materials like ointments, creams, gels, and pastes. Also used for wet granulation.",
    principle: "The agitator moves in a planetary motion, rotating on its own axis while also orbiting the center of the mixing bowl. This ensures that the entire batch is mixed and that there is no unmixed material on the vessel walls.",
    mechanism: "One or more mixing blades (agitators) travel through the entire volume of the product. The planetary action provides very high shear and ensures complete homogenization, even for non-flowing, sticky materials. A scraper blade often wipes the vessel wall.",
    construction: "Features a removable mixing bowl and one or more agitators mounted on a rotating gearbox. Often equipped with a vacuum system to de-aerate the product and a jacket for heating or cooling.",
    precautions: "The clearance between the blades and the bowl is critical for efficient mixing. The high shear can generate heat, which may need to be controlled. Safety interlocks are essential due to the powerful motor."
  },
  {
    id: 'high_shear_mixer_1',
    name: 'High Shear Mixer / Granulator HSG-300',
    type: 'Mixing',
    params: {
      impeller_speed: { name: 'Impeller Speed', min: 100, max: 400, unit: 'RPM' },
      chopper_speed: { name: 'Chopper Speed', min: 1000, max: 3000, unit: 'RPM' },
      motor_load: { name: 'Motor Load', min: 15, max: 85, unit: 'Amps' },
    },
    use: "Rapid wet granulation in the pharmaceutical industry. It blends dry powders and then agglomerates them with a binder solution to produce uniform, dense granules.",
    principle: "Combines high-speed, high-shear mixing with low-speed convective mixing to produce granules in a short time.",
    mechanism: "A large, low-speed impeller at the bottom of the bowl creates a fluidizing, tumbling motion in the powder bed. A smaller, high-speed chopper mounted on the side breaks up any oversized lumps and densifies the granules. A binder solution is sprayed onto the powder during this process.",
    construction: "A vertical, cylindrical, or conical mixing bowl with a bottom-driven impeller and a side-mounted chopper. The lid contains ports for adding ingredients and the binder spray nozzle.",
    precautions: "The endpoint of granulation is critical and can be determined by time, or more accurately by monitoring the power consumption (amperage) of the main impeller motor. Over-wetting can create an unusable, dough-like mass."
  },
  {
    id: 'static_mixer_1',
    name: 'Static Mixer SM-PIPE-6IN',
    type: 'Mixing',
    params: {
      flow_rate: { name: 'Flow Rate', min: 50, max: 200, unit: 'm³/hr' },
      pressure_drop: { name: 'Pressure Drop', min: 0.2, max: 1.0, unit: 'bar' },
    },
    use: "Continuous, in-line mixing of fluids (liquids or gases). Used for applications like pH adjustment, blending of miscible liquids, or dispersing gas into a liquid.",
    principle: "Achieves mixing using stationary elements within a pipe. The energy for mixing comes from the pressure drop created as the fluids flow past these elements. There are no moving parts.",
    mechanism: "The mixer consists of a series of geometric elements (baffles, blades, or channels) fixed inside a pipe. As the fluid streams flow through, these elements repeatedly divide, stretch, and recombine the streams, creating a homogeneous mixture in a very short length of pipe.",
    construction: "A section of pipe containing fixed, precisely designed mixing elements. Can be made from various materials, including stainless steel and plastics.",
    precautions: "Causes a permanent pressure drop in the line, which the upstream pump must be able to overcome. Not suitable for mixing solids or highly viscous fluids that could clog the elements."
  },
  {
    id: 'agitator_tank_1',
    name: 'Agitator Tank AT-5000L',
    type: 'Mixing',
    params: {
      agitator_speed: { name: 'Agitator Speed', min: 50, max: 150, unit: 'RPM' },
      temperature: { name: 'Temperature', min: 20, max: 90, unit: '°C' },
      motor_torque: { name: 'Motor Torque', min: 20, max: 60, unit: '%' },
    },
    use: "General purpose liquid blending, dissolving solids in liquids, maintaining solids in suspension, and promoting heat transfer in a jacketed vessel.",
    principle: "A rotating impeller imparts kinetic energy to the fluid, creating fluid motion and turbulence that leads to mixing.",
    mechanism: "A motor drives a shaft with one or more impellers submerged in the liquid. The type of impeller (e.g., propeller, turbine, anchor) determines the flow pattern (axial or radial) and the intensity of mixing (high flow or high shear).",
    construction: "A tank, typically cylindrical with a dished or flat bottom, equipped with a top- or bottom-mounted agitator assembly (motor, gearbox, shaft, and impellers). Baffles are often installed on the tank wall to prevent swirling and improve mixing efficiency.",
    precautions: "The agitator must be selected based on the fluid's viscosity and the desired process outcome. A vortex can form at high speeds in unbaffled tanks, which reduces mixing efficiency. The motor and gearbox must be sized to handle the torque required for the specific fluid and process."
  },
  {
    id: 'silverson_homogenizer_1',
    name: 'Silverson Homogenizer HSM-10HP',
    type: 'Mixing',
    params: {
      speed: { name: 'Speed', min: 1500, max: 3000, unit: 'RPM' },
      motor_current: { name: 'Motor Current', min: 10, max: 25, unit: 'A' },
    },
    use: "Rapidly emulsifying, homogenizing, suspending, dissolving, and disintegrating materials. Used for creating creams, lotions, and suspensions.",
    principle: "High-shear rotor-stator mixing. Intense mechanical and hydraulic shear is generated in the small gap between a high-speed rotor and a stationary stator.",
    mechanism: "The material is drawn into the center of the rotor-stator workhead. The high-speed rotor forces the material outwards through the perforations in the stator. This subjects the material to intense shearing forces, rapidly reducing droplet or particle size.",
    construction: "Consists of a high-speed motor, a drive shaft, and a workhead containing a rotor that spins at high speed within a close-fitting stationary stator.",
    precautions: "The process can generate significant heat and can incorporate air into the product if not properly submerged. Not suitable for highly abrasive materials which can wear out the workhead."
  },
  {
    id: 'ibc_blender_1',
    name: 'IBC Tote Blender ITB-1000',
    type: 'Mixing',
    params: {
      rotation_speed: { name: 'Rotation Speed', min: 5, max: 15, unit: 'RPM' },
      cycle_time: { name: 'Cycle Time', min: 10, max: 30, unit: 'min' },
    },
    use: "Blending powders and granules directly in their Intermediate Bulk Containers (IBCs). This avoids the need for loading and unloading a separate blender, providing a closed, contained process.",
    principle: "Tumble blending. The entire IBC is rotated, causing the material inside to mix gently and efficiently.",
    mechanism: "An IBC is securely clamped into a rotating cage. The cage then rotates, often on an asymmetrical axis, to create a complex tumbling motion inside the container, which leads to a homogeneous blend.",
    construction: "A robust frame with a clamping system to hold various sizes of IBCs, and a powerful motor and drive system to rotate the container.",
    precautions: "The IBC must be securely fastened before operation. The fill level of the IBC is important for effective mixing (typically 50-70%). The system must have safety features like light curtains or fences to prevent access during rotation."
  },
  {
    id: 'paddle_mixer_1',
    name: 'Paddle Mixer PMX-1500',
    type: 'Mixing',
    params: {
      speed: { name: 'Speed', min: 30, max: 70, unit: 'RPM' },
      motor_load: { name: 'Motor Load', min: 25, max: 80, unit: '%' },
    },
    use: "Mixing a wide range of materials, from dry powders to wet sludges and pastes. Can be more gentle than a ribbon blender.",
    principle: "Convective mixing. Paddles mounted on a rotating shaft lift and fold the material, creating a homogenous mixture.",
    mechanism: "One or two parallel shafts with specially angled paddles rotate inside a trough. The paddles move the material in a crisscrossing pattern, creating a 'fluidized zone' in the center of the mixer where intense but low-shear mixing occurs.",
    construction: "A horizontal trough with either a single or double shaft fitted with paddles. Often includes a bottom discharge gate.",
    precautions: "The clearance between the paddles and the trough wall is important to prevent dead spots. Can be less efficient than a ribbon blender for some free-flowing powders. Suitable for fragile materials."
  },
  {
    id: 'drum_blender_1',
    name: 'Drum Blender DB-200L',
    type: 'Mixing',
    params: {
      rotation_speed: { name: 'Rotation Speed', min: 10, max: 30, unit: 'RPM' },
    },
    use: "Simple, low-cost blending of powders and granules directly in a standard 200L drum. Good for small batches and contained processing.",
    principle: "Tumble blending. The entire drum is tumbled end-over-end or rotated at an angle to mix the contents.",
    mechanism: "A standard drum is loaded with the ingredients and then clamped into a holder. The holder then rotates, tumbling the drum and its contents to achieve a blend. Some designs have internal baffles to improve mixing action.",
    construction: "A frame and drive mechanism designed to hold and rotate a standard industrial drum. Can be a simple drum roller or a more complex end-over-end tumbler.",
    precautions: "The drum must be sealed properly to prevent leaks. Fill level should be around 50-60% for effective mixing. The uniformity of the blend may not be as high as with a V-blender for some materials."
  },
  {
    id: 'lab_magnetic_stirrer_1',
    name: 'Lab Scale Magnetic Stirrer MS-2L',
    type: 'Mixing',
    params: {
      speed: { name: 'Speed', min: 100, max: 1500, unit: 'RPM' },
      temperature: { name: 'Plate Temp', min: 25, max: 300, unit: '°C' },
    },
    use: "Stirring liquids in a laboratory setting, such as dissolving solids, simple blending, and maintaining suspensions for titrations or other analyses.",
    principle: "A rotating magnetic field created by the stirrer plate induces the rotation of a magnetic stir bar placed inside the liquid container.",
    mechanism: "A permanent magnet is attached to a motor under the top plate. A PTFE-coated magnetic bar is placed in a beaker or flask with the liquid. When the motor spins the magnet, the magnetic field 'drags' the stir bar along, causing it to spin and stir the liquid.",
    construction: "A small box containing a motor and magnet, with a speed control knob. Many models also include a hot plate for heating the liquid simultaneously.",
    precautions: "The stir bar can 'decouple' from the driving magnet if the speed is too high or the liquid is too viscous. Ensure the container is placed in the center of the plate for stable stirring. Be cautious with the hot plate function to avoid burns or boiling over."
  },
  // =================================================================
  // Drying
  // =================================================================
  {
    id: 'tray_dryer_1',
    name: 'Tray Dryer TD-24 (24 Trays)',
    type: 'Drying',
    params: {
      temperature: { name: 'Temperature', min: 60, max: 90, unit: '°C' },
      humidity: { name: 'Exhaust Humidity', min: 20, max: 80, unit: '%' },
      air_velocity: { name: 'Air Velocity', min: 1, max: 3, unit: 'm/s' },
    },
    use: "Drying of wet solids, powders, granules, and crude drugs in a batch process. Suitable for materials that require static drying.",
    principle: "Convective drying. Hot air is circulated over the surface of the wet material spread on trays, providing the heat for evaporation and carrying away the water vapor.",
    mechanism: "Wet material is loaded onto trays, which are then placed in a heated cabinet. A fan circulates heated air across the trays. Dampers control the inlet of fresh air and the exhaust of moist air to maintain optimal drying conditions.",
    construction: "An insulated cabinet with racks to hold trays. It contains a heater, a fan for air circulation, and controls for temperature and airflow.",
    precautions: "Drying can be slow and non-uniform, with the top layers drying faster than the bottom. Labor-intensive due to the need to manually load and unload trays. Not suitable for heat-sensitive materials that require low-temperature drying."
  },
  {
    id: 'vacuum_tray_dryer_1',
    name: 'Vacuum Tray Dryer VTD-12',
    type: 'Drying',
    params: {
      shelf_temperature: { name: 'Shelf Temp', min: 50, max: 70, unit: '°C' },
      vacuum_pressure: { name: 'Vacuum Pressure', min: 10, max: 50, unit: 'mbar' },
      condenser_temp: { name: 'Condenser Temp', min: -10, max: 5, unit: '°C' },
    },
    use: "Drying heat-sensitive and hygroscopic materials. The vacuum allows for drying at a much lower temperature than at atmospheric pressure.",
    principle: "Conductive and radiant heat transfer under vacuum. Lowering the pressure reduces the boiling point of water (or other solvents), allowing for rapid evaporation even at low temperatures.",
    mechanism: "Material is placed on trays, which sit on heated shelves inside a sealed, robust chamber. A vacuum is pulled on the chamber. Heat is conducted from the shelves to the material, causing the solvent to vaporize. The vapor is then drawn out by the vacuum pump and collected in a condenser.",
    construction: "A strong, sealed chamber (often rectangular) with internal hollow shelves that can be heated with hot water or steam. It is connected to a vacuum system and a condenser.",
    precautions: "Ensure a good vacuum seal to maintain low pressure. The product can be prone to case hardening, where the surface dries quickly and traps moisture inside. Heat transfer is less efficient than in convective dryers."
  },
  {
    id: 'spray_dryer_pilot_1',
    name: 'Spray Dryer SD-PILOT-5',
    type: 'Drying',
    params: {
      inlet_temp: { name: 'Inlet Temp', min: 150, max: 220, unit: '°C' },
      outlet_temp: { name: 'Outlet Temp', min: 80, max: 110, unit: '°C' },
      atomizer_speed: { name: 'Atomizer Speed', min: 15000, max: 25000, unit: 'RPM' },
    },
    use: "Transforming a liquid feed (solution, suspension, or emulsion) into a dry powder in a single step. Used in pharmaceutical and food industries for process development and small-scale production.",
    principle: "Convective drying of atomized droplets. The massive surface area created by atomization leads to extremely rapid drying.",
    mechanism: "The liquid feed is atomized (sprayed as fine droplets) into a hot gas stream. The heat from the gas evaporates the solvent from the droplets almost instantaneously. The resulting dry powder is separated from the gas stream, usually by a cyclone or bag filter.",
    construction: "Consists of a feed pump, an atomizer (rotary or nozzle type), an air heater, a drying chamber, and a system for powder collection and exhaust gas cleaning.",
    precautions: "The properties of the final powder (particle size, density) are highly dependent on the feed properties and operating parameters. The product can be heat-sensitive, but the actual particle temperature remains low due to evaporative cooling. Risk of explosion if flammable solvents are used."
  },
  {
    id: 'spray_dryer_prod_1',
    name: 'Production Spray Dryer SD-PROD-50',
    type: 'Drying',
    params: {
      inlet_temp: { name: 'Inlet Temp', min: 160, max: 200, unit: '°C' },
      outlet_temp: { name: 'Outlet Temp', min: 90, max: 120, unit: '°C' },
      feed_rate: { name: 'Feed Rate', min: 50, max: 150, unit: 'L/hr' },
    },
    use: "Large-scale, continuous production of powdered products like milk powder, detergents, and pharmaceuticals from a liquid feed.",
    principle: "Operates on the same principle as pilot-scale spray dryers but is designed for continuous, high-throughput operation.",
    mechanism: "A large, continuous flow of liquid feed is atomized into a very large drying chamber. The process is highly automated to maintain consistent powder quality over long production runs. Powder is collected from the chamber bottom and cyclones, often with pneumatic conveying systems.",
    construction: "A very large structure, often several stories high, including a large drying chamber, powerful air heaters and blowers, and multiple cyclones for efficient powder recovery.",
    precautions: "Cleaning can be a major undertaking. The high volume of hot air and fine powder creates a potential explosion hazard, requiring extensive safety systems (e.g., explosion vents, suppression systems). Process control is critical for product consistency."
  },
  {
    id: 'fluid_bed_dryer_2',
    name: 'Fluid Bed Dryer FBD-120',
    type: 'Drying',
    params: {
      inlet_air_temp: { name: 'Inlet Air Temp', min: 70, max: 95, unit: '°C' },
      product_temp: { name: 'Product Temp', min: 40, max: 50, unit: '°C' },
      air_flow: { name: 'Air Flow', min: 300, max: 600, unit: 'CFM' },
    },
    use: "Efficient and uniform drying of granular materials in pharmaceutical manufacturing. It is a standard piece of equipment in oral solid dosage form production lines.",
    principle: "Convective drying in a fluidized state. The excellent solid-gas contact ensures high rates of heat and mass transfer, resulting in fast and consistent drying.",
    mechanism: "Heated air is blown through a distributor plate at the bottom of the product container, causing the wet granules to become suspended and behave like a fluid. This ensures that each particle is surrounded by the drying air, leading to uniform moisture removal.",
    construction: "Comprises an air handling unit, a stainless steel product bowl with a bottom screen, an expansion chamber with filter bags to trap fine particles, and a control panel to manage process parameters.",
    precautions: "Risk of static electricity buildup requires proper grounding of the equipment. The inlet air temperature must be controlled to avoid overheating the product. Filter bag integrity is essential to prevent loss of yield."
  },
  {
    id: 'rotary_vacuum_dryer_1',
    name: 'Rotary Vacuum Dryer RVD-1000L',
    type: 'Drying',
    params: {
      jacket_temp: { name: 'Jacket Temp', min: 60, max: 85, unit: '°C' },
      vacuum_pressure: { name: 'Vacuum Pressure', min: 20, max: 100, unit: 'mbar' },
      rotation_speed: { name: 'Rotation Speed', min: 2, max: 8, unit: 'RPM' },
    },
    use: "Drying slurries, pastes, and crystalline products, especially those that are heat-sensitive or require solvent recovery.",
    principle: "Combines the low-temperature drying benefits of a vacuum with gentle agitation to constantly expose new surfaces for drying.",
    mechanism: "The wet material is loaded into a horizontal, cylindrical vessel that is jacketed for heating. The vessel is placed under vacuum, and it rotates slowly. The tumbling action breaks up lumps and continuously brings fresh material into contact with the heated walls, promoting uniform drying.",
    construction: "A rotating, jacketed cylindrical shell with a connection to a vacuum system. A condenser is placed between the dryer and the vacuum pump to recover the evaporated solvent.",
    precautions: "The mechanical seals on the rotating shaft must be robust to maintain the vacuum. The product must not be too sticky, as it can coat the walls and dry inefficiently. The slow rotation provides very gentle handling for fragile crystals."
  },
  {
    id: 'anfd_1',
    name: 'Agitated Nutsche Filter Dryer ANFD-1',
    type: 'Drying',
    params: {
      jacket_temp: { name: 'Jacket Temp', min: 50, max: 90, unit: '°C' },
      vacuum_pressure: { name: 'Vacuum', min: 10, max: 80, unit: 'mbar' },
      agitator_speed: { name: 'Agitator Speed', min: 5, max: 20, unit: 'RPM' },
    },
    use: "A multi-purpose piece of equipment that can perform filtration, washing, and drying of a product all within a single, contained unit. Common in API and fine chemical manufacturing.",
    principle: "Combines pressure/vacuum filtration with agitated vacuum drying. The containment minimizes operator exposure and protects the product from contamination.",
    mechanism: "A slurry is fed into the vessel and filtered under pressure or vacuum, leaving a wet cake on the filter plate. The cake can be washed. For drying, the vessel is heated via its jacket, a vacuum is applied, and a height-adjustable agitator stirs the cake to break it up and promote uniform drying.",
    construction: "A sealed, jacketed vessel with a filter plate at the bottom. The key component is the S-blade agitator, which can be raised and lowered and rotated in both directions for mixing, smoothing, and discharging the product.",
    precautions: "The agitator must not damage the filter cloth. The drying process must be carefully controlled to achieve the target residual solvent level without degrading the product. These are complex and expensive pieces of equipment."
  },
  {
    id: 'microwave_vacuum_dryer_1',
    name: 'Microwave Vacuum Dryer MVD-LAB',
    type: 'Drying',
    params: {
      microwave_power: { name: 'Microwave Power', min: 10, max: 100, unit: '%' },
      vacuum_pressure: { name: 'Vacuum', min: 5, max: 50, unit: 'mbar' },
      product_temp: { name: 'Product Temp', min: 35, max: 50, unit: '°C' },
    },
    use: "Very rapid, low-temperature drying of heat-sensitive materials. Used in labs and for high-value products.",
    principle: "Combines vacuum drying with microwave heating. Microwaves provide energy directly to the water molecules within the product, leading to fast and efficient evaporation at low temperatures.",
    mechanism: "The product is placed in a vacuum chamber. Microwaves are applied, causing the polar solvent molecules (like water) to vibrate and heat up, leading to rapid boiling at the low pressure. The vapor is removed by the vacuum system.",
    construction: "A vacuum-tight chamber made of microwave-transparent material or with a microwave window, connected to a magnetron (microwave generator) and a vacuum pump.",
    precautions: "Risk of 'arcing' if any metal is present. Non-uniform heating can create hot spots, so product agitation or intermittent microwave application may be needed. The penetration depth of microwaves is limited, so it's best for thin layers of product."
  },
  {
    id: 'conical_screw_dryer_1',
    name: 'Conical Screw Vacuum Dryer CSVD-500L',
    type: 'Drying',
    params: {
      jacket_temp: { name: 'Jacket Temp', min: 70, max: 100, unit: '°C' },
      vacuum_pressure: { name: 'Vacuum', min: 20, max: 100, unit: 'mbar' },
      screw_speed: { name: 'Screw Speed', min: 1, max: 5, unit: 'RPM' },
    },
    use: "Gentle vacuum drying of a wide range of products, including powders, crystals, and pastes. Also allows for blending during the drying cycle.",
    principle: "Agitated vacuum drying with a unique mixing action. Heat is transferred through the vessel jacket, and an orbiting screw agitator provides gentle and thorough mixing.",
    mechanism: "The dryer is a cone-shaped vessel with a heated jacket. A central screw agitator rotates on its own axis while also orbiting the inner wall of the cone. This action constantly lifts material from the bottom of the vessel to the top, ensuring all product comes into contact with the heated walls and preventing local overheating.",
    construction: "A vertical, cone-shaped vessel with a heating jacket. The main component is the orbiting screw agitator, which requires a complex drive system at the top.",
    precautions: "Provides very gentle mixing, making it ideal for fragile products. The conical shape and screw action also make it excellent for complete product discharge. The mechanical complexity of the drive system requires regular maintenance."
  },
  {
    id: 'belt_dryer_1',
    name: 'Belt Dryer BD-CONTI-10M',
    type: 'Drying',
    params: {
      zone1_temp: { name: 'Zone 1 Temp', min: 90, max: 120, unit: '°C' },
      zone2_temp: { name: 'Zone 2 Temp', min: 70, max: 90, unit: '°C' },
      belt_speed: { name: 'Belt Speed', min: 1, max: 5, unit: 'm/min' },
    },
    use: "Continuous, large-scale drying of materials like foods (fruits, vegetables), chemicals, and polymers that are in the form of extrudates, pellets, or filter cakes.",
    principle: "Convective drying. The product is carried on a perforated conveyor belt through a tunnel where hot air is passed through it.",
    mechanism: "Wet material is fed evenly onto one end of a continuously moving, perforated belt. The belt travels through a long drying chamber, which is often divided into multiple temperature zones. Hot air is blown either up or down through the product bed to remove moisture. The dry product is discharged at the other end.",
    construction: "A long, insulated tunnel containing one or more conveyor belts. It includes air heaters, powerful fans, and systems for controlling belt speed and air temperature in different zones.",
    precautions: "The depth of the product bed and the belt speed must be controlled to ensure uniform drying. The product must be strong enough to not be broken or blown away by the airflow. Cleaning can be difficult due to the large size."
  },
  {
    id: 'spin_flash_dryer_1',
    name: 'Spin Flash Dryer SFD-100',
    type: 'Drying',
    params: {
      inlet_temp: { name: 'Inlet Temp', min: 180, max: 300, unit: '°C' },
      rotor_speed: { name: 'Rotor Speed', min: 100, max: 400, unit: 'RPM' },
      feed_rate: { name: 'Feed Rate', min: 50, max: 200, unit: 'kg/hr' },
    },
    use: "Continuous drying of wet pastes, filter cakes, and high-viscosity slurries that are difficult to handle in other dryers.",
    principle: "Combines mechanical disintegration with convective drying in a single unit. It dries the material in a matter of seconds.",
    mechanism: "Wet feed is introduced into the bottom of a vertical drying chamber. A high-speed rotor at the bottom disintegrates the feed into fine particles while a hot gas stream enters tangentially, creating a swirling, turbulent flow. The particles are dried as they are pneumatically conveyed upwards. A classifier at the top allows only dry, fine particles to exit, while larger, wet particles are returned to the rotor for further drying and disintegration.",
    construction: "A vertical drying chamber with a variable-speed rotor at the base. It is connected to a hot gas generator and a powder collection system (cyclone and/or bag filter).",
    precautions: "The feed must be pumpable or conveyable. The high temperatures and fine particles can create an explosion risk with certain products. The particle size of the final product is controlled by the rotor and classifier speed."
  },
  {
    id: 'rotovap_1',
    name: 'Rotary Evaporator (Rotovap) RE-20L',
    type: 'Drying',
    params: {
      bath_temp: { name: 'Bath Temp', min: 40, max: 80, unit: '°C' },
      vacuum_pressure: { name: 'Vacuum', min: 20, max: 200, unit: 'mbar' },
      rotation_speed: { name: 'Rotation', min: 50, max: 150, unit: 'RPM' },
    },
    use: "Gentle removal of solvents from a solution by evaporation. A common tool in chemical and pharmaceutical research labs for sample concentration or solvent stripping.",
    principle: "Combines vacuum to lower the solvent's boiling point with rotation to increase the surface area and promote even heat distribution.",
    mechanism: "A round-bottom flask containing the solution is attached to a rotating motor and lowered into a heated water or oil bath. The system is placed under vacuum. The rotation creates a thin film of the solution on the inner wall of the flask, which promotes rapid and gentle evaporation. The solvent vapor travels to a condenser, where it is cooled and collected in a receiving flask.",
    construction: "Comprised of a motor to rotate the flask, a vacuum system, a heated fluid bath, and a condenser with a collection flask.",
    precautions: "Do not fill the evaporating flask more than halfway. Ensure the glass components are free of cracks, especially when operating under vacuum. Bumping (violent boiling) can occur if the pressure is lowered too quickly."
  },
  // =================================================================
  // Filtration
  // =================================================================
  {
    id: 'filter_press_1',
    name: 'Plate and Frame Filter Press FP-500',
    type: 'Filtration',
    params: {
      feed_pressure: { name: 'Feed Pressure', min: 4, max: 7, unit: 'bar' },
      flow_rate: { name: 'Flow Rate', min: 10, max: 50, unit: 'm³/hr' },
      solids_content: { name: 'Solids Content', min: 20, max: 40, unit: '%' },
    },
    use: "Batch filtration of slurries with a high solids content. Used for solid-liquid separation in chemical processing and wastewater treatment.",
    principle: "Pressure filtration. The slurry is pumped under pressure into a series of chambers formed by filter plates. The liquid (filtrate) passes through a filter cloth, while the solids (cake) are retained.",
    mechanism: "A stack of plates, each covered with a filter cloth, is pressed together by a hydraulic ram. The slurry is pumped into the spaces between the plates. As the chambers fill with solids, the filtration pressure increases. Once the cycle is complete, the press is opened, and the solid filter cakes are discharged.",
    construction: "A heavy-duty frame with a fixed head and a moving head, a stack of filter plates, and a hydraulic closing system.",
    precautions: "This is a labor-intensive, batch operation. The filter cloths must be selected carefully based on the slurry characteristics and must be inspected regularly for tears."
  },
  {
    id: 'cartridge_filter_1',
    name: 'Cartridge Filter Housing (Multi-cartridge)',
    type: 'Filtration',
    params: {
      inlet_pressure: { name: 'Inlet Pressure', min: 1, max: 3, unit: 'bar' },
      differential_pressure: { name: 'Differential Pressure', min: 0.1, max: 1.2, unit: 'bar' },
      flow_rate: { name: 'Flow Rate', min: 5, max: 20, unit: 'm³/hr' },
    },
    use: "Clarification and polishing of liquids. Often used as a pre-filter before a more critical filtration step or as a final 'guard' filter.",
    principle: "Depth and/or surface filtration. Liquid flows through a disposable filter cartridge, which traps suspended particles.",
    mechanism: "Liquid is pumped into a stainless steel housing containing one or more filter cartridges. The liquid flows from the outside of the cartridge to the inside, leaving particles trapped in the filter media. The clean liquid exits from the top of the housing.",
    construction: "A stainless steel or plastic housing designed to hold cylindrical filter cartridges. It has an inlet, an outlet, and a vent. The cartridges are disposable.",
    precautions: "The differential pressure across the filter must be monitored. A sharp increase indicates the cartridge is clogged and needs to be replaced. Ensure the cartridge material is compatible with the fluid being filtered."
  },
  {
    id: 'bag_filter_1',
    name: 'Bag Filter Housing BFH-SS-2',
    type: 'Filtration',
    params: {
      differential_pressure: { name: 'Differential Pressure', min: 0.1, max: 1.0, unit: 'bar' },
      flow_rate: { name: 'Flow Rate', min: 20, max: 80, unit: 'm³/hr' },
      temperature: { name: 'Temperature', min: 20, max: 90, unit: '°C' },
    },
    use: "General purpose, high-flow-rate filtration for removing coarse to medium-sized particles from liquids. Common in water treatment and chemical processing.",
    principle: "A disposable fabric bag is used as the filter medium. It offers a low-cost solution for applications where high filtration efficiency is not required.",
    mechanism: "Liquid flows from the inlet into the top of the filter bag. It passes from the inside of the bag to the outside, and the solid particles are trapped inside the bag. The clean liquid exits the housing.",
    construction: "A vessel, typically made of stainless steel, with a removable lid and an internal basket to support the filter bag.",
    precautions: "Filter bags have a nominal rating, not an absolute one, meaning they will not remove 100% of particles at the rated size. Replacing the bag can be messy. Ensure the bag is properly seated to prevent bypass."
  },
  {
    id: 'sparkler_filter_1',
    name: 'Sparkler Filter SF-18D-6',
    type: 'Filtration',
    params: {
      pressure: { name: 'Pressure', min: 2, max: 5, unit: 'bar' },
      flow_rate: { name: 'Flow Rate', min: 2, max: 10, unit: 'm³/hr' },
    },
    use: "Polishing filtration in the pharmaceutical and beverage industries, especially for removing fine particles and activated carbon after a treatment step.",
    principle: "Pressure filtration through a stack of horizontal filter plates. The design ensures that even if the filtration is stopped, the filter cake remains in place and does not fall off the plates.",
    mechanism: "The filter consists of a stack of circular plates with filter paper or cloth stretched over them. The unfiltered liquid is pumped into the filter shell and flows through holes in the plates, then outwards through the filter media. The filtrate is collected, and the solids build up as a cake on top of the plates.",
    construction: "A stainless steel tank containing a cartridge of horizontal filter plates. The entire assembly can be moved on wheels.",
    precautions: "Assembling the plate stack with the filter media can be time-consuming. The system must be properly vented to remove air before starting filtration."
  },
  {
    id: 'lenticular_filter_1',
    name: 'Lenticular Filter Housing LFH-16',
    type: 'Filtration',
    params: {
      differential_pressure: { name: 'Differential Pressure', min: 0.2, max: 1.5, unit: 'bar' },
      flow_rate: { name: 'Flow Rate', min: 5, max: 15, unit: 'm³/hr' },
    },
    use: "Clarification and polishing filtration in biotech and pharmaceutical applications, offering a contained, easy-to-use alternative to traditional depth filters.",
    principle: "Depth filtration using modules composed of stacked, disc-shaped filter cells. This provides a large filter area in a compact footprint.",
    mechanism: "The liquid flows into the housing and is distributed to the lenticular modules. It flows through the depth filter media in the modules, and the clarified liquid is collected. The system is fully enclosed, reducing drips and operator exposure.",
    construction: "A stainless steel housing that holds one or more vertical stacks of lenticular modules. The modules themselves are disposable.",
    precautions: "Monitor the differential pressure to know when to change the modules. Ensure the modules are wetted properly before use to expel air. This system is excellent for single-use applications."
  },
  {
    id: 'self_cleaning_strainer_1',
    name: 'Self-Cleaning Strainer SCS-AUTO-4IN',
    type: 'Filtration',
    params: {
      differential_pressure: { name: 'Differential Pressure', min: 0.3, max: 0.8, unit: 'bar' },
      backwash_cycles: { name: 'Backwash Cycles', min: 0, max: 10, unit: '/hr' },
    },
    use: "Continuous, automated straining of liquids to remove debris in applications like cooling tower water intake or pre-filtration for other processes.",
    principle: "Uninterrupted filtration with an automatic cleaning cycle. The filter cleans itself without needing to be shut down or manually disassembled.",
    mechanism: "Liquid flows through a wedge wire or perforated screen element, trapping debris on the inside. When the differential pressure across the screen reaches a set point, a cleaning cycle (backwash) is triggered. A valve opens, and a portion of the clean fluid flows backwards through the screen, flushing the trapped debris out through a drain.",
    construction: "A housing containing a strainer element and an automated backwash system controlled by a differential pressure switch and a timer.",
    precautions: "The backwash cycle uses some of the processed fluid, which must be accounted for. The system requires a minimum operating pressure to be effective. The screen material must be compatible with the fluid."
  },
  {
    id: 'nutsche_filter_1',
    name: 'Nutsche Filter NF-LAB-20L',
    type: 'Filtration',
    params: {
      pressure: { name: 'Pressure', min: 0, max: 2, unit: 'bar' },
      vacuum: { name: 'Vacuum', min: -0.9, max: 0, unit: 'bar' },
    },
    use: "Simple batch filtration of slurries in a lab or pilot plant. Often used for isolating crystalline products from a mother liquor.",
    principle: "A batch filter that can operate under vacuum or pressure to drive the liquid through a filter medium, leaving the solid cake behind.",
    mechanism: "The filter is a simple vessel with a perforated plate and filter cloth at the bottom. The slurry is loaded into the vessel. A vacuum is applied to the outlet below the filter cloth, or pressure is applied to the headspace above the slurry, to force the filtrate through. The cake can then be washed and partially dried in the same vessel.",
    construction: "Can be made of glass, stainless steel, or exotic alloys. It is a simple, open or closed vessel with a filter support at the bottom.",
    precautions: "The filter cake can crack during drying, leading to inefficient washing or drying. Manually digging out the cake can be labor-intensive and expose the operator to the product."
  },
  {
    id: 'microfiltration_skid_1',
    name: 'Microfiltration Skid MF-CERAMIC-10',
    type: 'Filtration',
    params: {
      transmembrane_pressure: { name: 'TMP', min: 0.5, max: 2.0, unit: 'bar' },
      permeate_flux: { name: 'Permeate Flux', min: 50, max: 200, unit: 'LMH' },
    },
    use: "Clarification, sterilization, and separation of fine particles and microorganisms (bacteria) from process streams. Often used for cell harvesting or clarifying broths.",
    principle: "Membrane filtration with a pore size typically between 0.1 and 10 micrometers. It separates based on size, allowing dissolved solutes to pass through while retaining suspended solids and bacteria.",
    mechanism: "Usually operated in a tangential flow (cross-flow) mode. The feed stream is pumped across the membrane surface. The liquid that passes through is the permeate, and the concentrated stream that is retained is the retentate. The cross-flow helps to keep the membrane surface clean.",
    construction: "A skid with a pump, pressure and flow sensors, and a housing for the membrane elements (which can be hollow fiber, tubular, or flat sheet, often made of robust materials like ceramics).",
    precautions: "Membrane fouling is the primary operational issue and requires periodic cleaning (backpulsing, chemical cleaning). Pre-filtration is often needed to protect the membrane from large particles."
  },
  {
    id: 'ultrafiltration_skid_1',
    name: 'Ultrafiltration Skid UF-PES-50',
    type: 'Filtration',
    params: {
      transmembrane_pressure: { name: 'TMP', min: 1.0, max: 3.0, unit: 'bar' },
      permeate_flux: { name: 'Permeate Flux', min: 20, max: 100, unit: 'LMH' },
    },
    use: "Concentrating and purifying macromolecules like proteins, antibodies, and enzymes. It separates large molecules from small ones (salts, buffers).",
    principle: "Membrane filtration that separates based on molecular weight. The membrane pore size is much smaller than in microfiltration, typically rated by its Molecular Weight Cut-Off (MWCO), e.g., 10 kDa.",
    mechanism: "Operated in tangential flow mode. The feed solution is pumped across the membrane. Water and small solutes pass through as permeate, while the larger target molecules are retained and concentrated in the retentate stream.",
    construction: "A TFF system with a pump, tank, and membrane holder, specifically using an ultrafiltration membrane (often made of polymers like PES or PVDF).",
    precautions: "The choice of MWCO is critical: it must be small enough to retain the target molecule but large enough to allow for a good flux rate. Concentration polarization (buildup of retained molecules on the membrane surface) can reduce flux and must be managed by controlling the cross-flow rate."
  },
  {
    id: 'nanofiltration_skid_1',
    name: 'Nanofiltration Skid NF-POLY-25',
    type: 'Filtration',
    params: {
      feed_pressure: { name: 'Feed Pressure', min: 5, max: 20, unit: 'bar' },
      rejection_rate: { name: 'Rejection Rate', min: 80, max: 99, unit: '%' },
    },
    use: "Removal of small organic molecules, multivalent ions (like calcium and magnesium, for water softening), and color from liquids. It is a 'looser' form of reverse osmosis.",
    principle: "A pressure-driven membrane process that falls between ultrafiltration and reverse osmosis. It allows monovalent ions (like sodium chloride) to pass but rejects most multivalent ions and larger organic molecules.",
    mechanism: "High pressure is used to force the feed water across a semi-permeable nanofiltration membrane. The separation is based on a combination of size exclusion and charge effects.",
    construction: "Similar to a reverse osmosis system, with high-pressure pumps and spiral-wound membrane elements in pressure vessels.",
    precautions: "Requires higher operating pressures than UF but lower than RO. The membrane is susceptible to fouling by scale or organics and may require pre-treatment of the feed water."
  },
  {
    id: 'reverse_osmosis_skid_1',
    name: 'Reverse Osmosis (RO) Skid RO-PLANT-5K',
    type: 'Filtration',
    params: {
      feed_pressure: { name: 'Feed Pressure', min: 10, max: 15, unit: 'bar' },
      permeate_conductivity: { name: 'Permeate Cond.', min: 1, max: 20, unit: 'µS/cm' },
      recovery_rate: { name: 'Recovery Rate', min: 60, max: 75, unit: '%' },
    },
    use: "Production of highly purified water (Purified Water, USP) by removing dissolved salts, organics, and other impurities from feed water. Also used for desalination.",
    principle: "A process that reverses osmosis. High pressure is applied to the feed water, forcing it through a semi-permeable membrane that rejects almost all dissolved contaminants. Pure water passes through, leaving a concentrated reject stream (brine).",
    mechanism: "A high-pressure pump continuously feeds water into pressure vessels containing spiral-wound membrane elements. The applied pressure must exceed the natural osmotic pressure of the feed water. Pure water (permeate) is collected, and the concentrate is drained.",
    construction: "A skid including pre-filters, a high-pressure pump, pressure vessels with membrane elements, and instruments to monitor pressure, flow, and conductivity.",
    precautions: "The feed water must be pre-treated to remove chlorine (which damages membranes) and scale-forming minerals. The recovery rate (ratio of permeate to feed) must be controlled to prevent excessive concentration and fouling on the membrane surface."
  },
  {
    id: 'dead_end_filter_1',
    name: 'Dead-End Filter Holder DEF-142MM',
    type: 'Filtration',
    params: {
      pressure: { name: 'Pressure', min: 1, max: 4, unit: 'bar' },
    },
    use: "Lab-scale filtration, filterability studies, and small-volume sterile filtration. It is a simple, direct flow filtration setup.",
    principle: "Direct Flow Filtration (DFF) or Normal Flow Filtration (NFF). The entire fluid stream is directed perpendicularly through the filter membrane. All particles larger than the pore size are trapped on or in the filter.",
    mechanism: "A flat sheet membrane is placed in a filter holder. The liquid to be filtered is placed in a pressure vessel above the holder (or pulled by vacuum from below). Pressure (or vacuum) forces the liquid through the filter. The filter eventually clogs and must be replaced.",
    construction: "A stainless steel or plastic holder that clamps a flat disc of filter membrane. It connects to a pressure source and a collection vessel.",
    precautions: "This method is only suitable for solutions with a very low concentration of suspended solids, as the filter clogs quickly. It is not economical for large volumes."
  },
  // =================================================================
  // Size Reduction
  // =================================================================
  {
    id: 'hammer_mill_1',
    name: 'Hammer Mill HM-25HP',
    type: 'Size Reduction',
    params: {
      motor_speed: { name: 'Motor Speed', min: 1800, max: 3600, unit: 'RPM' },
      motor_load: { name: 'Motor Load', min: 40, max: 90, unit: '%' },
      screen_size: { name: 'Screen Size', min: 1, max: 10, unit: 'mm' },
    },
    use: "Coarse to medium size reduction of a wide variety of materials. Used for milling dried granules before blending and compression.",
    principle: "Size reduction by impact. The material is struck by hammers swinging at high speed inside a milling chamber.",
    mechanism: "Material is fed into the chamber where it is repeatedly struck by rotating hammers. The impact shatters the material. A perforated screen at the bottom of the chamber retains coarse material for further milling while allowing particles of the desired size to pass through.",
    construction: "A steel chamber housing a horizontal or vertical rotating shaft with multiple swinging hammers. The bottom of the chamber is a screen that controls the output particle size.",
    precautions: "The process generates heat, which can be an issue for temperature-sensitive materials. It can also generate a lot of dust. Not suitable for very hard or abrasive materials, which cause high wear on the hammers and screen."
  },
  {
    id: 'ball_mill_1',
    name: 'Ball Mill BM-500L',
    type: 'Size Reduction',
    params: {
      rotation_speed: { name: 'Rotation Speed', min: 20, max: 40, unit: 'RPM' },
      motor_current: { name: 'Motor Current', min: 20, max: 50, unit: 'A' },
      temperature: { name: 'Temperature', min: 30, max: 60, unit: '°C' },
    },
    use: "Fine grinding of hard, crystalline materials into a fine powder. Can be operated wet or dry.",
    principle: "Size reduction by impact and attrition. The material is ground by the tumbling action of grinding media (e.g., steel or ceramic balls) inside a rotating cylinder.",
    mechanism: "The horizontal cylinder is partially filled with the grinding media and the material to be ground. As the cylinder rotates, the media is lifted up the side and then tumbles back down, striking the material and crushing it. The cascading motion also causes attrition between the balls and the material.",
    construction: "A hollow cylindrical shell that rotates on a horizontal axis, partially filled with grinding media. Often lined with an abrasion-resistant material.",
    precautions: "The rotation speed is critical. Too slow, and the media just slides; too fast, and it centrifuges, sticking to the wall. Both are ineffective. The process can be very slow and energy-intensive."
  },
  {
    id: 'colloid_mill_1',
    name: 'Colloid Mill CM-10HP',
    type: 'Size Reduction',
    params: {
      rotor_speed: { name: 'Rotor Speed', min: 3000, max: 10000, unit: 'RPM' },
      gap_setting: { name: 'Gap Setting', min: 0.1, max: 0.5, unit: 'mm' },
      motor_load: { name: 'Motor Load', min: 30, max: 80, unit: '%' },
    },
    use: "Producing stable suspensions, emulsions, and dispersions. It reduces the size of droplets or solid particles in a liquid phase.",
    principle: "High-shear wet milling. The material is subjected to intense hydraulic shear forces as it passes through a narrow, adjustable gap between a high-speed rotor and a stationary stator.",
    mechanism: "The liquid pre-mix is fed into the mill. The high-speed rotor creates a powerful suction, drawing the material into the gap between the rotor and stator. The intense shear forces in this gap break down the particles or droplets.",
    construction: "A conical or flat rotor that spins at high speed very close to a corresponding stator. The gap between them can be precisely adjusted.",
    precautions: "The process generates a lot of heat, often requiring a cooling jacket. It is only for wet applications. Abrasive solids can cause rapid wear of the rotor and stator."
  },
  {
    id: 'jet_mill_1',
    name: 'Jet Mill JM-MICRON-2',
    type: 'Size Reduction',
    params: {
      grinding_pressure: { name: 'Grinding Pressure', min: 5, max: 8, unit: 'bar' },
      feed_rate: { name: 'Feed Rate', min: 1, max: 10, unit: 'kg/hr' },
    },
    use: "Ultra-fine grinding (micronization) of powders. Used for producing active pharmaceutical ingredients (APIs) for inhalation or low-solubility drugs where a high surface area is needed.",
    principle: "Size reduction by inter-particle collision. There are no moving parts or grinding media. The particles grind themselves.",
    mechanism: "High-pressure compressed air or gas is injected through nozzles into a grinding chamber, creating a high-velocity, turbulent vortex. The raw material powder is fed into this vortex. The extreme turbulence causes the particles to collide with each other at high speed, causing them to fracture. An integrated classifier allows only the finest particles to exit the mill.",
    construction: "A flat, cylindrical or oval-shaped grinding chamber with precisely engineered nozzles around the periphery and a classification system.",
    precautions: "Consumes a large amount of compressed gas, making it energy-intensive. Not suitable for sticky or soft materials. The final particle size is controlled by the gas pressure and feed rate."
  },
  {
    id: 'cone_mill_1',
    name: 'Cone Mill CM-300',
    type: 'Size Reduction',
    params: {
      impeller_speed: { name: 'Impeller Speed', min: 300, max: 1500, unit: 'RPM' },
      motor_load: { name: 'Motor Load', min: 20, max: 70, unit: '%' },
    },
    use: "Gentle, low-energy sizing and de-agglomeration of powders and granules. Used for sizing wet granules before drying or dry granules before tableting.",
    principle: "Size reduction by attrition and compression. Material is sized as it is forced through the holes of a conical screen by a rotating impeller.",
    mechanism: "Material is fed into the top of the mill. A rotating impeller pushes the material against the inner surface of a cone-shaped screen. The particles are gently ground and de-agglomerated as they are forced through the screen's perforations. The size of the output is determined by the screen hole size and impeller speed.",
    construction: "A vertical milling head consisting of a conical screen and a rotating impeller inside it. The speed of the impeller is variable.",
    precautions: "Generates very little heat, making it ideal for temperature-sensitive products. It produces a narrow particle size distribution with few fines. The screen can be damaged by foreign objects like tramp metal."
  },
  {
    id: 'jaw_crusher_1',
    name: 'Jaw Crusher JC-LAB',
    type: 'Size Reduction',
    params: {
      jaw_speed: { name: 'Jaw Speed', min: 250, max: 400, unit: 'RPM' },
      motor_current: { name: 'Motor Current', min: 10, max: 30, unit: 'A' },
    },
    use: "Primary, coarse crushing of large, hard materials like rocks, ores, and crude chemicals in a laboratory or pilot setting.",
    principle: "Size reduction by compression. The material is crushed between a fixed jaw and a moving jaw.",
    mechanism: "Material is fed into the top of a V-shaped crushing chamber. One jaw is stationary, while the other is mounted on a pivot and driven by an eccentric shaft, causing it to move back and forth. This motion compresses and breaks the material. The crushed material discharges from the bottom opening.",
    construction: "A heavy, robust steel frame with two jaw plates made of hardened steel. One is fixed, and the other is moved by a powerful motor and flywheel assembly.",
    precautions: "This is a heavy-duty piece of equipment that can create a lot of noise and dust. Safety guards must be in place. Do not attempt to crush materials that are not brittle."
  },
  {
    id: 'pin_mill_1',
    name: 'Pin Mill PM-15HP',
    type: 'Size Reduction',
    params: {
      rotor_speed: { name: 'Rotor Speed', min: 4000, max: 12000, unit: 'RPM' },
      motor_load: { name: 'Motor Load', min: 30, max: 85, unit: '%' },
    },
    use: "Fine grinding of soft to medium-hard materials. Can handle slightly oily or fatty materials better than a hammer mill.",
    principle: "Size reduction by impact. The material is impacted by rows of intermeshing pins.",
    mechanism: "The mill consists of two discs with concentric rows of pins. One disc is stationary, and the other rotates at high speed. Material is fed into the center and is accelerated outwards by centrifugal force. As it travels, it is repeatedly struck by the pins, causing it to shatter. The final particle size is controlled by the rotor speed.",
    construction: "A housing containing a stationary disc (stator) and a rotating disc (rotor), both fitted with impact pins.",
    precautions: "High speed generates heat, so cooling may be necessary. The pins are subject to wear and must be inspected regularly. Not suitable for very hard or abrasive materials."
  },
  {
    id: 'fitzmill_1',
    name: 'FitzMill Comminutor F-10',
    type: 'Size Reduction',
    params: {
      blade_speed: { name: 'Blade Speed', min: 1000, max: 4000, unit: 'RPM' },
      motor_load: { name: 'Motor Load', min: 25, max: 75, unit: '%' },
    },
    use: "A versatile mill used for size reduction, granulation, dispersion, and pulverizing of a wide range of materials in the pharmaceutical and food industries.",
    principle: "Size reduction by impact, attrition, and cutting. It is a type of hammer mill but with fixed blades instead of swinging hammers.",
    mechanism: "Material is fed into a chamber where a rotor with fixed blades rotates at high speed. The blades impact the material, throwing it against a surrounding screen. Particles are ground between the blades and the screen until they are small enough to pass through the screen's openings. One side of the blades can be blunt (for impact) and the other sharp (for cutting), making it versatile.",
    construction: "A product chamber with a rotor assembly and a surrounding perforated screen. The rotor speed and screen size can be changed to control the final particle size.",
    precautions: "The choice of blade type (sharp vs. blunt), rotor speed, and screen size are all critical parameters that must be optimized for a specific application. Generates dust and heat."
  },
  {
    id: 'cutting_mill_1',
    name: 'Cutting Mill (Granulator) CMG-20',
    type: 'Size Reduction',
    params: {
      rotor_speed: { name: 'Rotor Speed', min: 400, max: 800, unit: 'RPM' },
      motor_current: { name: 'Motor Current', min: 15, max: 40, unit: 'A' },
    },
    use: "Grinding of soft, fibrous, elastic, or tough materials that cannot be effectively milled by impact mills. Used in plastics recycling and processing of plant materials.",
    principle: "Size reduction by cutting and shearing forces, similar to a pair of scissors.",
    mechanism: "A set of rotating knives on a rotor pass in close proximity to a set of stationary knives mounted on the chamber wall. Material fed into the chamber is repeatedly cut by this scissor-like action until it is small enough to pass through a screen at the bottom.",
    construction: "A heavy-duty chamber with a central rotor fitted with cutting blades and stationary blades mounted on the housing. A screen below the rotor determines the final particle size.",
    precautions: "The clearance between the rotating and stationary knives is critical and must be carefully set. The knives will become dull with use and need to be sharpened or replaced. Not suitable for hard, brittle materials."
  },
  {
    id: 'multi_mill_1',
    name: 'Multi-Mill MM-LAB-5',
    type: 'Size Reduction',
    params: {
      rotor_speed: { name: 'Rotor Speed', min: 500, max: 3000, unit: 'RPM' },
    },
    use: "High-speed granulation, pulverizing, mixing, and size reduction of a wide variety of wet and dry materials. Often used for wet milling before drying.",
    principle: "Size reduction by variable force. The swinging beaters have a knife edge and an impact edge, and the direction of rotation can be changed to use the desired edge.",
    mechanism: "Material is fed into a chamber where a rotor with swinging beaters rotates at high speed. The material is beaten and ground against a perforated screen. The particle size is controlled by the screen size, the rotor speed, and which edge of the beaters is used.",
    construction: "A self-contained unit with a feed hopper, a processing chamber with a rotor and screen, and a discharge chute. It is often portable.",
    precautions: "The choice of screen, speed, and beater edge is important for achieving the desired result. The screen can become blocked if milling sticky materials."
  },
  {
    id: 'air_classifying_mill_1',
    name: 'Air Classifying Mill ACM-10',
    type: 'Size Reduction',
    params: {
      mill_speed: { name: 'Mill Speed', min: 3000, max: 8000, unit: 'RPM' },
      classifier_speed: { name: 'Classifier Speed', min: 1000, max: 5000, unit: 'RPM' },
    },
    use: "Simultaneous fine grinding and classification in a single unit, providing precise control over the final particle size distribution and a sharp top-size cut-off.",
    principle: "Combines an impact mill with a dynamic air classifier. The classifier acts as a screen, but one that can be adjusted electronically during operation.",
    mechanism: "Material is fed into an impact grinding zone. A stream of air carries the ground particles up to an integrated classifier wheel, which is spinning at high speed. The classifier rejects oversized particles, sending them back to the grinding zone for further reduction, while allowing particles that meet the size requirement to exit with the air stream.",
    construction: "A vertical mill with a grinding rotor at the bottom and a variable-speed classifier wheel at the top, all within a single housing.",
    precautions: "A complex and expensive piece of equipment. It offers excellent control over the particle size distribution. The system operates with a large volume of air, which must be filtered and handled by a dust collection system."
  },
  {
    id: 'mortar_grinder_1',
    name: 'Mortar Grinder MG-RMLAB',
    type: 'Size Reduction',
    params: {
      speed: { name: 'Speed', min: 50, max: 100, unit: 'RPM' },
      pressure: { name: 'Pressure Setting', min: 1, max: 9, unit: '' },
    },
    use: "Reproducible, loss-free grinding, mixing, and homogenizing of powders, suspensions, and pastes in a laboratory setting. Mimics the action of a manual mortar and pestle.",
    principle: "Size reduction by pressure and friction.",
    mechanism: "A rotating mortar contains the sample. An off-center pestle is pressed down into the mortar. The rotation of the mortar carries the sample into the gap between the mortar wall and the pestle, where it is crushed and ground. A scraper constantly guides the material back into the grinding zone.",
    construction: "A unit that holds and rotates a grinding bowl (mortar) made of materials like agate, zirconia, or steel. A pestle is mounted on an arm that allows its pressure to be adjusted.",
    precautions: "The choice of grinding material (mortar and pestle) is important to avoid contaminating the sample. Do not overfill the mortar. The pressure setting determines the final fineness."
  },
  // =================================================================
  // Size Separation
  // =================================================================
  {
    id: 'vibratory_sifter_1',
    name: 'Vibratory Sifter (Vibro Sieve) VS-48',
    type: 'Size Separation',
    params: {
      vibration_frequency: { name: 'Vibration Freq', min: 1400, max: 1800, unit: 'RPM' },
      motor_amplitude: { name: 'Amplitude', min: 2, max: 5, unit: 'mm' },
      throughput: { name: 'Throughput', min: 100, max: 500, unit: 'kg/hr' },
    },
    use: "Separating solids by particle size, scalping (removing oversized particles), or de-dusting powders and granules. A very common piece of equipment in solid dosage manufacturing.",
    principle: "Uses a multi-plane, vibratory motion to pass particles through one or more screens of a specific mesh size.",
    mechanism: "The sifter consists of a stack of screens mounted on springs. An off-balance motor creates a three-dimensional vibratory motion. This motion simultaneously lifts the material off the screen and forces it across the screen surface. Finer particles pass through the screen openings, while oversized particles are carried to the edge and discharged.",
    construction: "A circular screen assembly mounted on a base with a specially designed vibratory motor. Can be configured with single or multiple decks for separating into several fractions at once.",
    precautions: "Screen tension is critical for efficient sieving and long screen life. The screen must be inspected regularly for holes or tears (blinding). The feed rate should be controlled to avoid overloading the screen."
  },
  {
    id: 'centrifugal_sifter_1',
    name: 'Centrifugal Sifter CS-300',
    type: 'Size Separation',
    params: {
      rotation_speed: { name: 'Rotation Speed', min: 600, max: 1200, unit: 'RPM' },
      motor_load: { name: 'Motor Load', min: 20, max: 60, unit: '%' },
    },
    use: "High-capacity, non-vibratory sifting and scalping of powders. Good for de-agglomerating and aerating materials.",
    principle: "Uses centrifugal force to pass particles through a stationary cylindrical screen.",
    mechanism: "Material is fed into the center of a horizontal cylindrical screen. Rotating paddles or brushes accelerate the material and throw it against the screen by centrifugal force. Fine particles pass through the screen, while oversized particles and agglomerates are moved along the screen to a separate discharge point.",
    construction: "A stationary cylindrical screen, a central rotating shaft with paddles, and a housing with separate outlets for fine and oversized material.",
    precautions: "The action can be more aggressive than a vibratory sifter, which might break down fragile granules. The clearance between the paddles and the screen is adjustable. The screen is prone to damage if foreign objects enter the sifter."
  },
  {
    id: 'gyratory_sifter_1',
    name: 'Gyratory Sifter GS-60',
    type: 'Size Separation',
    params: {
      speed: { name: 'Speed', min: 200, max: 300, unit: 'RPM' },
    },
    use: "High-capacity, high-efficiency screening of dry materials, especially for separations requiring a high degree of accuracy.",
    principle: "A gentle gyratory motion at the feed end, which gradually transitions to a vertical elliptical motion and then a straight-line motion at the discharge end. This optimizes the screening for different particle behaviors.",
    mechanism: "The machine uses a near-horizontal screen deck with a gyratory motion. This causes the particles to spread out and stratify, with finer particles sinking to the bottom. The motion efficiently conveys the material across the screen surface, giving each particle multiple opportunities to pass through an opening.",
    construction: "A large, rectangular screening box that is driven by a gyratory mechanism. Often has multiple screen decks and features a system of bouncing balls under the screen to prevent blinding.",
    precautions: "These are large machines that require significant floor space. The gentle action is good for fragile materials. Screen tensioning is important."
  },
  {
    id: 'air_jet_sieve_1',
    name: 'Air Jet Sieve AJS-LAB-200',
    type: 'Size Separation',
    params: {
      pressure: { name: 'Pressure', min: 10, max: 20, unit: 'inH₂O' },
      sieve_time: { name: 'Sieve Time', min: 1, max: 5, unit: 'min' },
    },
    use: "Laboratory analysis of the particle size distribution of fine, dry powders. It is particularly effective for powders that tend to agglomerate.",
    principle: "Uses a jet of air to fluidize the powder on a test sieve and a vacuum to pull the fine particles through the sieve openings.",
    mechanism: "A small sample of powder is placed on a single test sieve. A rotating nozzle underneath the sieve blows a jet of air upwards, dispersing the particles and preventing the sieve from blinding. A vacuum is applied below the sieve, which draws the air and the fine particles through the mesh. The oversized particles remaining on the sieve are then weighed.",
    construction: "A compact laboratory instrument with a holder for a standard test sieve, a rotating air nozzle, and connections for a vacuum cleaner.",
    precautions: "Only a small sample can be analyzed at a time. The air pressure and sieving time must be carefully controlled for reproducible results. It is an analytical instrument, not a production machine."
  },
  {
    id: 'tumbling_screener_1',
    name: 'Tumbling Screener TS-2000',
    type: 'Size Separation',
    params: {
      speed: { name: 'Speed', min: 150, max: 250, unit: 'RPM' },
      inclination: { name: 'Inclination', min: 3, max: 7, unit: '°' },
    },
    use: "Gentle but very accurate screening and classification of fine and lightweight powders. Mimics the action of hand sieving.",
    principle: "A three-dimensional tumbling motion that moves the material across the screen in a spiral pattern from the center outwards.",
    mechanism: "The entire screen assembly moves in a tumbling, circular motion in the horizontal plane. This gentle motion ensures that the product is always in contact with the screen without being damaged. The residence time on the screen is long, leading to very high separation efficiency.",
    construction: "A circular screener with one or more decks. The drive mechanism is designed to produce the specific tumbling motion. Often includes anti-blinding devices like bouncing balls or brushes.",
    precautions: "The gentle action is ideal for fragile or spherical particles. It provides very accurate separations. The capacity is generally lower than a vibratory sifter of the same size."
  },
  {
    id: 'linear_screen_1',
    name: 'Linear Screen LS-100',
    type: 'Size Separation',
    params: {
      vibration_frequency: { name: 'Frequency', min: 900, max: 1200, unit: 'RPM' },
      stroke: { name: 'Stroke', min: 5, max: 10, unit: 'mm' },
    },
    use: "High-capacity screening, dewatering, and conveying of a wide range of materials, especially in the mining and aggregate industries.",
    principle: "Uses a linear, vibrating motion to convey material along a screen deck.",
    mechanism: "Two counter-rotating vibratory motors are mounted on the screen box. Their combined forces produce a linear motion at an angle to the screen deck. This motion lifts the material up and forward, conveying it along the screen while also stratifying it and allowing fine particles to pass through.",
    construction: "A robust, rectangular screen box mounted on springs, with one or more screen decks. The drive is provided by two vibratory motors.",
    precautions: "These are aggressive, high-capacity machines. The angle of the linear motion can be adjusted to change the conveying speed. They are well-suited for heavy-duty applications."
  },
  {
    id: 'test_sieve_shaker_1',
    name: 'Sieving Machine (Test Sieves) SM-TEST',
    type: 'Size Separation',
    params: {
      amplitude: { name: 'Amplitude', min: 1.0, max: 3.0, unit: 'mm' },
    },
    use: "Determining the particle size distribution of dry, granular materials in a quality control laboratory.",
    principle: "Subjects a stack of standard test sieves to a consistent mechanical shaking action to separate a sample into different size fractions.",
    mechanism: "A stack of test sieves with progressively smaller mesh sizes is assembled and a weighed sample is placed in the top sieve. The stack is clamped into the shaker. The shaker then imparts a combination of vertical tapping and horizontal circular motion to the stack. After a set time, the material retained on each sieve is weighed to determine the particle size distribution.",
    construction: "A machine with a platform and clamping system to hold a stack of sieves, and a drive mechanism to produce the required shaking motion.",
    precautions: "The sieving time and amplitude must be standardized for reproducible results. The sieves must be handled carefully to avoid damaging the mesh, and they must be cleaned thoroughly between uses."
  },
  {
    id: 'decanter_centrifuge_1',
    name: 'Decanter Centrifuge DC-S-450',
    type: 'Size Separation',
    params: {
      bowl_speed: { name: 'Bowl Speed', min: 2000, max: 4000, unit: 'RPM' },
      scroll_speed: { name: 'Scroll Differential', min: 5, max: 20, unit: 'RPM' },
      vibration: { name: 'Vibration', min: 1, max: 6, unit: 'mm/s' },
    },
    use: "Continuous separation of solids from liquids in a slurry. Capable of handling high solids concentrations. Used in wastewater sludge dewatering, chemical processing, and food production.",
    principle: "Separation by centrifugal sedimentation. A screw conveyor continuously removes the settled solids.",
    mechanism: "A slurry is fed into a horizontal, rotating bowl. The high-speed rotation forces the denser solids to the bowl wall. Inside the bowl, a screw conveyor (scroll) rotates at a slightly different speed. This differential speed causes the scroll to plow the settled solids along the bowl wall to a discharge port. The clarified liquid (centrate) overflows from a separate port at the other end.",
    construction: "A rotating assembly consisting of an outer bowl and an inner scroll conveyor, driven by a complex gearbox that creates the differential speed. This is all enclosed in a heavy-duty housing.",
    precautions: "Abrasive solids can cause significant wear on the scroll. The machine must be well-balanced to prevent vibration. The differential speed is a key parameter for controlling the moisture content of the discharged solids."
  },
  {
    id: 'hydrocyclone_1',
    name: 'Hydrocyclone HC-CLUSTER-6',
    type: 'Size Separation',
    params: {
      inlet_pressure: { name: 'Inlet Pressure', min: 1, max: 3, unit: 'bar' },
      flow_rate: { name: 'Flow Rate', min: 50, max: 150, unit: 'm³/hr' },
    },
    use: "Separating solids from liquids or classifying solids by size based on density. Has no moving parts and is used for high-throughput applications like starch washing or minerals processing.",
    principle: "Separation using centrifugal force generated by the fluid's own velocity within a conical vessel.",
    mechanism: "The slurry is fed tangentially into the top of the cyclone. This creates a strong vortex. The centrifugal force throws the heavier/coarser particles to the outer wall, where they spiral down and are discharged from the bottom apex (underflow). The lighter/finer particles and most of the liquid move to an inner, upward-spiraling vortex and exit through the top (overflow).",
    construction: "A simple, cone-shaped vessel with a tangential inlet at the top, an overflow outlet at the top, and an underflow outlet at the bottom. Often lined with an abrasion-resistant material.",
    precautions: "The separation efficiency (cut point) is highly dependent on the inlet pressure and the dimensions of the cyclone. They are not effective for very fine separations. Wear at the apex is a common issue."
  },
  {
    id: 'ultrasonic_sieve_1',
    name: 'Ultrasonic Sieve US-30',
    type: 'Size Separation',
    params: {
      frequency: { name: 'Frequency', min: 30, max: 40, unit: 'kHz' },
      power: { name: 'Power', min: 50, max: 90, unit: '%' },
    },
    use: "Sieving of very fine, lightweight, or electrostatically charged powders that are difficult to screen with conventional methods. It prevents blinding of fine mesh screens.",
    principle: "Applies a high-frequency, low-amplitude vibration directly to the screen mesh, in addition to the conventional low-frequency vibration of the sifter.",
    mechanism: "A standard vibratory sifter is retrofitted with an ultrasonic de-blinding system. A transducer converts electrical energy into ultrasonic vibrations, which are transferred to the screen. This micro-vibration fluidizes the layer of powder directly on the screen surface, breaking up agglomerates and preventing particles from sticking in the openings.",
    construction: "An ultrasonic generator, a transducer, and a specially designed screen frame that acts as a resonator.",
    precautions: "The system must be properly tuned for the specific screen mesh size to be effective. The screen mesh can be damaged by improper handling or excessive power."
  },
  {
    id: 'turbo_sifter_1',
    name: 'Turbo Sifter TS-500',
    type: 'Size Separation',
    params: {
      speed: { name: 'Speed', min: 800, max: 1500, unit: 'RPM' },
      motor_load: { name: 'Motor Load', min: 30, max: 70, unit: '%' },
    },
    use: "High-throughput sifting and de-agglomeration of powders. Often used for check-sieving of raw materials or finished products.",
    principle: "A combination of centrifugal action and turbulence to screen powders.",
    mechanism: "The machine uses rotating paddles or blades inside a stationary cylindrical screen. The paddles create a turbulent airflow and accelerate the powder, throwing it against the screen. The turbulence helps to break up soft agglomerates and keep the screen clean. Fine powder passes through, while oversized material is discharged separately.",
    construction: "Similar in design to a centrifugal sifter. A horizontal or vertical unit with a central rotor and a surrounding screen.",
    precautions: "The action is more aggressive than a vibratory sifter and may cause attrition of fragile particles. It provides high capacity in a compact size."
  },
  {
    id: 'tablet_grader_1',
    name: 'Grader (for tablets) TG-100K',
    type: 'Size Separation',
    params: {
      throughput: { name: 'Throughput', min: 80, max: 120, unit: 'kTabs/hr' },
    },
    use: "Removing broken tablets, twins (stuck-together tablets), or cap/body fragments from a batch of tablets or capsules after compression or filling.",
    principle: "Mechanical separation based on size and shape.",
    mechanism: "The tablets are fed onto a vibrating, perforated plate or a series of rotating rollers with a specific gap. Good tablets travel along the surface and are discharged. Smaller pieces, broken tablets, and dust fall through the perforations or gaps and are collected separately.",
    construction: "A simple machine, often made of stainless steel, with a vibrating perforated tray or a set of rollers and a collection system for the rejects.",
    precautions: "The perforation size or roller gap must be chosen correctly for the specific tablet size. The vibration or rotation speed should be gentle enough to not damage good tablets."
  },
  // =================================================================
  // Distillation
  // =================================================================
  {
    id: 'simple_distillation_1',
    name: 'Simple Distillation Unit (Glass) SDU-GL-50L',
    type: 'Distillation',
    params: {
      reboiler_temp: { name: 'Reboiler Temp', min: 80, max: 150, unit: '°C' },
      vapor_temp: { name: 'Vapor Temp', min: 70, max: 120, unit: '°C' },
      condenser_coolant_temp: { name: 'Coolant Temp', min: 10, max: 25, unit: '°C' },
    },
    use: "Separating liquids with significantly different boiling points, or separating a volatile liquid from a non-volatile solid.",
    principle: "Separation based on differences in volatility. The more volatile component vaporizes, is then cooled and condensed back into a liquid, and collected separately.",
    mechanism: "A mixture is heated in a boiling flask (reboiler). The vapor, enriched in the more volatile component, rises and passes into a condenser. A cooling fluid (e.g., water) flowing through the condenser jacket cools the vapor, causing it to condense. The liquid distillate is then collected.",
    construction: "A setup usually made of borosilicate glass, consisting of a reboiler, a distillation head with a thermometer, a condenser, and a receiving flask.",
    precautions: "Not effective for separating liquids with close boiling points. The flask should not be heated to dryness. Ensure cooling water is flowing through the condenser before starting to heat."
  },
  {
    id: 'fractional_distillation_1',
    name: 'Fractional Distillation Column FDC-SS-1000L',
    type: 'Distillation',
    params: {
      reboiler_temp: { name: 'Reboiler Temp', min: 100, max: 200, unit: '°C' },
      top_temp: { name: 'Top Temp', min: 80, max: 120, unit: '°C' },
      pressure: { name: 'Pressure', min: 1.0, max: 1.5, unit: 'bar' },
      reflux_ratio: { name: 'Reflux Ratio', min: 1, max: 5, unit: '' },
    },
    use: "Separating a mixture of liquids with close boiling points, such as separating different fractions of crude oil or purifying solvents.",
    principle: "Achieves a much better separation than simple distillation by providing a series of vaporization-condensation cycles within a single column.",
    mechanism: "A fractionating column is placed between the reboiler and the condenser. The column is filled with packing or contains trays that provide a large surface area. As vapor rises through the column, it cools, condenses, and re-vaporizes repeatedly. With each cycle, the vapor becomes progressively more enriched in the more volatile component. The purity of the product is controlled by the reflux ratio (the ratio of condensed liquid returned to the column vs. collected as product).",
    construction: "A system with a reboiler, a tall column containing trays or packing, a condenser, and a reflux head.",
    precautions: "The column must be well-insulated to maintain the temperature gradient. The column can flood if the boil-up rate is too high. Control of the reflux ratio is critical for achieving the desired separation."
  },
  {
    id: 'vacuum_distillation_1',
    name: 'Vacuum Distillation Unit VDU-500L',
    type: 'Distillation',
    params: {
      reboiler_temp: { name: 'Reboiler Temp', min: 60, max: 120, unit: '°C' },
      vacuum_pressure: { name: 'Vacuum', min: 10, max: 100, unit: 'mbar' },
    },
    use: "Purifying compounds that are heat-sensitive or have very high boiling points. The vacuum allows them to be distilled at a much lower, safer temperature.",
    principle: "Distillation performed at a reduced pressure. Lowering the pressure above a liquid reduces its boiling point.",
    mechanism: "The distillation apparatus is connected to a vacuum pump, which lowers the pressure inside the system. This allows the liquid to boil at a temperature below its normal atmospheric boiling point, preventing thermal degradation of the product.",
    construction: "A distillation setup (simple or fractional) built with components that can withstand the external pressure (e.g., heavy-walled glass or stainless steel) and with airtight seals.",
    precautions: "All glassware must be carefully inspected for cracks, as they can implode under vacuum. The vacuum must be released slowly to prevent air from rushing in and disturbing the system. Bumping can be a problem, so a fine capillary or stirring is often used."
  },
  {
    id: 'steam_distillation_1',
    name: 'Steam Distillation Unit SDU-PLANT-2K',
    type: 'Distillation',
    params: {
      steam_pressure: { name: 'Steam Pressure', min: 2, max: 5, unit: 'bar' },
      vapor_temp: { name: 'Vapor Temp', min: 95, max: 105, unit: '°C' },
    },
    use: "Isolating temperature-sensitive materials, such as essential oils and fragrances, from plant matter. It is also used for purifying immiscible organic compounds.",
    principle: "A co-distillation process for immiscible liquids. The mixture will boil at a temperature below the boiling point of the lowest-boiling component. This allows high-boiling compounds to be distilled at a temperature near 100°C.",
    mechanism: "Live steam is passed directly through the material to be distilled. The volatile compounds are carried over with the steam. The combined vapors are then condensed. Since the essential oil is immiscible with water, it can be easily separated from the condensed water in a separating funnel or Florentine flask.",
    construction: "A still containing the raw material, a steam generator, a condenser, and a collector/separator.",
    precautions: "The rate of steam injection must be controlled to avoid channeling and to ensure efficient stripping of the volatile components. The raw material should be properly prepared (e.g., chopped or ground) to increase the surface area for steam contact."
  },
  {
    id: 'short_path_distillation_1',
    name: 'Short Path Distillation SPD-KDL5',
    type: 'Distillation',
    params: {
      evaporator_temp: { name: 'Evaporator Temp', min: 150, max: 250, unit: '°C' },
      vacuum_pressure: { name: 'Vacuum', min: 0.001, max: 0.1, unit: 'mbar' },
      wiper_speed: { name: 'Wiper Speed', min: 100, max: 300, unit: 'RPM' },
    },
    use: "Purification of highly heat-sensitive, high-boiling-point, and viscous materials like oils, fatty acids, and cannabinoids. It is a high-vacuum technique.",
    principle: "A form of vacuum distillation where the condenser is located very close to the evaporator. This short travel distance minimizes the pressure drop and allows for distillation at very low pressures and temperatures.",
    mechanism: "The material is fed onto a heated surface inside a high-vacuum chamber. A rotating wiper system spreads the material into a very thin film on the heated surface. This promotes rapid evaporation. The vapor travels a very short distance ('short path') to an internal condenser, where it liquefies and is collected. The non-volatile residue is collected separately.",
    construction: "A system with a jacketed evaporating vessel, an internal condenser, and a rotating wiper system. It is connected to a high-vacuum pumping system.",
    precautions: "Achieving and maintaining a high vacuum is critical for the process to work. The feed rate and temperature must be carefully controlled to prevent thermal degradation. The system must be leak-tight."
  },
  {
    id: 'wiped_film_evaporator_1',
    name: 'Wiped Film Evaporator (Molecular Distillation)',
    type: 'Distillation',
    params: {
      jacket_temp: { name: 'Jacket Temp', min: 180, max: 300, unit: '°C' },
      vacuum_pressure: { name: 'Vacuum', min: 0.001, max: 0.05, unit: 'mbar' },
      rotor_speed: { name: 'Rotor Speed', min: 200, max: 400, unit: 'RPM' },
    },
    use: "A specific type of short-path distillation operating under the highest vacuum conditions. Used for separating molecules with very high boiling points and extreme heat sensitivity.",
    principle: "Operates on the principle of molecular free path. At very high vacuum, the distance molecules travel before colliding is significant. The condenser is placed within one mean free path of the evaporator surface, so evaporated molecules travel directly to it without obstruction.",
    mechanism: "Functionally very similar to a short-path evaporator, but designed to operate at even lower pressures (higher vacuum). The thin film created by the wipers and the high vacuum minimizes the residence time at high temperature to milliseconds, preventing thermal decomposition.",
    construction: "A precision-engineered system with a very tight tolerance between the wipers and the evaporator wall, and a large, efficient internal condenser. It requires a sophisticated high-vacuum system (diffusion or turbomolecular pumps).",
    precautions: "This is a highly specialized and expensive technology. Any leaks will prevent the system from reaching the required vacuum level. The material being processed must be thoroughly degassed beforehand."
  },
  {
    id: 'packed_bed_distillation_1',
    name: 'Packed Bed Distillation Column PBDC-1',
    type: 'Distillation',
    params: {
      reboiler_duty: { name: 'Reboiler Duty', min: 50, max: 80, unit: 'kW' },
      differential_pressure: { name: 'Differential Pressure', min: 10, max: 50, unit: 'mbar' },
    },
    use: "Fractional distillation, particularly in applications where a low pressure drop is important, such as vacuum distillation.",
    principle: "Instead of trays, the column is filled with packing material (e.g., Raschig rings, Pall rings, or structured packing). This packing provides a large surface area for intimate contact between the rising vapor and the falling liquid (reflux), facilitating mass transfer.",
    mechanism: "Vapor from the reboiler rises through the packed bed. It is in continuous contact with the liquid reflux flowing down over the packing. This continuous contact allows for many theoretical separation stages in a relatively short column height.",
    construction: "A distillation column filled with randomly dumped or structured packing material. A liquid distributor at the top is crucial to ensure the entire packing is wetted evenly.",
    precautions: "Poor liquid distribution can lead to channeling, where the liquid and vapor do not contact each other effectively, drastically reducing efficiency. The packing can be prone to fouling if the liquid contains solids."
  },
  {
    id: 'bubble_cap_tray_column_1',
    name: 'Bubble Cap Tray Column BCTC-5',
    type: 'Distillation',
    params: {
      reboiler_temp: { name: 'Reboiler Temp', min: 120, max: 180, unit: '°C' },
      pressure: { name: 'Pressure', min: 1, max: 3, unit: 'bar' },
      tray_5_temp: { name: 'Tray 5 Temp', min: 100, max: 140, unit: '°C' },
    },
    use: "Fractional distillation in a wide range of applications, especially in the oil and gas and chemical industries. They are robust and can handle a wide range of liquid and vapor flow rates.",
    principle: "A staged separation process. The column contains a series of horizontal trays, and each tray acts as a separate distillation stage.",
    mechanism: "Liquid flows across each tray and down to the tray below. Vapor from the tray below rises up through openings in the tray. Bubble caps force the vapor to bubble through the liquid on the tray. This intimate contact causes the more volatile components to transfer from the liquid to the vapor, and the less volatile components to transfer from the vapor to the liquid. This process is repeated on each tray, leading to a separation.",
    construction: "A vertical column containing a series of trays. Each tray has many bubble caps, a weir to maintain the liquid level, and a downcomer to allow liquid to flow to the next tray.",
    precautions: "Bubble cap trays have a relatively high pressure drop and are expensive to construct compared to packed columns. They are less prone to fouling and can operate efficiently at low liquid flow rates."
  },
  {
    id: 'reactive_distillation_1',
    name: 'Reactive Distillation Unit RDU-PILOT',
    type: 'Distillation',
    params: {
      catalyst_bed_temp: { name: 'Catalyst Bed Temp', min: 80, max: 120, unit: '°C' },
      reflux_ratio: { name: 'Reflux Ratio', min: 2, max: 8, unit: '' },
    },
    use: "For equilibrium-limited chemical reactions (e.g., esterification). It combines chemical reaction and product separation in a single unit.",
    principle: "By continuously removing one of the reaction products via distillation, the chemical equilibrium is shifted, driving the reaction to a much higher conversion than would be possible in a standard reactor.",
    mechanism: "The distillation column contains a section that is packed with a solid catalyst. The reactants are fed to this section. As the reaction occurs, the products are formed. If one product is more volatile than the reactants, it vaporizes and moves up the column to be collected as distillate. This removal pulls the reaction forward.",
    construction: "A fractional distillation column where part of the packing is a catalyst. The design requires careful consideration of both reaction kinetics and vapor-liquid equilibrium.",
    precautions: "This is a highly complex, integrated process. The operating conditions (temperature, pressure) must be a compromise that is suitable for both the reaction and the distillation. Catalyst deactivation can be an issue."
  },
  {
    id: 'cryogenic_distillation_1',
    name: 'Cryogenic Distillation (Air Separation)',
    type: 'Distillation',
    params: {
      cold_box_temp: { name: 'Cold Box Temp', min: -190, max: -170, unit: '°C' },
      n2_purity: { name: 'N₂ Purity', min: 99.9, max: 100, unit: '%' },
    },
    use: "Large-scale separation of gases with very low boiling points, most commonly for separating air into its components (nitrogen, oxygen, argon).",
    principle: "Fractional distillation performed at extremely low (cryogenic) temperatures.",
    mechanism: "Air is first compressed, purified, and cooled to its liquefaction point. The liquid air is then fed into a distillation column (often a double-column system). Since nitrogen has a lower boiling point (-196°C) than oxygen (-183°C), the nitrogen vaporizes and rises to the top of the column, while liquid oxygen collects at the bottom.",
    construction: "A complex plant consisting of compressors, purification units, heat exchangers, and one or more distillation columns, all housed within a highly insulated structure called a 'cold box'.",
    precautions: "Working with cryogenic fluids presents significant safety hazards (e.g., frostbite, embrittlement of materials). The process is very energy-intensive due to the need for compression and refrigeration. Purity of the feed air is important to prevent ice or solid CO₂ from clogging the system."
  },
  {
    id: 'pervaporation_unit_1',
    name: 'Pervaporation Unit PV-MEM-10',
    type: 'Distillation',
    params: {
      feed_temp: { name: 'Feed Temp', min: 60, max: 90, unit: '°C' },
      permeate_vacuum: { name: 'Permeate Vacuum', min: 5, max: 20, unit: 'mbar' },
    },
    use: "Separating liquid mixtures, especially for breaking azeotropes (mixtures that cannot be separated by conventional distillation) or for dehydrating organic solvents.",
    principle: "A membrane-based separation process where a liquid mixture is in contact with one side of a non-porous membrane. A vacuum is applied to the other side. One component of the mixture preferentially permeates through the membrane and evaporates into the vacuum.",
    mechanism: "The feed liquid is heated and circulated on one side of the membrane. The component to be removed (e.g., water) is selectively absorbed by the membrane, diffuses through it, and evaporates on the permeate side due to the low pressure. The vapor is then condensed and collected.",
    construction: "A system with a feed tank and heater, a pump, a module containing the pervaporation membrane, and a vacuum system with a condenser.",
    precautions: "The membrane is the key component and is selective for a specific component. The process can be energy-efficient compared to azeotropic distillation. The membrane can be susceptible to fouling."
  },
  {
    id: 'azeotropic_distillation_1',
    name: 'Azeotropic Distillation Setup ADS-TOL-H2O',
    type: 'Distillation',
    params: {
      reboiler_temp: { name: 'Reboiler Temp', min: 110, max: 130, unit: '°C' },
      dean_stark_level: { name: 'Dean-Stark Level', min: 50, max: 90, unit: '%' },
    },
    use: "Separating components of an azeotropic mixture. A common application is the dehydration of ethanol.",
    principle: "An entrainer (a third component) is added to the mixture. This entrainer forms a new, lower-boiling-point azeotrope with one of the original components, which allows it to be removed as the distillate.",
    mechanism: "For dehydrating ethanol, benzene or toluene is added as an entrainer. The mixture is heated. A ternary azeotrope of water-ethanol-entrainer boils first and is distilled off. The vapor is condensed and collected in a separator (like a Dean-Stark trap). Here, it separates into two layers: an organic layer (rich in the entrainer), which is returned to the column, and an aqueous layer, which is removed. Pure ethanol is left at the bottom of the column.",
    construction: "A fractional distillation column equipped with a special separator (decanter or Dean-Stark trap) to separate the condensed, immiscible layers.",
    precautions: "The choice of entrainer is critical. It must not react with the mixture and should be easily separable from the distillate. The process can be complex to control."
  },
  // =================================================================
  // Boiling & Evaporation
  // =================================================================
  {
    id: 'jacketed_kettle_1',
    name: 'Jacketed Boiling Kettle JK-1000L',
    type: 'Boiling & Evaporation',
    params: {
      jacket_pressure: { name: 'Jacket Pressure', min: 2, max: 4, unit: 'bar' },
      product_temp: { name: 'Product Temp', min: 90, max: 110, unit: '°C' },
      agitator_speed: { name: 'Agitator Speed', min: 30, max: 80, unit: 'RPM' },
    },
    use: "Heating, boiling, and simmering large batches of liquids. Common in food, cosmetic, and chemical industries for processes like making syrups, sauces, or dissolving solids.",
    principle: "Indirect heating. A heating medium (steam or hot oil) circulates in a jacket surrounding the main vessel, transferring heat through the vessel wall to the product inside.",
    mechanism: "The product is loaded into the inner kettle. Steam is introduced into the outer jacket. The steam condenses on the inner wall of the jacket, releasing its latent heat, which is conducted through the kettle wall to the product. An agitator is often used to ensure uniform heating and prevent scorching.",
    construction: "A vessel with an inner wall and an outer wall, creating a space (the jacket) for the heating medium. It typically has a large- hinged lid and a bottom outlet valve. It may be equipped with an agitator.",
    precautions: "The jacket is a pressure vessel and must have a pressure relief valve. Ensure the product level is sufficient to cover the heated surface to avoid burning the product. Use caution with hot surfaces."
  },
  {
    id: 'thermosyphon_reboiler_1',
    name: 'Thermosyphon Reboiler TR-HX-5',
    type: 'Boiling & Evaporation',
    params: {
      steam_inlet_temp: { name: 'Steam In Temp', min: 150, max: 180, unit: '°C' },
      process_outlet_temp: { name: 'Process Out Temp', min: 120, max: 150, unit: '°C' },
    },
    use: "Provides the heat required to generate vapor at the bottom of a distillation column.",
    principle: "A type of heat exchanger that uses natural circulation. The density difference between the hot, two-phase (liquid-vapor) mixture leaving the reboiler and the cooler liquid from the column drives the circulation.",
    mechanism: "Liquid from the bottom of the distillation column flows into the reboiler. It is heated by a utility fluid (e.g., steam) flowing through the other side of the exchanger. As the liquid boils, the resulting vapor-liquid mixture has a lower density, causing it to flow upwards and back into the column, driving the circulation without needing a pump.",
    construction: "Typically a shell-and-tube heat exchanger mounted vertically or horizontally next to the distillation column.",
    precautions: "The liquid level in the bottom of the column must be maintained above the reboiler inlet to ensure a hydraulic head to drive the flow. Fouling on the heat transfer surfaces can reduce performance."
  },
  {
    id: 'falling_film_evaporator_1',
    name: 'Falling Film Evaporator FFE-1',
    type: 'Boiling & Evaporation',
    params: {
      steam_temp: { name: 'Steam Temp', min: 120, max: 150, unit: '°C' },
      vacuum_pressure: { name: 'Vacuum', min: 100, max: 500, unit: 'mbar' },
      feed_rate: { name: 'Feed Rate', min: 500, max: 1500, unit: 'L/hr' },
    },
    use: "Concentration of heat-sensitive liquids, such as fruit juices, milk, and pharmaceutical solutions. It has a short residence time and high heat transfer rates.",
    principle: "The liquid is fed to the top of vertical heated tubes and flows down the inside walls as a thin film. The short contact time with the hot surface minimizes thermal degradation.",
    mechanism: "The liquid feed is distributed at the top of a bundle of long tubes. The outside of the tubes is heated by steam. The liquid flows down the inside tube walls as a thin film, and part of it evaporates. The concentrated liquid and the vapor exit from the bottom and are separated.",
    construction: "A large vertical shell-and-tube heat exchanger. A key component is the liquid distributor at the top, which must ensure an even film in every tube.",
    precautions: "Proper distribution of the liquid is critical; if dry patches form on the tube walls, fouling or product degradation can occur. It is not suitable for liquids containing suspended solids that could clog the distributor."
  },
  {
    id: 'rising_film_evaporator_1',
    name: 'Rising Film Evaporator RFE-PILOT',
    type: 'Boiling & Evaporation',
    params: {
      steam_pressure: { name: 'Steam Pressure', min: 3, max: 6, unit: 'bar' },
      vapor_temp: { name: 'Vapor Temp', min: 80, max: 110, unit: '°C' },
    },
    use: "Concentrating liquids that are not highly heat-sensitive. It is simpler than a falling film evaporator but has a longer residence time.",
    principle: "The liquid boils at the bottom of long, heated vertical tubes. The vapor that forms rises at high velocity, dragging the remaining liquid up the tubes as a thin film.",
    mechanism: "Liquid is fed to the bottom of the heated tubes. As it boils, the bubbles expand and coalesce, creating a 'climbing' effect that forces the liquid and vapor up the tubes. The mixture exits at the top and is separated in a cyclone.",
    construction: "A vertical shell-and-tube heat exchanger. Unlike a falling film evaporator, it does not require a complex liquid distributor.",
    precautions: "Requires a significant temperature difference to initiate the 'climbing' action. Not suitable for highly viscous or fouling liquids. The residence time is longer than in a falling film evaporator."
  },
  {
    id: 'agitated_thin_film_evap_1',
    name: 'Agitated Thin Film Evaporator ATFE-2.5',
    type: 'Boiling & Evaporation',
    params: {
      jacket_temp: { name: 'Jacket Temp', min: 150, max: 250, unit: '°C' },
      rotor_speed: { name: 'Rotor Speed', min: 200, max: 350, unit: 'RPM' },
      vacuum: { name: 'Vacuum', min: 1, max: 20, unit: 'mbar' },
    },
    use: "Concentrating and distilling highly viscous, fouling, or heat-sensitive liquids that cannot be processed in conventional evaporators.",
    principle: "A mechanical agitator is used to create and maintain a thin, turbulent film of liquid on a heated surface. This provides excellent heat transfer with a very short residence time.",
    mechanism: "The liquid feed enters at the top of a vertical, jacketed cylinder. A rotor with blades rotates at high speed, spreading the liquid into a thin film on the heated inner wall. The solvent evaporates rapidly. The vapor flows to a condenser, while the concentrated product is discharged at the bottom.",
    construction: "A vertical, heated cylinder with an internal, high-speed rotor. The clearance between the rotor blades and the cylinder wall is very small.",
    precautions: "The rotor speed and feed rate must be carefully controlled. The system can handle very viscous materials. The mechanical complexity (rotor, bearings, seals) requires more maintenance than a static evaporator."
  },
  {
    id: 'forced_circulation_evap_1',
    name: 'Forced Circulation Evaporator FCE-CRYSTAL',
    type: 'Boiling & Evaporation',
    params: {
      circulation_rate: { name: 'Circulation Rate', min: 100, max: 300, unit: 'm³/hr' },
      steam_temp: { name: 'Steam Temp', min: 130, max: 160, unit: '°C' },
    },
    use: "Concentrating solutions that are prone to scaling, fouling, or crystallization. The high circulation velocity helps to keep the heat transfer surfaces clean.",
    principle: "A high-velocity pump is used to circulate the liquid through a heat exchanger. Boiling is suppressed in the heat exchanger tubes by maintaining a sufficient hydrostatic head.",
    mechanism: "A pump circulates the liquid from a vapor-liquid separator, through a heat exchanger where it is heated, and then back into the separator. The liquid is heated under pressure in the exchanger, and flashing (boiling) only occurs as it enters the lower-pressure separator. This design minimizes fouling in the heater tubes.",
    construction: "A system consisting of a heat exchanger, a vapor-liquid separator (flash vessel), and a large circulation pump.",
    precautions: "The high pumping energy adds to the operating cost. The high velocity helps to reduce fouling but does not eliminate it completely. It is a robust design for difficult-to-handle liquids."
  },
  {
    id: 'plate_evaporator_1',
    name: 'Plate Evaporator PE-DAIRY-10',
    type: 'Boiling & Evaporation',
    params: {
      steam_temp: { name: 'Steam Temp', min: 110, max: 140, unit: '°C' },
      product_outlet_temp: { name: 'Product Out Temp', min: 70, max: 90, unit: '°C' },
    },
    use: "Evaporation duties in the food, dairy, and beverage industries where space is limited and ease of cleaning is important.",
    principle: "Uses corrugated plates instead of tubes to provide the heat transfer surface. This creates a compact unit with high heat transfer efficiency.",
    mechanism: "Similar to a plate heat exchanger. The product and heating medium (steam) flow in channels on opposite sides of thin, corrugated plates. The design can be configured as a rising or falling film evaporator.",
    construction: "A pack of gasketed plates held together in a frame. The design allows for easy disassembly for cleaning and inspection, and the capacity can be easily modified by adding or removing plates.",
    precautions: "The gaskets have a limited life and chemical compatibility. The small channel gaps are not suitable for liquids with suspended solids. The operating pressure is limited by the frame and gaskets."
  },
  {
    id: 'rotovap_prod_1',
    name: 'Rotary Evaporator (Rotovap) RE-50L-PROD',
    type: 'Boiling & Evaporation',
    params: {
      bath_temp: { name: 'Bath Temp', min: 50, max: 90, unit: '°C' },
      vacuum: { name: 'Vacuum', min: 20, max: 150, unit: 'mbar' },
      rotation_speed: { name: 'Rotation', min: 40, max: 120, unit: 'RPM' },
    },
    use: "Pilot-scale and small production-scale evaporation of solvents under vacuum. Used for concentrating extracts and purifying compounds in the chemical and botanical industries.",
    principle: "Gentle evaporation of solvents by reducing pressure and increasing surface area through rotation. Scales up the principle of a laboratory rotovap.",
    mechanism: "A large (20L, 50L, or 100L) rotating flask is partially submerged in a heated bath. The system is kept under vacuum. The rotation creates a thin film of the product on the inner surface of the flask, leading to efficient and gentle evaporation. Vapors are collected by a large condenser.",
    construction: "A large-scale version of the lab rotovap, with a heavy-duty motor, a large glass evaporating flask, and high-capacity condenser and collection flasks. Often has automated systems for continuous feeding and discharge.",
    precautions: "Handling the large, heavy glassware requires care and often specialized lifting equipment. Ensuring a good vacuum seal with the large rotating joint is critical. Safety shields are essential in case of glass failure."
  },
  {
    id: 'multi_effect_evap_1',
    name: 'Multiple-Effect Evaporator MEE-3-EFFECT',
    type: 'Boiling & Evaporation',
    params: {
      effect1_temp: { name: 'Effect 1 Temp', min: 90, max: 110, unit: '°C' },
      effect3_temp: { name: 'Effect 3 Temp', min: 50, max: 70, unit: '°C' },
      steam_economy: { name: 'Steam Economy', min: 2.0, max: 2.8, unit: '' },
    },
    use: "Large-scale, energy-efficient evaporation of water, such as in desalination, juice concentration, and chemical manufacturing.",
    principle: "Improves energy efficiency by using the vapor produced in one stage (effect) as the heating source for the next stage. Each subsequent effect operates at a lower pressure and temperature.",
    mechanism: "Steam is used to heat the first effect. The vapor produced from the boiling liquid in the first effect is then piped to the heating jacket of the second effect. The vapor from the second effect heats the third, and so on. This re-use of latent heat means that nearly 1 kg of water can be evaporated for every 1 kg of steam used in a single effect, but in a triple-effect system, nearly 3 kg of water can be evaporated.",
    construction: "A series of evaporators (effects), connected in such a way that the vapor from one heats the next. The system also includes pumps and a complex control system.",
    precautions: "High capital cost. The overall temperature difference is spread across all the effects, which limits the temperature drop available in each one. The process control is more complex than a single-effect evaporator."
  },
  {
    id: 'steam_jacketed_vessel_1',
    name: 'Steam Jacketed Vessel SJV-500G',
    type: 'Boiling & Evaporation',
    params: {
      jacket_pressure: { name: 'Jacket Pressure', min: 2, max: 5, unit: 'bar' },
      product_temp: { name: 'Product Temp', min: 80, max: 120, unit: '°C' },
    },
    use: "General purpose heating and boiling of liquids in many process industries. A very common and simple piece of heating equipment.",
    principle: "Indirect heating of a batch of product using steam as the utility fluid.",
    mechanism: "The vessel has an outer jacket. Steam is fed into the jacket, where it condenses on the vessel wall, transferring its latent heat to the product inside. The steam condensate is drained from the bottom of the jacket through a steam trap.",
    construction: "A vessel, typically stainless steel, with a second wall forming the jacket. It includes an inlet for steam, an outlet for condensate, and a pressure relief valve for safety.",
    precautions: "The jacket is a pressure vessel and must be operated within its design limits. Ensure the steam trap is functioning correctly to remove condensate, as a flooded jacket has very poor heat transfer. Thermal shock to the vessel should be avoided by heating up gradually."
  },
  {
    id: 'electric_process_heater_1',
    name: 'Electric Process Heater EPH-150KW',
    type: 'Boiling & Evaporation',
    params: {
      element_temp: { name: 'Element Temp', min: 200, max: 400, unit: '°C' },
      outlet_fluid_temp: { name: 'Outlet Fluid Temp', min: 100, max: 250, unit: '°C' },
      power_draw: { name: 'Power Draw', min: 50, max: 150, unit: 'kW' },
    },
    use: "Heating process fluids (liquids or gases) where steam is not available or where very precise temperature control is needed. Used for heating heat transfer oils or regenerating desiccants.",
    principle: "Direct heating using electrical resistance. Electrical energy is converted directly into heat.",
    mechanism: "The process fluid flows through a vessel containing one or more immersion-type electric heating elements. The elements are a resistance wire inside a protective metal sheath. As electricity passes through the wire, it heats up, and this heat is transferred to the surrounding fluid.",
    construction: "A pressure vessel (shell) with flanged connections, containing a bundle of heating elements. It includes a control panel with contactors, fuses, and a temperature controller.",
    precautions: "The heating elements must always be submerged in the fluid to prevent them from burning out. The fluid flow rate must be sufficient to carry away the heat. The element sheath material must be compatible with the process fluid."
  },
  {
    id: 'fired_heater_1',
    name: 'Fired Heater (Process Furnace) FH-NATGAS-10MBTU',
    type: 'Boiling & Evaporation',
    params: {
      stack_temp: { name: 'Stack Temp', min: 200, max: 400, unit: '°C' },
      tube_skin_temp: { name: 'Tube Skin Temp', min: 300, max: 600, unit: '°C' },
      fuel_flow: { name: 'Fuel Flow', min: 50, max: 100, unit: '%' },
    },
    use: "Providing high-temperature heat for processes in oil refineries and petrochemical plants, such as heating crude oil before distillation or for cracking reactions.",
    principle: "Direct heating by the combustion of a fuel (e.g., natural gas, fuel oil). Heat is transferred to the process fluid flowing through tubes inside the furnace.",
    mechanism: "Burners inside a refractory-lined furnace combust fuel, generating hot flue gases. The process fluid flows through an arrangement of tubes. Heat is transferred to the tubes by radiation from the flame and by convection from the hot gases. The cooled flue gases exit through a stack.",
    construction: "A large, steel, refractory-lined box containing burners and a complex arrangement of process tubes. It includes a fuel supply system, an air supply system, and a stack.",
    precautions: "This is a major piece of equipment with significant safety risks. The burner management system must be fail-safe. The tube skin temperature is a critical parameter and must be monitored to prevent overheating and tube rupture. The fuel-to-air ratio must be controlled for efficient and safe combustion."
  },
  // =================================================================
  // Heat Exchangers
  // =================================================================
  {
    id: 'shell_tube_hx_1',
    name: 'Shell & Tube Heat Exchanger STHE-A',
    type: 'Heat Exchangers',
    params: {
      inlet_temp: { name: 'Inlet Temp', min: 85, max: 95, unit: '°C' },
      outlet_temp: { name: 'Outlet Temp', min: 40, max: 50, unit: '°C' },
      pressure_drop: { name: 'Pressure Drop', min: 0.5, max: 1.5, unit: 'bar' },
      flow_rate: { name: 'Flow Rate', min: 100, max: 150, unit: 'L/min' },
    },
    use: "The most common type of heat exchanger in industrial processes. Used for heating, cooling, condensing, or evaporating fluids.",
    principle: "Two fluids at different temperatures exchange heat without mixing. One fluid flows through a bundle of tubes, while the other flows outside the tubes, within a sealed shell.",
    mechanism: "Heat is transferred from the hotter fluid to the colder fluid through the tube walls. The arrangement of baffles in the shell directs the shell-side fluid flow across the tube bundle, increasing turbulence and the heat transfer rate.",
    construction: "Consists of a cylindrical shell, a bundle of tubes, tube sheets to hold the tubes, baffles, and channels (heads) for the tube-side fluid.",
    precautions: "Fouling (dirt buildup) on the tube surfaces can drastically reduce performance. The exchanger must be designed to handle the thermal expansion of the components. Leaks between the shell and tube sides can cause cross-contamination."
  },
  {
    id: 'plate_hx_1',
    name: 'Plate Heat Exchanger PHE-100',
    type: 'Heat Exchangers',
    params: {
      hot_in_temp: { name: 'Hot Side In', min: 80, max: 90, unit: '°C' },
      cold_out_temp: { name: 'Cold Side Out', min: 70, max: 80, unit: '°C' },
      pressure: { name: 'Pressure', min: 2.5, max: 3.0, unit: 'bar' },
      flow_rate: { name: 'Flow Rate', min: 200, max: 300, unit: 'L/min' },
    },
    use: "Efficient heating and cooling of liquids, especially in the food, beverage, and pharmaceutical industries where sanitary design and ease of cleaning are important.",
    principle: "Heat is transferred through a series of thin, corrugated metal plates. The large surface area and high turbulence result in a very compact and efficient unit.",
    mechanism: "A pack of corrugated plates is clamped together in a frame. Gaskets seal the plates and direct the hot and cold fluids into alternate channels between the plates. The fluids flow in opposite directions (counter-current), maximizing the temperature difference and heat transfer.",
    construction: "A frame, a pack of pressed metal plates with gaskets, and tightening bolts to compress the pack.",
    precautions: "The gaskets are the weak point, limiting the operating temperature and pressure and having chemical compatibility constraints. The small channels can be prone to clogging if the fluids are not clean."
  },
  {
    id: 'scraped_surface_hx_1',
    name: 'Scraped-Surface Heat Exchanger SSHE-V1',
    type: 'Heat Exchangers',
    params: {
      product_in_temp: { name: 'Product In', min: 50, max: 60, unit: '°C' },
      product_out_temp: { name: 'Product Out', min: 10, max: 15, unit: '°C' },
      blade_speed: { name: 'Blade Speed', min: 150, max: 300, unit: 'RPM' },
      motor_load: { name: 'Motor Load', min: 5, max: 15, unit: 'Amps' },
    },
    use: "Heating or cooling highly viscous, sticky, or particle-containing products that would foul a normal heat exchanger. Used for making ice cream, margarine, and gels.",
    principle: "Continuously scrapes the heat transfer surface to prevent the buildup of a fouling layer and to enhance mixing.",
    mechanism: "The product flows through a jacketed cylinder. A rotating shaft with scraper blades continuously removes the product from the cylinder's inner wall. This action prevents fouling, creates high turbulence, and ensures uniform heat transfer, even with very thick products.",
    construction: "A jacketed cylinder with a central rotating shaft fitted with scraper blades. The blades can be plastic or metal.",
    precautions: "Abrasive particles in the product can wear out the blades and the cylinder wall. The mechanical seals on the rotating shaft require regular maintenance. Higher capital and maintenance costs than standard exchangers."
  },
  {
    id: 'spiral_hx_1',
    name: 'Spiral Heat Exchanger SHE-SLUDGE-1',
    type: 'Heat Exchangers',
    params: {
      hot_in_temp: { name: 'Hot In', min: 90, max: 100, unit: '°C' },
      cold_out_temp: { name: 'Cold Out', min: 80, max: 90, unit: '°C' },
      pressure_drop: { name: 'Pressure Drop', min: 0.8, max: 1.8, unit: 'bar' },
    },
    use: "Heating or cooling of slurries, sludges, and other fouling or viscous fluids. The single-channel design makes it self-cleaning.",
    principle: "Two long metal strips are wound around a central core to form two concentric spiral channels. The hot and cold fluids flow through these channels.",
    mechanism: "The two fluids flow in a counter-current direction in the spiral channels. The single-flow path means that if a blockage starts to form, the fluid velocity in that spot increases, which tends to scrub the blockage away. This makes the exchanger resistant to fouling.",
    construction: "Made by rolling two long plates around a mandrel. The channels are sealed by welding. The entire assembly is housed in a casing.",
    precautions: "It is a very compact design. Cleaning, if required, can be difficult as the channels are not easily accessible. It is typically more expensive than a shell-and-tube exchanger for the same duty."
  },
  {
    id: 'double_pipe_hx_1',
    name: 'Double Pipe Heat Exchanger DPHX-PILOT',
    type: 'Heat Exchangers',
    params: {
      tube_in_temp: { name: 'Tube In', min: 20, max: 30, unit: '°C' },
      annulus_out_temp: { name: 'Annulus Out', min: 40, max: 50, unit: '°C' },
    },
    use: "Simple, robust heat exchange for small-scale applications, high-pressure fluids, or when a simple design is required.",
    principle: "One fluid flows through an inner pipe, while the second fluid flows in the annular space between the inner and outer pipe.",
    mechanism: "Heat is transferred through the wall of the inner pipe. The flow can be co-current (same direction) or counter-current (opposite directions), with counter-current being more efficient. Multiple units can be connected in series or parallel to increase the heat transfer area.",
    construction: "Consists of one pipe placed concentrically inside a larger pipe. Often configured in a 'hairpin' U-bend to be more compact.",
    precautions: "It has a relatively low heat transfer area for its size and cost, making it unsuitable for large duties. It is, however, very easy to design, build, and clean."
  },
  {
    id: 'finned_tube_hx_1',
    name: 'Finned Tube Heat Exchanger FTHX-AIR',
    type: 'Heat Exchangers',
    params: {
      air_in_temp: { name: 'Air In', min: 20, max: 30, unit: '°C' },
      air_out_temp: { name: 'Air Out', min: 50, max: 70, unit: '°C' },
      tube_fluid_flow: { name: 'Fluid Flow', min: 50, max: 100, unit: 'L/min' },
    },
    use: "Transferring heat between a liquid and a gas (e.g., air). The fins are used to increase the surface area on the gas side. Examples include car radiators and air conditioning condenser coils.",
    principle: "Extended surfaces (fins) are added to the outside of the tubes to compensate for the low heat transfer coefficient of the gas. This increases the overall rate of heat transfer.",
    mechanism: "A hot liquid flows through the tubes. Air is blown across the outside of the tubes. The fins, which are bonded to the tubes, conduct heat from the tubes and transfer it to the passing air over a much larger surface area than the bare tubes would provide.",
    construction: "A bundle of tubes with fins attached to their outer surface. The fins can be of various types (e.g., plate fins, helical fins).",
    precautions: "The fins can collect dust and dirt from the air, which will reduce their effectiveness. They must be cleaned periodically. The bond between the fin and the tube is critical for good heat transfer."
  },
  {
    id: 'pharma_shell_tube_hx_1',
    name: 'Pharma Grade Shell & Tube STHE-WFI-COOL',
    type: 'Heat Exchangers',
    params: {
      wfi_in_temp: { name: 'WFI In', min: 80, max: 85, unit: '°C' },
      wfi_out_temp: { name: 'WFI Out', min: 25, max: 30, unit: '°C' },
    },
    use: "Heating or cooling high-purity water systems like Water-for-Injection (WFI) or Purified Water (PW).",
    principle: "A specialized shell-and-tube design that eliminates the risk of cross-contamination between the utility fluid and the high-purity product.",
    mechanism: "Often a double-tube-sheet design. There are two separate tube sheets at each end, with a small gap between them that is open to the atmosphere. If a leak develops in a tube joint, the leaking fluid will drain out into this gap instead of contaminating the other fluid stream.",
    construction: "Made from highly polished 316L stainless steel. All surfaces are smooth and crevice-free to prevent microbial growth. The design must be fully drainable.",
    precautions: "The materials of construction and surface finish must meet pharmaceutical standards. The design must ensure that there are no dead legs where water could stagnate."
  },
  {
    id: 'brazed_plate_hx_1',
    name: 'Brazed Plate Heat Exchanger BPHX-CHILLER',
    type: 'Heat Exchangers',
    params: {
      refrigerant_pressure: { name: 'Refrigerant Pressure', min: 5, max: 8, unit: 'bar' },
      water_temp_drop: { name: 'Water Temp Drop', min: 5, max: 10, unit: '°C' },
    },
    use: "Compact and efficient heat exchange in applications like refrigeration, hydronic heating, and industrial process cooling.",
    principle: "A type of plate heat exchanger where the plates are permanently joined together by brazing in a vacuum furnace. This creates a sealed, high-integrity unit.",
    mechanism: "Hot and cold fluids flow in alternate channels created by the corrugated plates. The brazing material (typically copper) seals the channels and also helps to conduct heat between the plates.",
    construction: "A stack of stainless steel plates that are brazed together. It has no gaskets or frame, making it very compact and suitable for high pressures.",
    precautions: "It cannot be opened for cleaning, so it is only suitable for clean fluids. The copper brazing limits its use with certain corrosive fluids like ammonia. The capacity is fixed and cannot be changed."
  },
  {
    id: 'welded_plate_hx_1',
    name: 'Welded Plate Heat Exchanger WPHX-AMMONIA',
    type: 'Heat Exchangers',
    params: {
      hot_in_temp: { name: 'Hot In', min: 100, max: 120, unit: '°C' },
      cold_out_temp: { name: 'Cold Out', min: 90, max: 110, unit: '°C' },
      pressure: { name: 'Pressure', min: 10, max: 15, unit: 'bar' },
    },
    use: "For aggressive fluids or high-temperature/pressure applications where gasketed plate heat exchangers cannot be used. Common in chemical processing and refrigeration with ammonia.",
    principle: "A plate heat exchanger where the plates are welded together instead of being sealed with gaskets. This provides higher integrity and resistance to temperature and pressure.",
    mechanism: "Operates like a standard plate heat exchanger, but the welded construction allows it to handle fluids and conditions that would destroy gaskets.",
    construction: "A pack of corrugated plates is welded together at the edges. The entire plate pack is contained within a bolted frame.",
    precautions: "Like a brazed unit, it cannot be fully mechanically cleaned. The capital cost is higher than a gasketed unit. It combines the thermal efficiency of a plate design with the robustness of a shell-and-tube design."
  },
  {
    id: 'tank_heating_coil_1',
    name: 'Tank Heating Coil THC-SS-316',
    type: 'Heat Exchangers',
    params: {
      steam_pressure: { name: 'Steam Pressure', min: 2, max: 4, unit: 'bar' },
      tank_temp: { name: 'Tank Temp', min: 60, max: 80, unit: '°C' },
    },
    use: "Heating the contents of a storage tank to maintain a certain temperature, prevent freezing, or reduce viscosity.",
    principle: "An immersion heater. A heating medium flows through a coil of pipe placed inside the tank, transferring heat directly to the stored fluid.",
    mechanism: "A heating fluid, typically steam or hot oil, is passed through a pipe coil located at the bottom of the tank. Heat is transferred from the coil to the tank contents, often assisted by natural convection within the tank.",
    construction: "A simple coil of pipe, made from a material compatible with the tank contents. It has an inlet and an outlet that pass through the tank wall.",
    precautions: "The coil must be designed to withstand the tank pressure and temperature. It can be difficult to clean. If the tank is agitated, the coil must be robustly supported to resist the fluid forces."
  },
  {
    id: 'air_cooled_hx_1',
    name: 'Air-Cooled Heat Exchanger (Fin Fan)',
    type: 'Heat Exchangers',
    params: {
      fan_speed: { name: 'Fan Speed', min: 200, max: 400, unit: 'RPM' },
      fan_motor_current: { name: 'Fan Motor Current', min: 10, max: 25, unit: 'A' },
      outlet_temp: { name: 'Outlet Temp', min: 50, max: 70, unit: '°C' },
    },
    use: "Cooling hot process fluids in locations where cooling water is scarce, expensive, or not available. Common in refineries and power plants.",
    principle: "A finned-tube heat exchanger that uses ambient air as the cooling medium.",
    mechanism: "The hot process fluid flows through a horizontal bank of finned tubes. Large fans, located either below (forced draft) or above (induced draft) the tube bank, force a high volume of ambient air across the tubes, removing heat.",
    construction: "A large structure consisting of one or more tube bundles, large axial fans with motors, a support structure, and often louvers to control the airflow.",
    precautions: "The cooling performance is dependent on the ambient air temperature, so its effectiveness can vary with the weather. The fans can be very noisy. The fins need to be cleaned periodically to remove airborne dust and debris."
  },
  {
    id: 'graphite_block_hx_1',
    name: 'Graphite Block Heat Exchanger GBHX-ACID',
    type: 'Heat Exchangers',
    params: {
      acid_in_temp: { name: 'Acid In', min: 80, max: 100, unit: '°C' },
      acid_out_temp: { name: 'Acid Out', min: 40, max: 50, unit: '°C' },
    },
    use: "Heating or cooling of highly corrosive fluids like strong acids (sulfuric, hydrochloric) and other aggressive chemicals.",
    principle: "Uses graphite, which has excellent corrosion resistance and good thermal conductivity, as the material for heat transfer.",
    mechanism: "A large block of impervious graphite is drilled with two sets of perpendicular holes. One fluid flows through the axial holes, and the other fluid flows through the transverse holes. Heat is transferred through the graphite material separating the channels.",
    construction: "A solid, cylindrical or rectangular block of graphite, often reinforced by a steel shell. The headers for the process fluids can be made of graphite or other corrosion-resistant materials.",
    precautions: "Graphite is brittle and can be damaged by mechanical shock or thermal shock (rapid temperature changes). The operating pressure is limited by the mechanical strength of the graphite block."
  },
  // =================================================================
  // Utility Equipment
  // =================================================================
  {
    id: 'autoclave_1',
    name: 'Autoclave AC-150L',
    type: 'Utility Equipment',
    params: {
      temperature: { name: 'Temperature', min: 121, max: 123, unit: '°C' },
      pressure: { name: 'Pressure', min: 1.1, max: 1.3, unit: 'bar' },
      cycle_time: { name: 'Cycle Time', min: 15, max: 20, unit: 'min' },
    },
    use: "Sterilizing equipment, media, and other materials using high-pressure saturated steam.",
    principle: "Sterilization by moist heat. At high pressure, water boils at a temperature higher than 100°C. The high temperature of the saturated steam rapidly denatures proteins and enzymes, killing all microorganisms, including resilient spores.",
    mechanism: "Items are placed in a pressure chamber. Air is removed from the chamber (either by gravity displacement with steam or by a vacuum pump). The chamber is then filled with high-pressure steam, reaching at least 121°C. This temperature is held for a set time (e.g., 15-20 minutes) to ensure sterilization.",
    construction: "A robust, jacketed pressure vessel with a locking door, a steam generator or connection to a plant steam line, and a control system to manage the sterilization cycle.",
    precautions: "Ensure all air is removed from the chamber, as air pockets can prevent steam from contacting and sterilizing surfaces. Do not overload the autoclave. Use biological indicators to validate that the cycle is effective."
  },
  {
    id: 'cip_skid_1',
    name: 'Clean-in-Place (CIP) Skid',
    type: 'Utility Equipment',
    params: {
        flow_rate: { name: 'Flow Rate', min: 300, max: 500, unit: 'L/min' },
        temperature: { name: 'Temperature', min: 75, max: 85, unit: '°C' },
        conductivity: { name: 'Conductivity', min: 1, max: 15, unit: 'mS/cm' },
        supply_pressure: { name: 'Supply Pressure', min: 2, max: 4, unit: 'bar' },
    },
    use: "Automated cleaning of process equipment like tanks, pipes, and fillers without disassembly.",
    principle: "Utilizes a combination of chemical solutions, heat, and turbulent flow to remove process soil from equipment surfaces.",
    mechanism: "The skid pumps a sequence of fluids (e.g., water rinse, caustic wash, acid wash, final rinse) through the process equipment. The flow rate is high enough to create turbulent flow that mechanically scrubs the surfaces. Temperature and chemical concentration are controlled to ensure effective cleaning. Conductivity is used to monitor the interface between cleaning solutions and rinse water.",
    construction: "A skid with tanks for cleaning solutions, a powerful supply pump, a heat exchanger, and a set of automated valves and instruments (temperature, flow, conductivity sensors) controlled by a PLC.",
    precautions: "The CIP recipe (times, temperatures, concentrations) must be validated to prove it effectively cleans the equipment. The flow path must be designed to ensure all surfaces are reached (e.g., using spray balls in tanks)."
  },
  {
    id: 'wfi_still_1',
    name: 'Water for Injection (WFI) Still',
    type: 'Utility Equipment',
    params: {
        distillate_temp: { name: 'Distillate Temp', min: 95, max: 100, unit: '°C' },
        conductivity: { name: 'Conductivity', min: 0.1, max: 1.3, unit: 'µS/cm' },
        toc: { name: 'Total Organic Carbon', min: 1, max: 500, unit: 'ppb' },
        pressure: { name: 'System Pressure', min: 3, max: 5, unit: 'bar' },
    },
    use: "Producing Water-for-Injection (WFI), the highest quality of pharmaceutical water, used for manufacturing parenteral (injectable) drugs.",
    principle: "Purification by distillation. The phase change from liquid to steam effectively separates water from non-volatile impurities like minerals and bacteria. It also destroys microorganisms and endotoxins.",
    mechanism: "Often a multiple-effect still for energy efficiency. Purified water is fed to the first effect, where it is boiled. The steam produced is used to heat the second effect, which operates at a lower pressure. This continues for several effects. The final, pure steam is condensed to produce WFI. Any droplets of impure water carried over with the steam are removed by special separators.",
    construction: "A series of interconnected columns (effects) and condensers, all made from high-quality 316L stainless steel with sanitary fittings.",
    precautions: "The system must be properly designed to prevent entrainment of impure droplets. The produced WFI must be stored and distributed in a continuously circulating hot (e.g., >80°C) loop to prevent microbial growth."
  },
  {
    id: 'pure_steam_gen_1',
    name: 'Pure Steam Generator PSG-500',
    type: 'Utility Equipment',
    params: {
      pressure: { name: 'Pressure', min: 3, max: 4, unit: 'bar' },
      temperature: { name: 'Temperature', min: 130, max: 140, unit: '°C' },
      feedwater_cond: { name: 'Feedwater Cond.', min: 0.5, max: 2.0, unit: 'µS/cm' },
    },
    use: "Producing pure, chemical-free steam for applications like sterilizing process equipment (SIP), autoclaves, and humidification in cleanrooms.",
    principle: "Similar to a WFI still, it uses distillation to produce clean steam from a purified water source. The steam, when condensed, must meet WFI quality standards.",
    mechanism: "A dedicated evaporator uses plant steam on the utility side to boil purified feedwater on the process side. A special separator section ensures that only pure vapor leaves the generator, free from any entrained water droplets that could carry impurities.",
    construction: "A shell-and-tube or falling-film evaporator designed with sanitary principles, made from 316L stainless steel.",
    precautions: "The feedwater must be of high quality (typically Purified Water) to prevent scaling and contamination of the pure steam. The system must be regularly tested to ensure the steam is free of additives and endotoxins."
  },
  {
    id: 'cooling_tower_1',
    name: 'Cooling Tower CT-10K',
    type: 'Utility Equipment',
    params: {
      water_in_temp: { name: 'Water In Temp', min: 35, max: 40, unit: '°C' },
      water_out_temp: { name: 'Water Out Temp', min: 25, max: 30, unit: '°C' },
      fan_speed: { name: 'Fan Speed', min: 300, max: 500, unit: 'RPM' },
      water_conductivity: { name: 'Water Conductivity', min: 1000, max: 2000, unit: 'µS/cm' },
    },
    use: "A heat rejection device used to cool water from industrial processes, chillers, or air conditioning systems. It transfers waste heat to the atmosphere.",
    principle: "Evaporative cooling. A small portion of the water being cooled evaporates, and this phase change absorbs a large amount of heat from the remaining water.",
    mechanism: "Hot water from the process is pumped to the top of the tower and sprayed over a 'fill' material, which provides a large surface area. A large fan draws air through the fill. The air cools the water by causing a small fraction of it to evaporate. The cooled water is collected in a basin at the bottom and returned to the process.",
    construction: "A large structure containing a fill pack, water distribution nozzles, a fan, a collection basin, and drift eliminators to prevent water droplets from escaping.",
    precautions: "Requires continuous water treatment to prevent scale, corrosion, and biological growth (e.g., Legionella). A 'blowdown' stream is used to remove concentrated minerals, requiring make-up water to be added."
  },
  {
    id: 'air_compressor_1',
    name: 'Oil-Free Air Compressor AC-OF-200',
    type: 'Utility Equipment',
    params: {
      pressure: { name: 'Discharge Pressure', min: 7.5, max: 8.5, unit: 'bar' },
      dew_point: { name: 'Dew Point', min: -45, max: -35, unit: '°C' },
      temperature: { name: 'Air Temperature', min: 30, max: 40, unit: '°C' },
    },
    use: "Providing high-quality compressed air for use in pharmaceutical manufacturing, where the air may come into contact with the product (e.g., for pneumatic conveying, fluid bed drying).",
    principle: "Compresses air without using any oil in the compression chamber, thus eliminating the risk of oil contamination in the air stream.",
    mechanism: "Various designs exist, such as rotary screw compressors with water-lubricated elements or reciprocating piston compressors with PTFE rings. After compression, the hot, wet air is passed through an aftercooler and an air dryer (e.g., a desiccant dryer) to remove moisture and achieve a low pressure dew point.",
    construction: "A system including the compressor unit, an air receiver tank, filters to remove particles, and an air dryer.",
    precautions: "The compressed air must be filtered to remove particles and dried to prevent moisture from condensing in the lines or contaminating the product. The system requires regular maintenance of filters and desiccants."
  },
  {
    id: 'nitrogen_plant_1',
    name: 'Nitrogen Generation Plant (PSA) N2-PSA-100',
    type: 'Utility Equipment',
    params: {
      pressure: { name: 'Pressure', min: 5, max: 7, unit: 'bar' },
      purity: { name: 'Purity', min: 99.5, max: 99.99, unit: '%' },
      flow_rate: { name: 'Flow Rate', min: 80, max: 120, unit: 'Nm³/hr' },
    },
    use: "On-site generation of nitrogen gas for applications like blanketing tanks to prevent oxidation, purging lines, and providing an inert atmosphere for sensitive products.",
    principle: "Pressure Swing Adsorption (PSA). It separates nitrogen from the air by using a material that selectively adsorbs oxygen at high pressure.",
    mechanism: "The plant has two towers filled with a Carbon Molecular Sieve (CMS). Compressed air is fed into one tower. The CMS adsorbs oxygen, CO₂, and moisture, allowing the nitrogen to pass through as the product gas. Before the first tower is saturated with oxygen, the system switches to the second tower. The first tower is then depressurized, which releases the adsorbed oxygen to the atmosphere, regenerating the CMS. This cycle repeats continuously.",
    construction: "A skid-mounted system with two adsorbent towers, automated switching valves, a buffer tank, and a control system.",
    precautions: "The feed air must be clean and dry to protect the CMS material. The final purity of the nitrogen is dependent on the cycle time and flow rate."
  },
  {
    id: 'glycol_chiller_1',
    name: 'Chilled Glycol System CGS-MINUS20C',
    type: 'Utility Equipment',
    params: {
      glycol_supply_temp: { name: 'Supply Temp', min: -22, max: -18, unit: '°C' },
      glycol_return_temp: { name: 'Return Temp', min: -17, max: -13, unit: '°C' },
      pressure: { name: 'Pressure', min: 2, max: 4, unit: 'bar' },
    },
    use: "Providing a low-temperature cooling fluid for process equipment like reactor jackets, condensers, and lyophilizers.",
    principle: "A standard vapor-compression refrigeration cycle is used to cool a secondary fluid (a water-glycol mixture). This secondary fluid is then circulated to the process equipment.",
    mechanism: "A refrigerant is compressed, condensed (releasing heat), expanded (becoming very cold), and then evaporated (absorbing heat). The evaporator is where the heat is removed from the glycol loop. The chilled glycol is then pumped in a closed loop to the various users.",
    construction: "A large skid containing compressors, condensers (often air- or water-cooled), an evaporator (chiller barrel), an expansion valve, and pumps for the glycol loop.",
    precautions: "The glycol concentration must be maintained to achieve the desired freezing point. The system must be checked regularly for refrigerant leaks. The performance of the chiller depends on the efficiency of the heat rejection at the condenser."
  },
  {
    id: 'ro_edi_system_1',
    name: 'RO-EDI Water System ROEDI-USP-10',
    type: 'Utility Equipment',
    params: {
      ro_permeate_flow: { name: 'RO Flow', min: 8, max: 12, unit: 'm³/hr' },
      edi_resistivity: { name: 'EDI Resistivity', min: 15, max: 18, unit: 'MΩ·cm' },
      toc: { name: 'TOC', min: 10, max: 100, unit: 'ppb' },
    },
    use: "Producing Purified Water (USP grade) for pharmaceutical applications like cleaning, and preparation of non-parenteral products.",
    principle: "A two-step purification process. Reverse Osmosis (RO) performs the bulk removal of contaminants, and Electrodeionization (EDI) 'polishes' the water to achieve very high purity without the use of chemicals.",
    mechanism: "Pre-treated water is first forced through RO membranes, which remove >99% of dissolved salts. The RO permeate then flows to the EDI module. In the EDI module, an electric field is applied across ion-exchange resins and membranes, which removes the remaining ions, producing water with very high resistivity (low conductivity).",
    construction: "An integrated skid with pre-treatment (softeners, carbon filters), the RO unit (high-pressure pump, membranes), and the EDI module with its DC power supply.",
    precautions: "The pre-treatment of the feed water is critical to protect both the RO and EDI components from chlorine and hardness. The EDI module can be fouled by CO₂, so upstream degassing is sometimes used."
  },
  {
    id: 'steam_boiler_1',
    name: 'Plant Steam Boiler PSB-FIRE TUBE-10T',
    type: 'Utility Equipment',
    params: {
      pressure: { name: 'Pressure', min: 8, max: 10, unit: 'bar' },
      steam_flow: { name: 'Steam Flow', min: 5, max: 10, unit: 'Tons/hr' },
    },
    use: "Generating 'plant steam' or 'black steam' for general utility purposes, such as heating jackets on non-critical vessels, building heat, and driving some equipment.",
    principle: "Combustion of a fuel is used to heat water in a pressure vessel, producing steam.",
    mechanism: "In a fire-tube boiler, the hot combustion gases from a burner pass through tubes that are surrounded by water in a larger shell. Heat is transferred from the hot gases through the tube walls to the water, causing it to boil and produce steam. The steam collects at the top of the shell.",
    construction: "A large, cylindrical steel shell containing a furnace and a bundle of fire tubes. It includes a burner, fuel supply system, and numerous safety controls (pressure switches, water level controllers).",
    precautions: "This is a high-pressure vessel and a major piece of safety-critical equipment. It requires regular inspection and certified operators. The feedwater must be treated to prevent scale buildup on the tubes, which would lead to overheating and failure."
  },
  {
    id: 'vacuum_pump_1',
    name: 'Vacuum Pump System (Liquid Ring) VPS-LR-500',
    type: 'Utility Equipment',
    params: {
      vacuum_level: { name: 'Vacuum Level', min: 30, max: 100, unit: 'mbar' },
      motor_current: { name: 'Motor Current', min: 40, max: 80, unit: 'A' },
      seal_water_temp: { name: 'Seal Water Temp', min: 15, max: 25, unit: '°C' },
    },
    use: "Creating a rough to medium vacuum for process applications like vacuum distillation, drying, and evaporation.",
    principle: "A rotating, vaned impeller inside a cylindrical casing creates a ring of liquid sealant due to centrifugal force. This creates sealed compression chambers that trap, compress, and discharge the process gas.",
    mechanism: "An eccentrically mounted impeller spins inside the casing. It throws a liquid sealant (usually water) against the casing wall. The pockets between the impeller vanes get larger as they pass the inlet port, drawing in gas. As they rotate, the pockets get smaller, compressing the gas before it is discharged along with some of the sealant liquid.",
    construction: "A simple, robust design with only one moving part (the rotor). The system includes a sealant liquid separator and often a heat exchanger to cool the sealant for recirculation.",
    precautions: "The vacuum level achievable is limited by the vapor pressure of the sealant liquid (the warmer the liquid, the poorer the vacuum). It consumes a significant amount of sealing liquid. It is very tolerant of liquid or vapor carryover from the process."
  },
  {
    id: 'solvent_recovery_1',
    name: 'Solvent Recovery System SRS-DISTILL-5',
    type: 'Utility Equipment',
    params: {
      distillation_rate: { name: 'Distillation Rate', min: 3, max: 6, unit: 'm³/hr' },
      solvent_purity: { name: 'Solvent Purity', min: 98, max: 99.9, unit: '%' },
    },
    use: "Recovering and purifying used solvents from process streams for re-use. This reduces raw material costs and minimizes hazardous waste disposal.",
    principle: "Typically based on fractional distillation. It separates the valuable solvent from contaminants based on differences in boiling points.",
    mechanism: "The waste solvent stream is fed to a distillation column. The solvent, being more volatile than the contaminants (e.g., dissolved solids, water), is vaporized, re-condensed, and collected. The concentrated waste is removed from the bottom of the column.",
    construction: "An integrated skid often including feed tanks, a distillation column (packed or trayed), a reboiler, a condenser, and collection tanks for the recovered solvent and waste.",
    precautions: "Many solvents are flammable, so the system must be designed with appropriate safety measures (e.g., explosion-proof electronics, inert gas blanketing). The system must be able to handle variations in the composition of the waste stream."
  },
  // =================================================================
  // Analytical & QC Instruments
  // =================================================================
  {
    id: 'hplc_1',
    name: 'HPLC System 1',
    type: 'Analytical Instruments',
    params: {
        column_pressure: { name: 'Column Pressure', min: 150, max: 250, unit: 'bar' },
        flow_rate: { name: 'Flow Rate', min: 0.8, max: 1.2, unit: 'mL/min' },
        column_temp: { name: 'Column Temp', min: 35, max: 45, unit: '°C' },
        detector_signal: { name: 'Detector Signal', min: 0, max: 1000, unit: 'mAU' },
    },
    use: "A powerful analytical technique used to separate, identify, and quantify components in a liquid mixture. Used for assay, purity, and stability testing of drugs.",
    principle: "High-Performance Liquid Chromatography. The separation is based on the differential partitioning of sample components between a liquid mobile phase and a solid stationary phase packed in a column.",
    mechanism: "A high-pressure pump pushes a solvent (mobile phase) through a column packed with very fine particles (stationary phase). A small amount of sample is injected. Different components in the sample travel through the column at different speeds based on their chemical interactions with the stationary phase. A detector at the end of the column measures the components as they elute.",
    construction: "A modular system consisting of a solvent reservoir, a degasser, a high-pressure pump, an autosampler (injector), a column oven, the analytical column, and a detector (e.g., UV-Vis, Mass Spec).",
    precautions: "The mobile phase must be filtered and degassed to prevent pump and column damage. The column pressure must be monitored to detect blockages. The system requires regular calibration and performance verification."
  },
  {
    id: 'hplc_2',
    name: 'UPLC System 2',
    type: 'Analytical Instruments',
    params: {
        column_pressure: { name: 'Column Pressure', min: 400, max: 800, unit: 'bar' },
        flow_rate: { name: 'Flow Rate', min: 0.2, max: 0.6, unit: 'mL/min' },
        column_temp: { name: 'Column Temp', min: 45, max: 55, unit: '°C' },
        detector_signal: { name: 'Detector Signal', min: 0, max: 1000, unit: 'mAU' },
    },
    use: "An advanced form of HPLC that provides faster, higher-resolution separations. Used for complex mixture analysis and high-throughput screening.",
    principle: "Ultra-Performance Liquid Chromatography. By using columns packed with much smaller particles (<2 µm), a much higher separation efficiency can be achieved. However, this requires much higher operating pressures.",
    mechanism: "Operates on the same principle as HPLC, but the system is engineered to handle very high pressures (up to 1000 bar or 15,000 psi). The smaller particles provide more surface area and a shorter diffusion path, resulting in sharper peaks and better resolution in a shorter amount of time.",
    construction: "A specialized system with pumps, tubing, and injector designed to withstand extreme pressures. It also has detectors with faster data acquisition rates to handle the very narrow peaks.",
    precautions: "Sample and solvent preparation are even more critical than for HPLC, as the smaller particle columns are very sensitive to blockage. The system has a very low dead volume to preserve the high resolution."
  },
  {
    id: 'gc_1',
    name: 'Gas Chromatograph (GC)',
    type: 'Analytical Instruments',
    params: {
        oven_temp: { name: 'Oven Temp', min: 50, max: 300, unit: '°C' },
        inlet_pressure: { name: 'Inlet Pressure', min: 10, max: 50, unit: 'psi' },
        carrier_gas_flow: { name: 'Carrier Flow', min: 1, max: 5, unit: 'mL/min' },
    },
    use: "Separating and analyzing compounds that can be vaporized without decomposition. Used for testing residual solvents in pharmaceuticals, environmental analysis, and food testing.",
    principle: "The sample is vaporized and separated based on its partitioning between a gaseous mobile phase (carrier gas) and a liquid or solid stationary phase coated on the inside of a long, thin capillary column.",
    mechanism: "A small amount of sample is injected into a heated inlet, where it vaporizes. An inert carrier gas (e.g., helium, nitrogen) sweeps the vaporized sample into the column, which is housed in a temperature-programmable oven. Components separate in the column based on their boiling points and interaction with the stationary phase. A detector (e.g., Flame Ionization Detector - FID) measures the components as they exit the column.",
    construction: "An instrument with an injector port, a temperature-controlled oven containing the column, a detector, and a source for high-purity carrier gas.",
    precautions: "The compounds must be volatile and thermally stable. The carrier gas must be pure and leak-free. The choice of column (stationary phase) is critical for achieving a good separation."
  },
  {
    id: 'mass_spec_1',
    name: 'Mass Spectrometer QTOF-MS-1',
    type: 'Analytical Instruments',
    params: {
      vacuum_pressure: { name: 'Vacuum Pressure', min: 1e-7, max: 5e-6, unit: 'mbar' },
      source_temp: { name: 'Source Temp', min: 100, max: 130, unit: '°C' },
      capillary_voltage: { name: 'Capillary Voltage', min: 2500, max: 3500, unit: 'V' },
    },
    use: "Identifying unknown compounds, determining molecular weight, and elucidating the structure of molecules. Often coupled with HPLC or GC (LC-MS, GC-MS) for powerful analysis.",
    principle: "Measures the mass-to-charge ratio (m/z) of ionized atoms or molecules.",
    mechanism: "The process involves three main steps: 1) Ionization: The sample is converted into gaseous ions in an ion source. 2) Mass Analysis: The ions are separated in a mass analyzer based on their m/z ratio using electric or magnetic fields. 3) Detection: The separated ions are detected, and their abundance is measured. A QTOF (Quadrupole Time-of-Flight) is a hybrid analyzer that provides high resolution and accurate mass measurements.",
    construction: "A highly complex instrument consisting of an ion source, a mass analyzer (or multiple analyzers), and a detector, all operating under a high vacuum.",
    precautions: "Requires a very high vacuum to operate. The instrument is extremely sensitive and requires a clean environment and skilled operators. Maintenance of the vacuum pumps and cleaning of the ion source are critical."
  },
  {
    id: 'dissolution_tester_1',
    name: 'Dissolution Testing Apparatus',
    type: 'Analytical Instruments',
    params: {
        vessel_temp: { name: 'Vessel Temp', min: 36.5, max: 37.5, unit: '°C' },
        paddle_speed: { name: 'Paddle Speed', min: 48, max: 52, unit: 'RPM' },
        ph: { name: 'Media pH', min: 6.7, max: 6.9, unit: '' },
    },
    use: "A critical QC test to measure the rate at which an active pharmaceutical ingredient (API) from a solid dosage form (e.g., tablet, capsule) dissolves in a liquid medium. It is used to predict in vivo performance.",
    principle: "Simulates the conditions in the human stomach or intestine to determine the drug release profile.",
    mechanism: "A tablet or capsule is placed in a vessel containing a specific dissolution medium, which is maintained at a constant temperature (37°C). A stirring element (e.g., a rotating paddle or a rotating basket) provides gentle agitation. At set time points, samples of the medium are withdrawn and analyzed (usually by UV-Vis or HPLC) to determine the amount of drug that has dissolved.",
    construction: "A unit with a constant temperature water bath, multiple glass dissolution vessels, and a motorized drive to rotate the stirring elements at a precise speed.",
    precautions: "All parameters (temperature, stirring speed, vessel dimensions, media pH and volume) are strictly defined by pharmacopoeias (e.g., USP) and must be precisely controlled. The presence of air bubbles in the media can affect the results."
  },
  {
    id: 'toc_analyzer_1',
    name: 'TOC Analyzer',
    type: 'Analytical Instruments',
    params: {
      conductivity: { name: 'Conductivity', min: 0.1, max: 1.5, unit: 'µS/cm' },
      reagent_level: { name: 'Reagent Level', min: 20, max: 100, unit: '%' },
      uv_lamp_hours: { name: 'UV Lamp Hours', min: 0, max: 9000, unit: 'hrs' },
    },
    use: "Measuring the Total Organic Carbon (TOC) in high-purity water systems (PW, WFI) to ensure they meet pharmacopoeial standards for organic purity.",
    principle: "Organic carbon in a water sample is oxidized to carbon dioxide (CO₂) using methods like UV persulfate oxidation. The resulting CO₂ is then measured, typically with a non-dispersive infrared (NDIR) detector.",
    mechanism: "A water sample is introduced into the analyzer. An oxidizing agent is added, and the sample is exposed to a high-intensity UV lamp. This converts organic molecules into CO₂. The CO₂ is sparged out and carried to an NDIR detector, which gives a signal proportional to the TOC level.",
    construction: "A compact analytical instrument containing a UV reactor, reagent pumps, a CO₂ detector (NDIR), and a microprocessor. It is often connected directly to a high-purity water loop for online monitoring.",
    precautions: "Requires regular calibration with certified standards. The UV lamp and reagents have a finite lifetime and must be replaced. The sample must be free of particles that could clog the tubing."
  },
];
