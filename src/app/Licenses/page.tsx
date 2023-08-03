import Pattern from "@/Components/Shared/Pattern";
import Subscribe from "@/Components/Shared/Subscribe";
import React from "react";

const page = () => {
  return (
    <div>
      <Pattern data="Licenses" />
      <div className="container flex flex-col w-[1255px] pl-20 py-32">
        <div className="flex   gap-[100px] ">
          <h3>Icon & Graphics</h3>
          <div className="w-[831px]">
            <p className="mb-4">
              Icons and Graphics are manually designed by the VictorFlow
              Templates team. You may download these and edit them to fit your
              website without asking for permission or providing credit.
            </p>
            <p className="mb-[100px]">
              Upon purchasing Software UI Kit Template our team grants you a
              nonexclusive, worldwide copyright license to download, copy,
              modify, and use the icons.
            </p>
          </div>
        </div>

        <div className="flex  gap-[153px] ">
          <h3>Photography</h3>
          <div className="w-[831px]">
            <p className="mb-[45px]">
              All images used in the Organick Webflow Template are licensed for
              free personal and commercial use. If you'd like to use any
              specific image, you can check the licenses and download the images
              for free on Unsplash, Pexels‍. And Freepik.
            </p>
            <h5 className="mb-[11px]">Unsplash</h5>
            <p className="mb-[45px]">
              Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
              Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image
              14, Image 15, Image 16, Image 17, Image 18, Image 19, Image 20,
              Image 21, Image 22, Image 23, Image 24, Image 25,
            </p>
            <h5 className="mb-[11px]">Pixcel</h5>
            <p className="mb-[100px]">
              Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
              Image 8, Image 9, Image 10, Image 11, Image 12, Image 13, Image
              14, Image 15, Image 16, Image 17,
            </p>
          </div>
        </div>

        <div className="flex   gap-[314px] ">
          <h3>Font</h3>
          <div className="w-[831px]">
            <p className="mb-4">
              Organick template uses free licensed Google Fonts. Please check
             <span className="font-bold"> Roboto, Yellowtail</span> and <span className="font-bold">Open Sans.</span>
            </p>
          </div>
        </div>
      </div>
      <Subscribe/>
    </div>
  );
};

export default page;
