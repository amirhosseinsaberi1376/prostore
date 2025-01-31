import Image from "next/image";
import Loader from "@/assets/loader.gif";

const LoadingPage = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen ">
      <Image src={Loader} alt="loading..." height={150} width={150} />
    </div>
  );
};

export default LoadingPage;
