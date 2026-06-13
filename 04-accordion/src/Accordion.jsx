import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ faqs }) {
  const [openId, setOpenId] =
    useState(null);

  return (
    <>
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          faq={faq}
          openId={openId}
          setOpenId={setOpenId}
        />
      ))}
    </>
  );
}

export default Accordion;