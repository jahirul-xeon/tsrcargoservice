export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  description: string[];
  benefits: string[];
  image: string;
  icon: string;
}

export const services: Service[] = [
  {
    slug: 'ocean-freight',
    name: 'Ocean Freight',
    shortDesc: 'Reliable ocean freight solutions for global cargo shipping with full container and LCL options.',
    description: [
      'TSR Cargo Service offers comprehensive ocean freight services connecting major ports across Asia, Europe, the Americas, and Africa. We provide both Full Container Load (FCL) and Less-than-Container Load (LCL) options tailored to your shipment volume and schedule requirements.',
      'Our extensive network of carrier partnerships ensures competitive rates and reliable transit times. We handle all documentation, customs coordination, and port operations to ensure your cargo moves seamlessly from origin to destination.',
      'Whether you are shipping raw materials, finished goods, or oversized cargo, our ocean freight team has the expertise to manage every aspect of your maritime logistics with precision and care.',
      'We also provide specialized services for refrigerated cargo (reefer containers), hazardous materials, and project cargo that requires custom handling solutions.',
    ],
    benefits: [
      'Full Container Load (FCL) and LCL options',
      'Global port-to-port and door-to-door coverage',
      'Competitive carrier rates and transit times',
      'Real-time shipment tracking and visibility',
      'Customs documentation and clearance support',
      'Specialized handling for oversized and hazardous cargo',
    ],
    image: '/images/photo-1494412574643-ff11b0a5eb19.jpg',
    icon: 'FaShip',
  },
  {
    slug: 'air-freight',
    name: 'Air Freight',
    shortDesc: 'Fast and secure air freight services for time-sensitive cargo with global coverage.',
    description: [
      'When time is critical, TSR Cargo Service provides swift and reliable air freight services to move your cargo across the globe. Our air freight solutions are designed for businesses that need fast transit times without compromising on cargo safety.',
      'We work with leading airlines and cargo carriers to offer express, standard, and charter options based on your urgency and budget. Our team handles all aspects from pickup to delivery, including packaging, labeling, and customs clearance.',
      'Our air freight services cover major airports worldwide, supporting industries including pharmaceuticals, electronics, fashion, and perishable goods. We ensure temperature-controlled environments where needed and provide real-time tracking throughout.',
      'Whether it is a small parcel or a full aircraft charter, we have the capacity and expertise to deliver your cargo safely and on time.',
    ],
    benefits: [
      'Express and standard air freight options',
      'Door-to-door and airport-to-airport services',
      'Temperature-controlled cargo handling',
      'Real-time tracking and status updates',
      'Charter services for urgent or oversized shipments',
      'Consolidated shipments for cost efficiency',
    ],
    image: '/images/photo-1436491865332-7a61a109db05.jpg',
    icon: 'FaPlane',
  },
  {
    slug: 'warehousing',
    name: 'Warehousing',
    shortDesc: 'Secure warehousing and distribution services with inventory management and order fulfillment.',
    description: [
      'TSR Cargo Service provides modern warehousing solutions designed to support your supply chain operations. Our strategically located warehouses offer secure storage, efficient inventory management, and timely order fulfillment.',
      'We cater to diverse storage requirements including dry goods, temperature-sensitive products, and high-value items. Our facilities are equipped with advanced security systems, fire protection, and 24/7 monitoring.',
      'Our warehousing services include cross-docking, pick and pack, labeling, and consolidation to streamline your distribution process. We integrate with your supply chain to provide end-to-end logistics visibility.',
      'Whether you need short-term staging or long-term storage, our flexible warehousing solutions scale with your business needs.',
    ],
    benefits: [
      'Secure and monitored storage facilities',
      'Inventory management and reporting',
      'Pick, pack, and fulfillment services',
      'Cross-docking and consolidation',
      'Temperature-controlled storage options',
      'Flexible short-term and long-term contracts',
    ],
    image: '/images/photo-1586528116311-ad8dd3c8310d.jpg',
    icon: 'FaWarehouse',
  },
  {
    slug: 'door-to-door',
    name: 'Door To Door',
    shortDesc: 'Complete door-to-door logistics handling from pickup to final delivery at your doorstep.',
    description: [
      'Our door-to-door service eliminates the complexity of coordinating multiple logistics providers. TSR Cargo Service manages every step from cargo pickup at the origin to final delivery at the destination.',
      'We handle customs clearance, documentation, inland transportation, and last-mile delivery as a single integrated service. This ensures seamless transitions between transport modes and reduces the risk of delays or miscommunication.',
      'Our door-to-door solutions cover both domestic and international routes, utilizing the optimal combination of air, ocean, and land transport based on your timeline and budget requirements.',
      'With a single point of contact and end-to-end visibility, you can focus on your business while we take care of the logistics.',
    ],
    benefits: [
      'Single point of contact for entire shipment',
      'Pickup from origin to delivery at destination',
      'Multi-modal transport coordination',
      'Customs clearance and documentation included',
      'Real-time shipment tracking',
      'Cost-effective integrated solutions',
    ],
    image: '/images/photo-1601584115197-04ecc0da31d7.jpg',
    icon: 'FaTruckMoving',
  },
  {
    slug: 'international-courier',
    name: 'International Courier',
    shortDesc: 'Reliable international courier services for documents and parcels with express delivery options.',
    description: [
      'TSR Cargo Service offers international courier services for businesses and individuals who need to send documents, parcels, and packages across borders quickly and reliably.',
      'Our courier network spans over 200 countries with express, economy, and standard delivery options. We provide door-to-door pickup and delivery with full tracking visibility from dispatch to receipt.',
      'We handle all customs requirements, import duties coordination, and regulatory compliance for international shipments. Our packaging experts ensure your items are protected during transit.',
      'From urgent business documents to e-commerce fulfillment, our international courier services deliver speed, reliability, and competitive pricing.',
    ],
    benefits: [
      'Express and economy delivery options',
      'Coverage across 200+ countries',
      'Door-to-door pickup and delivery',
      'Full tracking and delivery confirmation',
      'Customs and duties coordination',
      'Secure packaging and handling',
    ],
    image: '/images/photo-1566576912321-d58ddd7a6088.jpg',
    icon: 'FaBoxOpen',
  },
  {
    slug: 'customs-brokerage',
    name: 'Customs Brokerage',
    shortDesc: 'Expert customs brokerage services ensuring smooth clearance and regulatory compliance.',
    description: [
      'Navigating customs regulations can be complex and time-consuming. TSR Cargo Service provides expert customs brokerage services to ensure your goods clear customs smoothly and efficiently.',
      'Our licensed customs brokers handle all documentation, tariff classification, duty calculation, and regulatory compliance requirements. We stay current with changing trade regulations to prevent delays and avoid penalties.',
      'We work closely with customs authorities in Bangladesh and internationally to expedite clearance processes. Our team manages import and export declarations, trade compliance audits, and duty drawback programs.',
      'Whether you are a first-time importer or an experienced global trader, our customs brokerage team simplifies the process and protects your interests.',
    ],
    benefits: [
      'Licensed and experienced customs brokers',
      'Import and export documentation management',
      'Tariff classification and duty optimization',
      'Trade compliance and audit support',
      'Regulatory updates and advisory services',
      'Expedited clearance processes',
    ],
    image: '/images/photo-1450101499163-c8848c66ca85.jpg',
    icon: 'FaFileAlt',
  },
  {
    slug: 'pharmaceutical-logistics',
    name: 'Pharmaceutical Logistics',
    shortDesc: 'GDP-compliant pharmaceutical logistics with temperature-controlled supply chain solutions.',
    description: [
      'Pharmaceutical products require specialized handling throughout the logistics chain. TSR Cargo Service provides GDP-compliant pharmaceutical logistics services with strict temperature control and chain-of-custody documentation.',
      'Our pharmaceutical logistics solutions cover cold chain management, temperature monitoring, validated packaging, and secure storage. We maintain the integrity of your products from manufacturer to end-user.',
      'We work with pharmaceutical manufacturers, distributors, and healthcare organizations to design logistics solutions that meet regulatory requirements and product specifications.',
      'Our trained staff understand the critical nature of pharmaceutical shipments and follow rigorous protocols to ensure product quality and patient safety throughout the supply chain.',
    ],
    benefits: [
      'GDP-compliant handling and documentation',
      'Temperature-controlled transport and storage',
      'Real-time temperature monitoring and alerts',
      'Validated packaging and labeling',
      'Chain-of-custody documentation',
      'Regulatory compliance support',
    ],
    image: '/images/photo-1587854692152-cbe660dbde88.jpg',
    icon: 'FaCapsules',
  },
];
