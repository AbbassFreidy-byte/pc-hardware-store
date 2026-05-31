const caseProducts = [
  {
    id: "c1",
    category: "Case",
    image: "./CaseHigh.png",
    alt: "High-End Case",
    title: "High-End Case",
    name: "Lian Li",
    description: "The Lian Li PC-O11 Dynamic EVO is a high-end computer case designed for enthusiasts and gamers. It features a sleek and modern design with tempered glass panels on the front and sides, allowing for a clear view of the internal components. The case supports various motherboard sizes, including ATX, Micro-ATX, and Mini-ITX, providing flexibility for different builds. It offers excellent cooling options with support for multiple fans and radiators, making it ideal for high-performance systems. The Lian Li PC-O11 Dynamic EVO also includes ample space for cable management, ensuring a clean and organized build. Overall, it's a premium case that combines aesthetics with functionality, making it a popular choice among PC builders.",
    specs: ["Full-tower case"],
    price: "$250.00"
  },
  {
    id: "c2",
    category: "Case",
    image: "./CaseMid.png",
    alt: "Mid-End Case",
    title: "Mid-End Case",
    name: "Fractal Design",
    description: "The Fractal Design Core X5 is a mid-range computer case that offers a good balance of features and affordability. It features a clean and modern design with a tempered glass side panel, allowing for a clear view of the internal components. The case supports various motherboard sizes, including ATX, Micro-ATX, and Mini-ITX, providing flexibility for different builds. It offers decent cooling options with support for multiple fans and radiators, making it suitable for most gaming and productivity builds. The Fractal Design Core X5 also includes adequate space for cable management, ensuring a tidy and organized build. Overall, it's a reliable case that provides good value for money.",
    specs: ["Mid-tower case"],
    price: "$150.00"
  },
  {
    id: "c3",
    category: "Case",
    image: "${process.env.PUBLIC_URL}/CaseBudget.png",
    alt: "Budget Case",
    title: "Budget Case",
    name: "Cooler Master",
    description: "The Cooler Master MasterCase MB511L is a budget-friendly computer case that offers a good balance of features and affordability. It features a clean and modern design with a tempered glass side panel, allowing for a clear view of the internal components. The case supports various motherboard sizes, including ATX, Micro-ATX, and Mini-ITX, providing flexibility for different builds. It offers decent cooling options with support for multiple fans and radiators, making it suitable for most gaming and productivity builds. The Cooler Master MasterCase MB511L also includes adequate space for cable management, ensuring a tidy and organized build. Overall, it's a reliable case that provides good value for money.",
    specs: ["Budget-friendly case"],
    price: "$50.50"
  }
];

const coolingProducts = [
  {
    id: "co1",
    category: "Cooling",
    image: "${process.env.PUBLIC_URL}/cooler (1).png",
    alt: "High-End Cooler",
    title: "High-End Cooler",
    name: "Arctic Freezer",
    description: "The Arctic Freezer is a high-end air cooler designed for enthusiasts and gamers. It features a sleek and modern design with a large heatsink and multiple heat pipes, ensuring efficient heat dissipation. The cooler supports various CPU sockets and includes a high-performance fan for optimal cooling performance. Overall, it's a premium cooler that combines aesthetics with functionality, making it a popular choice among PC builders.",
    specs: ["Dual Tower Design", "240mm Fans"],
    price: "$250.00"
  },
  {
    id: "co2",
    category: "Cooling",
    image: "${process.env.PUBLIC_URL}/cooler (2).png",
    alt: "Mid-End Cooler",
    title: "Mid-End Cooler",
    name: "Noctua NH-D15",
    description: "The Noctua NH-D15 is a mid-range air cooler that offers excellent cooling performance at an affordable price. It features a clean and modern design with a large heatsink and multiple heat pipes, ensuring efficient heat dissipation. The cooler supports various CPU sockets and includes a high-performance fan for optimal cooling performance. Overall, it's a reliable cooler that provides good value for money.",
    specs: ["Dual Tower Design", "240mm Fans"],
    price: "$150.55"
  },
  {
    id: "co3",
    category: "Cooling",
    image: "${process.env.PUBLIC_URL}/cooler (3).png",
    alt: "Budget Cooler",
    title: "Budget Cooler",
    name: "Deepcool Gammaxx 400",
    description: "The Deepcool Gammaxx 400 is a budget-friendly air cooler that provides adequate cooling performance for entry-level and mid-range builds. It features a simple and functional design with a large heatsink and multiple heat pipes, ensuring efficient heat dissipation. The cooler supports various CPU sockets and includes a basic fan for optimal cooling performance. Overall, it's a cost-effective option for those on a budget.",
    specs: ["Dual Tower Design", "240mm Fans"],
    price: "$80.20"
  }
];

