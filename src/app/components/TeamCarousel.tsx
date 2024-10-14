'use client'
import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

interface TeamMember {
  id: number;
  name: string;
  position: string;
  description: string;
  photo: string;
  socialMedia: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    instagram?: string;
    facebook?: string;
  };
}

const dummyTeamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Eljones Odongo",
    position: "Software Engineer - Full Stack",
    description: "Master of both front-end finesse and back-end brilliance, I craft seamless digital experiences from start to finish. Code wizard by day, problem-solver always.",
    photo: "images/Eljones.jpg",
    socialMedia: {
      twitter: "https://x.com/eljones_ke",
      linkedin: "https://www.linkedin.com/in/eljones-odongo",
      github: "https://github.com/EljonesA",
    },
  },
  {
    id: 2,
    name: "Aineah Marabi",
    position: "UX/UI Developer",
    description: "The architect of intuitive, eye-catching designs. I turn user needs into sleek, seamless interfaces that are as functional as they are beautiful. Where creativity meets usability.",
    photo: "images/Inea.jpg",
    socialMedia: {
        twitter: "https://x.com/inea_marabi",
        linkedin: "https://www.linkedin.com/in/aineah-marabi/",
        github: "https://github.com/aineahmarabi",
        instagram: "https://www.instagram.com/inea_marabi?igsh=dWM5NjJxcXF0N3l0",
    },
  },
  {
    id: 3,
    name: "Harry Rotich",
    position: "Zoho Developer",
    description: "The maestro of Zoho solutions, crafting custom applications that streamline workflows and boost productivity. I turn complexity into clarity, making your business run like a well-oiled machine.",
    photo: "images/Harry.jpg",
    socialMedia: {
        linkedin: "https://www.linkedin.com/in/harry-rotich/",
        github: "https://github.com/Harry-Rotich",
        instagram: "https://www.instagram.com/harry_rotich/",
    },
  },
  {
    id: 4,
    name: "Charles Maina",
    position: "Software Developer",
    description: "Code ninja and tech enthusiast, I bring ideas to life through innovative solutions and seamless integrations. Problem-solver by nature, I turn challenges into code with flair.",
    photo: "images/Charles.jpg",
    socialMedia: {
        github: "https://github.com/mikewhis",
        linkedin: "https://www.linkedin.com/in/charles-maina-418533213/",
        instagram: "https://www.instagram.com/charles_maina_waithira/",

    },
  },
  {
    id: 5,
    name: "Levis Murunga",
    position: "Business Development Executive",
    description: "The growth guru, forging connections and opening doors to new opportunities. I strategize, negotiate, and cultivate relationships that drive success and fuel innovation.",
    photo: "images/Levis.jpg",
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/levis-murunga",
      instagram: "https://instagram.com/chrislee",
      facebook: "https://facebook.com/chrislee",
    },
  },
];

const TeamCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % dummyTeamMembers.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + dummyTeamMembers.length) % dummyTeamMembers.length;
    let transform = '';
    let zIndex = 0;
    let opacity = 1;

    switch (diff) {
      case 0: // Center card
        transform = 'translateX(0) scale(1)';
        zIndex = 5;
        break;
      case 1: // Right card
      case dummyTeamMembers.length - 1: // Left card
        transform = `translateX(${diff === 1 ? '75%' : '-75%'}) scale(0.85)`;
        zIndex = 4;
        opacity = 0.7;
        break;
      case 2: // Far right card
      case dummyTeamMembers.length - 2: // Far left card
        transform = `translateX(${diff === 2 ? '150%' : '-150%'}) scale(0.7)`;
        zIndex = 3;
        opacity = 0.5;
        break;
      default:
        transform = 'translateX(0) scale(0.7)';
        zIndex = 1;
        opacity = 0;
    }

    return {
      transform,
      zIndex,
      opacity,
      transition: 'all 0.5s ease-in-out',
    };
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden bg-transparent flex justify-center items-center mx-auto">
      {dummyTeamMembers.map((member, index) => (
        <div
          key={member.id}
          className="absolute lg:w-[300px] w-[200px] lg:h-auto h-[70vh] bg-white rounded-lg shadow-lg"
          style={getCardStyle(index)}
        >
          <img src={member.photo} alt={member.name} className="w-[200px] lg:w-full lg:h-96 h-[40%] object-cover rounded-t-lg" />
          <div className="p-4 h-[50%]">
            <h2 className="text-xl font-bold flex justify-center">{member.name}</h2>
            <p className="text-sm text-[#3D9BE9] flex justify-center">{member.position}</p>
            <p className="mt-2 text-sm text-start">{member.description}</p>
            <div className="mt-4 flex justify-center space-x-3">
              {member.socialMedia.twitter && <FaXTwitter className="text-black cursor-pointer" />}
              {member.socialMedia.linkedin && <FaLinkedin className="text-blue-700 cursor-pointer" />}
              {member.socialMedia.github && <FaGithub className="text-gray-800 cursor-pointer" />}
              {member.socialMedia.instagram && <FaInstagram className="text-pink-600 cursor-pointer" />}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCarousel;