import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  PageLayout,
  Text,
  LinkTo,
 
  Image,
  List,
} from "../../src/components";
import { ListType, ImageSize } from "../../src/shared/enums";
import { combineClasses } from "../../src/utils/utils";

interface iSideBtnLinks {
  component: string;
  types?: {
    label: string;
    href: string;
  }[];
  href?: string;
}

const AllComponents = () => {
  const router = useRouter();
  const routerIncludesHash = router.asPath.includes("#");
  const [activeHash, setActiveHash] = useState("");
  const cardBBorder =
    "border-b-[8px] border-pink-500 bg-white dark:bg-slate-800 shadow-md md:rounded-lg px-3 pb-2 pt-1 mb-8";

  useEffect(() => {
    if (routerIncludesHash) {
      const split = router.asPath.split("#");
      setActiveHash(split[split.length - 1]);
    }
  }, [router]);

  const isActive = (href: string) => href === "#" + activeHash;

  // all side btn links
  const sideBtns: iSideBtnLinks[] = [
    {
      component: "Materials",
      href: "#materials",
    },
    {
      component: "Measuring and Cutting",
      href: "#cuttingFabric",
    },
    {
      component: "Hemming Top Edges",
      href: "#hemmingEdges",
    },
    {
      component: "Sew & Insert Drawstring",
      href: "#sew",
    },
    {
      component: "Finish",
      href: "#finish",
    },
  ];

  const sideBtnsComponents = () => {
    return sideBtns.map((each: any, i: any) => (
      <div key={each.component + i}>
        {each.types ? (
          <p className="text-xl font-semibold mb-3">{each.component}</p>
        ) : (
          <LinkTo
            href={each.href}
            key={each.href}
            className={combineClasses(
              "md:text-xl text-md font-semibold mb-3 block whitespace-nowrap md:mr-0 mr-5",
              isActive(each.href) && "text-blue-500"
            )}
          >
            {each.component}
          </LinkTo>
        )}
        <div className="mb-3">
          {each.types &&
            each.types.map((each: any) => (
              <LinkTo
                href={each.href}
                key={each.href}
                className={combineClasses(
                  "block text-gray-500 font-medium py-1 pl-3 border-l",
                  isActive(each.href) &&
                  "text-blue-500 border-blue-500 border-l-2"
                )}
              >
                {each.label}
              </LinkTo>
            ))}
        </div>
      </div>
    ));
  };

  return (
    <PageLayout>
      <section className="container md:pt-10 pt-20 px-0 md:px-[15px]">
        <div className="md:px-0 px-3">
          <Text title className="text-blue-600">
          Leather Jacket Masterclass
          </Text>
          <hr className="my-5" />
          <Text subtitle>
            Embark on an advanced sewing journey with a masterclass in creating a leather jacket. This project will challenge your skills in working with leather, precision sewing, and hardware installation, resulting in a timeless wardrobe piece.
        </Text></div>
        <div className="flex md:flex-nowrap flex-wrap relative items-start mt-8">
          {/* side btns */}
          <aside className="md:w-1/5 w-full md:sticky md:top-[90px] ">
            <div className="md:rounded-lg md:p-3 md:block px-2 py-3 md:pb-0 bg-white dark:bg-slate-800 shadow-md mb-5 flex overflow-auto">
              {sideBtnsComponents()}

            </div>
          </aside>

          {/* components */}
          <aside className="md:w-4/5 w-full md:px-[15px]">
            <section className={cardBBorder} id="materials">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Materials
              </Text>
              Materials Needed:
              <List type={ListType.number}>
                <li>Leather or faux leather fabric</li>
                <li>Lining fabric</li>
                  <li>Interfacing (for collar and cuffs)
                </li><li>Metal zippers and snaps
                </li><li>Leather needles for sewing machine
                </li><li>Coordinating thread, Sewing machine and basic sewing supplies</li>

              </List>
            </section>

            <section className={cardBBorder} id="cuttingFabric">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Choosing and Preparing Leather:
                
              </Text>
Select high-quality leather or faux leather and prepare it for cutting by stabilizing with interfacing.
<Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Cutting and Marking
                
              </Text>
              Cut the leather pieces according to the jacket pattern and mark any necessary points for hardware installation.
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Adding Interfacing and Zipper
                
              </Text>
              Apply interfacing to collar and cuffs for added structure. Install metal zippers and snaps, ensuring precision in placement.
            </section>

            <section className={cardBBorder} id="hemmingEdges">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Sewing Leather Panels
              </Text>

              Sew the leather panels together with a sewing machine equipped with a leather needle, using a longer stitch length.
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Lining Installation
              </Text>
              Attach the lining to the leather jacket, paying careful attention to matching seams and ensuring a clean finish.
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Constructing Collar and Cuffs
              </Text>
              Construct the collar and cuffs, ensuring they are symmetrical and well-shaped.
            </section>
            <section className={cardBBorder} id="Zipper&Pocket">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Zipper and Snap Finishing
              </Text>
              Ensure smooth operation of zippers and snaps, securing them in place with reinforced stitching.
            </section>
            <section className={cardBBorder} id="sew">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Finishing Edges and Hems:
              </Text>
              Finish the edges and hems of the leather jacket with precision, considering the thickness of the material.
            </section>

            <section className={cardBBorder} id="finish">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Final Pressing and Detailing
              </Text>
              Give the leather jacket a final press, paying attention to shaping and detailing. Hand stitch any necessary finishing touches.            </section>
            <section className={cardBBorder} id="conclusion">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Congrats!
              </Text>
Congratulations on completing your leather jacket masterclass! This project showcases advanced skills in working with leather and hardware, resulting in a stylish and enduring wardrobe piece.
<Image className="my-5" src="/public/imp_assets/tutorials/blackLeatherJacket.png" alt="Black Leather Jacket" caption="Black Leather Jacket Example" size={ImageSize.DEFAULT} />
            </section>


          </aside>
        </div>
      </section>
    </PageLayout>
  );
};

export default AllComponents;
