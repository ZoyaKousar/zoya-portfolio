import React from 'react'
import PricingHero from './components/Section1-PricingHero'
import { ServicesOverview } from './components/Section2-ServicesOverview'
import { PricingTable } from './components/Section3-Pricing'
import { StartProjectCTA } from './components/Section5-StartProjectCTA'

const page = () => {
  return (
    <div>
        <PricingHero/>
        <ServicesOverview/>
        <PricingTable/>
        <StartProjectCTA/>  
    </div>
  )
}

export default page