const cpuProducts = [
  {
    id: "cpu1",
    category: "CPU",
    image: "${process.env.PUBLIC_URL}/cpu (3).png",
    alt: "High-End CPU",
    title: "High-End CPU",
    name: "Intel Core i9-13900K",
    description: "The Intel Core i9-13900K is a high-end CPU designed for enthusiasts and professionals. It features a powerful architecture with 24 cores and 32MB of L3 cache, providing exceptional performance for demanding applications and content creation.",
    specs: ["24 Cores", "3.60 GHz Base Clock", "32MB L3 Cache"],
    price: "$1,999.99"
  },
  {
    id: "cpu2",
    category: "CPU",
    image: "${process.env.PUBLIC_URL}/cpu (2).png",
    alt: "Mid-Range CPU",
    title: "Mid-Range CPU",
    name: "Intel Core i7-13700K",
    description: "The Intel Core i7-13700K is a mid-range CPU that offers excellent performance for gaming and productivity tasks. It features 12 cores and 20MB of L3 cache, providing a good balance of performance and affordability.",
    specs: ["12 Cores", "3.40 GHz Base Clock", "20MB L3 Cache"],
    price: "$799.99"
  },
  {
    id: "cpu3",
    category: "CPU",
    image: "${process.env.PUBLIC_URL}/cpu (1).png",
    alt: "Budget CPU",
    title: "Budget CPU",
    name: "Ryzen 5 7600X",
    description: "The Ryzen 5 7600X is a budget-friendly CPU that offers solid performance for everyday tasks and light gaming. It features 8 cores and 12MB of L3 cache, providing a good balance of performance and affordability.",
    specs: ["8 Cores", "2.50 GHz Base Clock", "12MB L3 Cache"],
    price: "$399.99"
  }
];

const gpuProducts = [
  {
    id: "gpu1",
    category: "GPU",
    image: "${process.env.PUBLIC_URL}/rtx5090.png",
    alt: "High-End GPU",
    title: "High-End GPU",
    name: "RTX 5090",
    description: "The RTX 5090 is a high-end GPU designed for enthusiasts and professionals. It features a powerful architecture with 21760 CUDA cores and 32GB of GDDR7 memory, providing exceptional performance for demanding applications and content creation.",
    specs: ["32GB GDDR7", "21760 CUDA Cores", "2.01 GHz Base Clock"],
    price: "$1,999.99"
  },
  {
    id: "gpu2",
    category: "GPU",
    image: "/Images/rtx5080.png",
    alt: "Mid-Range GPU",
    title: "Mid-Range GPU",
    name: "RTX 5080",
    description: "The RTX 5080 is a mid-range GPU that offers excellent performance for gaming and content creation. It features a powerful architecture with 10752 CUDA cores and 24GB of GDDR7X memory, providing great value for money.",
    specs: ["24GB GDDR7X", "10752 CUDA Cores", "2.30 GHz Base Clock"],
    price: "$1,599.99"
  },
  {
    id: "gpu3",
    category: "GPU",
    image: "/Images/rtx5070.png",
    alt: "Budget GPU",
    title: "Budget GPU",
    name: "RTX 5070",
    description: "The RTX 5070 is a budget-friendly GPU that offers solid performance for everyday tasks and light gaming. It features a balanced architecture with 8960 CUDA cores and 24GB of GDDR7X memory, providing good value for money.",
    specs: ["24GB GDDR7X", "8960 CUDA Cores", "2.30 GHz Base Clock"],
    price: "$799.99"
  }
];

