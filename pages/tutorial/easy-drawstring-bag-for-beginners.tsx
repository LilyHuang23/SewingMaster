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
          Easy Drawstring Bag for Beginners
          </Text>
          <hr className="my-5" />
          <Text subtitle>
          In this tutorial, we'll walk you through the process of making a simple drawstring bag. These bags are not only useful for organizing and carrying items, but they also make delightful personalized gifts.       
          </Text>
          </div>
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
              <li>
              Fabric (approximately 12x18 inches)</li>
              <li>Cord or ribbon (about 24 inches)
                <li>Safety pin</li>
              </li><li>Sewing machine or needle and thread
              </li><li>Pins
              </li><li>Scissors

              </li>
            </section>

            <section className={cardBBorder} id="cuttingFabric">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Measuring and Cutting
              </Text>
              Measure your pillow insert and add 1 inch to both the length and width for seam allowance. Cut two fabric pieces according to these dimensions.<br />
              <br />
              
            </section>

            <section className={cardBBorder} id="hemmingEdges">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Hemming Top Edge
              </Text>
             
              Fold down about ½ inch along the top edge of the fabric. Sew along the fold, creating a channel for the drawstring.
        
            </section>

        

            <section className={cardBBorder} id="sew">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Sew and Insert Drawstring
              </Text>
             
              <List type={ListType.number}>
                <li>Fold the fabric in half with the right sides together. Pin and sew along both side edges, leaving the top (with the hem) open.</li>
                <li>Turn the bag right side out. About 1 inch below the top edge, sew a straight line all the way around the bag. This creates a channel for the drawstring.</li>
              <li>Attach the safety pin to one end of the cord or ribbon. Thread it through the channel, going all the way around until it comes out the other side.
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
              Tie the two ends of the drawstring together securely. Trim any excess cord.            </section>

            <section className={cardBBorder} id="conclusion">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Congrats!
              </Text>
              You've now made a charming drawstring bag! Customize it with different fabrics and cords for a personalized touch.
              <Image className="my-5" src="/public/imp_assets/tutorials/drawstring.png" alt="drawstring bag" caption="Drawstring Bag Example" size={ImageSize.DEFAULT} />
            </section>

            
          </aside>
        </div>
      </section>
    </PageLayout>
  );
};

export default AllComponents;
