export interface Project {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  heroImage?: string;
  summary: string;
  role: string;
  team?: string;
  type: string;
  timeline: string;
  tools: string[];
  problem: string;
  goal: string;
  constraints: string[];
  methods: string[];
  insights: string[];
  behavioralFindings?: {
    title: string;
    findings: string[];
  };
  structuralDecisions?: {
    title: string;
    decisions: {
      label: string;
      description: string;
      tradeoff: string;
    }[];
    images?: string[];
  };
  process: {
    steps: string[];
    images: string[];
  };
  solution: {
    description: string;
    features: string[];
    images: string[];
  };
  impact: string[];
  reflection: string[];
}

export const PROJECTS: Project[] = [
  {
    id: "joinme",
    title: "JoinMe",
    subtitle: "Reframing Social Connection Through Task-Based Interaction",
    image: "https://lh3.googleusercontent.com/d/1-qeqwDvcpO4_Uk1FtUh8PHYKMErSgpkx",
    summary: "JoinMe reframes connection around everyday action. Instead of asking 'Who do you want to be friends with?', the system asks 'What are you already doing today?'",
    role: "Sole UX Researcher & Product Designer",
    type: "Research, Service Prototyping, Product Architecture, Iteration",
    timeline: "8 months (2024-2025)",
    tools: ["Figma", "Field Interviews", "Surveys", "Service Prototyping", "Usability Testing"],
    problem: "Despite the rise of friendship platforms like Bumble BFF and Meetup, many interactions never transition into real-world engagement. Through early interviews, I identified a structural friction: these platforms frame interaction around “making friends” or attending planned events, requiring emotional commitment before trust is established.",
    goal: "If connection begins with a shared low-pressure task rather than a social label, users will experience lower anxiety and be more likely to transition from digital interaction to real-world engagement.",
    constraints: [
      "Age Affects Willingness: Older participants were significantly less open to meeting strangers through an app.",
      "Safety Visibility Drives Engagement: Privacy and location exposure are primary barriers.",
      "Simplicity Enables Spontaneity: Overly complex filtering reduced willingness to engage.",
      "Spontaneity vs Safety: Balancing lightweight filters with trust-enhancing profiles."
    ],
    methods: [
      "~40 in-person field interviews",
      "~30 survey responses",
      "Live service prototype",
      "Multiple usability testing rounds (20–50 participants per session)"
    ],
    insights: [
      "Shared tasks reduce anxiety: Action reduced pressure and conversational anxiety decreased once engaged.",
      "Safety visibility drives engagement: Trust mechanisms needed to be structurally visible.",
      "Simplicity enables spontaneity: Streamlined interaction increased clarity and perceived ease.",
      "Age affects willingness: Younger adults demonstrated higher openness to task-based interaction."
    ],
    behavioralFindings: {
      title: "Key Behavioral Findings",
      findings: [
        "Age Affects Willingness: Older participants were significantly less open to meeting strangers through an app. Younger adults demonstrated higher openness, especially when interaction centered around shared activity rather than friendship framing.",
        "Shared Tasks Reduce Anxiety: During the live prototype, participants initially expressed hesitation. Once engaged in a shared task, conversational anxiety decreased. 2 of 3 participant pairs voluntarily exchanged contact information.",
        "Safety Visibility Drives Engagement: Participants consistently cited privacy and location exposure as primary barriers. Trust mechanisms needed to be structurally visible.",
        "Simplicity Enables Spontaneity: Overly complex filtering reduced willingness to engage. Streamlined interaction increased clarity and perceived ease."
      ]
    },
    structuralDecisions: {
      title: "Iteration & Structural Decisions",
      decisions: [
        {
          label: "Privacy-First Location System",
          description: "Early versions included more precise proximity indicators. Based on user discomfort, I removed exact location sharing and implemented distance-only visibility.",
          tradeoff: "Reduced matching precision in favor of increased trust."
        },
        {
          label: "Lightweight Filters",
          description: "Usability testing revealed a need for minimal structure. I introduced simple activity and time filters to support clarity without overwhelming users.",
          tradeoff: "Limited customization in exchange for speed and spontaneity."
        },
        {
          label: "Trust-Enhancing Profiles",
          description: "Participants hesitated to meet strangers without context. I added interest tags, short descriptions, and visible verification indicators.",
          tradeoff: "More profile depth while maintaining low onboarding friction."
        }
      ]
    },
    process: {
      steps: [
        "Conducted ~40 field interviews and ~30 surveys to identify structural friction in social platforms.",
        "Executed a live service prototype with 3 participant pairs to validate the 'Task First' hypothesis.",
        "Performed multiple usability testing rounds with cohorts of 20-50 participants.",
        "Iterated on product architecture: implemented distance-only privacy, lightweight filters, and trust-enhancing profiles."
      ],
      images: [
        "https://lh3.googleusercontent.com/d/16lq8RO0sY74yrEXlojxHQbBkiKZu4Yzb",
        "https://lh3.googleusercontent.com/d/1F4OlhEHXDwyPhvyyx2UBpTaoeeUg-bVI",
        "https://lh3.googleusercontent.com/d/1_sOWdyEECT9HTFNPmo_yTNGWLLDu7oIX"
      ]
    },
    solution: {
      description: "JoinMe reframes connection around everyday action. The design prioritizes psychological safety, immediacy, and reduced social pressure.",
      features: [
        "Task-first discovery model",
        "Real-time proximity matching",
        "Distance-only privacy architecture",
        "Simplified filtering system",
        "Trust-visible profile design",
        "Lightweight confirmation flow"
      ],
      images: [
        "https://lh3.googleusercontent.com/d/1wmMvjH44BjDy3sm0MG-_dj3ehdVTtfbq"
      ]
    },
    impact: [
      "Increased willingness among young adults to meet when interaction centered on tasks.",
      "Reduced reported anxiety once engaged in shared activity.",
      "Higher engagement when safety mechanisms were foregrounded."
    ],
    reflection: [
      "Strengthened ability to translate qualitative research into structural product decisions.",
      "Validated behavioral hypotheses through live prototyping.",
      "Balanced competing forces: spontaneity vs safety, simplicity vs control.",
      "Designing for connection requires designing for trust first."
    ]
  },
  {
    id: "recycle",
    title: "Donate, Motivate, Support",
    subtitle: "Designing Incentive Alignment in Vancouver’s Textile Waste Ecosystem",
    image: "https://lh3.googleusercontent.com/d/16qsEIyityL4LFE9359Qd-8DEIfnfGWHx",
    summary: "This project explores how Vancouver’s textile waste ecosystem can be strengthened by coordinating existing organizations rather than introducing new infrastructure.",
    role: "Systems Research & Ecosystem Strategy",
    team: "Roshana Rostami & Kimia Tajvidi",
    type: "Systems Research & Service Strategy",
    timeline: "Spring 2024",
    tools: ["Systems Mapping", "Stakeholder Analysis", "Service Strategy", "Ecosystem Research"],
    problem: "Vancouver’s textile waste ecosystem contains the right actors — but they operate in parallel rather than in coordination. Key actors include Distro Disco, Burnaby Eco-Centre, and local businesses. Through systems mapping, we identified structural inefficiencies: grading without value capture, parallel but disconnected operations, and a lack of incentive feedback loops for donors.",
    goal: "If we align environmental impact with local economic incentives, donor participation and textile diversion rates will increase. The opportunity was to structure coordination between existing actors.",
    constraints: [
      "Innovation vs Implementation: Prioritizing system integration over resource-intensive new platforms.",
      "Incentive Complexity vs Participation Simplicity: Balancing donor motivation with business coordination overhead.",
      "Centralization vs Community Distribution: Maintaining local autonomy while creating structured collaboration."
    ],
    methods: [
      "Ecosystem Mapping",
      "Stakeholder Analysis",
      "Organizational Research",
      "Service Strategy Development"
    ],
    insights: [
      "Grading without value capture: Distro Disco manually grades donated clothing, but unusable textiles are discarded without coordinated incentive.",
      "Parallel but disconnected operations: Burnaby Eco-Centre receives textiles separately, without structured collaboration with Distro Disco.",
      "No incentive feedback loop: Donors lack visibility into textile impact and receive no reinforcement for responsible behavior."
    ],
    behavioralFindings: {
      title: "Strategic Leverage Points",
      findings: [
        "Quality-Based Sorting as System Input: Distro Disco’s grading process becomes the bridge between redistribution and recycling.",
        "Bidirectional Textile Flow: Burnaby Eco-Centre may also route salvageable items through Distro’s distribution network, increasing usable clothing volume.",
        "Incentive Layer Through Local Businesses: Coupons reward responsible donation behavior while driving traffic to small businesses."
      ]
    },
    structuralDecisions: {
      title: "Design Trade-offs",
      decisions: [
        {
          label: "Innovation vs Implementation",
          description: "A new platform offered visibility but required substantial maintenance. We prioritized ecosystem alignment.",
          tradeoff: "Lower novelty in exchange for higher implementability."
        },
        {
          label: "Incentive Complexity vs Participation Simplicity",
          description: "Coupons motivate behavior but introduce coordination overhead across businesses.",
          tradeoff: "Balancing motivation with operational friction."
        },
        {
          label: "Centralized Control vs Distributed Actors",
          description: "Maintaining local autonomy while creating structured collaboration required minimal operational friction.",
          tradeoff: "System integration over resource-intensive new platforms."
        }
      ]
    },
    process: {
      steps: [
        "Conducted stakeholder research and mapped flows between donors, Distro Disco, Burnaby Eco-Centre, and local businesses.",
        "Identified quality-based sorting as a key leverage point for operational synergy between redistribution and recycling.",
        "Pivoted from a centralized digital upcycling platform toward a coordination-based service strategy to ensure feasibility.",
        "Designed a closed-loop incentive system aligning environmental responsibility with local economic participation."
      ],
      images: [
        "https://lh3.googleusercontent.com/d/17qyQDgQ2na1s9bt3RGbxqD8cNfByHwvc",
        "https://lh3.googleusercontent.com/d/1qlml8vlMi4My-ISJputJYg95d6ZXDzqN"
      ]
    },
    solution: {
      description: "A circular incentive loop where clothing donated to Distro Disco is either redistributed or recycled at Burnaby Eco-Centre, rewarding donors with digital coupons redeemable at participating local businesses.",
      features: [
        "Circular Incentive Loop linking environmental and economic actors",
        "Quality-Based Sorting Integration",
        "Bidirectional Textile Flow",
        "Local Business Partnership Model",
        "Impact Feedback Loop"
      ],
      images: [
        "https://lh3.googleusercontent.com/d/16qsEIyityL4LFE9359Qd-8DEIfnfGWHx"
      ]
    },
    impact: [
      "Increases textile diversion through formalized transfer pathways.",
      "Increases usable clothing supply to individuals in need.",
      "Introduces behavioral incentives for donors.",
      "Strengthens local business participation in sustainability initiatives."
    ],
    reflection: [
      "Sustainable systems are rarely solved through new products alone; they require aligned incentives and coordinated flows.",
      "Feasibility and implementability are prioritized over novelty in complex ecosystems.",
      "Identifying leverage points in existing infrastructure is key to scalable service strategy."
    ]
  },
  {
    id: "cafe-redesign",
    title: "University Café Service Redesign",
    subtitle: "Optimizing Peak-Hour Throughput Through Spatial & Service Architecture",
    image: "https://lh3.googleusercontent.com/d/1XsSfTvVdFRNqePb9XY9GKJCEZKp1ewBz",
    heroImage: "https://lh3.googleusercontent.com/d/1S4PvbRS1GQ2prAaNW0qDGSHIVKNA2xNT",
    summary: "During peak lunch hours, the university café experienced operational breakdown. This project redesigns the spatial and service architecture to optimize throughput and reduce cognitive overload.",
    role: "Service Designer",
    team: "4 Designers",
    type: "Research, Flow Analysis, Spatial Strategy, Service System Redesign",
    timeline: "Fall 2023",
    tools: ["Space Planning", "Journey Mapping", "Observational Research", "Service Blueprinting"],
    problem: "During peak hours, the university café experienced operational breakdown. Customers faced long wait times and confusion at pickup, while staff experienced workflow disruption and repeated interruptions. The issue was not simply speed — it was structural inefficiency and spatial misalignment.",
    goal: "If we align spatial layout with service sequence and visibly separate ordering, waiting, and pickup zones, we can reduce cross-traffic, decrease counter crowding, lower staff interruption, and improve peak-hour throughput.",
    constraints: [
      "Spatial Constraint vs Flow Clarity: Redesigning within the existing footprint, avoiding structural renovation.",
      "Infrastructure Cost vs Workflow Efficiency: Digital pickup screens introduce cost but reduce recurring interruption and confusion.",
      "Staffing vs Structural Optimization: Improving systemic efficiency rather than increasing staff count."
    ],
    methods: [
      "Peak-hour observational studies",
      "Interviews with staff, Samsung employees, and students",
      "Persona development",
      "Journey mapping",
      "Literature review on queue management"
    ],
    insights: [
      "Structural confusion over speed: The issue was not speed — it was visibility and spatial sequencing. The physical layout did not reflect the café’s service sequence.",
      "Journey mapping revealed three structural friction zones: Entry Congestion (Entry flow overlap), Counter Crowding (No designated waiting area), and Pickup Ambiguity (No visible status system)."
    ],
    behavioralFindings: {
      title: "Stakeholder Tension",
      findings: [
        "Time-constrained professionals (Samsung Employees): Required predictable, fast pickup within short lunch windows to maximize their downtime.",
        "Students between classes: Needed clarity and speed in a crowded environment to avoid being late.",
        "Baristas managing volume: Needed uninterrupted workflow and reduced counter crowding to maintain operational clarity."
      ]
    },
    structuralDecisions: {
      title: "Iteration & Structural Decisions",
      decisions: [
        {
          label: "Iteration 01 — Visibility Without Flow Control",
          description: "Introduced pickup screens and opposite-end pickup, but customer paths still intersected. Ordering and pickup zones were separated visually but not directionally.",
          tradeoff: "Visibility alone does not resolve congestion if movement patterns remain unclear."
        },
        {
          label: "Iteration 02 — Zonal Separation & Directional Architecture",
          description: "Restructured the space into a linear progression (Entry → Order → Wait → Pickup → Exit) with clear zonal isolation and directional indicators.",
          tradeoff: "Aligning spatial design with service sequence to create predictable movement patterns."
        }
      ],
      images: ["https://lh3.googleusercontent.com/d/1rMTdDpr3jQi6zOac2aedHuxqitByx0KT"]
    },
    process: {
      steps: [
        "Conducted peak-hour observational studies and interviews to diagnose systemic friction beyond surface symptoms.",
        "Mapped the service journey to identify breakdown points in entry, waiting, and pickup stages.",
        "Developed and iterated on layout strategies, pivoting from simple visibility to a directional architecture model.",
        "Validated the redesign through re-interviews and layout prototypes, confirming improved clarity and reduced stress."
      ],
      images: [
        "https://lh3.googleusercontent.com/d/1qeu1IJqwqEf-2n9gCIaEaTcbgSwMN3zs"
      ]
    },
    solution: {
      description: "A redesigned spatial system that aligns layout with service sequence, featuring one-directional flow, digital status screens, and isolated zones.",
      features: [
        "One-directional Customer Flow",
        "Digital Order Status Screens",
        "Designated Waiting Bench Area",
        "Isolated Pickup Zone",
        "Clear Signage & Floor Indicators"
      ],
      images: [
        "https://lh3.googleusercontent.com/d/1XsSfTvVdFRNqePb9XY9GKJCEZKp1ewBz",
        "https://lh3.googleusercontent.com/d/1uFqZvsvJpNTH6U6OEJNkJyyK17dA7o4c",
        "https://lh3.googleusercontent.com/d/1S4PvbRS1GQ2prAaNW0qDGSHIVKNA2xNT"
      ]
    },
    impact: [
      "Increases peak-hour throughput potential and reduces cognitive load.",
      "Decreases interruption points for staff and improves operational predictability.",
      "Balances the needs of three stakeholder groups through structural re-architecture."
    ],
    reflection: [
      "Effective service design requires aligning space, behavior, and process into a cohesive system.",
      "Strengthened ability to diagnose systemic friction and translate research into architectural strategy.",
      "Designing for both customer experience and operational workflow is essential for sustainable performance."
    ]
  }
];
