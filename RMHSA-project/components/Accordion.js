import React, { useState } from "react";

function Accordion() {
  const [accordions, setAccordions] = useState([ 
    {
      id: 1,
      isOpen: false,
      buttonText: "Student Scholarships",
      content:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human room although.",
    },
    {
      id: 2,
      isOpen: false,
      buttonText: "Schools & Colleges",
      content:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human room although.",
    },
    {
      id: 3,
      isOpen: false,
      buttonText: "Library & Cultural Institutions",
      content:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human room although.",
    },
    {
      id: 4,
      isOpen: false,
      buttonText: "Kingster Sport Team",
      content:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human room although.",
    },
    {
      id: 5,
      isOpen: false,
      buttonText: "Student Life",
      content:
        "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections. The bedding was hardly able to cover it and seemed ready to slide off any moment. His many legs, pitifully thin compared with the size of the rest of him, waved about helplessly as he looked. “What’s happened to me?” he thought. It wasn’t a dream. His room, a proper human room although.",
    },
  ]);

  const toggleAccordion = (id) => {
    setAccordions((prevState) =>
      prevState.map((accordion) =>
        accordion.id === id
          ? { ...accordion, isOpen: !accordion.isOpen }
          : accordion
      )
    );
  };

  return (
        <div>
          {accordions.map((accordion) => (
            <div key={accordion.id} className="py-3">
              <button
                className="flex gap-4 justify-between text-primary"
                onClick={() => toggleAccordion(accordion.id)}
              >
                {accordion.isOpen ? <span>-</span> : <span> +</span>}
                {accordion.buttonText}
              </button>
              <div
                id="accordion-content"
                style={{ maxHeight: accordion.isOpen ? "300px" : "0" }}
                className="text-slate-400"
              >
                {accordion.isOpen && (
                  <div className="pl-6 leading-7 max-sm:text-xs max-sm:leading-5">{accordion.content}</div>
                )}
              </div>
            </div>
          ))}
        </div>
  );
}

export default Accordion;
