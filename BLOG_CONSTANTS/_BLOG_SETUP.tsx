import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";





export const JULANN: IAuthor = {
    name: "Julann Blake",
    designation: "Instructor of Brigham Young University--Idaho",
    bio: "Hi, my name is Julann Blake, from Rexburg, Idaho, and I Love Sewing!  \
    I have been sewing since 4th grade and started out by designing beautiful gowns\
    for my paper dolls and the latest fashions for my Barbies.  \
    My love for sewing and fashion turned into a career, \
    with my own home sewing/alteration business and teaching apparel design classes at a wonderful university, \
    Brigham Young University--Idaho.  At work I recently helped develop our first online beginning sewing class and am thrilled that with technology I can help share my love for sewing with the world. I hope you enjoy my blog posts and can learn something useful.",
    profilePic: "./images/JulannBlake.jpg",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/nmayur'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/in/mayur-nalwala/'
        },
    ]
}

// export const RUPALI: IAuthor = {
//     name: "Rupali Yadav",
//     designation: "IT Analyst",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//     profilePic: "",
//     social: [
//         {
//             icon: <AiFillGithub />,
//             link: 'https://github.com/rupali-yadav'
//         },
//         {
//             icon: <AiFillLinkedin />,
//             link: 'https://www.linkedin.com/in/rupali-yadav-087bb4112/'
//         },
//     ]
// }


// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = 'Sew. Create. Live Blog';
export const WEBSITE_URL: string = 'https://sewcreatelive.web.app/';

/**
 * This is the main navigation setup.
 * This includes the main navbar and the side drawer.
 */
export const PRIMARY_NAV: iNavSetup = {
    type: NavbarType.DEFAULT,
    // max logo image height 40px
    // you can add logo light version if using image
    logo: {
        type: LogoType.IMAGE,
        logo: '/images/logo-black.png',
        logoLight: '/images/logo-white.png'
    },
    // logo: {
    //     type: LogoType.TEXT,
    //     logo: 'Sewing Master',
    // },
    // navLinks are the main navbar links that apper on top of every page
    navLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories don't add path and add type: dropdown and pass path empty
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Me',
            path: '/about-me'
        },
        
        {
            label: 'Contact Me',
            path: '/contact-me'
        }
    ],
    // sideNavLinks are the links which appear when you open the side menu after clicking the burger menu icon.
    sideNavLinks: [
        {
            label: 'Home',
            path: '/'
        },
        {
            // for categories dont add path and add type: dropdown
            label: 'Blog',
            type: 'dropdown',
            path: ''
        },
        {
            label: 'About Me',
            path: '/about-me'
        },
        {
            label: 'Support Us',
            path: 'https://www.buymeacoffee.com/webexpe13z',
            newTab: true
        },
        {
            label: 'Github Repo',
            path: 'https://github.com/webexpe13/blog-template-using-nextjs-typescript-tailwindcss',
            newTab: true
        },
        {
            label: 'Contact Us',
            path: '/contact-us'
        }
    ],
    socials: [
        {
            link: 'https://www.facebook.com/',
            icon: <AiFillFacebook />
        },
        {
            link: 'https://www.instagram.com/julannblakedesigns/',
            icon: <AiFillInstagram />
        },
        {
            link: 'https://twitter.com/WebExpe',
            icon: <AiOutlineTwitter />
        },
    ]
}

export const DEFAULT_SEO: iSEO = {
    title: "Sew with Me",
    description: "A blog that help you become sewing master.",
    keywords: "Sewing Blog, Sewing tutorial blog, Sewing, Handmade, ",
    url: WEBSITE_URL,
    author: `${JULANN.name}`,
    twitterHandle: '@WebExpe',
    ogImage: '/public/images/og-image.jpg'
}