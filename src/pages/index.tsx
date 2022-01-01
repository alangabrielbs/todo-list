import Layout from "../components/Layout";
import Content from "../components/Content";
import Date from "../components/Date";
import Controlls from "../components/Controlls";

export default function Home() {
  return (
    <>
      <Date type={0} />
      <Layout>
        <Content />
        <Controlls />
      </Layout>
    </>
  );
}
