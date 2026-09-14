import type { OfferStage, ServiceCategory } from './types'

export const legend = [
    { label: 'Set Direction', dot: '#0C312C' },
    { label: 'build and Deploy', dot: '#007F7F' },
    { label: 'Scale and Sustain', dot: '#55C3C5' },
]

export const offerStages: OfferStage[] = [
    {
        title: 'Assess',
        description: 'Assess current performance, capabilities, and processes against relevant best practices',
        icon: '/images/services/badges/assess.svg',
        outcomes: 'Current-state assessment',
        gains: 'Theoretical',
    },
    {
        title: 'Design',
        description: 'Develop the future solution, operating model, processes, requirements, and implementation approach',
        icon: '/images/services/badges/design.svg',
        outcomes: 'Implementation roadmap',
        gains: 'Theoretical',
    },
    {
        title: 'Rollout',
        description: 'Replicate the new standard across relevant functions, business units and locations through adopting proper change management',
        icon: '/images/services/badges/rollout.svg',
        iconBg: '#299c8b',
        outcomes: 'Scaled implementation',
        gains: 'Realized',
    },
    {
        title: 'Diagnose',
        description: 'Identify the root causes of performance gaps and prioritize the most valuable improvement opportunities',
        icon: '/images/services/badges/diagnose.svg',
        outcomes: 'Prioritized improvement areas',
        gains: 'Theoretical',
    },
    {
        title: 'Implement',
        description: 'Pilot the solution in a controlled setting, refine it based on results, and implement it in collaboration with client teams',
        icon: '/images/services/badges/implement.svg',
        outcomes: 'Validated operational solution',
        gains: 'Deploy',
    },
    {
        title: 'Review',
        description: 'Evaluate performance continuity, confirm benefits achieved, strengthen governance, and identify improvement opportunities',
        icon: '/images/services/badges/review.svg',
        outcomes: 'Benefits realization review',
        gains: 'Sustained',
    },
]

