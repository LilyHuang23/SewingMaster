import { iArticle } from "../src/shared/interfaces";

// Import author profiles, just type the name you have set in _BLOG_SETUP inside the curly brackets
import { LILY } from "./_BLOG_SETUP";

// main article list to display all articles

// clear this article list and add your own
const ARTICLES_LIST: iArticle[] = [
  {
    path: "/pages/tutorial/envelope-pillow-cover.tsx",
    featureArticle: true,
    preview: {
      author: LILY,
      date: "October 03 2023",
      articleTitle: "Sew Your Own Envelope Pillow Covers",
      tags: "Envelope Pillow Covers, Pillow Covers, demo blog",
      thumbnail: "/public/imp_assets/tutorials/envelope-pillow.png",
      shortIntro: "This pattern is a ChatGPT generate article for senior project use only.  \
      The instructions below are for a basic long sleeve with a tailored placket and cuff, lined yoke, collar and stand, and front button band. ",
      category: "Beginner",
    },
    seo: {
      title: "Envelope Pillow Covers",
      description: "These are the steps to sew you pillow cover",
      keywords: "Envelope Pillow Covers, How to sew a Envelope Pillow Covers",
      ogImage: "/public/imp_assets/tutorials/envelope-pillow.png",
      author: LILY.name,
    },
  },
  {
    path: "/pages/tutorial/reversible-fabric-headbands.tsx",
    preview: {
      author: LILY,
      date: "August 08 2023",
      articleTitle: "DIY Reversible Fabric Headbands",
      tags: "demo, DIY Reversible Fabric Headbands",
      thumbnail: "/public/imp_assets/tutorials/headbands.png",
      shortIntro: "DIY Reversible Fabric Headbands",
      category: "Beginner",
    },
    seo: {
      keywords: "demo, DIY Reversible Fabric Headbands",
      ogImage: "/public/imp_assets/tutorials/headbands.png",
    },
  },
  {
    path: "/pages/tutorial/easy-drawstring-bag-for-beginners.tsx",
    preview: {
      author: LILY,
      date: "August 28 2023",
      articleTitle: "Easy Drawstring Bag for Beginners",
      tags: "demo, Easy Drawstring Bag for Beginners",
      thumbnail: "/public/imp_assets/tutorials/drawstring.png",
      shortIntro: "Easy Drawstring Bag for Beginners",
      category: "Beginner",
    },
    seo: {
      keywords: "demo, Easy Drawstring Bag for Beginners",
      ogImage: "/public/imp_assets/tutorials/drawstring.png",
    },
  },
  {
    path: "/pages/tutorial/tote-bag.tsx",
    preview: {
      author: LILY,
      date: "August 28 2023",
      articleTitle: "Tote Bag with Lining",
      tags: "demo, Tote Bag with Lining",
      thumbnail: "/public/imp_assets/tutorials/ToteBag.png",
      shortIntro: "Tote Bag with Lining",
      category: "Mid-Level",
    },
    seo: {
      keywords: "demo, Tote Bag with Lining",
      ogImage: "/public/imp_assets/tutorials/ToteBag.png",
    },
  },
  {
    path: "/pages/tutorial/classic-A-line-skirt-with-pockets.tsx",
    preview: {
      author: LILY,
      date: "August 28 2023",
      articleTitle: "Classic A-Line Skirt with Pockets",
      tags: "demo, Classic A-Line Skirt with Pockets",
      thumbnail: "/public/imp_assets/tutorials/A-Line.png",
      shortIntro: "Classic A-Line Skirt with Pockets tutorial",
      category: "Mid-Level"
    },
    seo: {
      keywords: "demo, Classic A-Line Skirt with Pockets",
      ogImage: "/public/imp_assets/tutorials/A-Line.png",
    },
  },
  {
    path: "/pages/tutorial/leather-jacket-masterclass.tsx",
    preview: {
      author: LILY,
      date: "December 2 2023",
      articleTitle: "Leather Jacket Masterclass",
      tags: "demo, Leather Jacket Masterclass",
      thumbnail: "/public/imp_assets/tutorials/blackLeatherJacket.png",
      shortIntro: "Leather Jacket Masterclass tutorial",
      category: "Advance"
    },
    seo: {
      keywords: "demo, Leather Jacket Masterclass",
      ogImage: "/public/imp_assets/tutorials/blackLeatherJacket.png",
    },
  }
];

export const SORTED_ARTICLES_BY_DATE = ARTICLES_LIST.sort((a, b) =>
  new Date(a.preview.date) > new Date(b.preview.date) ? -1 : 1
);
