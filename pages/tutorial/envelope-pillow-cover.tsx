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
      component: "Hemming Edges",
      href: "#hemmingEdges",
    },
    {
      component: "Creating Overlap",
      href: "#Overlap",
    },
    {
      component: "Pin and Sew",
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
          Sew Your Own Envelope Pillow Covers
          </Text>
          <hr className="my-5" />
          <Text subtitle>
          Learn how to make custom envelope-style pillow covers to refresh the look of your living space. This tutorial will guide you through the steps for a simple and versatile sewing project.          </Text>
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
              Fabric (enough to cover your pillow plus a little extra for seam allowance)</li>
              <li>Pillow insert
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
                Hemming Edges
              </Text>
              <List type={ListType.number}>
              <li>On one of the longer sides of each fabric piece, fold the edge over twice (about ½ inch each fold) to create a neat hem. Sew along the fold to secure it.
              </li>
              </List>
            </section>

            <section className={cardBBorder} id="overlap">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Creating Overlap
              </Text>
              Lay one fabric piece flat with the right side facing up. Place the other piece on top with the right side facing down, aligning the hemmed edges. The hemmed edges should overlap in the center.
            </section>

            <section className={cardBBorder} id="sew">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Pin and Sew
              </Text>
             
              <List >
              <li>Pin around the remaining three edges to hold the fabric in place. Sew around all four edges with a ½ inch seam allowance.</li>
              </List>
            
              <Text
                subtitle
                className="mb-5 pb-3  md:!text-3xl font-bold"
              >
                Trim Corners and Turn Inside Out
              </Text>
              Trim a small triangle off each corner (be careful not to cut the stitching). This reduces bulk in the corners when you turn it inside out.

            </section>

            <section className={cardBBorder} id="finish">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Insert Pillow and Adjust:
              </Text>
              Turn the cover inside out, gently pushing out the corners. Insert your pillow and adjust as needed.
            </section>

            <section className={cardBBorder} id="conclusion">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Congrats!
              </Text>
              Congratulations! You've successfully created a custom envelope-style pillow cover. Mix and match fabrics to suit your decor.
              <Image className="my-5" src="/public/imp_assets/tutorials/envelope-pillow.png" alt="envelope-pillow" caption="Envelope Pillow Example" size={ImageSize.DEFAULT} />
            </section>

            
          </aside>
        </div>
      </section>
    </PageLayout>
  );
};

export default AllComponents;
