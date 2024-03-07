import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";

 

export default function Home() {
  return (   
    <>
      <HomeHeader/>
      <div className="flex flex-col items-center mt-24">
      <Image 
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1280px-Google_2015_logo.svg.png"
      width={300}
      height={100}
      alt="Google"
      priority
      style={{width:'auto'}}
      />
      <HomeSearch/>
      </div>
    </>
  )
}
