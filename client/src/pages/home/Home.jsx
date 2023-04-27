import Navbar from "../../components/navbar/Navbar";
import Table from "../../components/table/Table";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="homeContanier">
        <Table/>
      </div>
    </div>
  );
}
