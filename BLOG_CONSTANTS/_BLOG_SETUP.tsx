import { LogoType, NavbarType } from "../src/shared/enums";
import { IAuthor, iNavSetup, iSEO } from "../src/shared/interfaces";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin, AiFillInstagram, AiFillFacebook } from "react-icons/ai";





export const LILY: IAuthor = {
    name: "Lily Huang",
    designation: "Student of Brigham Young University--Idaho",
    bio: "Hi, my name is Lily Huang, from Taichung, Taiwan, and I Love Sewing!  \
    I have been sewing since 9th grade.  \
    My love for sewing and fashion turned into a career, \
    with my own home sewing/alteration business and will be teaching apparel design online classes in the future, \
   I recently helped develop our first online beginning sewing class and am thrilled that with technology I can help share my love for sewing with the world.\
    I hope you enjoy my blog posts and can learn something useful.",
    profilePic: "",
    social: [
        {
            icon: <AiFillGithub />,
            link: 'https://github.com/LilyHuang23'
        },
        {
            icon: <AiFillLinkedin />,
            link: 'https://www.linkedin.com/in/lily-huang-yl/'
        },
    ]
}



// This can your company name / your name etc for SEO purposes
export const WEBSITE_NAME: string = 'Sewing Master';
export const WEBSITE_URL: string = 'https://sewingmaster.web.app/';

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
            label: 'Contact Me',
            path: '/contact-me'
        }
    ],
    socials: [
        {
            link: 'https://www.facebook.com/',
            icon: <AiFillFacebook />
        },
        {
            link: 'https://www.instagram.com/iamlilyhuang/',
            icon: <AiFillInstagram />
        },
        {
            link: 'https://twitter.com/',
            icon: <AiOutlineTwitter />
        },
    ]
}

export const DEFAULT_SEO: iSEO = {
    title: "Sew with Me",
    description: "A blog that help you become sewing master.",
    keywords: "Sewing Blog, Sewing tutorial blog, Sewing, Handmade, ",
    url: WEBSITE_URL,
    author: `${LILY.name}`,
    twitterHandle: '@',
    ogImage: '/public/images/og-image.jpeg'
}