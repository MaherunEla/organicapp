"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import { PortfolioProjectData } from '../Components/PortfolioProjectData';
import PortfolioSingleHero from './Components/PortfolioSingleHero';
import { IPortfolio } from '@/types';
import PortfolioSingleAbout from './Components/PortfolioSingleAbout';
import Subscribe from '@/Components/Shared/Subsribe';

const page = () => {
    const param= useParams();
    const portfolio : IPortfolio | undefined =PortfolioProjectData.find((e=>e.id == +param?.slug));
  return (
    <div>
        <PortfolioSingleHero portfolio={portfolio}/>
        <PortfolioSingleAbout/>
        <Subscribe/>

    </div>
  )
}

export default page