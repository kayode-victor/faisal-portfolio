import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import { FaImages, FaVideo } from "react-icons/fa";

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
        year: "2014 - 2024",
      },
      {
        title: "Photographer - Shabab Al-Ahli Football Club",
        other: "Media Coverage during home games.",
        year: "2015 - 2016",
      },
      {
        title: "Photographer - Emirates Airline Festival of Literature",
        other: "Participated in the festival's media coverage.",
        year: "2016 - 2017",
      },
      {
        title: "Photographer & Cinematographer - Corporate Studios",
        other: "Created pictures for high profile individuals",
        year: "2021 - 2022",
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
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159171/faisal-gidado/portrait/portrait_1_qwkjxh.jpg",
    alt: "Portrait-Image-1",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159217/faisal-gidado/portrait/portrait_2_nk68ln.jpg",
    alt: "Portrait-Image-2",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159222/faisal-gidado/portrait/portrait_3_sgf8gf.jpg",
    alt: "Portrait-Image-3",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159247/faisal-gidado/portrait/portrait_4_zk1omg.jpg",
    alt: "Portrait-Image-4",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159227/faisal-gidado/portrait/portrait_5_bj2u13.jpg",
    alt: "Portrait-Image-5",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159191/faisal-gidado/portrait/portrait_6_lx9nsr.jpg",
    alt: "Portrait-Image-6",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159195/faisal-gidado/portrait/portrait_7_y7ajjd.jpg",
    alt: "Portrait-Image-7",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159251/faisal-gidado/portrait/portrait_8_o9i8jq.jpg",
    alt: "Portrait-Image-8",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159278/faisal-gidado/portrait/portrait_9_rzmrza.jpg",
    alt: "Portrait-Image-9",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159267/faisal-gidado/portrait/portrait_10_m2n0df.jpg",
    alt: "Portrait-Image-10",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159294/faisal-gidado/portrait/portrait_11_acpco4.jpg",
    alt: "Portrait-Image-11",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159236/faisal-gidado/portrait/portrait_12_nqxztq.jpg",
    alt: "Portrait-Image-12",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159263/faisal-gidado/portrait/portrait_13_g7q5dt.jpg",
    alt: "Portrait-Image-13",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159199/faisal-gidado/portrait/portrait_14_fgvho0.jpg",
    alt: "Portrait-Image-14",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159203/faisal-gidado/portrait/portrait_15_qdu3kq.jpg",
    alt: "Portrait-Image-15",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159277/faisal-gidado/portrait/portrait_17_j1pufy.jpg",
    alt: "Portrait-Image-16",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159241/faisal-gidado/portrait/portrait_16_cg5fes.jpg",
    alt: "Portrait-Image-17",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159237/faisal-gidado/portrait/portrait_18_x5p34i.jpg",
    alt: "Portrait-Image-18",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159208/faisal-gidado/portrait/portrait_19_w7j6kd.jpg",
    alt: "Portrait-Image-19",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703159212/faisal-gidado/portrait/portrait_20_wvsulo.jpg",
    alt: "Portrait-Image-20",
  },
];
export const weddingData = [
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703157105/faisal-gidado/wedding/wedding1_tmpzoi.jpg",
    alt: "Wedding-Image-1",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703157343/faisal-gidado/wedding/wedding2_i1jdws.jpg",
    alt: "Wedding-Image-2",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703157367/faisal-gidado/wedding/wedding3_epicxc.jpg",
    alt: "Wedding-Image-3",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703157416/faisal-gidado/wedding/wedding4_hk4eyw.jpg",
    alt: "Wedding-Image-4",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703157433/faisal-gidado/wedding/wedding5_cdinss.jpg",
    alt: "Wedding-Image-5",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703157471/faisal-gidado/wedding/wedding6_qbopyb.jpg",
    alt: "Wedding-Image-6",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703157480/faisal-gidado/wedding/wedding7_t6zdbn.jpg",
    alt: "Wedding-Image-7",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703157487/faisal-gidado/wedding/wedding8_yxtapb.jpg",
    alt: "Wedding-Image-8",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703157497/faisal-gidado/wedding/wedding9_qeydll.jpg",
    alt: "Wedding-Image-9",
  },
];
export const commercialData = [
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703157778/faisal-gidado/commercial/product_1_acimcd.jpg",
    alt: "product-Image-1",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703157790/faisal-gidado/commercial/product_2_pikixr.jpg",
    alt: "product-Image-2",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703157982/faisal-gidado/commercial/product_3_ezyqon.jpg",
    alt: "product-Image-3",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703157974/faisal-gidado/commercial/product_4_wpa4ut.jpg",
    alt: "product-Image-4",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703157978/faisal-gidado/commercial/product_5_c4oywg.jpg",
    alt: "product-Image-5",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703158026/faisal-gidado/commercial/product_6_wwyrf5.jpg",
    alt: "product-Image-6",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703158031/faisal-gidado/commercial/product_7_fafyg8.jpg",
    alt: "product-Image-7",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703158008/faisal-gidado/commercial/product_8_k0ywio.jpg",
    alt: "product-Image-8",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703158012/faisal-gidado/commercial/product_9_aq4dbc.jpg",
    alt: "product-Image-9",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703158278/faisal-gidado/commercial/product_10_pybpxu.jpg",
    alt: "product-Image-10",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703158020/faisal-gidado/commercial/product_11_k19j3t.jpg",
    alt: "product-Image-11",
  },
  {
    src: "https://res.cloudinary.com/dikzx4eyh/image/upload/v1703158005/faisal-gidado/commercial/product_12_ck6yl5.jpg",
    alt: "product-Image-12",
  },
];
export const cinematographyData = [
  {
    videoSrc: "https://youtu.be/mCz8uUS72gA",
  },

  {
    videoSrc: "https://youtu.be/5anH_g1DLvs",
  },
];
