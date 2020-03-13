import React from 'react';
import AccordionItem from './AccordionItem';

function Accordion(props) {
  const renderAccrordionItems = () =>
    props.accordionData.map(
      (accordionItem) => <AccordionItem itemData={accordionItem}/>
    )
  return (
    <div>
      {renderAccrordionItems()}
    </div>
  )
}

export default Accordion;