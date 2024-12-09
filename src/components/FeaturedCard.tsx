import { twMerge } from "tailwind-merge";

export default function FeaturedCard(props: { 
    title: string;
    description: string;
    children?: React.ReactNode
    className?: string;
}) {
    const {title, description, children, className} = props;
    return (
        <div className={twMerge(
            "bg-black/5 border border-black/30 p-6 rounded-3xl hover:border-solid hover: hover:border-green-500 hover:shadow-2xl hover:shadow-[#183EC2] transition-all duration-300", className
            )}
        >
                    <div className="aspect-video">{children}</div>
                    <div>
                        <h3 className="text-3xl font-medium mt-6">{title}</h3>
                        <p className="text-black/50 mt-2">
                            {description}
                        </p>
                    </div>
        </div>
    )
}