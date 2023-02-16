import { Props, SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

const LearnMoreButton = ({ setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
      onClick={() => setSelectedPage(SelectedPage.ContactUs)}
      href={`#${SelectedPage.ContactUs}`}
    >
      <p>Learn More</p>
    </AnchorLink>
  );
};

export default LearnMoreButton;
