const Groups = ({ groups }) => {
    
    return (
      <div className="bg-gradient-to-b from-blue-800 via-purple-700 to-pink-600 min-h-screen py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">Groups</h1>
  
          {/* Grid for displaying groups */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {groups?.map((group) => (
              <div key={group.id} className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6">
                {/* Group Image */}
                <div className="w-full h-48 bg-gray-300 rounded-xl overflow-hidden mb-4">
                  <img
                    src={group.image}
                    alt={group.name}
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
  
                {/* Group Details */}
                <div className="flex flex-col">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">{group.name}</h2>
                  <p className="text-sm text-gray-500 mb-4">{group.description}</p>
                  <p className="text-sm text-gray-400">Admin: {group.admin}</p>
                  <p className="text-sm text-gray-400">Members: {group.members}</p>
  
                  {/* Join Button */}
                  <button className="btn btn-primary mt-4 w-full text-white">Join Group</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Groups;
  