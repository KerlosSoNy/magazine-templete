'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { dummyData } from './dummy'
import { cardVariants, contentVariants, descriptionVariants } from './variants'
import GenericButton from '@/components/buttons/genericButton'

export default function DiscoverCards() {
    return (
        <div className="max-w-350.25 w-350.25 h-121 flex mt-14 overflow-hidden">
            {
                dummyData?.map((item, index: number) => {

                    return (
                        <motion.div
                            key={index}
                            initial="rest"
                            whileHover="hover"
                            animate="rest"
                            variants={cardVariants}
                            transition={{ duration: 0.5, ease: 'easeInOut' }}
                            className="relative h-full group shrink-0 overflow-hidden"
                            style={{ flexBasis: 0 }}
                        >
                            <Image
                                fill
                                src={item.image}
                                alt={item.title}
                                className="object-cover"
                            />
                            <div className="w-full h-full bg-text-secondary cursor-pointer opacity-60 absolute top-0" />

                            <motion.div
                                variants={contentVariants}
                                transition={{ duration: 0.5, ease: 'easeInOut' }}
                                className="absolute inset-0 w-full h-fit top-1/2 -translate-y-1/2 flex flex-col items-center p-6 z-10 text-white"
                            >
                                <div className="mb-2">{item.icon}</div>
                                <h3 className="text-2 font-bold text-white">{item.title}</h3>
                                <motion.p
                                    variants={descriptionVariants}
                                    transition={{ duration: 1.8, ease: 'easeInOut' }}
                                    className="text-5 text-white leading-5 text-center mt-2"
                                >
                                    {item.description}
                                </motion.p>
                                <motion.div
                                    key={"button-" + index}
                                    variants={descriptionVariants}
                                    transition={{ duration: 1.8, ease: 'easeInOut' }}
                                    className="text-5 text-white leading-5 text-center mt-4"
                                >
                                    <GenericButton withoutBg title={'Discover More'} />
                                </motion.div>

                            </motion.div>
                        </motion.div>
                    )
                })
            }
        </div>
    )
}