export const serviceCategories: ServiceCategory[] = [
    {
        key: 'procure',
        label: 'Procure',
        tabIcon: '/images/services/tabs/procure.svg',
        bigIcon: '/images/services/tabs/procure-large.svg',
        photo: '/images/services/tabs/procure-photo.png',
        subtitle: 'Turn sourcing strategies into measurable value drivers',
        description: 'Empowering Saudi enterprises with automated workflows, localized compliance, and seamless vendor integration. Modernize your supply chain for the future of the Kingdom.',
        items: [
            {
                icon: '/images/services/grid/procurement-efficiency.svg',
                title: 'Procurement Efficiency Programs',
                description: 'Streamline procurement workflows to reduce cycle times and eliminate redundancies. Leverage data analytics to identify cost-saving opportunities across the supply chain. Implement best practices that drive measurable improvements in operational performance.',
            },
            {
                icon: '/images/services/grid/strategic-sourcing.svg',
                title: 'Strategic Sourcing',
                description: 'Develop comprehensive sourcing strategies aligned with organizational goals and market dynamics. Evaluate and select suppliers based on total cost of ownership rather than price alone. Build resilient supply networks that balance cost efficiency with risk mitigation.',
            },
            {
                icon: '/images/services/grid/category-management.svg',
                title: 'Category Management',
                description: "Organize spend into logical categories to gain deeper visibility into purchasing patterns. Apply market intelligence and benchmarking to optimize each category's value contribution. Drive cross-functional collaboration to align category strategies with business objectives.",
            },
            {
                icon: '/images/services/grid/supplier-relationship.svg',
                title: 'Supplier Relationship Management',
                description: 'Foster long-term partnerships with key suppliers to unlock innovation and mutual value creation. Establish performance metrics and regular review cadences to ensure accountability. Transform transactional relationships into strategic alliances that drive competitive advantage.',
            },
            {
                icon: '/images/services/grid/contract-management.svg',
                title: 'Contract Management',
                description: 'Centralize contract repositories to improve visibility, compliance, and renewal tracking. Negotiate favorable terms that protect the organization while enabling supplier flexibility. Automate key milestones and obligations to reduce risk and administrative overhead.',
            },
            {
                icon: '/images/services/grid/supplier-development.svg',
                title: 'Supplier Development',
                description: 'Invest in supplier capabilities to elevate quality, delivery, and sustainability standards. Provide training, mentoring, and collaborative improvement programs to build capacity. Create a pipeline of high-performing suppliers ready to support future growth initiatives.',
            },
            {
                icon: '/images/services/grid/capex-efficiency.svg',
                title: 'CAPEX Efficiency',
                description: 'Optimize capital expenditure planning through rigorous project evaluation and prioritization frameworks. Implement lifecycle cost analysis to make informed investment decisions beyond initial purchase price. Track asset utilization and ROI to continuously improve capital allocation strategies.',
            },
            {
                icon: '/images/services/grid/product-cost-efficiency.svg',
                title: 'Product Cost Efficiency',
                description: 'Apply value engineering and should-cost modeling to identify cost reduction opportunities in product design. Collaborate with engineering and suppliers to achieve target costs without compromising quality. Continuously benchmark material and component costs against market indices and alternatives.',
            },
            {
                icon: '/images/services/grid/digital-procurement.svg',
                title: 'Digital Procurement',
                description: 'Deploy modern procurement platforms that automate requisitioning, approvals, and purchase order management. Leverage AI and machine learning to enhance spend analysis, demand forecasting, and supplier matching. Enable real-time visibility and self-service capabilities that empower stakeholders across the organization.',
            },
        ],
    },
    {
        key: 'process',
        label: 'Process',
        tabIcon: '/images/services/tabs/process.svg',
        bigIcon: '/images/services/tabs/process.svg',
        photo: '/images/home/case2.png',
        subtitle: 'Turn operating models into repeatable, scalable execution',
        description: "Redesigning core workflows and governance so Saudi enterprises can operate with clarity, consistency, and speed. We translate strategy into day-to-day processes your teams can actually run.",
        items: [
            {
                icon: '/images/services/grid/category-management.svg',
                title: 'Process Mapping & Redesign',
                description: 'Document and re-engineer core workflows to remove bottlenecks and duplicated effort. Align every step to a clear owner and outcome. Build processes that scale as the organization grows.',
            },
            {
                icon: '/images/services/grid/strategic-sourcing.svg',
                title: 'Performance Governance',
                description: 'Establish KPIs, review cadences, and escalation paths that keep operations accountable. Give leadership real-time visibility into what is working and what needs attention. Turn governance into a driver of performance, not a reporting burden.',
            },
            {
                icon: '/images/services/grid/supplier-relationship.svg',
                title: 'Change Management',
                description: 'Prepare people and teams for new ways of working through structured communication and training. Build coalitions of champions who reinforce adoption on the ground. Reduce resistance by involving stakeholders early and often.',
            },
            {
                icon: '/images/services/grid/procurement-efficiency.svg',
                title: 'Quality & Compliance Controls',
                description: 'Embed quality checkpoints and compliance controls directly into daily workflows. Reduce rework and audit findings through built-in verification steps. Keep operations aligned with regulatory and industry standards.',
            },
            {
                icon: '/images/services/grid/contract-management.svg',
                title: 'Standard Operating Procedures',
                description: 'Codify best practices into clear, actionable SOPs that new and existing staff can follow. Standardize execution across teams, sites, and shifts. Make institutional knowledge durable beyond any one individual.',
            },
            {
                icon: '/images/services/grid/digital-procurement.svg',
                title: 'Workflow Automation',
                description: 'Identify repetitive, rules-based tasks that are ready for automation. Deploy tools that free up teams to focus on higher-value work. Reduce manual errors and processing time across the operation.',
            },
            {
                icon: '/images/services/grid/capex-efficiency.svg',
                title: 'Cost-to-Serve Optimization',
                description: 'Break down the true cost of delivering each process, product, or service line. Identify where effort and spend are misaligned with value delivered. Reallocate resources toward the activities that matter most.',
            },
            {
                icon: '/images/services/grid/supplier-development.svg',
                title: 'Continuous Improvement Programs',
                description: 'Build a structured cadence for identifying, testing, and scaling process improvements. Equip teams with simple tools to surface and solve problems themselves. Make continuous improvement part of the culture, not a one-off project.',
            },
            {
                icon: '/images/services/grid/product-cost-efficiency.svg',
                title: 'Organizational Design',
                description: 'Align team structures, roles, and decision rights with the processes they support. Remove layers and handoffs that slow execution down. Design an organization built around how work actually gets done.',
            },
        ],
    },
    {
        key: 'fulfill',
        label: 'Fulfill',
        tabIcon: '/images/services/tabs/fulfill.svg',
        bigIcon: '/images/services/tabs/fulfill.svg',
        photo: '/images/home/case3.png',
        subtitle: 'Deliver with precision from order to last mile',
        description: "Building resilient fulfillment and delivery operations that keep commitments to customers and partners, from warehouse to final destination, across the Kingdom's evolving logistics landscape.",
        items: [
            {
                icon: '/images/services/grid/procurement-efficiency.svg',
                title: 'Fulfillment Operations Excellence',
                description: 'Streamline pick, pack, and dispatch operations to raise throughput without adding headcount. Reduce errors and delays across the fulfillment cycle. Build a fulfillment engine that scales with demand.',
            },
            {
                icon: '/images/services/grid/strategic-sourcing.svg',
                title: 'Service Level Management',
                description: 'Set clear service-level commitments and track performance against them in real time. Identify root causes when targets slip and act before customers notice. Turn service levels into a competitive advantage.',
            },
            {
                icon: '/images/services/grid/category-management.svg',
                title: 'Demand & Inventory Planning',
                description: 'Forecast demand with greater accuracy to avoid stockouts and excess inventory. Balance service levels against working-capital targets. Keep the right stock, in the right place, at the right time.',
            },
            {
                icon: '/images/services/grid/supplier-relationship.svg',
                title: 'Customer Fulfillment Experience',
                description: 'Design the fulfillment journey around what customers actually expect. Improve visibility and communication from order placement to delivery. Turn fulfillment into a driver of loyalty, not just logistics.',
            },
            {
                icon: '/images/services/grid/contract-management.svg',
                title: 'Returns & Reverse Logistics',
                description: 'Simplify the returns process for customers while controlling cost on the back end. Recover value from returned goods through better sorting and disposition. Turn reverse logistics from a cost center into a managed process.',
            },
            {
                icon: '/images/services/grid/supplier-development.svg',
                title: 'Last-Mile Delivery Optimization',
                description: 'Optimize routing, scheduling, and carrier mix to reduce delivery cost and time. Improve on-time performance across urban and regional networks. Make the last mile a strength, not the weakest link.',
            },
            {
                icon: '/images/services/grid/capex-efficiency.svg',
                title: 'Order-to-Cash Management',
                description: 'Tighten the process from order capture through invoicing and collection. Reduce cycle time and days sales outstanding. Improve cash flow visibility across the fulfillment chain.',
            },
            {
                icon: '/images/services/grid/product-cost-efficiency.svg',
                title: 'Freight & Carrier Management',
                description: 'Benchmark and renegotiate freight rates across carriers and lanes. Balance cost, speed, and reliability in carrier selection. Build a resilient, diversified transportation network.',
            },
            {
                icon: '/images/services/grid/digital-procurement.svg',
                title: 'Logistics Technology Enablement',
                description: 'Deploy tracking, routing, and warehouse management systems that give real-time visibility. Connect fulfillment data to planning and customer service teams. Enable a digitally-driven logistics operation.',
            },
        ],
    },
    {
        key: 'integrate',
        label: 'Integrate',
        tabIcon: '/images/services/tabs/integrate.svg',
        bigIcon: '/images/services/tabs/integrate.svg',
        photo: '/images/home/case1.png',
        subtitle: 'Align people, systems, and partners around one operating rhythm',
        description: 'Connecting strategy, technology, and stakeholders so new capabilities stick. We help Saudi organizations integrate new systems, teams, and partners without disrupting the business they run today.',
        items: [
            {
                icon: '/images/services/grid/procurement-efficiency.svg',
                title: 'Technology Roadmapping',
                description: 'Sequence technology investments against business priorities and readiness. Avoid the cost of parallel, conflicting systems initiatives. Give leadership a clear path from current state to target architecture.',
            },
            {
                icon: '/images/services/grid/strategic-sourcing.svg',
                title: 'Governance & Risk Alignment',
                description: 'Align new capabilities with existing governance, risk, and compliance frameworks. Close gaps before they become audit findings or operational risk. Keep integration efforts accountable to the same standards as the core business.',
            },
            {
                icon: '/images/services/grid/category-management.svg',
                title: 'Cross-Functional Collaboration',
                description: 'Break down silos between teams that need to work together on integration. Create shared accountability across functions and business units. Turn cross-functional friction into coordinated execution.',
            },
            {
                icon: '/images/services/grid/supplier-relationship.svg',
                title: 'Vendor & Partner Onboarding',
                description: 'Streamline how new vendors and partners are evaluated, contracted, and integrated. Reduce the time from agreement to productive collaboration. Build repeatable onboarding playbooks for future partnerships.',
            },
            {
                icon: '/images/services/grid/contract-management.svg',
                title: 'Compliance Integration',
                description: 'Embed regulatory and contractual requirements directly into new processes and systems. Reduce the risk of compliance gaps during periods of change. Keep integration efforts audit-ready from day one.',
            },
            {
                icon: '/images/services/grid/supplier-development.svg',
                title: 'Change & Adoption Management',
                description: 'Prepare the organization for new systems, teams, or ways of working. Track adoption and address resistance before it stalls momentum. Make integration stick well beyond go-live.',
            },
            {
                icon: '/images/services/grid/capex-efficiency.svg',
                title: 'Value Realization Tracking',
                description: 'Define the value case behind every integration effort up front. Track realized benefits against the original business case. Keep integration accountable to the outcomes it was meant to deliver.',
            },
            {
                icon: '/images/services/grid/product-cost-efficiency.svg',
                title: 'Post-Merger Integration',
                description: 'Align systems, processes, and teams across merged or acquired entities. Prioritize integration workstreams by value and risk. Protect business continuity while capturing synergies.',
            },
            {
                icon: '/images/services/grid/digital-procurement.svg',
                title: 'Systems & Data Integration',
                description: 'Connect disparate systems and data sources into a single source of truth. Reduce manual reconciliation and reporting delays. Give stakeholders one consistent view of the business.',
            },
        ],
    },
]

export const clientLogos = [
    '/images/services/clients/logo-1.png',
    '/images/services/clients/logo-2.png',
    '/images/services/clients/logo-3.png',
    '/images/services/clients/logo-4.png',
    '/images/services/clients/logo-5.png',
    '/images/services/clients/logo-6.png',
    '/images/services/clients/logo-7.png',
    '/images/services/clients/logo-8.png',
    '/images/services/clients/logo-9.png',
]
