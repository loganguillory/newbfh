import bblackwood from "./Images/bblackwood.png";
import nycladies from "./Images/nycladies.png";
import React from 'react';

function HomePage() {
  return (
    <div>
      <div className="max-w-3xl mr-auto ml-auto">
        <div className="">
          <img src="https://images.squarespace-cdn.com/content/v1/5f45761416df49513f4308c6/775b0d6f-ea71-4363-b058-278547942d32/HEY+COEDEUSINS_26x24-NY157R+copy.jpg?format=750w" alt="" />
          <p className="text-xl font-extralight text-center pb-10">
            Our exclusive Brandon Blackwood “Bamboo B” collection is inspired by
            80’s and 90’s hip-hop whose introduction birthed a new era of Black
            fashion, style and culture.
          </p>
        </div>

        <div className="space-y-5">
          <img src={nycladies} />
          <p className="font-sans font-light text-xs pb-10 text-gray-500 tracking-wider">
            Image: Two young women in Brooklyn, New York 1986 photographed by
            Jamel Shabazz. Shabazz is considered one of the most important
            photographers of the late 20th century. Born and raised in Brooklyn,
            he lived through the birth of hip hop, producing honest imagery
            capturing Black style and culture.
          </p>
        </div>

        <div className="pb-10 mb-20 bg-black w-2/12 h-10 text-center ml-auto mr-auto">
          <button className="text-white translate-y-2 font-sans uppercase text-xs font-bold">Discover More</button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