const moboProducts = [
  {
    id: "mobo1",
    category: "Motherboard",
    image: "/Images/mobo (1).png",
    alt: "High-End Motherboard",
    title: "High-End Motherboard",
    name: "Z790 Taichi",
    description: "The Z790 Taichi is a high-end motherboard designed for enthusiasts and professionals. It features a powerful architecture with extensive connectivity options and support for the latest CPU technologies.",
    specs: ["ATX", "PCIe 5.0", "DDR5 Support"],
    price: "$450.20"
  },
  {
    id: "mobo2",
    category: "Motherboard",
    image: "/Images/mobo (2).png",
    alt: "Mid-Range Motherboard",
    title: "Mid-Range Motherboard",
    name: "B760M DS3H",
    description: "The B760M DS3H is a mid-range motherboard that offers excellent performance for gaming and productivity tasks. It features a balanced architecture with support for the latest CPU technologies.",
    specs: ["mATX", "PCIe 5.0", "DDR5 Support"],
    price: "$150.00"
  },
  {
    id: "mobo3",
    category: "Motherboard",
    image: "/Images/mobo (3).png",
    alt: "Budget Motherboard",
    title: "Budget Motherboard",
    name: "B450M DS3H",
    description: "The B450M DS3H is a budget-friendly motherboard that offers solid performance for everyday tasks and light gaming. It features a balanced architecture with support for the latest CPU technologies.",
    specs: ["mATX", "PCIe 4.0", "DDR4 Support"],
    price: "$80.20"
  }
];

const psuProducts = [
  {
    id: "psu1",
    category: "PSU",
    image: "/Images/psu (1).png",
    alt: "High-End PSU",
    title: "High-End PSU",
    name: "Corsair AX1600",
    description: "The Corsair AX1600 is a high-end power supply unit designed for enthusiasts and professionals. It features 1600W of power with 80+ Gold certification and fully modular cabling.",
    specs: ["1600W", "80+ Gold Certified", "Fully Modular"],
    price: "$100.00"
  },
  {
    id: "psu2",
    category: "PSU",
    image: "/Images/psu (2).png",
    alt: "Mid-Range PSU",
    title: "Mid-Range PSU",
    name: "EVGA 850W",
    description: "The EVGA 850W is a mid-range power supply unit that offers excellent performance and reliability for gaming and productivity tasks. It features 850W of power with 80+ Gold certification and semi-modular cabling.",
    specs: ["850W", "80+ Gold Certified", "Semi-Modular"],
    price: "$50.60"
  }
];

const ramProducts = [
  {
    id: "ram1",
    category: "RAM",
    image: "/Images/ram (1).png",
    alt: "High-End RAM",
    title: "High-End RAM",
    name: "Corsair Vengeance LPX 8GB",
    specs: ["8GB DDR5", "DDR5-6000", "Clock speed: 6.00 GHz", "CAS Latency: 40"],
    price: "$90.99"
  },
  {
    id: "ram2",
    category: "RAM",
    image: "/Images/ram (2).png",
    alt: "Mid-Range RAM",
    title: "Mid-Range RAM",
    name: "G.Skill Ripjaws V 4GB",
    description: "The G.Skill Ripjaws V 4GB is a mid-range RAM module that offers excellent performance for gaming and productivity tasks. It features 4GB of DDR5 memory with a clock speed of 5.00 GHz and a CAS latency of 30.",
    specs: ["4GB DDR5", "DDR5-5000", "Clock speed: 5.00 GHz", "CAS Latency: 30"],
    price: "$50.80"
  }
];

const storageProducts = [
  {
    id: "storage1",
    category: "Storage",
    image: "/Images/storage (1).png",
    alt: "High-End Storage",
    title: "High-End Storage",
    name: "Seagate STGX2000",
    description: "The Seagate STGX2000 is a high-end storage solution designed for enthusiasts and professionals. It features 16TB of capacity with a SATA3 interface and 7,000 RPM speed.",
    specs: ["16TB Capacity", "SATA3 Interface", "7,000 Rpm Speed"],
    price: "$199.99"
  },
  {
    id: "storage2",
    category: "Storage",
    image: "/Images/storage (2).png",
    alt: "Mid-Range Storage",
    title: "Mid-Range Storage",
    name: "Seagate BarraCuda",
    description: "The Seagate BarraCuda is a mid-range storage solution that offers excellent performance for gaming and productivity tasks. It features 500GB of capacity with a SATA3 interface and 5,000 RPM speed.",
    specs: ["500GB Capacity", "SATA3 Interface", "5,000 Rpm Speed"],
    price: "$100.50"
  }
];

