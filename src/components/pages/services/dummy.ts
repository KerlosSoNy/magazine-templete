import type { OfferStage, ServiceCategory } from './types'

export const legend = [
    { label: { en: 'Set Direction', ar: 'تحديد المسار' }, dot: '#0C312C' },
    { label: { en: 'Build and Deploy', ar: 'البناء والتنفيذ' }, dot: '#007F7F' },
    { label: { en: 'Scale and Sustain', ar: 'التوسع والاستدامة' }, dot: '#55C3C5' },
]

export const offerStages: OfferStage[] = [
    {
        title: { en: 'Assess', ar: 'تقييم' },
        description: {
            en: 'Assess current performance, capabilities, and processes against relevant best practices',
            ar: 'تقييم الأداء والقدرات والعمليات الحالية مقارنةً بأفضل الممارسات ذات الصلة',
        },
        icon: '/images/services/badges/assess.svg',
        outcomes: { en: 'Current-state assessment', ar: 'تقييم الوضع الراهن' },
        gains: { en: 'Theoretical', ar: 'نظري' },
    },
    {
        title: { en: 'Design', ar: 'تصميم' },
        description: {
            en: 'Develop the future solution, operating model, processes, requirements, and implementation approach',
            ar: 'تطوير الحل المستقبلي ونموذج التشغيل والعمليات والمتطلبات ومنهجية التنفيذ',
        },
        icon: '/images/services/badges/design.svg',
        outcomes: { en: 'Implementation roadmap', ar: 'خارطة طريق التنفيذ' },
        gains: { en: 'Theoretical', ar: 'نظري' },
    },
    {
        title: { en: 'Rollout', ar: 'التعميم' },
        description: {
            en: 'Replicate the new standard across relevant functions, business units and locations through adopting proper change management',
            ar: 'تعميم المعيار الجديد على الوظائف ووحدات الأعمال والمواقع ذات الصلة من خلال اعتماد إدارة تغيير فعّالة',
        },
        icon: '/images/services/badges/rollout.svg',
        iconBg: '#299c8b',
        outcomes: { en: 'Scaled implementation', ar: 'تنفيذ موسّع النطاق' },
        gains: { en: 'Realized', ar: 'محقَّق' },
    },
    {
        title: { en: 'Diagnose', ar: 'تشخيص' },
        description: {
            en: 'Identify the root causes of performance gaps and prioritize the most valuable improvement opportunities',
            ar: 'تحديد الأسباب الجذرية لفجوات الأداء وترتيب أولويات فرص التحسين الأعلى قيمة',
        },
        icon: '/images/services/badges/diagnose.svg',
        outcomes: { en: 'Prioritized improvement areas', ar: 'مجالات تحسين ذات أولوية' },
        gains: { en: 'Theoretical', ar: 'نظري' },
    },
    {
        title: { en: 'Implement', ar: 'تنفيذ' },
        description: {
            en: 'Pilot the solution in a controlled setting, refine it based on results, and implement it in collaboration with client teams',
            ar: 'تجربة الحل في بيئة محكومة، وتطويره بناءً على النتائج، وتنفيذه بالتعاون مع فرق العميل',
        },
        icon: '/images/services/badges/implement.svg',
        outcomes: { en: 'Validated operational solution', ar: 'حل تشغيلي مُثبَت الجدوى' },
        gains: { en: 'Deploy', ar: 'تشغيل' },
    },
    {
        title: { en: 'Review', ar: 'مراجعة' },
        description: {
            en: 'Evaluate performance continuity, confirm benefits achieved, strengthen governance, and identify improvement opportunities',
            ar: 'تقييم استمرارية الأداء، والتحقق من الفوائد المحققة، وتعزيز الحوكمة، وتحديد فرص التحسين',
        },
        icon: '/images/services/badges/review.svg',
        outcomes: { en: 'Benefits realization review', ar: 'مراجعة تحقيق الفوائد' },
        gains: { en: 'Sustained', ar: 'مستدام' },
    },
]

