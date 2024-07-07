
const FeaturedProperties = () => {
    const properties = [
      {
        image: "/images/hillshire.jpg",
        title: "10765 Hillshire Ave, Baton Rouge, LA 70810, USA",
        details: ["8000sqf", "4 Beds", "4 Baths"],
        price: "$5000",
        rating: "★★★★★",
        reviews: "5(30)"
      },
      {
        image: "/images/stonewall.jpg",
        title: "59345 Stonewall Dr, Plaquemine, LA 70764, USA",
        details: ["8000sqf", "4 Beds", "4 Baths"],
        price: "$5000",
        rating: "★★★★★",
        reviews: "5(30)"
      },
      {
        image: "/images/sandbar.jpg",
        title: "3723 Sandbar Dr, Addis, LA 70710, USA",
        details: ["8000sqf", "4 Beds", "4 Baths"],
        price: "$5000",
        rating: "★★★★★",
        reviews: "5(30)"
      },
      {
        image: "/images/royal.jpg",
        title: "Lot 21 Royal Oak Dr, Prairieville, LA 70769, USA",
        details: ["8000sqf", "4 Beds", "4 Baths"],
        price: "$5000",
        rating: "★★★★★",
        reviews: "5(30)"
      },
      {
        image: "/images/boyd.jpg",
        title: "710 Boyd Dr, Unit #1102, Baton Rouge, LA 70808, USA",
        details: ["8000sqf", "4 Beds", "4 Baths"],
        price: "$5000",
        rating: "★★★★★",
        reviews: "5(30)"
      },
      {
        image: "/images/mclain.jpg",
        title: "5133 Mclain Way, Baton Rouge, LA 70809, USA",
        details: ["8000sqf", "4 Beds", "4 Baths"],
        price: "$5000",
        rating: "★★★★★",
        reviews: "5(30)"
      }
    ];
  
    return (
      <section id="featured-properties" className="py-16 text-center">
        <div className="featured-container max-w-full mx-auto">
          <h2 className="text-2xl mb-2">Featured Properties</h2>
          <p className="text-base text-gray-600 mb-8">A great platform to buy, sell and rent your properties without any agent or commissions.</p>
          <div className="property-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property, index) => (
              <div key={index} className="property-card rounded-lg shadow-lg overflow-hidden text-left flex flex-col">
                <img src={property.image} alt={property.title} className="w-full h-auto" />
                <div className="property-info p-6">
                  <h3 className="text-xl mb-2">{property.title}</h3>
                  <ul className="property-details flex gap-4 text-sm text-gray-600 mb-4">
                    {property.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  <p className="property-price text-base mb-2">Price: {property.price}</p>
                  <p className="property-rating text-base mb-2">Rating: <span className="text-yellow-500">{property.rating}</span> {property.reviews}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default FeaturedProperties;
  