const gamingProducts = [
  {
    id: "g1",
    category: "Gaming PC",
    image: "/Images/High-end.webp",
    alt: "High-End Gaming PC",
    title: "High-End Gaming PC1",
    name: "Ultimate Gaming",
    specs: ["Intel i9-13900K", "RTX 5090 24GB", "128GB DDR5 RAM", "2TB NVMe SSD"],
    price: "$10,888.50"
  },
  {
    id: "g2",
    category: "Gaming PC",
    image: "/Images/highend2.webp",
    alt: "High-End Gaming PC",
    title: "High-End Gaming PC2",
    name: "Super Gaming",
    description: "The Super Gaming is a high-end gaming PC designed for enthusiasts and professionals. It features an Intel i9-13900K processor, RTX 5090 24GB graphics, 64GB DDR5 RAM, and 3TB NVMe SSD.",
    specs: ["AMD Ryzen 9 7950X3D", "RTX 5090 24GB", "64GB DDR5 RAM", "3TB NVMe SSD"],
    price: "$9,100.50"
  },
  {
    id: "g3",
    category: "Gaming PC",
    image: "/Images/highend3.webp",
    alt: "High-End Gaming PC",
    title: "High-End Gaming PC3",
    name: "Epic Beast",
    description: "The Epic Beast is a high-end gaming PC designed for enthusiasts and professionals. It features an Intel i9-13900KF processor, RTX 5090 24GB graphics, 32GB DDR5 RAM, and 1TB NVMe SSD.",
    specs: ["Intel i9-13900KF", "RTX 5090 24GB", "32GB DDR5 RAM", "1TB NVMe SSD"],
    price: "$8,500.50"
  },
  {
    id: "g4",
    category: "Gaming PC",
    image: "/Images/Midrange.webp",
    alt: "Mid-Range Gaming PC",
    title: "Mid-Range Gaming PC",
    name: "Pro Gaming System",
    description: "The Pro Gaming System is a mid-range gaming PC that offers excellent performance for gaming and productivity tasks. It features an Intel i7-13700K processor, RTX 5080 12GB graphics, 32GB DDR5 RAM, and 1TB NVMe SSD.",
    specs: ["Intel i7-13700K", "RTX 5080 12GB", "32GB DDR5 RAM", "1TB NVMe SSD"],
    price: "$5,799.99"
  },
  {
    id: "g5",
    category: "Gaming PC",
    image: "/Images/Budget.webp",
    alt: "Budget Gaming PC",
    title: "Budget Gaming PC",
    name: "Gaming Starter PC",
    description: "The Gaming Starter PC is a budget-friendly gaming PC that offers decent performance for casual gaming and productivity tasks. It features an Intel i5-13600K processor, RTX 5070 12GB graphics, 16GB DDR5 RAM, and 1TB NVMe SSD.",
    specs: ["Intel i5-13600K", "RTX 5070 12GB", "16GB DDR5 RAM", "1TB NVMe SSD"],
    price: "$1,999.99"
  },
  {
    id: "g6",
    category: "Gaming PC",
    image: "/Images/Budget2.webp",
    alt: "Budget Gaming PC",
    title: "Budget Gaming PC",
    name: "Gaming Starter PC",
    description: "The Gaming Starter PC is a budget-friendly gaming PC that offers decent performance for casual gaming and productivity tasks. It features an Intel i5-13400 processor, RTX 5060 12GB graphics, 16GB DDR5 RAM, and 512GB NVMe SSD.",
    specs: ["Intel i5-13400", "RTX 5060 12GB", "16GB DDR5 RAM", "512GB NVMe SSD"],
    price: "$999.99"
  }
];

