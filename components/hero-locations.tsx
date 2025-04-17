import { MapPin } from "lucide-react";

export default function HeroLocations() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-green-600 tracking-wide uppercase">
            Our Presence
          </h2>
          <p className="mt-1 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Global Locations
          </p>
        </div>

        <div className="mt-12 grid ">
          {/* Location 1 */}
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center">
              <MapPin className="h-6 w-6 text-green-600" />
              <h3 className="ml-2 text-lg font-medium text-gray-900">
                Saudi Arabia
              </h3>
            </div>
            <p className="mt-2 text-gray-600">
              6710 Prince Turkey Street
              <br />
              Al Yarmouk, Al Khobar 34423
              <br />
              Saudi Arabia
            </p>
            <p className="mt-2 text-sm text-green-600">Headquarters</p>
          </div>
        </div>
      </div>
    </div>
  );
}
