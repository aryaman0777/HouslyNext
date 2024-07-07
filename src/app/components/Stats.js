"use client";

const Stats = () => {
    return (
      <section
        className="stats-section relative bg-fixed bg-cover bg-center h-64 flex items-center justify-center"
        style={{ backgroundImage: "url('/HouslyNext/images/house.jpg')" }}
      >
        <div className="overlay absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="stats-container flex justify-around w-4/5 text-white text-center">
            <div className="stat">
              <h2 className="text-4xl mb-1">1,548+</h2>
              <p className="text-lg mb-4">Properties Sell</p>
            </div>
            <div className="stat">
              <h2 className="text-4xl mb-1">25+</h2>
              <p className="text-lg mb-4">Award Gained</p>
            </div>
            <div className="stat">
              <h2 className="text-4xl mb-1">9+</h2>
              <p className="text-lg mb-4">Years Experience</p>
            </div>
          </div>
        </div>
        <style jsx>{`
          @media (max-width: 768px) {
            .stats-container {
              flex-direction: column;
            }
  
            .stat h2 {
              font-size: 2.25rem;
            }
  
            .stat p {
              font-size: 1rem;
            }
          }
        `}</style>
      </section>
    );
  };
  
  export default Stats;
  