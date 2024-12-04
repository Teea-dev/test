import CelebrityContentSection from "./_local-components/CelebrityContentSection";
import ContentDetailsSection from "./_local-components/contentDetailsSection";
import DownloadStarfiSection from "../../_global-components/DownloadStarfiSection";
import HeroSection from "./_local-components/HeroSection";
import SeamlessTransactionSection from "./_local-components/SeamlessTransactionSection";
import ShineAmongStarsSection from "./_local-components/ShineAmongStarsSection";
import StatisticsSection from "./_local-components/StatisticsSection";
import TailorYourFeedSection from "./_local-components/TailorYourFeedSection";
import WordsFromOurStarzSection from "./_local-components/WordsFromOurStarzSection";
import FrequestlyAskedQuestionSection from "@/app/_global-components/FrequestlyAskedQuestionSection";
import s from "./page.module.scss";
import { Metadata } from "next";
import getPageDefaultMetadata from "@/utils/metadataChunks/getPageDefaultMetadata";

export default async function Home() {
  return (
    <>
      <section className={s.homeGrid}>
        <ShineAmongStarsSection />
      </section>
    </>
  );
}

const title = "Home";
const description = ``;

export const metadata: Metadata = getPageDefaultMetadata(
  title,
  description,
  "/"
);
