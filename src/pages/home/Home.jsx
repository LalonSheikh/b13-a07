import { useLoaderData } from "react-router";
import Banner from "../../components/Banner/Banner";
import FriendSection from "../../components/Friend/FriendSection";

const Home = () => {
  const friendData = useLoaderData();
  console.log(friendData);

  return (
    <div>
      <Banner></Banner>
      <FriendSection friendData={friendData} />
    </div>
  );
};

export default Home;
