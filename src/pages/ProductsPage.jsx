import React from 'react';

const ProductsPage = () => {
  return (
    <section id="product" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      {/* Product Header */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-green-800 mb-2">Asaase Plus Organic Fertilizer</h2>
        <p className="text-lg text-gray-600">Enhancing Soil Health, Boosting Yields Sustainably</p>
      </div>

      {/* Product Content */}
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12">
        {/* Product Image */}
        <div className="lg:w-1/2">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <img 
              src="/images/fertilizer-bags.jpg" 
              alt="Asaase Plus Organic Fertilizer in 25kg and 50kg bags" 
              className="w-full h-auto rounded-md"
            />
            <div className="flex justify-center gap-6 mt-6">
              <span className="px-4 py-2 bg-yellow-100 text-yellow-800 rounded-full font-medium">25kg bag</span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full font-medium">50kg bag</span>
            </div>
          </div>
        </div>

        {/* Product Details */}
        <div className="lg:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Premium Eco-Friendly Fertilizer</h3>
          <p className="text-gray-600 mb-6">
            Asaase Plus Organic Fertilizer from OfNet Farms is a premium, eco-friendly fertilizer designed to enhance soil health and boost crop yields sustainably. Formulated with essential nutrients (NPR 10:10:5) from recycled agricultural waste.
          </p>

          {/* Benefits */}
          <div className="mb-8">
            <h4 className="text-xl font-semibold text-green-700 mb-4">Key Benefits:</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-gray-800">Rich in Nutrients:</strong> Contains essential macro and micronutrients including nitrogen, phosphorus, and potassium</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-gray-800">Improves Soil Fertility:</strong> Enhances soil structure and promotes long-term productivity</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-gray-800">Cost-Effective:</strong> More affordable alternative to chemical fertilizers</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-gray-800">Environmentally Friendly:</strong> Made from recycled agricultural waste</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-gray-800">Long-Lasting Effects:</strong> Nutrients remain in soil longer, reducing reapplication needs</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span><strong className="text-gray-800">Versatile Application:</strong> Suitable for cereals, vegetables, fruits and various farming systems</span>
              </li>
            </ul>
          </div>

          {/* Impact */}
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-semibold text-green-700 mb-3">Proven Impact:</h4>
            <p className="text-gray-700">
              Field trials show that using Asaase Plus alone or combined with reduced NPR fertilizer results in higher returns compared to chemical fertilizers alone.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg text-center transition-colors"
            >
              Contact Us
            </a>
            <a 
              href="#" 
              className="px-6 py-3 border border-green-600 text-green-600 hover:bg-green-50 font-medium rounded-lg text-center transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Production Info */}
      <div className="max-w-4xl mx-auto mt-16 bg-white p-8 rounded-lg shadow-sm">
        <h3 className="text-2xl font-semibold text-green-800 mb-6">Sustainable Production</h3>
        <p className="text-gray-600 mb-6">
          OfNet Farms produces 1,500 bags of organic fertilizer monthly from agricultural waste, promoting circular economy practices in Ghana's agricultural sector.
        </p>
        <p className="text-gray-800 font-medium mb-4">Our fertilizer production helps address:</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Declining soil fertility from chemical fertilizer overuse</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Agricultural waste pollution from crop residues</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>High cost and shortage of chemical fertilizers</span>
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Climate change and land degradation</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ProductsPage;