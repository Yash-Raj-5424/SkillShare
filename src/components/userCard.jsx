import { Star } from "lucide-react";

 function UserCard() {
  return (
    <div className="max-w-sm mx-auto bg-white border rounded-2xl shadow-sm p-6 space-y-4">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-semibold">SJ</div>
        <div>
          <h2 className="text-lg font-semibold">Sarah Johnson</h2>
          <p className="text-sm text-gray-500">San Francisco, CA</p>
          <div className="flex items-center text-sm text-gray-600 mt-1">
            <Star className="w-4 h-4 text-yellow-500 mr-1" />
            <span>4.8</span>
            <span className="text-gray-400 ml-1">(24 reviews)</span>
          </div>
        </div>
      </div>
      <p className="text-gray-700 text-sm">Passionate web developer with 8 years of experience. Love teaching React a...</p>
      <div className="flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">React</span>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">TypeScript</span>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">Node.js</span>
        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-lg">+2 more</span>
      </div>
      <div className="flex space-x-3">
        <button className="flex-1 border rounded-lg py-2 text-sm font-medium hover:bg-gray-50">View Profile</button>
        <button className="flex-1 bg-blue-600 text-white rounded-lg py-2 text-sm font-medium hover:bg-blue-700">Request Skill</button>
      </div>
    </div>
  );
}

export default UserCard;