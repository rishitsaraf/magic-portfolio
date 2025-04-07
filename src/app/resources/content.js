import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Rishit",
  lastName: "Saraf",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Entrepreneur and Engineer",
  avatar: "/images/avatar.jpg",
  location: "Asia/Kolkata", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/rishitsaraf",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rishit-saraf/",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:rishitsaraf24@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Entrepreneur and Engineer</>,
  subline: (
    <>
      I'm Rishit, co-founder and CTO of <InlineCode>FLY</InlineCode>, where we are building the
      <br /> next generation of AI-powered customer engagement platform.
    </>
  ),
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Rishit is a Mumbai-based entrepreneur and engineer with a passion for transforming complex challenges
        into simple, data-driven solutions. His work spans digital transformation, process automation,
        and the convergence of business and technology.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Kuloday Technopack Pvt Ltd",
        timeframe: "November 2024 - Present",
        role: "Freelance Digital Transformation Consultant",
        achievements: [
          <>
            Implemented a custom CRM, mapping processes across 3 factories, creating a custom Order Management System, 
            and architecting a pipeline to automate ETL processes that has already processed over 2mn rows.
          </>,
          <>
            Developed a dashboard and integrated with legacy system to track 5 key sales metrics including (AOV, sales costs, CLV, CAC), 
            automating data analysis for informed decision-making.
          </>,
           <>
           Developed and integrated a WhatsApp e-commerce chatbot with the CRM, enhancing customer engagement and 
           contributing to a direct 11% increase in sales volume.
         </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "PwC Strategy&",
        timeframe: "June 2024 - Sept 2024",
        role: "Data Consultant Associate",
        achievements: [
          <>
            Identified and evaluated 60 AI use cases for an Italian retail bank using 15 key metrics. 
            Presented technical and financial analysis of implementable ML models and performance indicators to guide 
            C-level AI adoption decisions.
          </>,
          <>
            Identified an opportunity for 80% reduction in annual operating expenditures by implementing three strategic AI use cases.
          </>,
          <>
            Presented an implementation plan supported by detailed financial models and break-even analysis to senior stakeholders.
          </>,
        ],
        images: [],
      },
      {
        company: "Altus Reach",
        timeframe: "Dec 2023 - May 2024",
        role: "Co-Founder & CTO",
        achievements: [
          <>
            Led a cross-functional team of 5 members to design and launch an AI-driven SaaS platform, reducing video editing time by 
            at least 75% through one-click creation of short-format reels from long-format videos.
          </>,
          <>
            Developed a proprietary deep learning model, achieving 92% accuracy in emotion extraction from videos.
          </>,
          <>
            Secured GBP 5000 in Microsoft Azure credits by developing a robust business case and pitch, enhancing platform scalability.
          </>
        ],
        images: [],
      },
      {
        company: "JP Morgan Chase & Co",
        timeframe: "June 2023 - Aug 2023",
        role: "Investment Banking Analyst Intern",
        achievements: [
          <>
            Conducted due diligence on 5 M&A targets for an Asian beverage company, assessing strategic alignment, financial health, and
            structural fit by developing a comprehensive DCF model incorporating WACC and terminal value analysis.
          </>,
          <>
            Drove 15% ROI increase through a strategic acquisition, leveraging revised DCF model that accounted for plant fire and
            competitor bid; Presented updated valuation to clients enabling crucial decision-making amid market challenges.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Imperial College London",
        description: <>MSc Business Analytics</>,
      },
      {
        name: "SRM Institute of Science and Technology",
        description: <>BTech Computer Science Engineering</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
