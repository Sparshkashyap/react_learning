function AccordionItem({
  faq,
  openId,
  setOpenId
}) {
  const isOpen =
    openId === faq.id;

  const handleClick = () => {
    setOpenId(
      isOpen ? null : faq.id
    );
  };

  return (
    <div>
      <h3 onClick={handleClick}>
        {faq.question}
      </h3>

      {isOpen && (
        <p>{faq.answer}</p>
      )}
    </div>
  );
}

export default AccordionItem;