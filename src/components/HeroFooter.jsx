import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const HeroFooter = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/path/to/your/cv.pdf'; // Replace with the actual path to your CV file
    link.download = 'Siddhant_CV.pdf';
    link.click();
  };

  return (
    <div className="absolute xs:bottom-4 bottom-10 w-full flex flex-col items-center gap-5">
      {/* CV Download Button */}
      <button
        onClick={handleDownloadCV}
        className="px-6 py-2 bg-[#915EFF] text-white text-lg font-semibold rounded-full shadow-lg hover:bg-[#7e4ae6] transition duration-300 ease-in-out"
      >
        Download CV
      </button>

      {/* Social Media Icons */}
      <div className="flex gap-6 text-2xl">
        <a
          href="https://github.com/your-github-profile" // Replace with your GitHub profile
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#915EFF] transition duration-300 ease-in-out"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/your-leetcode-profile" // Replace with your LeetCode profile
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#FFA116] transition duration-300 ease-in-out"
        >
          <SiLeetcode />
        </a>
        <a
          href="https://instagram.com/your-instagram-profile" // Replace with your Instagram profile
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#E1306C] transition duration-300 ease-in-out"
        >
          <FaInstagram />
        </a>
        <a
          href="https://linkedin.com/in/your-linkedin-profile" // Replace with your LinkedIn profile
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#0A66C2] transition duration-300 ease-in-out"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/your-twitter-profile" // Replace with your Twitter profile
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-[#1DA1F2] transition duration-300 ease-in-out"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default HeroFooter;
