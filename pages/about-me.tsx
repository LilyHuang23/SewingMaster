/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../src/components";
import { CURRENT_YEAR } from "../src/constants/appConstants";
import { iSEO } from "../src/shared/interfaces";

const AboutUs = () => {
    const PAGE_SEO: iSEO = {
        title: 'About Me',
        description: `Hi I am Lily Huang. This is an open source blog template which can help you start a simple static blog.`,
        keywords: 'Lily Huang, contact me, example@gmail.com, next js blog template',
        author: 'Lily Huang'
    }
    return (
        <PageLayout PAGE_SEO={PAGE_SEO} home>
            <section className='container px-3 md:pb-20 md:pt-10 pt-20'>

                <img src="/images/lily.jpg" alt="Julann Blake" className="w-1/4 h-1/4 rounded-lg overflow-hidden" />

                <Text title className='mb-5 mt-10 dark:text-sky-400 text-sky-600'>
                    Hi, my name is Lily Huang
                </Text>
                <Text subtitle className='text-xl mb-5'>
                    This is a sewing blog which can help you start learning sewing.
                </Text>

                <Text p className='text-lg'>
                I am from Taichung, Taiwan, and I Love Sewing!
    I have been sewing since 9th grade.
    My love for sewing and fashion turned into a career,
    with my own home sewing/alteration business and will be teaching apparel design online classes in the future,
   I recently helped develop our first online beginning sewing class and am thrilled that with technology I can help share my love for sewing with the world.
    I hope you enjoy my blog posts and can learn something useful.
                </Text>


                <Text p className="!text-lg leading-relaxed mb-0">
                    For any any question related to any project / tutorial feel free to connect with me at <u>example@gmail.com</u>
                </Text>


            </section>
        </PageLayout>
    )
}

export default AboutUs