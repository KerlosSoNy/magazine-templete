import type { ArticleItem } from './types'

const author = {
    name: 'Lina Haddad',
    role: { en: 'Partner and Creative Team Lead', ar: 'شريكة ورئيسة الفريق الإبداعي' },
    avatar: '/images/articles/author-avatar.png',
}

export const articles: ArticleItem[] = [
    {
        industry: { en: 'Manufacturing', ar: 'التصنيع' },
        year: '2025',
        title: {
            en: 'Driving Excellence in Manufacturing and Supply Chain Management',
            ar: 'الريادة في التميز بإدارة التصنيع وسلسلة التوريد',
        },
        slug: 'driving-excellence-manufacturing-supply-chain',
        href: '/articles/driving-excellence-manufacturing-supply-chain',
        excerpt: {
            en: 'Manufacturing and Supply Chain Leadership: Strategies for Optimizing Efficiency and Driving Innovation',
            ar: 'القيادة في التصنيع وسلسلة التوريد: استراتيجيات لتحسين الكفاءة ودفع الابتكار',
        },
        image: '/images/articles/manufacturing.png',
        detail: {
            heroImage: '/images/articles/manufacturing.png',
            subtitle: {
                en: 'Proven Strategies to Optimize Efficiency, Foster Innovation, and Navigate Market Challenges with Confidence',
                ar: 'استراتيجيات مثبتة لتحسين الكفاءة، وتعزيز الابتكار، ومواجهة تحديات السوق بثقة',
            },
            summary: {
                en: 'Manufacturing and Supply Chain Leadership: Strategies for Optimizing Efficiency and Driving Innovation in a Rapidly Evolving Market Landscape. Explore cutting-edge approaches that empower leaders to streamline operations and foster creativity. Learn how to adapt to shifting demands while maintaining resilience and competitive advantage.',
                ar: 'القيادة في التصنيع وسلسلة التوريد: استراتيجيات لتحسين الكفاءة ودفع الابتكار في ظل مشهد سوقي سريع التطور. استكشف أحدث الأساليب التي تمكّن القادة من تبسيط العمليات وتعزيز الإبداع. تعرّف على كيفية التكيف مع المتطلبات المتغيرة مع الحفاظ على المرونة والتفوق التنافسي.',
            },
            sections: [
                {
                    title: {
                        en: 'Enhancing Customer Experience through Digital Transformation',
                        ar: 'تعزيز تجربة العملاء من خلال التحول الرقمي',
                    },
                    paragraphs: [
                        {
                            en: 'Customer Experience Optimization: Leverage digital tools to redefine customer interactions and enhance satisfaction levels. Dive into the latest trends in technology and analytics that provide actionable insights.',
                            ar: 'تحسين تجربة العملاء: استفد من الأدوات الرقمية لإعادة صياغة تفاعلات العملاء ورفع مستويات الرضا. تعرّف على أحدث اتجاهات التقنية والتحليلات التي توفر رؤى قابلة للتطبيق.',
                        },
                        {
                            en: 'Optimizing Performance in Production and Logistics Operations. Discover innovative techniques to enhance workflow efficiency and reduce operational costs, and how data-driven decision-making can streamline supply chain processes and improve delivery times.',
                            ar: 'تحسين الأداء في عمليات الإنتاج والخدمات اللوجستية. اكتشف تقنيات مبتكرة لرفع كفاءة سير العمل وخفض التكاليف التشغيلية، وكيف يمكن لاتخاذ القرارات المبنية على البيانات أن يبسّط عمليات سلسلة التوريد ويحسّن أوقات التسليم.',
                        },
                    ],
                },
                {
                    title: {
                        en: 'Sustainable Practices in Global Supply Chains',
                        ar: 'الممارسات المستدامة في سلاسل التوريد العالمية',
                    },
                    paragraphs: [
                        {
                            en: 'Sustainability in Supply Chain Management: Explore how integrating sustainable practices can enhance reputation and profitability. Learn about innovative methods to reduce waste and improve resource utilization.',
                            ar: 'الاستدامة في إدارة سلسلة التوريد: استكشف كيف يمكن لدمج الممارسات المستدامة أن يعزز السمعة والربحية. تعرّف على أساليب مبتكرة لتقليل الهدر وتحسين استخدام الموارد.',
                        },
                    ],
                },
                {
                    title: {
                        en: 'The Role of Data Analytics in Modern Manufacturing',
                        ar: 'دور تحليلات البيانات في التصنيع الحديث',
                    },
                    paragraphs: [
                        {
                            en: 'Data-Driven Manufacturing: Understand how big data and analytics can revolutionize production processes. Learn about predictive maintenance, quality control, and operational efficiency through data insights.',
                            ar: 'التصنيع القائم على البيانات: تعرّف على كيف يمكن للبيانات الضخمة والتحليلات أن تُحدث ثورة في عمليات الإنتاج. اطّلع على الصيانة التنبؤية، ومراقبة الجودة، والكفاءة التشغيلية من خلال رؤى البيانات.',
                        },
                    ],
                },
                {
                    title: {
                        en: 'Emerging Technologies in Supply Chain Automation',
                        ar: 'التقنيات الناشئة في أتمتة سلسلة التوريد',
                    },
                    paragraphs: [
                        {
                            en: 'Automation in Supply Chain Management: Delve into how emerging technologies like AI, robotics, and IoT are transforming supply chain operations, boosting efficiency, lowering costs, and increasing productivity.',
                            ar: 'الأتمتة في إدارة سلسلة التوريد: تعمّق في كيفية تحويل التقنيات الناشئة مثل الذكاء الاصطناعي والروبوتات وإنترنت الأشياء لعمليات سلسلة التوريد، من خلال رفع الكفاءة وخفض التكاليف وزيادة الإنتاجية.',
                        },
                    ],
                },
            ],
            conclusion: {
                title: { en: 'Conclusion', ar: 'الخاتمة' },
                paragraphs: [
                    {
                        en: 'Explore how cutting-edge technologies such as AI, robotics, and IoT are revolutionizing supply chain management. Highlight innovative logistics solutions powered by technology that improve agility and responsiveness.',
                        ar: 'استكشف كيف تُحدث تقنيات متطورة مثل الذكاء الاصطناعي والروبوتات وإنترنت الأشياء ثورة في إدارة سلسلة التوريد. سلّط الضوء على الحلول اللوجستية المبتكرة المدعومة بالتقنية والتي تعزز المرونة وسرعة الاستجابة.',
                    },
                    {
                        en: 'Ready to embrace change as your partner? Join us and revolutionize your operations, one strategic step at a time.',
                        ar: 'هل أنت مستعد لاحتضان التغيير كشريك لك؟ انضم إلينا وأحدث ثورة في عملياتك، خطوة استراتيجية تلو الأخرى.',
                    },
                ],
            },
            author,
        },
    },
    {
        industry: { en: 'Energy & Utilities', ar: 'الطاقة والمرافق' },
        year: '2025',
        title: {
            en: 'Innovating Leadership in Energy and Utilities',
            ar: 'قيادة مبتكرة في قطاع الطاقة والمرافق',
        },
        slug: 'innovating-leadership-energy-utilities',
        href: '/articles/innovating-leadership-energy-utilities',
        excerpt: {
            en: 'Energy and Utilities Innovation: Exploring Sustainable Solutions and Emerging Technologies',
            ar: 'الابتكار في الطاقة والمرافق: استكشاف الحلول المستدامة والتقنيات الناشئة',
        },
        image: '/images/articles/energy-utilities.png',
        detail: {
            heroImage: '/images/articles/energy-utilities.png',
            subtitle: {
                en: 'Practical Approaches to Modernize Grids, Cut Emissions, and Deliver Reliable Energy at Scale',
                ar: 'أساليب عملية لتحديث الشبكات، وخفض الانبعاثات، وتوفير طاقة موثوقة على نطاق واسع',
            },
            summary: {
                en: 'Energy and Utilities Innovation: Exploring Sustainable Solutions and Emerging Technologies that help leaders balance reliability, cost, and the transition to cleaner power sources.',
                ar: 'الابتكار في الطاقة والمرافق: استكشاف الحلول المستدامة والتقنيات الناشئة التي تساعد القادة على تحقيق التوازن بين الموثوقية والتكلفة والانتقال إلى مصادر طاقة أنظف.',
            },
            sections: [
                {
                    title: { en: 'Modernizing Grid Infrastructure', ar: 'تحديث البنية التحتية للشبكات' },
                    paragraphs: [
                        {
                            en: 'Aging infrastructure remains one of the biggest constraints on reliability. Utilities are investing in smart grid technology, predictive maintenance, and distributed generation to keep pace with demand.',
                            ar: 'لا تزال البنية التحتية المتقادمة أحد أكبر القيود على الموثوقية. تستثمر شركات المرافق في تقنية الشبكات الذكية، والصيانة التنبؤية، والتوليد الموزع لمواكبة الطلب.',
                        },
                    ],
                },
                {
                    title: { en: 'Balancing Renewables and Reliability', ar: 'الموازنة بين الطاقة المتجددة والموثوقية' },
                    paragraphs: [
                        {
                            en: 'As renewable capacity grows, operators need new forecasting and storage strategies to keep supply and demand in balance without compromising service quality.',
                            ar: 'مع تنامي سعة الطاقة المتجددة، يحتاج المشغلون إلى استراتيجيات جديدة للتنبؤ والتخزين للحفاظ على التوازن بين العرض والطلب دون المساس بجودة الخدمة.',
                        },
                    ],
                },
                {
                    title: { en: 'Customer-Centric Energy Programs', ar: 'برامج طاقة تتمحور حول العميل' },
                    paragraphs: [
                        {
                            en: 'Usage-based pricing, self-service portals, and proactive outage communication are reshaping how utilities build trust with the communities they serve.',
                            ar: 'يعيد التسعير القائم على الاستهلاك، وبوابات الخدمة الذاتية، والتواصل الاستباقي بشأن الانقطاعات تشكيل الطريقة التي تبني بها شركات المرافق الثقة مع المجتمعات التي تخدمها.',
                        },
                    ],
                },
            ],
            conclusion: {
                title: { en: 'Conclusion', ar: 'الخاتمة' },
                paragraphs: [
                    {
                        en: 'Leaders who pair infrastructure investment with a clear customer experience strategy are best positioned to navigate the energy transition profitably.',
                        ar: 'القادة الذين يجمعون بين الاستثمار في البنية التحتية واستراتيجية واضحة لتجربة العملاء هم الأقدر على تحقيق أرباح خلال مرحلة التحول في قطاع الطاقة.',
                    },
                ],
            },
            author,
        },
    },
    {
        industry: { en: 'Financial Services', ar: 'الخدمات المالية' },
        year: '2024',
        title: {
            en: 'Advancing Executive Strategies in Financial Services',
            ar: 'تطوير الاستراتيجيات التنفيذية في الخدمات المالية',
        },
        slug: 'advancing-executive-strategies-financial-services',
        href: '/articles/advancing-executive-strategies-financial-services',
        excerpt: {
            en: 'Financial Services Executive Development: Enhancing Leadership Skills for a Dynamic Market',
            ar: 'تطوير الكفاءات التنفيذية في الخدمات المالية: تعزيز المهارات القيادية لسوق ديناميكي',
        },
        image: '/images/articles/financial-services.png',
        detail: {
            heroImage: '/images/articles/financial-services.png',
            subtitle: {
                en: 'Building Leadership Benches That Can Navigate Regulation, Risk, and Rapid Product Change',
                ar: 'بناء قيادات قادرة على التعامل مع التنظيم والمخاطر والتغير السريع في المنتجات',
            },
            summary: {
                en: 'Financial Services Executive Development: Enhancing Leadership Skills for a Dynamic Market, from regulatory change to the rise of embedded finance.',
                ar: 'تطوير الكفاءات التنفيذية في الخدمات المالية: تعزيز المهارات القيادية لمواكبة سوق ديناميكي، بدءاً من التغيرات التنظيمية وصولاً إلى صعود التمويل المدمج.',
            },
            sections: [
                {
                    title: { en: 'Leading Through Regulatory Complexity', ar: 'القيادة وسط التعقيد التنظيمي' },
                    paragraphs: [
                        {
                            en: 'Executives are expected to translate a shifting regulatory landscape into clear operating decisions without slowing the pace of innovation.',
                            ar: 'يُتوقع من التنفيذيين ترجمة المشهد التنظيمي المتغير إلى قرارات تشغيلية واضحة دون إبطاء وتيرة الابتكار.',
                        },
                    ],
                },
                {
                    title: { en: 'Developing the Next Generation of Leaders', ar: 'تطوير الجيل القادم من القادة' },
                    paragraphs: [
                        {
                            en: 'Structured mentorship, rotational assignments, and scenario-based training are helping institutions build a deeper leadership bench faster.',
                            ar: 'يساعد الإرشاد المنظم، والتناوب الوظيفي، والتدريب القائم على السيناريوهات المؤسسات على بناء قاعدة قيادية أعمق وبوتيرة أسرع.',
                        },
                    ],
                },
                {
                    title: { en: 'Competing on Customer Trust', ar: 'المنافسة على أساس ثقة العملاء' },
                    paragraphs: [
                        {
                            en: 'As digital-first competitors enter the market, trust and transparency have become measurable differentiators, not just brand values.',
                            ar: 'مع دخول منافسين رقميين بالدرجة الأولى إلى السوق، أصبحت الثقة والشفافية عوامل تمايز قابلة للقياس، وليست مجرد قيم للعلامة التجارية.',
                        },
                    ],
                },
            ],
            conclusion: {
                title: { en: 'Conclusion', ar: 'الخاتمة' },
                paragraphs: [
                    {
                        en: 'Institutions that invest deliberately in leadership development are better equipped to turn regulatory and competitive pressure into an advantage.',
                        ar: 'المؤسسات التي تستثمر بشكل مدروس في تطوير القيادات تكون أكثر قدرة على تحويل الضغوط التنظيمية والتنافسية إلى ميزة.',
                    },
                ],
            },
            author,
        },
    },
    {
        industry: { en: 'Healthcare', ar: 'الرعاية الصحية' },
        year: '2024',
        title: {
            en: 'Advancing Executive Strategies in Healthcare',
            ar: 'تطوير الاستراتيجيات التنفيذية في الرعاية الصحية',
        },
        slug: 'advancing-executive-strategies-healthcare',
        href: '/articles/advancing-executive-strategies-healthcare',
        excerpt: {
            en: 'Healthcare Executive Development: Enhancing Leadership Skills for a Dynamic Market',
            ar: 'تطوير الكفاءات التنفيذية في الرعاية الصحية: تعزيز المهارات القيادية لسوق ديناميكي',
        },
        image: '/images/articles/healthcare.png',
        detail: {
            heroImage: '/images/articles/healthcare.png',
            subtitle: {
                en: 'Equipping Healthcare Leaders to Balance Patient Outcomes, Cost, and Workforce Wellbeing',
                ar: 'تأهيل قادة الرعاية الصحية لتحقيق التوازن بين نتائج المرضى والتكلفة ورفاهية القوى العاملة',
            },
            summary: {
                en: 'Healthcare Executive Development: Enhancing Leadership Skills for a Dynamic Market shaped by workforce shortages, rising costs, and new care models.',
                ar: 'تطوير الكفاءات التنفيذية في الرعاية الصحية: تعزيز المهارات القيادية لمواكبة سوق ديناميكي يتشكل بفعل نقص القوى العاملة، وارتفاع التكاليف، ونماذج الرعاية الجديدة.',
            },
            sections: [
                {
                    title: { en: 'Leading Through Workforce Shortages', ar: 'القيادة في ظل نقص القوى العاملة' },
                    paragraphs: [
                        {
                            en: 'Retention strategies, flexible scheduling, and clearer career pathways are becoming central to how healthcare leaders plan for capacity.',
                            ar: 'أصبحت استراتيجيات الاستبقاء، والجدولة المرنة، ومسارات وظيفية أوضح محورية في كيفية تخطيط قادة الرعاية الصحية للطاقة الاستيعابية.',
                        },
                    ],
                },
                {
                    title: { en: 'Scaling Value-Based Care', ar: 'توسيع نطاق الرعاية القائمة على القيمة' },
                    paragraphs: [
                        {
                            en: 'Moving from volume to value requires new operating models, data infrastructure, and cross-functional alignment across clinical and finance teams.',
                            ar: 'يتطلب الانتقال من الحجم إلى القيمة نماذج تشغيلية جديدة، وبنية تحتية للبيانات، وتنسيقاً متعدد الوظائف بين الفرق السريرية والمالية.',
                        },
                    ],
                },
                {
                    title: { en: 'Technology as a Force Multiplier', ar: 'التقنية كعامل مضاعف للقوة' },
                    paragraphs: [
                        {
                            en: 'From administrative automation to remote monitoring, technology adoption is freeing up clinical time without compromising care quality.',
                            ar: 'من أتمتة الأعمال الإدارية إلى المراقبة عن بُعد، يعمل تبني التقنية على توفير الوقت السريري دون المساس بجودة الرعاية.',
                        },
                    ],
                },
            ],
            conclusion: {
                title: { en: 'Conclusion', ar: 'الخاتمة' },
                paragraphs: [
                    {
                        en: 'Healthcare leaders who invest in their people while modernizing operations are best placed to sustain quality care under growing pressure.',
                        ar: 'قادة الرعاية الصحية الذين يستثمرون في كوادرهم مع تحديث العمليات هم الأقدر على الحفاظ على جودة الرعاية في ظل الضغوط المتزايدة.',
                    },
                ],
            },
            author,
        },
    },
    {
        industry: { en: 'Retail & Consumer', ar: 'التجزئة والمستهلك' },
        year: '2025',
        title: {
            en: 'Enhancing Customer Experience through Digital Transformation',
            ar: 'تعزيز تجربة العملاء من خلال التحول الرقمي',
        },
        slug: 'enhancing-customer-experience-digital-transformation',
        href: '/articles/enhancing-customer-experience-digital-transformation',
        excerpt: {
            en: 'Customer Experience Optimization: Leverage digital tools to redefine customer interactions and enhance satisfaction levels',
            ar: 'تحسين تجربة العملاء: استفد من الأدوات الرقمية لإعادة صياغة تفاعلات العملاء ورفع مستويات الرضا',
        },
        image: '/images/articles/digital-transformation.png',
        detail: {
            heroImage: '/images/articles/digital-transformation.png',
            subtitle: {
                en: 'Using Digital Tools to Redefine Customer Interactions and Lift Satisfaction Across Every Channel',
                ar: 'استخدام الأدوات الرقمية لإعادة صياغة تفاعلات العملاء ورفع الرضا عبر كل قناة',
            },
            summary: {
                en: 'Customer Experience Optimization: Leverage digital tools to redefine customer interactions and enhance satisfaction levels through personalization and continuous feedback.',
                ar: 'تحسين تجربة العملاء: استفد من الأدوات الرقمية لإعادة صياغة تفاعلات العملاء ورفع مستويات الرضا من خلال التخصيص والتغذية الراجعة المستمرة.',
            },
            sections: [
                {
                    title: { en: 'Personalizing the Customer Journey', ar: 'تخصيص رحلة العميل' },
                    paragraphs: [
                        {
                            en: 'Behavioral data and lightweight experimentation let teams tailor journeys without over-investing before the value is proven.',
                            ar: 'تتيح بيانات السلوك والتجارب المبسّطة للفرق تخصيص الرحلات دون الإفراط في الاستثمار قبل إثبات القيمة.',
                        },
                    ],
                },
                {
                    title: { en: 'Closing the Loop with Feedback', ar: 'إغلاق الحلقة من خلال التغذية الراجعة' },
                    paragraphs: [
                        {
                            en: 'Continuous feedback loops, not annual surveys, are what let teams catch friction points before they show up in churn numbers.',
                            ar: 'حلقات التغذية الراجعة المستمرة، وليست الاستبيانات السنوية، هي ما يتيح للفرق رصد نقاط الاحتكاك قبل أن تنعكس في أرقام فقدان العملاء.',
                        },
                    ],
                },
            ],
            conclusion: {
                title: { en: 'Conclusion', ar: 'الخاتمة' },
                paragraphs: [
                    {
                        en: 'Brands that treat digital experience as a continuous discipline, not a one-off project, build the durable loyalty that protects margin.',
                        ar: 'العلامات التجارية التي تتعامل مع التجربة الرقمية كممارسة مستمرة وليست مشروعاً لمرة واحدة، تبني ولاءً دائماً يحمي هوامش الربح.',
                    },
                ],
            },
            author,
        },
    },
    {
        industry: { en: 'Manufacturing', ar: 'التصنيع' },
        year: '2024',
        title: {
            en: 'Sustainable Practices in Global Supply Chains',
            ar: 'الممارسات المستدامة في سلاسل التوريد العالمية',
        },
        slug: 'sustainable-practices-global-supply-chains',
        href: '/articles/sustainable-practices-global-supply-chains',
        excerpt: {
            en: 'Sustainability in Supply Chain Management: Explore how integrating sustainable practices can enhance reputation and profitability',
            ar: 'الاستدامة في إدارة سلسلة التوريد: استكشف كيف يمكن لدمج الممارسات المستدامة أن يعزز السمعة والربحية',
        },
        image: '/images/articles/sustainability.png',
        detail: {
            heroImage: '/images/articles/sustainability.png',
            subtitle: {
                en: 'How Integrating Sustainable Practices Can Enhance Reputation, Resilience, and Profitability',
                ar: 'كيف يمكن لدمج الممارسات المستدامة أن يعزز السمعة والمرونة والربحية',
            },
            summary: {
                en: 'Sustainability in Supply Chain Management: explore how reducing waste and improving resource utilization can be a source of competitive advantage, not just compliance.',
                ar: 'الاستدامة في إدارة سلسلة التوريد: استكشف كيف يمكن أن يكون تقليل الهدر وتحسين استخدام الموارد مصدراً للتفوق التنافسي، وليس مجرد امتثال.',
            },
            sections: [
                {
                    title: { en: 'Rethinking Waste as a Design Input', ar: 'إعادة النظر في الهدر كمدخل تصميمي' },
                    paragraphs: [
                        {
                            en: 'Circular design principles are pushing manufacturers to treat waste reduction as an upstream engineering decision, not an end-of-line fix.',
                            ar: 'تدفع مبادئ التصميم الدائري المصنّعين إلى التعامل مع تقليل الهدر كقرار هندسي في مرحلة مبكرة، وليس إصلاحاً في نهاية خط الإنتاج.',
                        },
                    ],
                },
                {
                    title: { en: 'Regulatory Pressure and Consumer Expectations', ar: 'الضغط التنظيمي وتوقعات المستهلكين' },
                    paragraphs: [
                        {
                            en: 'Regulatory reporting requirements and consumer expectations are converging, making sustainability data a board-level topic.',
                            ar: 'تتقارب متطلبات الإبلاغ التنظيمي مع توقعات المستهلكين، ما يجعل بيانات الاستدامة موضوعاً يُناقش على مستوى مجلس الإدارة.',
                        },
                    ],
                },
            ],
            conclusion: {
                title: { en: 'Conclusion', ar: 'الخاتمة' },
                paragraphs: [
                    {
                        en: 'Companies that treat sustainability as an operating discipline consistently outperform peers on both cost and reputation over time.',
                        ar: 'الشركات التي تتعامل مع الاستدامة كممارسة تشغيلية تتفوق باستمرار على نظيراتها من حيث التكلفة والسمعة على المدى الطويل.',
                    },
                ],
            },
            author,
        },
    },
    {
        industry: { en: 'Manufacturing', ar: 'التصنيع' },
        year: '2023',
        title: {
            en: 'The Role of Data Analytics in Modern Manufacturing',
            ar: 'دور تحليلات البيانات في التصنيع الحديث',
        },
        slug: 'role-of-data-analytics-modern-manufacturing',
        href: '/articles/role-of-data-analytics-modern-manufacturing',
        excerpt: {
            en: 'Data-Driven Manufacturing: Understand how big data and analytics can revolutionize production processes',
            ar: 'التصنيع القائم على البيانات: تعرّف على كيف يمكن للبيانات الضخمة والتحليلات أن تُحدث ثورة في عمليات الإنتاج',
        },
        image: '/images/articles/data-analytics.png',
        detail: {
            heroImage: '/images/articles/data-analytics.png',
            subtitle: {
                en: 'How Big Data and Analytics Are Revolutionizing Production Processes on the Factory Floor',
                ar: 'كيف تُحدث البيانات الضخمة والتحليلات ثورة في عمليات الإنتاج داخل المصنع',
            },
            summary: {
                en: 'Data-Driven Manufacturing: understand how predictive maintenance, quality control, and real-time monitoring are reshaping operational efficiency.',
                ar: 'التصنيع القائم على البيانات: تعرّف على كيف تعيد الصيانة التنبؤية ومراقبة الجودة والمراقبة اللحظية تشكيل الكفاءة التشغيلية.',
            },
            sections: [
                {
                    title: { en: 'Predictive Maintenance at Scale', ar: 'الصيانة التنبؤية على نطاق واسع' },
                    paragraphs: [
                        {
                            en: 'Sensor data and machine learning are shifting maintenance from scheduled intervals to condition-based triggers, cutting downtime significantly.',
                            ar: 'تعمل بيانات المستشعرات والتعلم الآلي على تحويل الصيانة من فترات مجدولة إلى محفزات قائمة على الحالة، ما يقلل وقت التوقف بشكل كبير.',
                        },
                    ],
                },
                {
                    title: { en: 'Real-Time Quality Control', ar: 'مراقبة الجودة اللحظية' },
                    paragraphs: [
                        {
                            en: 'Inline analytics catch defects earlier in the production line, reducing scrap rates and improving first-pass yield.',
                            ar: 'ترصد التحليلات المباشرة العيوب في وقت مبكر من خط الإنتاج، ما يقلل معدلات الهدر ويحسّن نسبة النجاح من المحاولة الأولى.',
                        },
                    ],
                },
            ],
            conclusion: {
                title: { en: 'Conclusion', ar: 'الخاتمة' },
                paragraphs: [
                    {
                        en: 'Manufacturers that build the data infrastructure now will compound the advantage as analytics capabilities mature.',
                        ar: 'المصنّعون الذين يبنون البنية التحتية للبيانات الآن سيضاعفون هذه الميزة مع نضوج قدرات التحليلات.',
                    },
                ],
            },
            author,
        },
    },
    {
        industry: { en: 'Technology', ar: 'التقنية' },
        year: '2023',
        title: {
            en: 'Emerging Technologies in Supply Chain Automation',
            ar: 'التقنيات الناشئة في أتمتة سلسلة التوريد',
        },
        slug: 'emerging-technologies-supply-chain-automation',
        href: '/articles/emerging-technologies-supply-chain-automation',
        excerpt: {
            en: 'Automation in Supply Chain Management: Delve into how emerging technologies like AI, robotics, and IoT are transforming supply chain operations',
            ar: 'الأتمتة في إدارة سلسلة التوريد: تعمّق في كيفية تحويل التقنيات الناشئة مثل الذكاء الاصطناعي والروبوتات وإنترنت الأشياء لعمليات سلسلة التوريد',
        },
        image: '/images/articles/automation.png',
        detail: {
            heroImage: '/images/articles/automation.png',
            subtitle: {
                en: 'How AI, Robotics, and IoT Are Transforming Supply Chain Operations End to End',
                ar: 'كيف يُحوّل الذكاء الاصطناعي والروبوتات وإنترنت الأشياء عمليات سلسلة التوريد من البداية إلى النهاية',
            },
            summary: {
                en: 'Automation in Supply Chain Management: delve into how emerging technologies are improving responsiveness, agility, and cost efficiency across the network.',
                ar: 'الأتمتة في إدارة سلسلة التوريد: تعمّق في كيفية تحسين التقنيات الناشئة للاستجابة والمرونة وكفاءة التكلفة عبر الشبكة بأكملها.',
            },
            sections: [
                {
                    title: { en: 'From Pilot to Production', ar: 'من التجربة إلى التطبيق الفعلي' },
                    paragraphs: [
                        {
                            en: 'Many automation initiatives stall at the pilot stage. Scaling successfully requires clear ROI tracking and change management, not just new hardware.',
                            ar: 'تتوقف العديد من مبادرات الأتمتة عند مرحلة التجربة. يتطلب التوسع الناجح تتبعاً واضحاً للعائد على الاستثمار وإدارة فعالة للتغيير، وليس مجرد أجهزة جديدة.',
                        },
                    ],
                },
                {
                    title: { en: 'The Future of Warehouse Work', ar: 'مستقبل العمل في المستودعات' },
                    paragraphs: [
                        {
                            en: 'Robotics is changing the shape of warehouse roles rather than eliminating them, creating demand for new technical and supervisory skills.',
                            ar: 'تُغيّر الروبوتات طبيعة الأدوار الوظيفية في المستودعات بدلاً من إلغائها، ما يخلق طلباً على مهارات فنية وإشرافية جديدة.',
                        },
                    ],
                },
            ],
            conclusion: {
                title: { en: 'Conclusion', ar: 'الخاتمة' },
                paragraphs: [
                    {
                        en: 'Automation delivers the most value when it is paired with a workforce strategy that helps teams adapt to the new operating model.',
                        ar: 'تحقق الأتمتة أعلى قيمة عندما تقترن باستراتيجية للقوى العاملة تساعد الفرق على التكيف مع النموذج التشغيلي الجديد.',
                    },
                ],
            },
            author,
        },
    },
]
