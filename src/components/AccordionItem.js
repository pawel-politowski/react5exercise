import React, { useState } from 'react';

function AccordionItem(props) {
  const [state, setState] = useState(false);

  function changeState() {
    setState(!state);
  }
  return (
    <div>
      <h3 onClick = {changeState}>{props.itemData.title}</h3>
      <p>{state ? props.itemData.description : null}</p>
    </div>
  )
}

export default AccordionItem;