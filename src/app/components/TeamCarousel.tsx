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
    position: "Software Engineer - Backend",
    description: "Passionate about creating efficient and scalable web applications.",
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
    description: "Crafting intuitive and beautiful user experiences.",
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
    position: "Developer",
    description: "Ensuring smooth project execution and team collaboration.",
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
    position: "Project Manager",
    description: "Turning data into actionable insights.",
    photo: "images/Charles.jpg",
    socialMedia: {
        twitter: "https://twitter.com/johndoe",
        linkedin: "https://linkedin.com/in/johndoe",
        github: "https://github.com/mikewhis",
    },
  },
  {
    id: 5,
    name: "Levis Murunga",
    position: "Business Development Executive",
    description: "Developing strategies to reach and engage our target audience.",
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
    <div className="lg:w-[90%] h-[80vh] overflow-hidden bg-transparent items-center">
      {dummyTeamMembers.map((member, index) => (
        <div
          key={member.id}
          className="absolute left-1/2 w-[300px] h-auto bg-white rounded-lg shadow-lg"
          style={getCardStyle(index)}
        >
          <img src={member.photo} alt={member.name} className="w-full h-96 object-cover rounded-t-lg" />
          <div className="p-4">
            <h2 className="text-xl font-bold">{member.name}</h2>
            <p className="text-sm text-gray-600">{member.position}</p>
            <p className="mt-2 text-sm">{member.description}</p>
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