
import React from 'react';

import { cardData } from '@/Constants';
import Card from './Card';


const Portfolio : React.FC = () => {
  return (
    <div className='w-full h-full flex flex-col items-center justify-center mt-14 '>
     {/* Heading */}
     <div className="flex items-center justify-center mb-5">
        <div className="bg-[#5F8184] w-12 h-1"></div>
        <p className="font-bold ml-4 text-center lg:text-left text-sm md:text-base lg:text-lg">
        What I’ve Built
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3  p-6 ">
      {cardData.map((card, index) => (
        <Card
          key={index}
          title={card.title || ''}
          subtitle={card.subtitle || ''}
          description={card.description || ''}
          liveProject={card.liveProject}
          hasContent={card.hasContent}
        />
      ))}
    </div>
    
    </div>
  )
}

export default Portfolio
