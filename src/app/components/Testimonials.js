import Image from 'next/image';

import ChristaImage from '../../../public/images/christa.jpg'
import CalvinImage from '../../../public/images/calvin.jpg';
import ChrisImage from '../../../public/images/chris.jpg';
import JackImage from '../../../public/images/jack.jpg';
import KristaImage from '../../../public/images/krista.jpg';
import RogerImage from '../../../public/images/roger.jpg';
import JohnnyImage from '../../../public/images/johnny.jpg';

const TestimonialsTeam = () => {
  return (
    <section id="testimonials-team" className="mt-14 py-5 bg-white text-gray-900">
      <div className="container mx-auto">
        {/* Testimonials Section */}
        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold mb-4">What Our Client Say?</h2>
          <p className="text-sm text-gray-600 mb-12">A great platform to buy, sell and rent your properties without any agent or commissions.</p>
          <div id="testimonialCarousel" className="relative carousel slide mb-5" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <blockquote className="mx-auto max-w-3xl text-lg italic mb-4">" I highly recommend Hously as the new way to sell your home 'by owner'. My home sold in 24 hours for the asking price. Best $400 you could spend to sell your home. "</blockquote>
                <div className="flex flex-col items-center justify-center">
                  <Image src={ChristaImage} alt="Client Photo" className="rounded-full w-20 h-20 mb-3" />
                  <div className="text-center">
                    <h4 className="text-lg font-semibold mb-0">Christa Smith</h4>
                    <p className="text-sm text-gray-600 mb-1">Manager</p>
                    <div className="text-yellow-500">
                      &#9733;&#9733;&#9733;&#9733;&#9733;
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <blockquote className="mx-auto max-w-3xl text-lg italic mb-4">" Hously made the processes so easy. Hously instantly increased the amount of interest and ultimately saved us over $10,000. "</blockquote>
                <div className="flex flex-col items-center justify-center">
                  <Image src={CalvinImage} alt="Client Photo" className="rounded-full w-20 h-20 mb-3" />
                  <div className="text-center">
                    <h4 className="text-lg font-semibold mb-0">Calvin Carlo</h4>
                    <p className="text-sm text-gray-600 mb-1">Manager</p>
                    <div className="text-yellow-500">
                      &#9733;&#9733;&#9733;&#9733;&#9733;
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <blockquote className="mx-auto max-w-3xl text-lg italic mb-4">" My favorite part about selling my home myself was that we got to meet and get to know the people personally. This made it so much more enjoyable! "</blockquote>
                <div className="flex flex-col items-center justify-center">
                  <Image src={ChrisImage} alt="Client Photo" className="rounded-full w-20 h-20 mb-3" />
                  <div className="text-center">
                    <h4 className="text-lg font-semibold mb-0">Smith Carls</h4>
                    <p className="text-sm text-gray-600 mb-1">Manager</p>
                    <div className="text-yellow-500">
                      &#9733;&#9733;&#9733;&#9733;&#9733;
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <blockquote className="mx-auto max-w-3xl text-lg italic mb-4">" Great experience all around! Easy to use and efficient. "</blockquote>
                <div className="flex flex-col items-center justify-center">
                  <Image src={JackImage} alt="Client Photo" className="rounded-full w-20 h-20 mb-3" />
                  <div className="text-center">
                    <h4 className="text-lg font-semibold mb-0">Jake Paul</h4>
                    <p className="text-sm text-gray-600 mb-1">Manager</p>
                    <div className="text-yellow-500">
                      &#9733;&#9733;&#9733;&#9733;&#9733;
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-indicators flex justify-center mt-3">
              <button className="h-2 w-2 rounded-full bg-gray-400 mx-3" data-bs-target="#testimonialCarousel" data-bs-slide-to="0" className="active"></button>
              <button className="h-2 w-2 rounded-full bg-gray-400 mx-3" data-bs-target="#testimonialCarousel" data-bs-slide-to="1"></button>
              <button className="h-2 w-2 rounded-full bg-gray-400 mx-3" data-bs-target="#testimonialCarousel" data-bs-slide-to="2"></button>
              <button className="h-2 w-2 rounded-full bg-gray-400 mx-3" data-bs-target="#testimonialCarousel" data-bs-slide-to="3"></button>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center mb-5">
          <h2 className="text-2xl font-bold">Meet The Agent Team</h2>
          <p className="text-sm text-gray-600 mb-5">A great platform to buy, sell and rent your properties without any agent or commissions.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="flex flex-col items-center">
              <Image src={JackImage} alt="Team Member 1" className="rounded-full w-40 h-40 mb-3" />
              <h5 className="text-lg font-semibold">Jack John</h5>
              <p className="text-sm text-gray-600">Designer</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={KristaImage} alt="Team Member 2" className="rounded-full w-40 h-40 mb-3" />
              <h5 className="text-lg font-semibold">Krista John</h5>
              <p className="text-sm text-gray-600">Designer</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={RogerImage} alt="Team Member 3" className="rounded-full w-40 h-40 mb-3" />
              <h5 className="text-lg font-semibold">Roger Jackson</h5>
              <p className="text-sm text-gray-600">Designer</p>
            </div>
            <div className="flex flex-col items-center">
              <Image src={JohnnyImage} alt="Team Member 4" className="rounded-full w-40 h-40 mb-3" />
              <h5 className="text-lg font-semibold">Johnny English</h5>
              <p className="text-sm text-gray-600">Designer</p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold">Have Question? Get in touch!</h2>
          <p className="text-sm text-gray-600 mb-4">A great platform to buy, sell and rent your properties without any agent or commissions.</p>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">Contact us</button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsTeam;
