import Image from 'next/image';
import AmazonLogo from '../../../public/images/amazon.svg';
import GoogleLogo from '../../../public/images/google.svg';
import LenovoLogo from '../../../public/images/lenovo.svg';
import PaypalLogo from '../../../public/images/paypal.svg';
import ShopifyLogo from '../../../public/images/shopify.svg';
import SpotifyLogo from '../../../public/images/spotify.svg';

const Partners = () => {
  return (
    <section id="partners" className="flex justify-around items-center py-5 px-11 bg-gray-100 flex-wrap md:flex-nowrap">
      <div className="partner-logo flex-1 text-center p-2.5">
        <Image src={AmazonLogo} alt="Amazon" className="max-w-[70px] h-auto" />
      </div>
      <div className="partner-logo flex-1 text-center p-2.5">
        <Image src={GoogleLogo} alt="Google" className="max-w-[70px] h-auto" />
      </div>
      <div className="partner-logo flex-1 text-center p-2.5">
        <Image src={LenovoLogo} alt="Lenovo" className="max-w-[70px] h-auto" />
      </div>
      <div className="partner-logo flex-1 text-center p-2.5">
        <Image src={PaypalLogo} alt="PayPal" className="max-w-[70px] h-auto" />
      </div>
      <div className="partner-logo flex-1 text-center p-2.5">
        <Image src={ShopifyLogo} alt="Shopify" className="max-w-[70px] h-auto" />
      </div>
      <div className="partner-logo flex-1 text-center p-2.5">
        <Image src={SpotifyLogo} alt="Spotify" className="max-w-[70px] h-auto" />
      </div>
    </section>
  );
};

export default Partners;