export const serviceCategories: ServiceCategory[] = [
    {
        key: 'procure',
        label: { en: 'Procure', ar: 'المشتريات' },
        tabIcon: '/images/services/tabs/procure.svg',
        bigIcon: '/images/services/tabs/procure-large.svg',
        photo: '/images/services/tabs/procure-photo.png',
        subtitle: {
            en: 'Turn sourcing strategies into measurable value drivers',
            ar: 'تحويل استراتيجيات التوريد إلى محركات قيمة قابلة للقياس',
        },
        description: {
            en: 'Empowering Saudi enterprises with automated workflows, localized compliance, and seamless vendor integration. Modernize your supply chain for the future of the Kingdom.',
            ar: 'تمكين المؤسسات السعودية من خلال سير عمل آلي، والامتثال المحلي، والتكامل السلس مع الموردين. طوّر سلسلة التوريد الخاصة بك لمستقبل المملكة.',
        },
        items: [
            {
                icon: '/images/services/grid/procurement-efficiency.svg',
                title: { en: 'Procurement Efficiency Programs', ar: 'برامج كفاءة المشتريات' },
                description: {
                    en: 'Streamline procurement workflows to reduce cycle times and eliminate redundancies. Leverage data analytics to identify cost-saving opportunities across the supply chain. Implement best practices that drive measurable improvements in operational performance.',
                    ar: 'تبسيط سير عمل المشتريات لتقليل زمن الدورة والقضاء على الازدواجية. الاستفادة من تحليلات البيانات لتحديد فرص خفض التكلفة عبر سلسلة التوريد. تطبيق أفضل الممارسات التي تحقق تحسينات ملموسة في الأداء التشغيلي.',
                },
            },
            {
                icon: '/images/services/grid/strategic-sourcing.svg',
                title: { en: 'Strategic Sourcing', ar: 'التوريد الاستراتيجي' },
                description: {
                    en: 'Develop comprehensive sourcing strategies aligned with organizational goals and market dynamics. Evaluate and select suppliers based on total cost of ownership rather than price alone. Build resilient supply networks that balance cost efficiency with risk mitigation.',
                    ar: 'وضع استراتيجيات توريد شاملة تتماشى مع أهداف المؤسسة وديناميكيات السوق. تقييم واختيار الموردين بناءً على إجمالي تكلفة الملكية وليس السعر فقط. بناء شبكات توريد مرنة توازن بين كفاءة التكلفة والحد من المخاطر.',
                },
            },
            {
                icon: '/images/services/grid/category-management.svg',
                title: { en: 'Category Management', ar: 'إدارة الفئات' },
                description: {
                    en: "Organize spend into logical categories to gain deeper visibility into purchasing patterns. Apply market intelligence and benchmarking to optimize each category's value contribution. Drive cross-functional collaboration to align category strategies with business objectives.",
                    ar: 'تنظيم الإنفاق ضمن فئات منطقية لتحقيق رؤية أعمق لأنماط الشراء. تطبيق معلومات السوق والمقارنات المرجعية لتحسين مساهمة كل فئة في القيمة. تعزيز التعاون بين الإدارات لمواءمة استراتيجيات الفئات مع أهداف الأعمال.',
                },
            },
            {
                icon: '/images/services/grid/supplier-relationship.svg',
                title: { en: 'Supplier Relationship Management', ar: 'إدارة علاقات الموردين' },
                description: {
                    en: 'Foster long-term partnerships with key suppliers to unlock innovation and mutual value creation. Establish performance metrics and regular review cadences to ensure accountability. Transform transactional relationships into strategic alliances that drive competitive advantage.',
                    ar: 'بناء شراكات طويلة الأمد مع الموردين الرئيسيين لإطلاق الابتكار وخلق قيمة مشتركة. وضع مؤشرات أداء ودورات مراجعة منتظمة لضمان المساءلة. تحويل العلاقات التعاملية إلى تحالفات استراتيجية تعزز الميزة التنافسية.',
                },
            },
            {
                icon: '/images/services/grid/contract-management.svg',
                title: { en: 'Contract Management', ar: 'إدارة العقود' },
                description: {
                    en: 'Centralize contract repositories to improve visibility, compliance, and renewal tracking. Negotiate favorable terms that protect the organization while enabling supplier flexibility. Automate key milestones and obligations to reduce risk and administrative overhead.',
                    ar: 'مركزة مستودعات العقود لتحسين الرؤية والامتثال وتتبع التجديد. التفاوض على شروط مواتية تحمي المؤسسة مع إتاحة المرونة للموردين. أتمتة المحطات والالتزامات الرئيسية لخفض المخاطر والأعباء الإدارية.',
                },
            },
            {
                icon: '/images/services/grid/supplier-development.svg',
                title: { en: 'Supplier Development', ar: 'تطوير الموردين' },
                description: {
                    en: 'Invest in supplier capabilities to elevate quality, delivery, and sustainability standards. Provide training, mentoring, and collaborative improvement programs to build capacity. Create a pipeline of high-performing suppliers ready to support future growth initiatives.',
                    ar: 'الاستثمار في قدرات الموردين لرفع معايير الجودة والتسليم والاستدامة. توفير التدريب والإرشاد وبرامج التحسين التشاركي لبناء القدرات. تكوين قاعدة من الموردين عالي الأداء جاهزة لدعم مبادرات النمو المستقبلية.',
                },
            },
            {
                icon: '/images/services/grid/capex-efficiency.svg',
                title: { en: 'CAPEX Efficiency', ar: 'كفاءة الإنفاق الرأسمالي' },
                description: {
                    en: 'Optimize capital expenditure planning through rigorous project evaluation and prioritization frameworks. Implement lifecycle cost analysis to make informed investment decisions beyond initial purchase price. Track asset utilization and ROI to continuously improve capital allocation strategies.',
                    ar: 'تحسين تخطيط الإنفاق الرأسمالي من خلال أطر صارمة لتقييم المشاريع وترتيب أولوياتها. تطبيق تحليل تكلفة دورة الحياة لاتخاذ قرارات استثمارية مستنيرة تتجاوز سعر الشراء الأولي. تتبع استخدام الأصول والعائد على الاستثمار لتحسين استراتيجيات تخصيص رأس المال باستمرار.',
                },
            },
            {
                icon: '/images/services/grid/product-cost-efficiency.svg',
                title: { en: 'Product Cost Efficiency', ar: 'كفاءة تكلفة المنتج' },
                description: {
                    en: 'Apply value engineering and should-cost modeling to identify cost reduction opportunities in product design. Collaborate with engineering and suppliers to achieve target costs without compromising quality. Continuously benchmark material and component costs against market indices and alternatives.',
                    ar: 'تطبيق هندسة القيمة ونماذج التكلفة المستهدفة لتحديد فرص خفض التكلفة في تصميم المنتج. التعاون مع فرق الهندسة والموردين لتحقيق التكاليف المستهدفة دون المساس بالجودة. مقارنة تكاليف المواد والمكونات باستمرار مع مؤشرات السوق والبدائل المتاحة.',
                },
            },
            {
                icon: '/images/services/grid/digital-procurement.svg',
                title: { en: 'Digital Procurement', ar: 'المشتريات الرقمية' },
                description: {
                    en: 'Deploy modern procurement platforms that automate requisitioning, approvals, and purchase order management. Leverage AI and machine learning to enhance spend analysis, demand forecasting, and supplier matching. Enable real-time visibility and self-service capabilities that empower stakeholders across the organization.',
                    ar: 'نشر منصات مشتريات حديثة تُؤتمت طلبات الشراء والموافقات وإدارة أوامر الشراء. الاستفادة من الذكاء الاصطناعي والتعلم الآلي لتعزيز تحليل الإنفاق والتنبؤ بالطلب ومطابقة الموردين. إتاحة رؤية آنية وقدرات الخدمة الذاتية التي تمكّن أصحاب المصلحة في جميع أنحاء المؤسسة.',
                },
            },
        ],
    },
    {
        key: 'process',
        label: { en: 'Process', ar: 'العمليات' },
        tabIcon: '/images/services/tabs/process.svg',
        bigIcon: '/images/services/tabs/process.svg',
        photo: '/images/home/case2.png',
        subtitle: {
            en: 'Turn operating models into repeatable, scalable execution',
            ar: 'تحويل نماذج التشغيل إلى تنفيذ قابل للتكرار والتوسع',
        },
        description: {
            en: 'Redesigning core workflows and governance so Saudi enterprises can operate with clarity, consistency, and speed. We translate strategy into day-to-day processes your teams can actually run.',
            ar: 'إعادة تصميم سير العمل الأساسي والحوكمة لتمكين المؤسسات السعودية من العمل بوضوح واتساق وسرعة. نترجم الاستراتيجية إلى عمليات يومية يمكن لفرقكم تنفيذها فعلياً.',
        },
        items: [
            {
                icon: '/images/services/grid/category-management.svg',
                title: { en: 'Process Mapping & Redesign', ar: 'رسم وإعادة تصميم العمليات' },
                description: {
                    en: 'Document and re-engineer core workflows to remove bottlenecks and duplicated effort. Align every step to a clear owner and outcome. Build processes that scale as the organization grows.',
                    ar: 'توثيق وإعادة هندسة سير العمل الأساسي لإزالة نقاط الاختناق والجهد المكرر. ربط كل خطوة بمالك ونتيجة واضحين. بناء عمليات قابلة للتوسع مع نمو المؤسسة.',
                },
            },
            {
                icon: '/images/services/grid/strategic-sourcing.svg',
                title: { en: 'Performance Governance', ar: 'حوكمة الأداء' },
                description: {
                    en: 'Establish KPIs, review cadences, and escalation paths that keep operations accountable. Give leadership real-time visibility into what is working and what needs attention. Turn governance into a driver of performance, not a reporting burden.',
                    ar: 'وضع مؤشرات أداء رئيسية ودورات مراجعة ومسارات تصعيد تضمن مساءلة العمليات. منح القيادة رؤية آنية لما ينجح وما يحتاج إلى اهتمام. تحويل الحوكمة إلى محرك للأداء بدلاً من عبء إعداد التقارير.',
                },
            },
            {
                icon: '/images/services/grid/supplier-relationship.svg',
                title: { en: 'Change Management', ar: 'إدارة التغيير' },
                description: {
                    en: 'Prepare people and teams for new ways of working through structured communication and training. Build coalitions of champions who reinforce adoption on the ground. Reduce resistance by involving stakeholders early and often.',
                    ar: 'إعداد الأفراد والفرق لأساليب عمل جديدة من خلال تواصل وتدريب منظمين. بناء تحالفات من الداعمين لتعزيز التبني على أرض الواقع. تقليل المقاومة من خلال إشراك أصحاب المصلحة مبكراً وبشكل مستمر.',
                },
            },
            {
                icon: '/images/services/grid/procurement-efficiency.svg',
                title: { en: 'Quality & Compliance Controls', ar: 'ضوابط الجودة والامتثال' },
                description: {
                    en: 'Embed quality checkpoints and compliance controls directly into daily workflows. Reduce rework and audit findings through built-in verification steps. Keep operations aligned with regulatory and industry standards.',
                    ar: 'دمج نقاط تحقق للجودة وضوابط امتثال مباشرة ضمن سير العمل اليومي. تقليل إعادة العمل وملاحظات التدقيق من خلال خطوات تحقق مدمجة. إبقاء العمليات متوافقة مع المعايير التنظيمية ومعايير القطاع.',
                },
            },
            {
                icon: '/images/services/grid/contract-management.svg',
                title: { en: 'Standard Operating Procedures', ar: 'إجراءات التشغيل الموحدة' },
                description: {
                    en: 'Codify best practices into clear, actionable SOPs that new and existing staff can follow. Standardize execution across teams, sites, and shifts. Make institutional knowledge durable beyond any one individual.',
                    ar: 'توثيق أفضل الممارسات في إجراءات تشغيل واضحة وقابلة للتطبيق يتبعها الموظفون الجدد والحاليون. توحيد التنفيذ عبر الفرق والمواقع والورديات. جعل المعرفة المؤسسية مستدامة بعيداً عن الاعتماد على أفراد بعينهم.',
                },
            },
            {
                icon: '/images/services/grid/digital-procurement.svg',
                title: { en: 'Workflow Automation', ar: 'أتمتة سير العمل' },
                description: {
                    en: 'Identify repetitive, rules-based tasks that are ready for automation. Deploy tools that free up teams to focus on higher-value work. Reduce manual errors and processing time across the operation.',
                    ar: 'تحديد المهام المتكررة القائمة على قواعد ثابتة الجاهزة للأتمتة. نشر أدوات تحرر الفرق للتركيز على الأعمال الأعلى قيمة. تقليل الأخطاء اليدوية ووقت المعالجة عبر العملية.',
                },
            },
            {
                icon: '/images/services/grid/capex-efficiency.svg',
                title: { en: 'Cost-to-Serve Optimization', ar: 'تحسين تكلفة الخدمة' },
                description: {
                    en: 'Break down the true cost of delivering each process, product, or service line. Identify where effort and spend are misaligned with value delivered. Reallocate resources toward the activities that matter most.',
                    ar: 'تحليل التكلفة الحقيقية لتقديم كل عملية أو منتج أو خط خدمة. تحديد المواضع التي لا يتوافق فيها الجهد والإنفاق مع القيمة المقدَّمة. إعادة توجيه الموارد نحو الأنشطة الأكثر أهمية.',
                },
            },
            {
                icon: '/images/services/grid/supplier-development.svg',
                title: { en: 'Continuous Improvement Programs', ar: 'برامج التحسين المستمر' },
                description: {
                    en: 'Build a structured cadence for identifying, testing, and scaling process improvements. Equip teams with simple tools to surface and solve problems themselves. Make continuous improvement part of the culture, not a one-off project.',
                    ar: 'بناء منهجية منظمة لتحديد تحسينات العمليات واختبارها وتوسيع نطاقها. تزويد الفرق بأدوات بسيطة لاكتشاف المشكلات وحلها بأنفسهم. جعل التحسين المستمر جزءاً من الثقافة المؤسسية وليس مشروعاً لمرة واحدة.',
                },
            },
            {
                icon: '/images/services/grid/product-cost-efficiency.svg',
                title: { en: 'Organizational Design', ar: 'التصميم التنظيمي' },
                description: {
                    en: 'Align team structures, roles, and decision rights with the processes they support. Remove layers and handoffs that slow execution down. Design an organization built around how work actually gets done.',
                    ar: 'مواءمة هياكل الفرق والأدوار وصلاحيات اتخاذ القرار مع العمليات التي تدعمها. إزالة المستويات ونقاط التسليم التي تبطئ التنفيذ. تصميم مؤسسة مبنية على الطريقة الفعلية لإنجاز العمل.',
                },
            },
        ],
    },
    {
        key: 'fulfill',
        label: { en: 'Fulfill', ar: 'التسليم' },
        tabIcon: '/images/services/tabs/fulfill.svg',
        bigIcon: '/images/services/tabs/fulfill.svg',
        photo: '/images/home/case3.png',
        subtitle: {
            en: 'Deliver with precision from order to last mile',
            ar: 'التسليم بدقة من الطلب وحتى الميل الأخير',
        },
        description: {
            en: "Building resilient fulfillment and delivery operations that keep commitments to customers and partners, from warehouse to final destination, across the Kingdom's evolving logistics landscape.",
            ar: 'بناء عمليات تسليم وتوصيل مرنة تفي بالالتزامات تجاه العملاء والشركاء، من المستودع وحتى الوجهة النهائية، في ظل المشهد اللوجستي المتطور بالمملكة.',
        },
        items: [
            {
                icon: '/images/services/grid/procurement-efficiency.svg',
                title: { en: 'Fulfillment Operations Excellence', ar: 'تميّز عمليات التسليم' },
                description: {
                    en: 'Streamline pick, pack, and dispatch operations to raise throughput without adding headcount. Reduce errors and delays across the fulfillment cycle. Build a fulfillment engine that scales with demand.',
                    ar: 'تبسيط عمليات الالتقاط والتعبئة والشحن لرفع الإنتاجية دون زيادة عدد الموظفين. تقليل الأخطاء والتأخير عبر دورة التسليم. بناء محرك تسليم يتوسع مع نمو الطلب.',
                },
            },
            {
                icon: '/images/services/grid/strategic-sourcing.svg',
                title: { en: 'Service Level Management', ar: 'إدارة مستويات الخدمة' },
                description: {
                    en: 'Set clear service-level commitments and track performance against them in real time. Identify root causes when targets slip and act before customers notice. Turn service levels into a competitive advantage.',
                    ar: 'تحديد التزامات واضحة لمستوى الخدمة وتتبع الأداء مقابلها بشكل آني. تحديد الأسباب الجذرية عند تراجع المؤشرات والتحرك قبل أن يلاحظ العملاء ذلك. تحويل مستويات الخدمة إلى ميزة تنافسية.',
                },
            },
            {
                icon: '/images/services/grid/category-management.svg',
                title: { en: 'Demand & Inventory Planning', ar: 'تخطيط الطلب والمخزون' },
                description: {
                    en: 'Forecast demand with greater accuracy to avoid stockouts and excess inventory. Balance service levels against working-capital targets. Keep the right stock, in the right place, at the right time.',
                    ar: 'التنبؤ بالطلب بدقة أعلى لتفادي نفاد المخزون أو تراكمه الزائد. الموازنة بين مستويات الخدمة وأهداف رأس المال العامل. الحفاظ على المخزون المناسب، في المكان المناسب، في الوقت المناسب.',
                },
            },
            {
                icon: '/images/services/grid/supplier-relationship.svg',
                title: { en: 'Customer Fulfillment Experience', ar: 'تجربة تسليم العملاء' },
                description: {
                    en: 'Design the fulfillment journey around what customers actually expect. Improve visibility and communication from order placement to delivery. Turn fulfillment into a driver of loyalty, not just logistics.',
                    ar: 'تصميم رحلة التسليم بناءً على التوقعات الفعلية للعملاء. تحسين الرؤية والتواصل من لحظة تقديم الطلب وحتى التسليم. تحويل التسليم إلى محرك للولاء وليس مجرد عملية لوجستية.',
                },
            },
            {
                icon: '/images/services/grid/contract-management.svg',
                title: { en: 'Returns & Reverse Logistics', ar: 'المرتجعات واللوجستيات العكسية' },
                description: {
                    en: 'Simplify the returns process for customers while controlling cost on the back end. Recover value from returned goods through better sorting and disposition. Turn reverse logistics from a cost center into a managed process.',
                    ar: 'تبسيط عملية الإرجاع للعملاء مع التحكم في التكلفة من الجانب التشغيلي. استرداد القيمة من البضائع المرتجعة من خلال فرز وتصريف أفضل. تحويل اللوجستيات العكسية من مركز تكلفة إلى عملية مُدارة.',
                },
            },
            {
                icon: '/images/services/grid/supplier-development.svg',
                title: { en: 'Last-Mile Delivery Optimization', ar: 'تحسين توصيل الميل الأخير' },
                description: {
                    en: 'Optimize routing, scheduling, and carrier mix to reduce delivery cost and time. Improve on-time performance across urban and regional networks. Make the last mile a strength, not the weakest link.',
                    ar: 'تحسين تخطيط المسارات والجدولة ومزيج شركات الشحن لخفض تكلفة ووقت التوصيل. تحسين الأداء في الالتزام بالمواعيد عبر الشبكات الحضرية والإقليمية. تحويل الميل الأخير إلى نقطة قوة بدلاً من أضعف حلقة.',
                },
            },
            {
                icon: '/images/services/grid/capex-efficiency.svg',
                title: { en: 'Order-to-Cash Management', ar: 'إدارة دورة الطلب حتى التحصيل' },
                description: {
                    en: 'Tighten the process from order capture through invoicing and collection. Reduce cycle time and days sales outstanding. Improve cash flow visibility across the fulfillment chain.',
                    ar: 'تشديد العملية من استلام الطلب وحتى إصدار الفواتير والتحصيل. تقليل زمن الدورة وأيام المبيعات المستحقة. تحسين رؤية التدفق النقدي عبر سلسلة التسليم.',
                },
            },
            {
                icon: '/images/services/grid/product-cost-efficiency.svg',
                title: { en: 'Freight & Carrier Management', ar: 'إدارة الشحن والناقلين' },
                description: {
                    en: 'Benchmark and renegotiate freight rates across carriers and lanes. Balance cost, speed, and reliability in carrier selection. Build a resilient, diversified transportation network.',
                    ar: 'مقارنة أسعار الشحن وإعادة التفاوض عليها عبر الناقلين والمسارات. الموازنة بين التكلفة والسرعة والموثوقية عند اختيار الناقل. بناء شبكة نقل مرنة ومتنوعة.',
                },
            },
            {
                icon: '/images/services/grid/digital-procurement.svg',
                title: { en: 'Logistics Technology Enablement', ar: 'تمكين التقنية اللوجستية' },
                description: {
                    en: 'Deploy tracking, routing, and warehouse management systems that give real-time visibility. Connect fulfillment data to planning and customer service teams. Enable a digitally-driven logistics operation.',
                    ar: 'نشر أنظمة تتبع وتخطيط مسارات وإدارة مستودعات توفر رؤية آنية. ربط بيانات التسليم بفرق التخطيط وخدمة العملاء. تمكين عملية لوجستية قائمة على التقنية الرقمية.',
                },
            },
        ],
    },
    {
        key: 'integrate',
        label: { en: 'Integrate', ar: 'التكامل' },
        tabIcon: '/images/services/tabs/integrate.svg',
        bigIcon: '/images/services/tabs/integrate.svg',
        photo: '/images/home/case1.png',
        subtitle: {
            en: 'Align people, systems, and partners around one operating rhythm',
            ar: 'مواءمة الأفراد والأنظمة والشركاء حول إيقاع تشغيلي واحد',
        },
        description: {
            en: 'Connecting strategy, technology, and stakeholders so new capabilities stick. We help Saudi organizations integrate new systems, teams, and partners without disrupting the business they run today.',
            ar: 'ربط الاستراتيجية والتقنية وأصحاب المصلحة لضمان رسوخ القدرات الجديدة. نساعد المؤسسات السعودية على دمج الأنظمة والفرق والشركاء الجدد دون تعطيل الأعمال القائمة.',
        },
        items: [
            {
                icon: '/images/services/grid/procurement-efficiency.svg',
                title: { en: 'Technology Roadmapping', ar: 'خارطة طريق التقنية' },
                description: {
                    en: 'Sequence technology investments against business priorities and readiness. Avoid the cost of parallel, conflicting systems initiatives. Give leadership a clear path from current state to target architecture.',
                    ar: 'ترتيب الاستثمارات التقنية وفق أولويات الأعمال ومستوى الجاهزية. تجنب تكلفة المبادرات المتوازية والمتعارضة للأنظمة. منح القيادة مساراً واضحاً من الوضع الحالي إلى البنية المستهدفة.',
                },
            },
            {
                icon: '/images/services/grid/strategic-sourcing.svg',
                title: { en: 'Governance & Risk Alignment', ar: 'مواءمة الحوكمة والمخاطر' },
                description: {
                    en: 'Align new capabilities with existing governance, risk, and compliance frameworks. Close gaps before they become audit findings or operational risk. Keep integration efforts accountable to the same standards as the core business.',
                    ar: 'مواءمة القدرات الجديدة مع أطر الحوكمة والمخاطر والامتثال القائمة. سد الفجوات قبل أن تتحول إلى ملاحظات تدقيق أو مخاطر تشغيلية. إخضاع جهود التكامل لنفس معايير مساءلة الأعمال الأساسية.',
                },
            },
            {
                icon: '/images/services/grid/category-management.svg',
                title: { en: 'Cross-Functional Collaboration', ar: 'التعاون بين الإدارات' },
                description: {
                    en: 'Break down silos between teams that need to work together on integration. Create shared accountability across functions and business units. Turn cross-functional friction into coordinated execution.',
                    ar: 'كسر الحواجز بين الفرق التي يتطلب عملها التكامل. خلق مساءلة مشتركة عبر الوظائف ووحدات الأعمال. تحويل الاحتكاك بين الإدارات إلى تنفيذ منسّق.',
                },
            },
            {
                icon: '/images/services/grid/supplier-relationship.svg',
                title: { en: 'Vendor & Partner Onboarding', ar: 'تأهيل الموردين والشركاء' },
                description: {
                    en: 'Streamline how new vendors and partners are evaluated, contracted, and integrated. Reduce the time from agreement to productive collaboration. Build repeatable onboarding playbooks for future partnerships.',
                    ar: 'تبسيط آلية تقييم الموردين والشركاء الجدد والتعاقد معهم ودمجهم. تقليل الوقت اللازم من الاتفاق وحتى التعاون المثمر. بناء أدلة تأهيل قابلة للتكرار للشراكات المستقبلية.',
                },
            },
            {
                icon: '/images/services/grid/contract-management.svg',
                title: { en: 'Compliance Integration', ar: 'دمج الامتثال' },
                description: {
                    en: 'Embed regulatory and contractual requirements directly into new processes and systems. Reduce the risk of compliance gaps during periods of change. Keep integration efforts audit-ready from day one.',
                    ar: 'دمج المتطلبات التنظيمية والتعاقدية مباشرة ضمن العمليات والأنظمة الجديدة. تقليل مخاطر فجوات الامتثال خلال فترات التغيير. إبقاء جهود التكامل جاهزة للتدقيق منذ اليوم الأول.',
                },
            },
            {
                icon: '/images/services/grid/supplier-development.svg',
                title: { en: 'Change & Adoption Management', ar: 'إدارة التغيير والتبني' },
                description: {
                    en: 'Prepare the organization for new systems, teams, or ways of working. Track adoption and address resistance before it stalls momentum. Make integration stick well beyond go-live.',
                    ar: 'إعداد المؤسسة لأنظمة أو فرق أو أساليب عمل جديدة. تتبع مستوى التبني ومعالجة المقاومة قبل أن تعيق الزخم. ترسيخ التكامل بما يتجاوز لحظة الإطلاق.',
                },
            },
            {
                icon: '/images/services/grid/capex-efficiency.svg',
                title: { en: 'Value Realization Tracking', ar: 'تتبع تحقيق القيمة' },
                description: {
                    en: 'Define the value case behind every integration effort up front. Track realized benefits against the original business case. Keep integration accountable to the outcomes it was meant to deliver.',
                    ar: 'تحديد الجدوى المرجوة من كل جهد تكامل منذ البداية. تتبع الفوائد المحققة مقارنةً بدراسة الجدوى الأصلية. إخضاع جهود التكامل للمساءلة عن النتائج المستهدفة.',
                },
            },
            {
                icon: '/images/services/grid/product-cost-efficiency.svg',
                title: { en: 'Post-Merger Integration', ar: 'تكامل ما بعد الاندماج' },
                description: {
                    en: 'Align systems, processes, and teams across merged or acquired entities. Prioritize integration workstreams by value and risk. Protect business continuity while capturing synergies.',
                    ar: 'مواءمة الأنظمة والعمليات والفرق عبر الكيانات المندمجة أو المستحوذ عليها. ترتيب أولويات مسارات التكامل وفق القيمة والمخاطر. الحفاظ على استمرارية الأعمال مع تحقيق التآزر.',
                },
            },
            {
                icon: '/images/services/grid/digital-procurement.svg',
                title: { en: 'Systems & Data Integration', ar: 'تكامل الأنظمة والبيانات' },
                description: {
                    en: 'Connect disparate systems and data sources into a single source of truth. Reduce manual reconciliation and reporting delays. Give stakeholders one consistent view of the business.',
                    ar: 'ربط الأنظمة ومصادر البيانات المتفرقة في مصدر موحد للحقيقة. تقليل التسويات اليدوية وتأخر التقارير. منح أصحاب المصلحة رؤية موحدة ومتسقة للأعمال.',
                },
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
