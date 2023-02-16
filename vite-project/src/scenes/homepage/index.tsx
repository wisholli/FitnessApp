import { Props, SelectedPage } from "@/shared/types";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import { motion } from "framer-motion";
import LearnMoreButton from "@/utils/LearnMoreButton";
import AnimationFun from "@/utils/Animation";

const HomaPage = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="home" className="md:pd-0 gap-16 bg-gray-20 py-10 md:h-full">
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <div className="z-10 mt-32 md:basis-3/5">
          <AnimationFun>
            <div className="md:-mt-20">
              <div className="relative">
                <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                  <img src={HomePageText} alt="home-page-text" />
                </div>
              </div>
              <p className="mt-8 text-sm ">
                Unrivaled Gym. Unparalleled Training Fitness Classes. World
                Class Studios to get the Body Shapes That you Dream of.. Get
                Your Dream Body Now.
              </p>
            </div>
          </AnimationFun>
          <AnimationFun>
            <div className="mt-8 flex items-center gap-8 ">
              <ActionButton setSelectedPage={setSelectedPage}>
                Join Now
              </ActionButton>
              <LearnMoreButton setSelectedPage={setSelectedPage} />
            </div>
          </AnimationFun>
        </div>
        <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
          <img src={HomePageGraphic} alt="home-page-graphic" />
        </div>
      </motion.div>
      {isAboveMediumScreens && (
        <div
          className="w- onViewportEnter={()
        => setSelectedPage(SelectedPage.Home)}full h-[150px] bg-primary-100 py-10"
        >
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8">
              <img src={SponsorRedBull} alt="sponsor-redbull" />
              <img src={SponsorForbes} alt="sponsor-forbes" />
              <img src={SponsorFortune} alt="sponsor-fortune" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomaPage;
