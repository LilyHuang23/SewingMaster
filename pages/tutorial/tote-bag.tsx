import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  PageLayout,
  Text,
  LinkTo,
  Slider,
  Seperator,
  Image,
  List,
  Accordian,
  VideoPlayer,
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
      component: "Assembling the Bag",
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
          Tote Bag with Lining          </Text>
          <hr className="my-5" />
          <Text subtitle>
          In this tutorial, we'll walk you through the process of creating a structured tote bag with a lining. This project is perfect for those looking to improve their bag-making skills and create a sturdy, functional accessory.</Text>        </div>
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
                <li>Exterior fabric (canvas, denim, or other sturdy fabric)

                </li><li>Lining fabric
                  </li><li>Interfacing (medium to heavy weight)


                </li><li>Coordinating thread
                </li><li>Magnetic snap closure (or other closure of your choice)
                </li><li>Sewing machine and basic sewing supplies</li>

              </List>
            </section>

            <section className={cardBBorder} id="cuttingFabric">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Measuring and Cutting
              </Text>
              Cut the exterior fabric, lining fabric, and interfacing according to the specified dimensions.

            </section>

            <section className={cardBBorder} id="sew">
            <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Assembling the Bag
              </Text>
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-2xl font-bold"
              >
                Sewing Darts (if applicable)
              </Text>

              If your skirt pattern includes darts, mark and sew them for shaping.
      
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-2xl font-bold"
              >
                Inserting the Zipper and Pocket
              </Text>
              Insert the zipper into the back seam of the skirt. If using an invisible zipper, follow the appropriate technique.
              Attach the pockets to the side seams. Make sure to reinforce the pocket openings for durability.

         
           
              
              <List type={ListType.number}>
                <li>Assemble the outer shell of the bag, including any pockets or design elements. Sew the side seams and bottom seam.
                </li><li>Repeat the previous step with the lining fabric, leaving a small opening at the bottom for turning later.
                </li><li>Create boxed corners on both the outer shell and lining to give the bag depth and structure.
                

                </li>
              </List>
            </section>

            <section className={cardBBorder} id="finish">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Finishing Touches
              </Text>
              Optional: Add interfacing to the waistband for extra stability. Attach a hook and eye closure at the top of the zipper.
            
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Congrats!
              </Text>
              You've now created a structured tote bag with a lining! This project allows for personalization in fabric choice and design elements, making it a functional and stylish accessory.
<Image className="my-5" src="/public/imp_assets/tutorials/ToteBag.png" alt="Tote bag" caption="Tote Bag Example" size={ImageSize.DEFAULT} />
            </section>


          </aside>
        </div>
      </section>
    </PageLayout>
  );
};

export default AllComponents;
