import FeatureCard from "./FeatureCard";

export default function Features() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20">
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-violet-600">
            WHY BICEPSTRICEPS
          </p>

          <h2 className="max-w-3xl text-6xl font-black leading-tight text-black">
            Built for people who want results, not guesswork.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          <FeatureCard
            title="Personalized Training"
            description="Every workout is generated specifically for your body, experience and fitness goals."
          />

          <FeatureCard
            title="Smart Nutrition"
            description="Receive meal plans that match your calories, budget and food preferences."
          />

          <FeatureCard
            title="Track Progress"
            description="Monitor strength, weight, body measurements and personal records in one place."
          />

        </div>
      </div>
    </section>
  );
}