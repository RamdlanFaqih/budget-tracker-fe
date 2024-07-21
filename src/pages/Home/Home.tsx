import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="h-screen">
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col gap-3 text-center">
        <p className="text-2xl text-dark font-bold">
          Selamat datang di website budget tracker
        </p>
        <Link to={"/login"}>
          <Button className="w-full">Sign In</Button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
