
interface SectionHeadingProps {
    title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
    return (
        <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{title}</h2>
            <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </div>
    );
}
