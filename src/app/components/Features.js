const Features = () => {
    const features = [
      {
        image: "/images/residential.jpg",
        title: "Residential",
        listings: "51 Listings"
      },
      {
        image: "/images/commercial.jpg",
        title: "Commercial",
        listings: "150 Listings"
      },
      {
        image: "/images/land.jpg",
        title: "Land",
        listings: "305 Listings"
      },
      {
        image: "/images/investment.jpg",
        title: "Investment",
        listings: "15 Listings"
      },
      {
        image: "/images/industrial.jpg",
        title: "Industrial",
        listings: "650 Listings"
      }
    ];
  
    return (
      <section id="features" className="py-16 bg-gray-100 text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-around">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg m-4 flex-1 max-w-xs transition-transform transform hover:-translate-y-2"
              >
                <img
                  src={feature.image}
                  alt={`Image ${index + 1}`}
                  className="w-full rounded-md mb-4"
                />
                <div className="card-info">
                  <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 mb-6">{feature.listings}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Features;
  