import { Star, Award, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import UpworkIcon from './UpworkIcon';

const UpworkBanner = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-green-50 via-green-100 to-emerald-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="flex items-center justify-center mb-6">
            <UpworkIcon className="w-12 h-12 text-green-600 mr-4" />
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Top-Rated on Upwork
              </h2>
              <p className="text-green-600 font-semibold">100% Job Success Score</p>
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have transformed their businesses with our 
            expert digital marketing and web development services on Upwork.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 shadow-lg mb-4">
                <Star className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="text-2xl font-bold text-gray-900">5.0</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 shadow-lg mb-4">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">100%</div>
              <div className="text-gray-600">Job Success Score</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-white rounded-full p-4 shadow-lg mb-4">
                <TrendingUp className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600">Completed Projects</div>
            </div>
          </div>

          {/* Testimonial */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg italic text-gray-700 mb-4">
              "Gideon delivered exceptional results for our Shopify store and Meta Ads campaigns. 
              Professional, responsive, and highly skilled. Highly recommended!"
            </blockquote>
            <cite className="text-gray-600 font-semibold">- Sarah M., E-commerce Business Owner</cite>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => window.open('https://www.upwork.com/freelancers/~0168e372c5f516c460', '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <UpworkIcon className="w-5 h-5 mr-2" />
              View Upwork Profile
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open('https://wa.me/2347067133828?text=Hi%2C%20I%20saw%20your%20Upwork%20profile%20and%20would%20like%20to%20discuss%20a%20project', '_blank')}
              className="border-2 border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300"
            >
              Contact Me Directly
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 opacity-70">
            <div className="bg-white px-4 py-2 rounded-lg shadow">
              <span className="text-sm font-semibold text-gray-600">Top Rated Plus</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow">
              <span className="text-sm font-semibold text-gray-600">Rising Talent</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-lg shadow">
              <span className="text-sm font-semibold text-gray-600">Verified Profile</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UpworkBanner;