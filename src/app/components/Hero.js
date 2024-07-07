const Hero = () => {
    return (
      <section id="hero" className="bg-gray-100 py-20 flex justify-center items-center text-center">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Hously</h1>
          <p className="text-xl text-gray-600 mb-6">Your one-stop solution for real estate needs.</p>
          <div className="flex justify-center">
            <div className="flex w-full max-w-md">
              <input type="text" className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="City, Address, Zip : " />
              <button type="submit" className="px-6 py-2 bg-pink-500 text-white rounded-r-lg hover:bg-pink-600 focus:outline-none">Search</button>
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default Hero;
  