"use client"
import Tag from "@/components/Tag"
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
    {
        question: "How do I log my workouts?",
        answer: "You can easily log your workouts by selecting the exercise, entering the duration, and tracking your reps."

    },
    {
        question: "Can I track my calories burned?",
        answer: "Yes, you can track calories burned through the application integrated tracking features."

    },
    {
        question: "Is this application suitable for beginners?",
        answer: "Absolutely! GymFluencer is designed to be user-friendly and suitable for all fitness levels."

    },
    {
        question: "What features does the application offer?",
        answer: "The app offers workout logging, rep counting, calorie tracking, and progress reviews."

    },
    {
        question: "How can I reset my password?",
        answer: `You can reset your password by going to the login screen and selecting "Forgot Passoword".`

    },
]

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0)
    return (
        <section className="py-24 bg-white">
            <div className="container">
                <div className="flex justify-center">
                <Tag>Faqs</Tag>
                </div>
                <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
                    Questions? We&apos;ve got <span className="text-[#183EC2]">answers</span>
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div key={faq.question}
                        className="bg-black/10 rounded-2xl border border-black-90 p-6">
                            <div className="flex justify-between items-center" onClick={() => setSelectedIndex(faqIndex)}>
                                <h3 className="font-medium">{faq.question}</h3>
                                <svg
                                xmlns="https://www.w3.org/200/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className={twMerge("feather feather-plus text-[#183EC2] flex-shrink-0 transition duration-300", selectedIndex === faqIndex && "rotate-45")}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>

                                </svg>
                            </div>
                            <AnimatePresence>
                            {selectedIndex === faqIndex && (    
                            <motion.div 
                            initial={{
                                height: 0,
                                marginTop: 0,
                            }}
                            animate={{
                                height: "auto",
                                marginTop: 24,
                            }}
                            exit={{
                                height: 0,
                                marginTop: 0,
                            }}
                            className={twMerge("overflow-hidden")}>
                            <p className="text-black/50">{faq.answer}</p>
                            </motion.div>
                            )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}