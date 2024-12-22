const PricingCard = ({ plan, price, features, isPopular }) => {
    return (
      <div className={`relative p-6 lg:p-8 rounded-2xl transform transition-all duration-300 hover:scale-105 ${
        isPopular ? 'bg-gradient-to-br from-violet-600 to-indigo-700 text-white' : 'bg-white shadow-xl hover:shadow-2xl'
      }`}>
        {isPopular && (
          <span className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-400 to-orange-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
            Most Popular
          </span>
        )}
  
        <div className="text-center">
          <h3 className={`text-xl lg:text-2xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-gray-800'}`}>
            {plan}
          </h3>
          <div className="flex items-center justify-center mb-6">
            <span className={`text-4xl lg:text-5xl font-bold ${isPopular ? 'text-white' : 'text-gray-900'}`}>
              ${price}
            </span>
            <span className={`text-sm ml-2 ${isPopular ? 'text-white/80' : 'text-gray-500'}`}>
              /month
            </span>
          </div>
        </div>
  
        <div className="space-y-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <svg
                className={`w-5 h-5 ${isPopular ? 'text-white' : 'text-green-500'}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
              <span className={`ml-3 ${isPopular ? 'text-white/90' : 'text-gray-600'}`}>
                {feature}
              </span>
            </div>
          ))}
        </div>
  
        <button
          className={`w-full mt-8 px-6 py-3 rounded-lg font-semibold transform transition-all duration-200 hover:-translate-y-1 ${
            isPopular
              ? 'bg-white text-indigo-600 hover:bg-gray-50'
              : 'bg-gradient-to-r from-violet-600 to-indigo-700 text-white hover:opacity-90'
          }`}
        >
          Get Started
        </button>
      </div>
    );
  };
  
  // Usage Example
  const PricingSection = () => {
    const pricingPlans = [
      {
        plan: "Starter",
        price: 29,
        features: [
          "Up to 5 projects",
          "2GB storage",
          "Basic analytics",
          "24/7 support"
        ],
        isPopular: false
      },
      {
        plan: "Professional",
        price: 99,
        features: [
          "Unlimited projects",
          "100GB storage",
          "Advanced analytics",
          "Priority support",
          "Custom domain"
        ],
        isPopular: true
      },
      {
        plan: "Enterprise",
        price: 299,
        features: [
          "Unlimited everything",
          "500GB storage",
          "Custom analytics",
          "Dedicated support",
          "SLA guarantee"
        ],
        isPopular: false
      }
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Perfect Plan
            </h2>
            <p className="text-lg text-gray-600">
              Select the plan that best fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default PricingSection;