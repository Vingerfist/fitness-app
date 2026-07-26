type FeatureCardProps = {
    title: string;
    description: string;
  };
  
  export default function FeatureCard({
    title,
    description,
  }: FeatureCardProps) {
    return (
      <div className="rounded-3xl border border-gray-200 bg-white p-10 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.25em] text-violet-600">
          Feature
        </p>
  
        <h3 className="mb-6 text-4xl font-black leading-tight">
          {title}
        </h3>
  
        <p className="text-lg leading-8 text-gray-600">
          {description}
        </p>
      </div>
    );
  }