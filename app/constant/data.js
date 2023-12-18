import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import { FaImage, FaImages } from "react-icons/fa";

//nav Data
export const navData = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "About", path: "/about", icon: <HiUser /> },
  { name: "Portfolio", path: "/work", icon: <HiRectangleGroup /> },
  {
    name: "Testimonials",
    path: "/testimonials",
    icon: <HiChatBubbleBottomCenterText />,
  },
  { name: "Contact", path: "/contact", icon: <HiEnvelope /> },
];

export const aboutData = [
  {
    title: "Expertises",
    info: [
      {
        title: "Portraits",
      },
      {
        title: "Weddings",
      },
      {
        title: "Commercial",
      },

      {
        title: "Cinematography",
      },
    ],
  },
  {
    title: "Experience",
    info: [
      {
        title: "Photographer & Cinematographer - Dash Media",
        other: "Founder of Dash Media",
        year: "2018 - 2024",
      },
      {
        title: "Volunteer - Gidado Won Foundation",
        other: "Volunteer Work",
        year: "2016 - 2024",
      },
      {
        title: "Photographer - PEPC Foundation",
        other: "Photographer of Event",
        year: "2020",
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        title: "Bachelor's, Media (Screen Production)",
        other: "University of Mudrich, Dubai",
        year: "2017",
      },
      {
        title: "Professional Certificate, Cinematography",
        other: "PEFTI Film Institute, Lagos",
        year: "2021",
      },
      {
        title: "Diploma, Online Business Management",
        other: "Trebas Institue, Quebec",
        year: "2023",
      },
    ],
  },
];

export const worksData = [
  {
    icon: <FaImages />,
    title: "Portraits",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, obcaecati.",
    link: "/portraits",
  },
  {
    icon: <FaImages />,
    title: "Wedding",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, obcaecati.",
    link: "/wedding",
  },
  {
    icon: <FaImages />,
    title: "Commercial",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, obcaecati.",
    link: "/commercial",
  },
  {
    icon: <FaImages />,
    title: "Cinematography",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, obcaecati.",
    link: "/cinematography",
  },
  {
    icon: <FaImages />,
    title: "Documentary",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, obcaecati.",
    link: "/documentary",
  },
];

export const testimonialData = [
  {
    name: "John Doe",
    position: "Customer",
    message:
      "I had a wonderful experience with this photographer. The attention to detail and creativity in capturing moments were truly exceptional. I highly recommend their services.",
  },
  {
    name: "Jane Smith",
    position: "Customer",
    message:
      "Working with this photographer exceeded my expectations. The quality of the photos and the professionalism throughout the entire process were outstanding. I am thrilled with the results.",
  },
  {
    name: "Alex Johnson",
    position: "Customer",
    message:
      "As a satisfied customer, I can not say enough about the skills of this photographer. They have a unique ability to capture the essence of the moment, and I am happy with the results.",
  },
  {
    name: "Emily Brown",
    position: "Customer",
    message:
      "I recently hired this photographer for an event, and the results were amazing. The attention to detail, friendly approach, and the ability to capture candid moments were truly impressive. ",
  },
  {
    name: "Michael Johnson",
    position: "Customer",
    message:
      "I recently had a photo session with this photographer, and I couldn't be happier with the results. The images captured were beyond my expectations. A truly talented photographer!",
  },
  {
    name: "Sophia Martinez",
    position: "Customer",
    message:
      "Working with this photographer was a delightful experience. The attention to detail, creativity, and professionalism were outstanding. The photos captured the essence of the moment perfectly.",
  },
  {
    name: "Olivia Davis",
    position: "Customer",
    message:
      "As a repeat customer, I am impressed by the skills of this photographer. The ability to make every session special sets him apart. I wouldn't trust anyone else with my memories.",
  },
];

export const portraitData = [
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702828677/cld-sample-5.jpg",
    alt: "Image 1",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702828677/cld-sample-5.jpg",
    alt: "Image 2",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702828677/cld-sample-5.jpg",
    alt: "Image 2",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702828677/cld-sample-5.jpg",
    alt: "Image 2",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702828677/cld-sample-5.jpg",
    alt: "Image 2",
  },
];
export const weddingData = [
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702828677/cld-sample-5.jpg",
    alt: "Image 1",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702828677/cld-sample-5.jpg",
    alt: "Image 2",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702828677/cld-sample-5.jpg",
    alt: "Image 2",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702828677/cld-sample-5.jpg",
    alt: "Image 2",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702828677/cld-sample-5.jpg",
    alt: "Image 2",
  },
];
export const commercialData = [
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702828677/cld-sample-5.jpg",
    alt: "Image 1",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702828677/cld-sample-5.jpg",
    alt: "Image 2",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702828677/cld-sample-5.jpg",
    alt: "Image 2",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702828677/cld-sample-5.jpg",
    alt: "Image 2",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702828677/cld-sample-5.jpg",
    alt: "Image 2",
  },
];
export const cinematographyData = [
  {
    videoSrc: "https://www.youtube.com/watch?v=AOnuf3rmWlw",
    alt: "Image 1",
  },
  {
    videoSrc: "https://www.youtube.com/watch?v=AOnuf3rmWlw",
    alt: "Image 1",
  },
  {
    videoSrc: "https://www.youtube.com/watch?v=AOnuf3rmWlw",
    alt: "Image 1",
  },
];
export const documentaryData = [
  {
    videoSrc: "https://www.youtube.com/watch?v=AOnuf3rmWlw",
    alt: "Image 1",
  },
  {
    videoSrc: "https://www.youtube.com/watch?v=AOnuf3rmWlw",
    alt: "Image 1",
  },
  {
    videoSrc: "https://www.youtube.com/watch?v=AOnuf3rmWlw",
    alt: "Image 1",
  },
  {
    videoSrc: "https://www.youtube.com/watch?v=AOnuf3rmWlw",
    alt: "Image 1",
  },
];
