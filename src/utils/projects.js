import portfolio from "../assets/projects-img/portfolio.png"
import youtube from "../assets/projects-img/youtube.jpg"
import netflix from "../assets/projects-img/netflix.webp"

const projects = [
  {
    title: "AI-Powered Movie Platform",
    color: "9ABF80",
    secondaryColor:"6F8E5A",
    description: `Built an advanced movie platform featuring dynamically updated sections like "Now Playing," "Trending," and "Popular" movies to enhance user engagement. Integrated with the ChatGPT API, the platform allows users to receive personalized movie suggestions based on their commands and preferences.`,
    img: netflix,
    point1: "Built using React and styled with Tailwind CSS to ensure a seamless, responsive, and visually appealing user experience.",
    point2: "Utilized Redux Toolkit for robust memory and state management across the platform.",
    
  },
  {
    title: "Video Streaming App",
    color: "FFCCE1",
    secondaryColor:"F1A3C5",
    description: "Developed a feature-rich video streaming platform with a dynamic homepage showcasing videos and a filtering system for easy content discovery. Implemented live chat functionality for real-time audience interaction and a nested comments system to support threaded discussions.",
    img: youtube,
    point1: "Implemented debouncing to minimize API calls, improving the platform’s efficiency and responsiveness.",
    point2: "Utilized React Router for smooth, dynamic routing across different sections of the video platform.",
    
  },
  {
    title: "Personal Portfolio",
    color: "A294F9",
    secondaryColor:"7A6AD1",
    description: "Designed and developed a visually captivating personal portfolio website using Framer Motion to create smooth animations and stunning aesthetics. Integrated a dark mode feature for enhanced usability and a modern user experience, showcasing projects and skills effectively",
    img: portfolio,
    point1: "Implemented a dark mode feature for improved accessibility and a modern, user-friendly interface.",
    point2: "Leveraged Framer Motion to create smooth, visually captivating animations for an enhanced user experience.",
   
  }
];

export default projects;
