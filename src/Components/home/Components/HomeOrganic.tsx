import React from "react";
import Image from "next/image";
import ButtonD from "@/Components/Shared/ButtonD";
import { BsArrowRightShort } from "react-icons/bs";
import { BlogPostData } from "@/app/blog/Components/BlogPostData";

const HomeOrganic = () => {
  const news = BlogPostData.slice(0, 2);
  return (
    <div>
      <div className="flex">
        <div className="w-[952px] h-[931px] relative">
          <Image src="/assets/images/Home/eco.png" fill alt="home" />
        </div>
        <div>
          <div className=" my-[104px] w-[789px] h-[723px] px-[89px] py-[78px] bg-white border border-white rounded-[30px] ">
            <h4 className="yellow">Eco Friendly</h4>
            <h2>Econis is a Friendly Organic Store</h2>
            <h5 className="pt-[35px]">Start with Our Company First</h5>
            <p className="pb-[35px] text-dark_gray">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
            <h5>Start with Our Company First</h5>
            <p className="pb-[35px] text-dark_gray">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
            <h5>Start with Our Company First</h5>
            <p className="pb-[35px] text-dark_gray">
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremque laudantium. Sed ut perspiciatis.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#F1F8F4] h-[957px] py-[187px] flex gap-[42px]">
        <div className="w-[612px] h-[583px] bg-[url('/assets/images/Home/juice.jpg')] bg-styles flex items-center justify-center">
          <div className="bg-white rounded-[20px] max-w-[320px]  px-[60px] py-[33px] ">
            <h6>Organic Juice</h6>
          </div>
        </div>

        <div className="w-[612px] h-[583px] bg-[url('/assets/images/Home/food.jpg')] bg-styles flex items-center justify-center">
          <div className="bg-white rounded-[20px] max-w-[320px]  px-[60px] py-[33px] ">
            <h6>Organic Food</h6>
          </div>
        </div>

        <div className="w-[612px] h-[583px] bg-[url('/assets/images/Home/cookies.jpg')] bg-styles flex items-center justify-center">
          <div className="bg-white rounded-[20px] max-w-[320px]  px-[60px] py-[33px] ">
            <h6>Nuts Cookis</h6>
          </div>
        </div>
      </div>

      <div className="container flex flex-col items-center justify-center pt-[177px] pb-[45px]">
        <div className="pb-[45px] flex justify-between gap-[480px]">
          <div>
            <h4 className="yellow">News</h4>
            <h2 className="max-w-[702px]">
              Discover weekly content about organic food, & more
            </h2>
          </div>
          <div className="w-[220px] mt-[53px]">
            <ButtonD title="More News" />
          </div>
        </div>

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[46px]">
          {news.map((item, index) => (
            <div className="w-full xl:w-[677px] h-[589px]" key={index}>
              <div
                style={{
                  background: `url(${item?.img}) no-repeat  `,
                  backgroundColor: "#F9F8F8",
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                  borderRadius: "30px",
                  width: "677px",
                  height: "529px",
                }}
                className="p-[46px] w-full xl:w-[677px] h-[524px] "
              >
                <div className="w-[82px] h-[82px] bg-white rounded-full  flex flex-col items-center justify-center">
                  <h6>{item.date}</h6>
                  <h6 className="text-xl ">{item.month}</h6>
                </div>

                <div
                  className="mt-[165px] py-[54px] px-[57px] bg-white rounded-[30px] "
                  style={{
                    boxShadow: "0px 0px 10px rgba(167, 167, 167, 0.25)",
                  }}
                >
                  <div className="flex flex-row gap-2">
                    <div className="w-[18px] h-[20px] relative">
                      <Image src="/assets/images/Home/vector2.svg" fill alt="icon" />
                    </div>
                    <h6 className="font-roboto text-lg font-normal">
                      By {item.author}
                    </h6>
                  </div>
                  <h6 className="pt-[19px] leading-normal">{item.title}</h6>
                  <p>{item.subTitle}</p>
                  <div className="max-w-[220px] mt-[19px] px-[39px] py-[28px] bg-yellow rounded-2xl flex items-center justify-center gap-[10px]">
                    <h6 className="font-roboto text-[20px] font-bold leading-normal text-sea_green">
                     Read More
                    </h6>
                    <BsArrowRightShort className=" m-[2px] border rounded-full border-[#335B6B] bg-[#335B6B] text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeOrganic;
