import React from 'react';
import AccordionCard from './partials/AccordionCard/AccordionCard'

export type AccordionCardProps = {
  label: string;
  content: string;
}
export type AccordionProps = {
  accordion: AccordionCardProps[];
}

const Accordion = ({accordion}: AccordionProps) => {
  return (
    <div>
      {
        accordion.map((card, index: number) => {
          return (
            <AccordionCard key={index} label={card.label} content={card.content}/>
          )
        })
      }
    </div>
  )
}

export default Accordion