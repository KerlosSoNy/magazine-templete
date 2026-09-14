import ApproachStepCard from './ApproachStepCard'

const steps = [
    {
        number: '1',
        title: 'Diagnose',
        description: 'Conducted comprehensive stakeholder interviews and workflow assessments to uncover inefficiencies in the core business process.',
    },
    {
        number: '2',
        title: 'Design',
        description: 'Created a scalable design framework and detailed prototypes tailored to streamline core operations.',
    },
    {
        number: '3',
        title: 'Deploy',
        description: 'Performed iterative usability and A/B testing to validate that the redesigned solution aligned with industry needs and user expectations.',
    },
    {
        number: '4',
        title: 'Sustain',
        description: 'Implemented continuous usability evaluations and split testing to ensure sustained alignment with business objectives.',
    },
]

export default function CaseStudyApproach() {
    return (
        <div className="w-full bg-main">
            <div className="container mx-auto flex flex-col gap-14 py-16 lg:py-42">
                <div className="flex flex-col gap-3 items-center text-center max-w-240 mx-auto">
                    <span className="text-5 text-white/80">Our Approach</span>
                    <h2 className="text-3 md:text-2 xl:text-1 font-bold leading-3 md:leading-2 xl:leading-1 text-white">
                        A Methodical Path to Clarity
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {steps.map((step) => (
                        <ApproachStepCard key={step.number} step={step} />
                    ))}
                </div>
            </div>
        </div>
    )
}
