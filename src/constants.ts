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
    subtitle: "Task-based social platform designed to reduce anxiety in meeting new people.",
    image: "https://lh3.googleusercontent.com/d/1-qeqwDvcpO4_Uk1FtUh8PHYKMErSgpkx",
    summary: "JoinMe is a product concept that reframes connection around everyday action. Instead of asking users who they want to be friends with, it begins with a simpler question: what are you already doing today?",
    role: "Sole UX Researcher & Product Designer",
    type: "Research, Service Prototyping, Product Design, Iteration",
    timeline: "8 months (2024–2025)",
    tools: ["Figma", "Field Interviews", "Surveys", "Service Prototyping", "Usability Testing"],
    problem: "Despite the rise of friendship platforms such as Bumble BFF and Meetup, many interactions never transition into real-world engagement. Early interviews suggested a structural issue: these platforms often ask for emotional commitment before trust has been established.",
    goal: "I wanted to test whether beginning with a shared, low-pressure task rather than a friendship label could reduce anxiety and make real-world interaction more likely.",
    constraints: [
      "Older participants were significantly less open to meeting strangers through an app.",
      "Privacy and location exposure were primary barriers to engagement.",
      "Overly complex filtering reduced willingness to participate.",
      "The design needed to balance spontaneity with safety, clarity, and trust."
    ],
    methods: [
      "~40 in-person field interviews",
      "~30 survey responses",
      "Live service prototype",
      "Multiple usability testing rounds (20–50 participants per session)"
    ],
    insights: [
      "Shared tasks reduce anxiety: Starting from an activity lowered social pressure and made first interactions feel more natural.",
      "Safety visibility drives engagement: Participants needed trust mechanisms to be clearly visible before they were willing to proceed.",
      "Simplicity enables spontaneity: Streamlined interaction increased clarity and made participation feel easier.",
      "Age affects willingness: Younger adults showed greater openness to task-based interaction than older participants."
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
      title: "Structural Decisions & Trade-offs",
      decisions: [
        {
          label: "Privacy-First Location System",
          description: "Early versions included more precise proximity indicators. Based on user discomfort, I removed exact location sharing and implemented distance-only visibility.",
          tradeoff: "Reduced matching precision in favor of increased trust."
        },
        {
          label: "Lightweight Filters",
          description: "Usability testing showed that users needed minimal structure. I introduced simple activity and time filters to improve clarity without overwhelming them.",
          tradeoff: "Less customization in exchange for speed and spontaneity."
        },
        {
          label: "Trust-Enhancing Profiles",
          description: "Participants hesitated to meet strangers without context. I added interest tags, short descriptions, and visible verification cues.",
          tradeoff: "More profile depth while maintaining low onboarding friction."
        }
      ]
    },
    process: {
      steps: [
        "Conducted approximately 40 field interviews and 30 surveys to identify structural friction in social platforms.",
        "Built a live service prototype with 3 participant pairs to test the task-first hypothesis.",
        "Ran multiple usability testing rounds to evaluate interaction clarity, comfort, and willingness to engage.",
        "Iterated the product structure by introducing distance-only privacy, lightweight filters, and trust-enhancing profiles."
      ],
      images: [
        "https://lh3.googleusercontent.com/d/16lq8RO0sY74yrEXlojxHQbBkiKZu4Yzb",
        "https://lh3.googleusercontent.com/d/1F4OlhEHXDwyPhvyyx2UBpTaoeeUg-bVI",
        "https://lh3.googleusercontent.com/d/1_sOWdyEECT9HTFNPmo_yTNGWLLDu7oIX"
      ]
    },
    solution: {
      description: "JoinMe reframes connection around everyday action rather than friendship-first matching. The final design prioritizes psychological safety, immediacy, and low-pressure interaction.",
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
      "Participants showed greater willingness to engage when interaction began with a shared task.",
      "Conversation anxiety decreased once participants were engaged in a shared activity.",
      "Visible safety mechanisms increased confidence in continuing the interaction."
    ],
    reflection: [
      "Qualitative research becomes most valuable when it directly shapes product structure.",
      "Designing for connection requires designing visible trust, not assuming it.",
      "Live prototyping is essential when testing behavior, not just interface preference."
    ]
  },
  {
    id: "recycle",
    title: "Donate, Motivate, Support",
    subtitle: "Service system connecting clothing donors, local businesses, and recycling incentives.",
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
    title: "University Café\nService System Redesign (Concept)",
    subtitle: "Improving peak-hour café flow through spatial service architecture.",
    image: "https://lh3.googleusercontent.com/d/1XsSfTvVdFRNqePb9XY9GKJCEZKp1ewBz",
    heroImage: "https://lh3.googleusercontent.com/d/1S4PvbRS1GQ2prAaNW0qDGSHIVKNA2xNT",
    summary: "During peak lunch hours, the university café experienced long wait times, counter congestion, and confusion around pickup. The issue was not speed but structure — the physical layout did not reflect the actual sequence of service.\n\nThis project redesigns the café’s spatial and service architecture to create a clear flow from ordering to pickup, improving throughput and reducing cognitive load for both customers and staff.",
    role: "Service Design Lead",
    team: "4 Designers",
    type: "Service Design, Flow Analysis, Spatial Strategy, System Redesign",
    timeline: "Fall 2023",
    tools: ["Observational Research", "Journey Mapping", "Spatial Analysis", "Service Blueprinting"],
    problem: "During peak hours, the café experienced operational breakdowns. Customers faced long waits and pickup confusion, while staff dealt with frequent interruptions. The issue was not speed, but a misalignment between the physical layout and the service sequence.",
    goal: "To align the spatial layout with the service sequence by separating ordering, waiting, and pickup zones. The goal was to reduce cross-traffic and counter crowding while improving peak-hour throughput.",
    constraints: [
      "Spatial Constraint: Redesigning within the existing footprint without structural renovation.",
      "Cost vs. Efficiency: Implementing digital status screens to reduce recurring staff interruptions.",
      "Operational Optimization: Improving systemic flow rather than increasing staff count."
    ],
    methods: [
      "Peak-Hour Observational Studies",
      "Stakeholder Interviews (Staff, Samsung Employees, Students)",
      "Persona Development",
      "Service Journey Mapping",
      "Queue Management Research"
    ],
    insights: [
      "Structure over speed: The primary issue was spatial sequencing. The layout did not reflect the service order, causing unpredictable movement between ordering and pickup.",
      "Friction zones: Journey mapping revealed three breakdown points: entry congestion, counter crowding in waiting areas, and pickup ambiguity due to lack of order status."
    ],
    behavioralFindings: {
      title: "Stakeholder Tension",
      findings: [
        "Samsung Employees: Needed predictable, fast pickup within short lunch windows to maximize limited break time.",
        "Students: Required clear spatial cues and fast navigation to avoid delays between classes.",
        "Baristas: Needed an uninterrupted workflow and reduced counter congestion to maintain operational efficiency."
      ]
    },
    structuralDecisions: {
      title: "Iteration & Structural Decisions",
      decisions: [
        {
          label: "Iteration 01 — Visibility Without Flow",
          description: "Introduced pickup screens and dual registers. While visibility improved, customer paths still intersected and movement remained ambiguous.",
          tradeoff: "Visibility alone does not resolve congestion without clear directional movement."
        },
        {
          label: "Iteration 02 — Directional Flow (Selected)",
          description: "Reorganized the layout into a one-directional sequence: Entry → Order → Wait → Pickup → Exit. This aligned the space with the service process.",
          tradeoff: "Prioritized flow clarity and predictability over maximum seating density."
        }
      ],
      images: ["https://lh3.googleusercontent.com/d/1rMTdDpr3jQi6zOac2aedHuxqitByx0KT"]
    },
    process: {
      steps: [
        "Conducted observational studies and interviews to diagnose systemic friction beyond surface-level delays.",
        "Mapped the service journey to identify breakdown points across entry, ordering, waiting, and pickup stages.",
        "Iterated spatial layout strategies, shifting from visibility improvements to a directional flow architecture.",
        "Validated the redesign through follow-up interviews and layout walkthroughs to confirm reduced interruptions."
      ],
      images: [
        "https://lh3.googleusercontent.com/d/1qeu1IJqwqEf-2n9gCIaEaTcbgSwMN3zs"
      ]
    },
    solution: {
      description: "The final design introduces a spatial system that aligns the layout with the service sequence. By defining clear zones and directional movement, the café reduces congestion and improves both navigation and workflow.",
      features: [
        "One-Directional Customer Flow",
        "Digital Order Status Screens",
        "Designated Waiting Area",
        "Isolated Pickup Zone",
        "Clear Signage and Directional Indicators"
      ],
      images: [
        "https://lh3.googleusercontent.com/d/1XsSfTvVdFRNqePb9XY9GKJCEZKp1ewBz",
        "https://lh3.googleusercontent.com/d/1uFqZvsvJpNTH6U6OEJNkJyyK17dA7o4c",
        "https://lh3.googleusercontent.com/d/1S4PvbRS1GQ2prAaNW0qDGSHIVKNA2xNT"
      ]
    },
    impact: [
      "Improves peak-hour throughput by aligning spatial layout with service order.",
      "Reduces cognitive load for customers by clarifying movement through the space.",
      "Decreases staff interruptions by separating waiting and pickup zones.",
      "Balances stakeholder needs through a coordinated service system."
    ],
    reflection: [
      "Service design requires aligning spatial layout, human behavior, and process into a cohesive system.",
      "Strengthened my ability to translate research insights into spatial and service architecture decisions.",
      "Designing for both customer experience and staff workflow is essential for operational performance."
    ]
  }
];
