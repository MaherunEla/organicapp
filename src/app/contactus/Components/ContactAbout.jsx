import React from 'react'
import Image from "next/image";
import { BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";
import { BsFacebook, BsPinterest } from "react-icons/bs";
const ContactAbout = () => {
  return (
    <div className="container flex items-center justify-center gap-[75px] py-32">
        <div className="w-[623px] h-[640px] relative">
          <Image
            className="rounded-lg"
            src="/assets/images/contact/i1.jpg"
            fill
            alt="contact"
          />
        </div>
        <div className="w-[702px] flex flex-col gap-[34px] ">
            <div>
            <h2>We'd love to talk about how we can work together.</h2>
          <p>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>

            </div>
          
          <div>
          <div className="w-[352px] px-[12px] py-[12px] border border-white rounded-2xl flex items-center gap-[19px] shadow-lg mb-[17px]">
            <div className="w-[89px] h-[89px] relative">
                <Image src='/assets/images/contact/icon1.png' fill alt='icon'/>
            </div>
            <div>
            <h6>Massege</h6>
            <p>support@organic.com</p>

            </div>
            </div>

            <div className="w-[352px] px-[12px] py-[12px] border border-white rounded-2xl flex items-center gap-[19px] shadow-lg">
            <div className="w-[89px] h-[89px] relative">
                <Image src='/assets/images/contact/icon2.png' fill alt='icon'/>
            </div>
            <div>
            <h6>Contact Us</h6>
            <p>+01 123 456 789</p>

            </div>
            

          </div>

          </div>

         
          <div className="flex flex-row gap-[15px]">
            <div className="w-[60px] h-[60px] border rounded-full border-very_light_green bg-very_light_green">
              <BiLogoInstagram className="fill-sea_green m-5 " size={20} />
            </div>
            <div className="w-[60px] h-[60px] border rounded-full border-very_light_green bg-very_light_green">
              <BsFacebook className="fill-sea_green m-5 " size={20} />
            </div>
            <div className="w-[60px] h-[60px] border rounded-full border-very_light_green bg-very_light_green">
              <BiLogoTwitter className="fill-sea_green m-5 " size={20} />
            </div>
            <div className="w-[60px] h-[60px] border rounded-full border-very_light_green bg-very_light_green">
              <BsPinterest className="fill-sea_green m-5" size={20} />
            </div>
          </div>
        </div>
      </div>
  )
}

export default ContactAbout
