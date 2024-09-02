function UserProfile() {
    return (
      <div className="bg-gray-100 p-4 sm:p-8 max-w-xs sm:max-w-sm mx-auto my-10 sm:my-20 rounded-lg shadow-lg flex flex-col items-center md:p-8sm:p-4 md:max-w-sm hover:shadow-xl">
        <img 
          src="https://via.placeholder.com/150" 
          alt="User" 
          className="sm:w-24 sm:h-24 md:w-36 md:h-36 rounded-full mb-4 hover:scale-110 transition-transform duration-300 ease-in-out"
        />
        <h1 className="text-lg sm:text-xl text-blue-800 mb-4 md:text-xl hover:text-blue-500">John Doe</h1>
        <p className="text-sm sm:text-base text-gray-600 text-center md:text-xl hover:text-blue-500">
          Developer at Example Co. Loves to write code and explore new technologies.
        </p>
      </div>
    );
  }
  
  export default UserProfile;
  