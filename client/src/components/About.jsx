import React from 'react';
import logo from '../assets/logo.png';

const About = () => {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="/" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
          <img className="w-8 h-8 size-9 rounded-xl mr-3" src={logo} alt="logo" />
          Bookify
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-3xl xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white flex justify-center">
              About Us
            </h1>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Mission</h2>
              <p className="text-gray-900 dark:text-white">
                At Bookify, our mission is to connect readers with their favorite books and authors, providing a seamless and enjoyable reading experience for book lovers of all ages.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Story</h2>
              <p className="text-gray-900 dark:text-white">
                Bookify was founded in 20XX by a group of passionate readers who wanted to create a platform where book enthusiasts could discover new titles, connect with fellow readers, and engage with their favorite authors.
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Our Team</h2>
              <p className="text-gray-900 dark:text-white">
                Meet the dedicated team behind Bookify, comprised of avid readers, developers, designers, and book enthusiasts who work tirelessly to make your reading experience exceptional.
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>John Doe - CEO and Founder</li>
                <li>Jane Smith - Head of Development</li>
                <li>Michael Johnson - Lead Designer</li>
              </ul>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Contact Us</h2>
              <p className="text-gray-900 dark:text-white">
                Have questions or feedback? Feel free to reach out to us at contact@bookify.com. We'd love to hear from you!
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
