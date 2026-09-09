import { ourCase } from "../cards/case/dummy";
import CaseCard from "../cards/case/CaseCard";

export default function OurCase() {
    return (
        <div className="w-screen h-screen overflow-hidden flex items-center justify-center" data-nav-bg="white">
            <div className="flex flex-col items-center text-center">
                <span className="text-5 text-text-placeholder">Our Case studies</span>
                <h1 className="text-1 font-bold leading-1 text-black mt-6 max-w-243.25">
                    <span className="text-main">Custom Solutions</span> That Accelerate Your Success
                </h1>
                <div className="grid grid-cols-3 max-w-355.5 w-355.5 gap-5.25 mt-8">
                    {
                        ourCase.map((item, index) => {
                            return (
                                <CaseCard item={item} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
