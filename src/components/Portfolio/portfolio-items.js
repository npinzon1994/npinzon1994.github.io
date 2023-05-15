const bbDemo =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-cd2d0.appspot.com/o/bb-demo.mp4?alt=media&token=84ed2414-4265-4110-a1b1-ee36be260016";

const crDemo =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-cd2d0.appspot.com/o/cr-demo.mp4?alt=media&token=8ab94c07-7b2d-45c7-836d-b019db03c80e";

const bucketlistDemo =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-cd2d0.appspot.com/o/bucketlist-demo.mp4?alt=media&token=1fb8210b-9b72-4b67-9836-5a5dd8600b0e";

const twitterCloneDemo =
  "https://firebasestorage.googleapis.com/v0/b/portfolio-cd2d0.appspot.com/o/twitter-clone-demo.mp4?alt=media&token=a2c9eae8-2215-4d72-a541-67c2bd17c14e";


const languages = {
  budgetBreakdown: ["React", "Redux", "CSS", "Firebase"],
  bucketlist: ["React", "Typescript", "CSS"],
  socialMediaApp: ["React", "Redux", "Firebase"],
  crSite: ["HTML", "CSS", "JavaScript"],
};

const { budgetBreakdown, bucketlist, socialMediaApp, crSite } = languages;

const portfolioItems = [
  {
    id: "P1",
    video: { src: bbDemo, type: "video/mp4" },
    title: "Budget Breakdown",
    description: "Money management tool to help keep track of your expenses.",
    languages: budgetBreakdown,
    liveLink: "https://nikkipinzon.com/budget-breakdown/",
    codeLink: "https://github.com/npinzon1994/budget-breakdown",
  },
  {
    id: "P2",
    video: { src: bucketlistDemo, type: "video/mp4" },
    title: "Bucketlist",
    description: "List of goals you want to achieve within your lifetime.",
    languages: bucketlist,
    liveLink: "https://nikkipinzon.com/bucketlist/",
    codeLink: "https://github.com/npinzon1994/bucketlist",
  },
  {
    id: "P3",
    video: { src: crDemo, type: "video/mp4" },
    title: "Canaan Recycling Website",
    description:
      "Company website for Canaan Recycling, a fully diversified, domestic recycling firm.",
    languages: crSite,
    liveLink: "https://canaanrecycling.com/",
    codeLink: "https://github.com/npinzon1994/Canaan-Recycling-Site",
  },
  {
    id: "P4",
    video: { src: twitterCloneDemo, type: "video/mp4" },
    title: "Twitter Clone",
    description:
      "Will be a simple Twitter clone that allows users to follow, post, like, comment, and direct message.",
    languages: socialMediaApp,
    liveLink: "#",
    codeLink: "https://github.com/npinzon1994/social-media-site",
  },
];

export default portfolioItems;
