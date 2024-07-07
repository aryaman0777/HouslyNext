const Footer = () => {
  return (
    <footer className="flex flex-col bg-gray-900 text-white p-4 text-center">
      {/* Subscribe Section */}
      <div className="subscribe mb-8">
        <div className="subscribe-container">
          <h2 className="text-xl mb-2">Subscribe to Newsletter!</h2>
          <p className="mb-4">Subscribe to get latest updates and information.</p>
          <form className="subscribe-form flex flex-wrap justify-center items-center">
            <input type="email" placeholder="Enter your email :" className="p-2 rounded-l-md flex-1 mb-2 md:mb-0" />
            <button type="submit" className="p-2 bg-green-500 text-white rounded-r-md flex-shrink-0">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-container flex flex-wrap justify-between my-8 text-left">
        <div className="footer-col flex-1 min-w-[250px] mx-5 mb-5">
          <h3 className="text-lg mb-2">Hously</h3>
          <p>A great platform to buy, sell and rent your properties without any agent or commissions.</p>
        </div>
        <div className="footer-col flex-1 min-w-[250px] mx-5 mb-5">
          <h3 className="text-lg mb-2">Company</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">About us</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Login</a></li>
          </ul>
        </div>
        <div className="footer-col flex-1 min-w-[250px] mx-5 mb-5">
          <h3 className="text-lg mb-2">Useful Links</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Terms of Services</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Listing</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="footer-col flex-1 min-w-[250px] mx-5 mb-5">
          <h3 className="text-lg mb-2">Contact Details</h3>
          <ul>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">C/54 Northwest Freeway, Suite 558, Houston, USA 485</a></li>
            <li className="mb-2"><a href="#" className="text-gray-400 hover:text-white">View on Google map</a></li>
            <li className="mb-2"><a href="mailto:contact@example.com" className="text-gray-400 hover:text-white">contact@example.com</a></li>
            <li className="mb-2"><a href="tel:+152534468854" className="text-gray-400 hover:text-white">+152 534-468-854</a></li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom flex justify-between items-center flex-wrap gap-4 border-t border-gray-700 pt-4">
        <p className="m-0">© 2024 Hously. Design & Develop with ❤️ by Aryaman.</p>
        <div className="social-icons flex space-x-4">
          <a href="#"><img src="/HouslyNext/images/facebook.svg" alt="Facebook" className="w-6 h-6 hover:bg-green-500" /></a>
          <a href="#"><img src="/HouslyNext/images/twitter.svg" alt="Twitter" className="w-6 h-6 hover:bg-green-500" /></a>
          <a href="#"><img src="/HouslyNext/images/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:bg-green-500" /></a>
          <a href="#"><img src="/HouslyNext/images/instagram.svg" alt="Instagram" className="w-6 h-6 hover:bg-green-500" /></a>
          <a href="#"><img src="/HouslyNext/images/email.svg" alt="Email" className="w-6 h-6 hover:bg-green-500" /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
