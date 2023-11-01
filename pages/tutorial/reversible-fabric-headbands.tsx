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
import CodeBlock from "../../src/components/CodeBlock";
import {
  HowToUseList,
  HowToUseSeperator,
  HowToUsePageLayout,
  HowToUseImageCode,
  HowToUseTextCode,
  HowToUseLinkTo,
  HowToUseSlider,
  HowToUseAccordian,
  HowToUseVideo,
} from "../../src/constants/codeBlocks";

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
      component: "Cutting Fabric",
      href: "#cuttingFabric",
    },
    {
      component: "Sewing Fabric",
      href: "#sewingFabric",
    },
    {
      component: "Turning Inside Out",
      href: "#turningInsideOut",
    },
    {
      component: "Adding Elastic",
      href: "#addingElastic",
    },
    {
      component: "Close Opening",
      href: "#closeOpening",
    },
    {
      component: "Finishing",
      href: "#finishing",
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
            DIY Reversible Fabric Headbands
          </Text>
          <hr className="my-5" />
          <Text subtitle>
            In this tutorial, we'll guide you through the steps to create stylish and versatile reversible fabric headbands. These headbands are not only a great accessory for any outfit but also make wonderful gifts. Let's get started!
          </Text>
        </div>

        <div className="flex md:flex-nowrap flex-wrap relative items-start mt-8">
          {/* side btns */}
          <aside className="md:w-1/5 w-full md:sticky md:top-[90px] ">
            <div className="md:rounded-lg md:p-3 md:block px-2 py-3 md:pb-0 bg-white dark:bg-slate-800 shadow-md mb-5 flex overflow-auto">
              {sideBtnsComponents()}
              {/* <LinkTo
                href="/pages/tutorial/style-guide.tsx"
                className="md:hidden block whitespace-nowrap font-semibold"
              >
                Style Guide
              </LinkTo>
            </div>
            <div className="md:rounded-lg md:p-3 bg-white dark:bg-slate-800 shadow-md overflow-auto md:text-xl text-md font-semibold whitespace-nowrap md:block hidden">
              <LinkTo href="/pages/tutorial/style-guide.tsx">
                Style Guide
              </LinkTo> */}
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
                Two coordinating fabric pieces (approximately 12x3 inches each)</li>
              <li>Elastic (about 8 inches)
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
                Cutting Fabric
              </Text>
Begin by cutting your chosen fabric pieces to the desired dimensions (12x3 inches). <br />
              <br />
              
            </section>

            <section className={cardBBorder} id="sewingFabric">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Sewing Fabric
              </Text>
              <List type={ListType.number}>
              <li>Place the two fabric pieces right sides together. Pin along the long edge, leaving the short edges open.
              </li><li>Sew along the pinned edge with a ¼ inch seam allowance. Leave both short edges open
              </li>
              </List>
            </section>

            <section className={cardBBorder} id="turningInsideOut">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Turning Inside Out
              </Text>
              Carefully turn the fabric tube inside out so the right sides are now facing out.
            </section>

            <section className={cardBBorder} id="addingElastic">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Adding Elastic
              </Text>
              <b>{"<Seperator dots/>"}</b> or <b>{"<Seperator line />"}</b>{" "}
              these are used to add a section divider as shown below. <br />{" "}
              <br />
              <List type={ListType.number}>
                <li>Attach a safety pin to one end of the elastic. Thread it through the fabric tube, making sure to hold onto the other end to prevent it from getting lost inside.</li>
                <li>Once threaded through, overlap the elastic ends by about an inch and stitch them together securely.</li>
              </List>
            </section>

            <section className={cardBBorder} id="closeOpening">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Close Opening
              </Text>
              <b>{'<LinkTo href="url" />'}</b> <br />
              Fold in the raw edges of the fabric on each side and sew them shut. This will encase the elastic ends.
            </section>

            <section className={cardBBorder} id="imageslider">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Finishing Touches
              </Text>
              Adjust the fabric so that it evenly covers the elastic. Give it a final press with an iron to smooth out any wrinkles.
            </section>

            <section className={cardBBorder} id="accordian">
              <Text
                subtitle
                className="mb-5 pb-3 border-b md:!text-3xl font-bold"
              >
                Congrats!
              </Text>
              You've now created a beautiful reversible fabric headband! Experiment with different fabric patterns and colors to match your style.
            </section>

            
          </aside>
        </div>
      </section>
    </PageLayout>
  );
};

export default AllComponents;
