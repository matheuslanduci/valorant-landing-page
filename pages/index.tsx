import { Container } from "../styles/";

import Layout from "../components/Layout";
import MainSection from "../components/Main";
import AgentsSection from "../components/Agents";
import MapsSection from "../components/Maps";
import WeaponsSection from "../components/Weapons";
import CollectionsSection from "../components/Collections";
import PlaySection from "../components/Play";
import SocialsSection from "../components/Socials";
import Footer from "../components/Footer";

const Home = (): JSX.Element => {
  return (
    <Layout title="VALORANT">
      <Container>
        <MainSection />
        <AgentsSection />
        <MapsSection />
        <WeaponsSection />
        <CollectionsSection />
        <PlaySection />
        <SocialsSection />
        <Footer />
      </Container>
    </Layout>
  );
};

export default Home;
