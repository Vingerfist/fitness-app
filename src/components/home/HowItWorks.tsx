export default function HowItWorks() {
    return (
      <section className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
  
          <h2 className="text-6xl font-black mb-20">
            How It Works
          </h2>
  
          <div className="grid md:grid-cols-3 gap-10">
  
            <div>
              <div className="text-7xl font-black text-violet-500 mb-6">
                01
              </div>
  
              <h3 className="text-3xl font-bold mb-4">
                Tell us about yourself
              </h3>
  
              <p className="text-gray-400">
                Select your goal, body type, experience and available equipment.
              </p>
            </div>
  
            <div>
              <div className="text-7xl font-black text-violet-500 mb-6">
                02
              </div>
  
              <h3 className="text-3xl font-bold mb-4">
                AI builds your plan
              </h3>
  
              <p className="text-gray-400">
                Personalized workouts and meal plans generated in seconds.
              </p>
            </div>
  
            <div>
              <div className="text-7xl font-black text-violet-500 mb-6">
                03
              </div>
  
              <h3 className="text-3xl font-bold mb-4">
                Track & improve
              </h3>
  
              <p className="text-gray-400">
                Monitor workouts, body weight and strength progression.
              </p>
            </div>
  
          </div>
  
        </div>
      </section>
    );
  }