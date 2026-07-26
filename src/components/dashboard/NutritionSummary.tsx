export default function NutritionSummary() {
    return (
      <section className="mt-10 rounded-3xl bg-white p-8 shadow-sm">
        <h2 className="text-3xl font-black">
          Nutrition Summary
        </h2>
  
        <div className="mt-6 grid grid-cols-2 gap-6">
  
          <div>
            <p className="text-gray-500">Calories</p>
            <h3 className="text-2xl font-black">
              2450 / 2800
            </h3>
          </div>
  
          <div>
            <p className="text-gray-500">Protein</p>
            <h3 className="text-2xl font-black">
              160 / 180g
            </h3>
          </div>
  
        </div>
      </section>
    );
  }