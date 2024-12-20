const Friends = ({ data }) => {
    const { name, profileImage, date, userName } = data;
  
    return (
      <div className="bg-white rounded-2xl shadow-2xl hover:shadow-xl transition-all duration-300 transform hover:scale-105 p-6 flex items-center space-x-6">
        {/* Profile Image with Hover Effect */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-blue-500 group hover:scale-110 transition-all duration-300">
          <img
            src={profileImage || "https://via.placeholder.com/150"}
            alt="Profile"
            className="w-full h-full object-cover group-hover:opacity-80 transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-30 group-hover:opacity-0 transition-all duration-300"></div>
        </div>
  
        {/* User Info */}
        <div className="flex flex-col">
          <p className="text-2xl font-semibold text-gray-800">{name}</p>
          <p className="text-lg text-gray-500">@{userName}</p>
          <p className="text-sm text-gray-400">Joined on {new Date(date).toLocaleDateString()}</p>
        </div>
      </div>
    );
  };
  
  export default Friends;
  