const miniProducts = [
  {
    id: "m1",
    category: "Mini PC",
    image: "/Images/HighMini.png",
    alt: "Compact Gaming PC",
    title: "High-End Mini PC",
    name: "High-Gaming Mini",
    description: "The High-Gaming Mini is a high-end mini PC designed for enthusiasts and professionals. It features an Intel i7-13700K processor, RTX 5050-M 8GB graphics, 16GB DDR5 RAM, and 512GB NVMe SSD.",
    specs: ["Intel i7-13700K", "RTX 5050-M 8GB", "16GB DDR5 RAM", "512GB NVMe SSD"],
    price: "$1,299.99"
  },
  {
    id: "m2",
    category: "Mini PC",
    image: "/Images/MidMini.png",
    alt: "Ultra Compact PC",
    title: "Ultra Compact PC",
    name: "High-Gaming Mini",
    description: "The Ultra Compact PC is a mid-range mini PC that offers excellent performance for gaming and productivity tasks. It features an Intel i5-1350P processor, Iris Xe Graphics, 16GB DDR5 RAM, and 512GB NVMe SSD.",
    specs: ["Intel i5-1350P", "Iris Xe Graphics", "16GB DDR5 RAM", "512GB NVMe SSD"],
    price: "$599.99"
  },
  {
    id: "m3",
    category: "Mini PC",
    image: "/Images/LowMini.png",
    alt: "Small Workstation",
    title: "Small Workstation",
    name: "High-Gaming Mini",
    description: "The Small Workstation is a budget-friendly mini PC that offers solid performance for everyday tasks and light gaming. It features an AMD Ryzen 7 5700U processor, Radeon Vega graphics, 8GB DDR5 RAM, and 256GB SSD.",
    specs: ["AMD Ryzen 7 5700U", "Radeon Vega", "8GB DDR5 RAM", "256GB SSD"],
    price: "$549.99"
  }
];

const laptopProducts = [
  {
    id: "l1",
    category: "Laptop",
    image: "/Images/HighendLaptop.webp",
    alt: "Gaming Laptop",
    title: "High-End Laptop",
    name: '15" Gaming Laptop',
    description: "The High-End Laptop is a powerful gaming laptop designed for enthusiasts and professionals. It features an Intel i9-13900H processor, RTX 4080 12GB graphics, 32GB DDR5 RAM, and 1TB NVMe SSD.",
    specs: ["Intel i9-13900H", "RTX 4080 12GB", "32GB DDR5 RAM", "1TB NVMe SSD"],
    price: "$1,899.99"
  },
  {
    id: "l2",
    category: "Laptop",
    image: "/Images/Midlaptop.webp",
    alt: "Mid-Range Laptop",
    title: "Mid-Range Laptop",
    name: 'Premium Ultrabook',
    description: "The Premium Ultrabook is a mid-range laptop that offers excellent performance for gaming and productivity tasks. It features an Intel i7-1365U processor, Iris Xe Graphics, 16GB DDR5 RAM, and 512GB NVMe SSD.",
    specs: ["Intel i7-1365U", "Iris Xe Graphics", "16GB DDR5 RAM", "512GB NVMe SSD"],
    price: "$1,299.99"
  },
  {
    id: "l3",
    category: "Laptop",
    image: "/Images/Budgetlaptop.webp",
    alt: "Budget Laptop",
    title: "Budget Laptop",
    name: 'Budget Laptop 14"',
    description: "The Budget Laptop is a budget-friendly laptop that offers solid performance for everyday tasks and light gaming. It features an Intel i5-1335U processor, Intel UHD Graphics, 8GB DDR4 RAM, and 256GB SSD.",
    specs: ["Intel i5-1335U", "Intel UHD Graphics", "8GB DDR4 RAM", "256GB SSD"],
    price: "$499.99"
  }
];

export const allProducts = [
  ...caseProducts,
  ...coolingProducts,
  ...cpuProducts,
  ...gpuProducts,
  ...moboProducts,
  ...psuProducts,
  ...ramProducts,
  ...storageProducts,
  ...gamingProducts,
  ...miniProducts,
  ...laptopProducts
];