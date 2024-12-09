import FeaturedCard from "@/components/FeaturedCard"
import workout from "@/assets/workout.jpg"
import app from "@/assets/App.webp"
import Tag from "@/components/Tag"
import Image from "next/image"


const features = [
    "Personalized Diet",
    "Calorie Meter",
]

export default function Features() {
    return (
    <section className="py-24 bg-[#D2DCFF]">
        <div className="container">
            <div className="flex justify-center">
            <Tag>Features</Tag>
            </div>
            <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">Track your health with {" "}
            <span className="text-[#183EC2]">Simplicity</span>
            </h2>
            <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3 gap-8">
                <FeaturedCard 
                title="Effortless Workout Logging" description="Easily log your workouts and monitor your progress over time with our intuitive logging feature. Stay organized and track your fitness journey with precision."
                className="md:col-span-2 lg:col-span-1">
                    <div className="aspect-video flex items-center justify-center">
                        <Image 
                        src={workout}
                        alt="workout"
                        className="w-full h-auto rounded-lg object-cover"
                        />
                    </div>
                </FeaturedCard>
                <FeaturedCard 
                title="Rep Monitoring" 
                description="Count your reps accurately with our app, ensuring each workout is tracked effectively. Perfect for maintaining consistency and improving your performance."
                className="md:col-span-2 lg:col-span-1">
                    <div className="aspect-video flex items-center justify-center">
                        <p className="text-5xl font-extrabold text-black/80 text-center">You have successfully completed twenty{" "}
                            <span className="text-6xl bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent mt-10">Repitions</span>{" "}
                            <span className="text-black/60">twenty</span> {" "}
                            <span className="text-6xl bg-gradient-to-r from-purple-500 to-pink-400 bg-clip-text text-transparent mt-10">Repitions</span> {" "}<span className="text-black/40">left</span>
                        </p>
                    </div>
                </FeaturedCard>
                <FeaturedCard 
                title="Personalized Workout" 
                description="An AI-powered personalized workout plan adapts exercises to your fitness level, goals, and progress, helping you stay motivated and achieve results faster."
                className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto">
                    <div>
                        <Image 
                        src={app}
                        alt="workout"
                        className="w-full h-96 rounded-lg object-cover"
                        />
                    </div>
                </FeaturedCard>
            </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
                {features.map(feature => (
                    <div key={feature} 
                    className="bg-black/5 border border-black/90 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-110 transition duration-500 group">
                        <span className="bg-[#183EC2] text-white size-3 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">&#10038;</span>
                        <span className="font-medium md:text-lg">{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    </section>
    )
}