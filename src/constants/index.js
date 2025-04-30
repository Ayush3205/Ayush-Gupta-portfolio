const navLinks = [
  {
      name: "Work",
      link: "#work",
  },
  {
      name: "Experience",
      link: "#experience",
  },
  {
      name: "Skills",
      link: "#skills",
  },
  {
      name: "Testimonials",
      link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Satisfied Clients" },
  { value: 11, suffix: "+", label: "Completed Projects" },
  { value: 70, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
      imgPath: "/images/logos/company-logo-1.png",
  },
  {
      imgPath: "/images/logos/company-logo-2.png",
  },
  {
      imgPath: "/images/logos/company-logo-3.png",
  },
  {
      imgPath: "/images/logos/company-logo-4.png",
  },
  {
      imgPath: "/images/logos/company-logo-5.png",
  },
  {
      imgPath: "/images/logos/company-logo-6.png",
  },
  {
      imgPath: "/images/logos/company-logo-7.png",
  },
  {
      imgPath: "/images/logos/company-logo-8.png",
  },
  {
      imgPath: "/images/logos/company-logo-9.png",
  },
  {
      imgPath: "/images/logos/company-logo-10.png",
  },
  {
      imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
      imgPath: "/images/seo.png",
      title: "Quality Focus",
      desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
      imgPath: "/images/chat.png",
      title: "Reliable Communication",
      desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
      imgPath: "/images/time.png",
      title: "On-Time Delivery",
      desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
      name: "React Developer",
      imgPath: "/images/logos/react.png",
  },
  {
      name: "Python Developer",
      imgPath: "/images/logos/python.svg",
  },
  {
      name: "Backend Developer",
      imgPath: "/images/logos/node.png",
  },
  {
      name: "Interactive Developer",
      imgPath: "/images/logos/three.png",
  },
  {
      name: "Project Manager",
      imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
      name: "React Developer",
      modelPath: "/models/react_logo-transformed.glb",
      scale: 1,
      rotation: [0, 0, 0],
  },
  {
      name: "Python Developer",
      modelPath: "/models/python-transformed.glb",
      scale: 0.8,
      rotation: [0, 0, 0],
  },
  {
      name: "Backend Developer",
      modelPath: "/models/node-transformed.glb",
      scale: 5,
      rotation: [0, -Math.PI / 2, 0],
  },
  {
      name: "Interactive Developer",
      modelPath: "/models/three.js-transformed.glb",
      scale: 0.05,
      rotation: [0, 0, 0],
  },
  {
      name: "Project Manager",
      modelPath: "/models/git-svg-transformed.glb",
      scale: 0.05,
      rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
      review: "Ayush’s contributions at Rosmerta Technology Limited significantly elevated the quality and performance of our web platform. His full-stack development expertise led to robust, secure, and scalable solutions that enhanced the user experience and aligned seamlessly with our product objectives.",
      imgPath: "/images/exp3.png",
      logoPath: "/images/logo3.png",
      title: "Full Stack Developer",
      date: "August 2024 - Present",
      responsibilities: [
          "Built a full-stack web application using the MERN stack with Next.js and Tailwind CSS, featuring responsive user and admin dashboards for course browsing, purchasing, and management.",
          "Implemented secure authentication using JWT and OTP-based login, integrated Razorpay for payments, and added role-based access control for Admin, Moderator, and Creator roles.",
          "Developed features like dynamic course CRUD operations, S3-based file uploads for certificates/resources, and user dashboards with order history, progress tracking, and certificate downloads.",
      ],
  },
  {
      review: "Ayush combined creativity with technical expertise, playing a crucial role in optimizing frontend performance. His contributions significantly enhanced the user experience and were vital in delivering faster, more reliable web solutions.",
      imgPath: "/images/exp1.png",
      logoPath: "/images/logo1.png",
      title: "Freelance Project",
      date: "December 2024 - Feburary 2025",
      responsibilities: [
          "Developed and deployed a professional portfolio website for a client as part of a freelance project with an agency, using React and Next.js to ensure a modern, responsive, and SEO-optimized design.",
          "Integrated real-time email response functionality to instantly notify the client upon form submissions, improving communication and client engagement.",
          "Optimized site performance and accessibility, enhancing user experience, increasing engagement, and improving site speed.",
      ],
  },
  {
      review: "Ayush brought a strong blend of creativity and technical expertise to our team, playing a key role in optimizing frontend performance. His contributions directly enhanced user experience and were instrumental in delivering faster, more reliable web solutions.",
      imgPath: "/images/exp2.png",
      logoPath: "/images/logo2.png",
      title: "Web Developer",
      date: "June 2020 - December 2023",
      responsibilities: [
          "Enhanced the e-commerce user experience by improving the Cart Screen UI and integrating RESTful APIs for cart management, OTP verification, and user authentication flows.",
          "Built and maintained scalable CI/CD pipelines using Jenkins for Java, .NET, and Node.js applications, reducing deployment time and manual intervention.",
          "Configured AWS CloudWatch dashboards and alerts for real-time monitoring and log analysis, improving system visibility and accelerating incident detection.",
      ],
  },
];

const expLogos = [
  {
      name: "logo1",
      imgPath: "/images/logo1.png",
  },
  {
      name: "logo2",
      imgPath: "/images/logo2.png",
  },
  {
      name: "logo3",
      imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
      name: "Shobhit Gupta",
      mentions: "@Shobhit.gupta",
      review:
          "I can’t say enough good things about Ayush. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
      imgPath: "/images/client1.png",
  },
  {
      name: "Ujjwal Gupta",
      mentions: "@GuptaUjjwal",
      review:
          "Working with Ayush was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
      imgPath: "/images/client3.png",
  },
  {
      name: "Akash Kumar",
      mentions: "@akashkumar",
      review:
          "Collaborating with Ayush was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Ayush's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Ayush is the ideal partner.",
      imgPath: "/images/client2.png",
  },
  {
      name: "Satvik Mangal",
      mentions: "@_mangalsatvik.",
      review:
          "Ayush was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
      imgPath: "/images/client5.png",
  },
  {
      name: "Parth",
      mentions: "@Parthh",
      review:
          "Ayush’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
      imgPath: "/images/client4.png",
  },
  {
      name: "Akshat Kumar",
      mentions: "@kumar.akshat",
      review:
          "Ayush was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
      imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  // {
  //     name: "insta",
  //     imgPath: "/images/insta.png",
  //     url: "",
  // },
  {
      name: "git",
      imgPath: "/images/git.png",
      url: "https://github.com/Ayush3205",
  },
  {
      name: "linkedin",
      imgPath: "/images/linkedin.png",
      url: "https://www.linkedin.com/in/ayush-gupta3205/",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};