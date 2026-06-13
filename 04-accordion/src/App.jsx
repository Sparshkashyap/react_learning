import Accordion from "./Accordion";

function App() {
  const faqs = [
    {
      id: 1,
      question: "What is React?",
      answer:
        "React is a JavaScript library."
    },
    {
      id: 2,
      question: "What is Virtual DOM?",
      answer:
        "A lightweight copy of DOM."
    },
    {
      id: 3,
      question: "What is useState?",
      answer:
        "React state hook."
    }
  ];

  return (
    <Accordion faqs={faqs} />
  );
}

export default App;