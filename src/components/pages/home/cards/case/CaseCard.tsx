'use client'
import GenericButton from '@/components/buttons/genericButton'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { bottomButton, hiddenDiv } from './variants'

export default function CaseCard({ item }: any) {
    return (
        <motion.div
            initial="rest"
            whileHover="hover"
            animate="rest"
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="relative h-130.5 w-full flex flex-col items-start">
            <span className="text-6 text-text-secondary tracking-wide">{item?.tags?.join("  -  ")}</span>
            <h2 className="text-2 leading-2 text-text-secondary mt-3.5 font-bold text-start">{item?.title}</h2>
            <div className="relative overflow-hidden rounded-xl w-full h-82.5">
                <Image
                    src={item?.image}
                    alt={item?.title}
                    width={460}
                    height={329}
                    className="w-full h-82.5 object-cover mt-4 rounded-xl"
                />
                <motion.div
                    variants={hiddenDiv}
                    transition={{ duration: 1, ease: 'easeInOut' }}
                    className="absolute bottom-0 bg-[#0E3832] w-full text-start h-fit z-10 rounded-xl p-6 flex flex-col">
                    <span className="font-bold text-white text-5">{item?.subTitle}</span>
                    <p className="text-text-disabled text-6 leading-6 line-clamp-3 mt-2 mb-4">{item?.description}</p>
                    <GenericButton title="Discover More" />
                </motion.div>
            </div>
            <motion.div
                variants={bottomButton}
                transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
                <GenericButton mainClasses="p-0! mt-3" svgColor="stroke-main" titleClasses="text-main!" title="Discover More" withoutBg withoutBorder />
            </motion.div>
        </motion.div>
    )
}
