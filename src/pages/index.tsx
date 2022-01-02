import Layout from "../components/Layout";
import Content from "../components/Content";
import Date from "../components/Date";
import Controlls from "../components/Control";

export default function Home() {
  return (
    <>
      <Date type={"home"} />
      <Layout>
        <Content />
        <Controlls />
      </Layout>
    </>
  );
}
