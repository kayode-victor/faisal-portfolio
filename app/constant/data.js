import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import { FaImage, FaImages, FaVideo } from "react-icons/fa";

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
    link: "/portraits",
  },
  {
    icon: <FaImages />,
    title: "Wedding",
    link: "/wedding",
  },
  {
    icon: <FaImages />,
    title: "Commercial",
    link: "/commercial",
  },
  {
    icon: <FaVideo />,
    title: "Videos",
    link: "/cinematography",
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
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702893702/portrait-2_bzrvip.jpg",
    alt: "Image 1",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702893715/portrait-20_omiznm.jpg",
    alt: "Image 2",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702893716/portrait-18_slytqd.jpg",
    alt: "Image 3",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702893716/portrait-18_slytqd.jpg",
    alt: "Image 4",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702893719/portrait-6_l3bhwz.jpg",
    alt: "Image 5",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702893719/portrait-5_wbq58r.jpg",
    alt: "Image 6",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702893730/portrait-9_gpefbm.jpg",
    alt: "Image 7",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702893740/portrait-10_cdnusk.jpg",
    alt: "Image 8",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702893741/portrait-19_mgnjrf.jpg",
    alt: "Image 9",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702893733/portrait-3_dazslv.jpg",
    alt: "Image 10",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702893734/portrait-11_oid3ai.jpg",
    alt: "Image 11",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702893738/portrait-12_rrpa0x.jpg",
    alt: "Image 12",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702893747/portrait-16_hbvhde.jpg",
    alt: "Image 13",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702893746/portrait-15_vnenfi.jpg",
    alt: "Image 14",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702893741/portrait-13_gvcvxg.jpg",
    alt: "Image 15",
  },
];
export const weddingData = [
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894315/wedding-1_yuyx18.jpg",
    alt: "Image 1",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894316/wedding-2_i2uobw.jpg",
    alt: "Image 2",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894318/wedding-3_qzvrqa.jpg",
    alt: "Image 3",
  },

  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894349/wedding-6_hgdkzi.jpg",
    alt: "Image 6",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894313/wedding-7_golrzk.jpg",
    alt: "Image 7",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894361/wedding-8_on6ibr.jpg",
    alt: "Image 8",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894348/wedding-9_i3xrzm.jpg",
    alt: "Image 9",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894341/wedding-10_piblqi.jpg",
    alt: "Image 10",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894348/wedding-11_jbn9uh.jpg",
    alt: "Image 11",
  },
];
export const commercialData = [
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894588/Commercial-1_uibcve.jpg",
    alt: "Image 1",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894592/Commercial-2_v36vae.jpg",
    alt: "Image 2",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894596/Commercial-3_racepn.jpg",
    alt: "Image 3",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894592/Commercial-2_v36vae.jpg",
    alt: "Image 4",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894598/Commercial-5_jzcbxb.jpg",
    alt: "Image 5",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894603/Commercial-6_lqzgcj.jpg",
    alt: "Image 6",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894569/Commercial-10_h9f2f6.jpg",
    alt: "Image 7",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894568/Commercial-8_i0wje0.jpg",
    alt: "Image 8",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1702894568/Commercial-9_mh04ec.jpg",
    alt: "Image 9",
  },
];
export const cinematographyData = [
  {
    videoSrc: "https://youtu.be/mCz8uUS72gA",
  },

  {
    videoSrc: "https://youtu.be/5anH_g1DLvs",
  },
  {
    videoSrc: "https://youtube.com/shorts/iW8vvFHws0g?feature=share",
  },
];
