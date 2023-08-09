import Image from 'next/image'
import React from 'react'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BiLogoFacebookCircle} from 'react-icons/bi'
import {BiLogoTwitter} from 'react-icons/bi'

interface AboutTeamData1 {
    id:number;
    img:string;
    title:string;
    profession:string;
    facebook:JSX.Element;
    twitter:JSX.Element;
   

}
const aboutTeamData1:AboutTeamData1 = 
    {
        id:1,
        img:"/assets/images/Home/team1.jpg",
        title:"Giovani Bacardo",
        profession:"Farmer",
        facebook:<BiLogoFacebookCircle/>,
        twitter:<BiLogoTwitter/>,
       



    };
    interface AboutTeamData2 {
        id:number;
        img:string;
        title:string;
        profession:string;
        instagram:JSX.Element;
        facebook:JSX.Element;
        twitter:JSX.Element;
    
    };
    const aboutTeamData2:AboutTeamData2 = 
        {
            id:2,
            img:"/assets/images/Home/team2.jpg",
            title:"Marianne Loreno",
            profession:"Designer",
            instagram:<AiOutlineInstagram/>,
            facebook:<BiLogoFacebookCircle/>,
            twitter:<BiLogoTwitter/>,
    
    
    
        };
        interface AboutTeamData3 {
            id:number;
            img:string;
            title:string;
            profession:string;
            instagram:JSX.Element;
            facebook:JSX.Element;
            twitter:JSX.Element;
        
        }
        const aboutTeamData3:AboutTeamData3 = 
            {
                id:3,
                img:"/assets/images/Home/team3.jpg",
                title:"Riga Pelore",
                profession:"Farmer",
                instagram:<AiOutlineInstagram/>,
                facebook:<BiLogoFacebookCircle/>,
                twitter:<BiLogoTwitter/>,
        
        
        
            };


const AboutTeam = () => {
  return (
    <div className='container flex flex-col items-center justify-center pt-[177px] pb-[202px]'>
       
        <h6 className='yellow'>Team</h6>
        <h2 className='pb-4'>Our Organic Experts</h2>
        <p className='pb-[41px] w-full xl:w-[852px] text-center text-dark_gray'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[27px]'>
            
                    <div className='w-[449px] h-[615px] bg-cream rounded-[30px] '>
                        <div className='w-[449px] h-[485px] relative'>
                            <Image 
                            className="rounded-t-[30px]"
                            src={aboutTeamData1.img} fill alt="team"/>

                        </div>
                        <div className='flex py-[35px] px-[28px] justify-between'>
                            <div>
                            <h6>{aboutTeamData1.title}</h6>
                        <h6 className='yellow text-[22px]'>{aboutTeamData1.profession}</h6>

                            </div>
                            <div className='flex gap-[17px] items-end justify-end text-sea_green'>
                                {aboutTeamData1?.facebook}
                                {aboutTeamData1?.twitter}
                            </div>

                        </div>

                       

                    </div>

                    <div className='w-[449px] h-[615px] bg-cream rounded-[30px] '>
                        <div className='w-[449px] h-[485px] relative'>
                            <Image 
                            className="rounded-t-[30px]"
                            src={aboutTeamData2.img} fill alt="team"/>

                        </div>
                        <div className=' flex py-[35px] px-[28px] justify-between'>
                            <div>
                            <h6>{aboutTeamData1.title}</h6>
                        <h6 className='yellow text-[22px]'>{aboutTeamData1.profession}</h6>

                            </div>
                            <div className='flex gap-[17px] items-end justify-end text-sea_green'>
                               {aboutTeamData2?.instagram }                       
                                {aboutTeamData2?.facebook}
                                {aboutTeamData2?.twitter}
                            </div>

                        </div>

                       

                    </div>

                    <div className='w-[449px] h-[615px] bg-cream rounded-[30px] '>
                        <div className='w-[449px] h-[485px] relative'>
                            <Image 
                            className="rounded-t-[30px]"
                            src={aboutTeamData3.img} fill alt="team"/>

                        </div>
                        <div className='flex py-[35px] px-[28px] justify-between'>
                            <div>
                            <h6>{aboutTeamData3.title}</h6>
                        <h6 className='yellow text-[22px]'>{aboutTeamData1.profession}</h6>

                            </div>
                            <div className='flex gap-[17px] items-end justify-end text-sea_green'>
                                {aboutTeamData3?.instagram}
                                {aboutTeamData3?.facebook}
                                {aboutTeamData3?.twitter}
                            </div>

                        </div>

                       

                    </div>
              

        </div>

       
        


    </div>
  )
}

export default AboutTeam