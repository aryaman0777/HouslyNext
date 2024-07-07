const Feature2 = () => {
    const featureInfo = [
      {
        title: "Why Choose Us",
        description:
          "We provide the best real estate services in the industry with top-notch customer support and seamless transaction processes.",
      },
      {
        title: "Our Expertise",
        description:
          "Our team consists of experienced professionals who are well-versed in the real estate market, ensuring you get the best deals and advice.",
      },
    ];
  
    const featureCards = [
      {
        image: "/HouslyNext/images/rentIcon.png",
        title: "Rent a House",
        description:
          "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
        link: "#",
      },
      {
        image: "/HouslyNext/images/buyIcon.png",
        title: "Buy a House",
        description:
          "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
        link: "#",
      },
      {
        image: "/HouslyNext/images/sellIcon.png",
        title: "Sell a House",
        description:
          "If the distribution of letters and 'words' is random, the reader will not be distracted from making.",
        link: "#",
      },
    ];
  
    return (
      <section id="feature-2" className="py-16 text-center">
        <div className="feature-2-container max-w-full mx-auto">
          <div className="feature-2-grid grid grid-cols-1 gap-8 mb-8">
            {featureInfo.map((info, index) => (
              <div key={index} className="feature-2-info">
                <h2 className="text-2xl mb-2">{info.title}</h2>
                <p className="text-base text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
          <div className="feature-2-cards grid grid-cols-1 md:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <div
                key={index}
                className="image-card2 p-8 rounded-lg text-center flex flex-col items-center"
              >
                <img src={card.image} alt={`Image ${index + 6}`} className="max-w-[60px] mb-4" />
                <div className="card-info p-4">
                  <h4 className="mb-4">{card.title}</h4>
                  <p className="text-sm text-gray-500 mb-4">{card.description}</p>
                  <a href={card.link} className="read-more text-blue-600 font-bold hover:text-lg">
                    Read More <span>&rarr;</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Feature2;
  