function Footer() {
  return (
    <footer className="bg-gray-800 text-white pt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              Frontend Developer & Designer skilled in HTML, CSS, JavaScript, React, Vue, Tailwind, Figma, Git
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://pankaj-portfolio-reactjs.vercel.app/" target="_blank" className="text-gray-400 hover:text-gray-300">Portfolio</a>
              </li>
              <li>
                <a href="https://reepank-blogs.vercel.app/" target="_blank" className="text-gray-400 hover:text-gray-300">Blogs</a>
              </li>
              <li>
                <a href="https://api.whatsapp.com/send/?phone=919478629522&amp;text=I%27m+interested+in+website+design" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-300">Whatsapp</a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact</h3>
            <ul className="flex flex-col gap-1">
              <li className="text-gray-400 text-sm">Email: pankaj.syal1@.com</li>
              <li className="text-gray-400 text-sm">Phone: +91 947869522</li>
              <li className="text-gray-400 text-sm">Address: Vill. balahar P.O Rangas Teh. Nadaun Distt. Hamirpur (H.P) 177048</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Footer Bottom */}
      <div className="bg-black mt-8 border-t border-gray-700 py-4 text-center text-sm text-gray-400">
        <p>&copy; 2025 <a className="underline underline-offset-1" href="https://pankaj-portfolio-reactjs.vercel.app/" target="_blank">Pankaj</a>. All Rights Reserved.</p>
      </div>
    </footer >
  );
}

export default Footer;
