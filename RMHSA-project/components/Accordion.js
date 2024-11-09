import React, { useState } from "react";

function Accordion() {
  const [accordions, setAccordions] = useState([
    {
      id: 1,
      isOpen: false,
      buttonText: "Pioneering Intellectual Brilliance/ Educational Innovation",
      content:
        "By supporting Rosa Mystica, you contribute to the cultivation of intellectual eminence. Your donation will facilitate the acquisition of cutting-edge resources, the recruitment of distinguished faculty, and the implementation of innovative pedagogical approaches",
    },
    {
      id: 2,
      isOpen: false,
      buttonText: "Emergency Fund",
      content:
        "Unforeseen circumstances can disrupt the educational journey of our students. Your generous donation to our Emergency Fund will provide critical support to students facing unexpected challenges, ensuring they can continue their studies uninterrupted. Whether it's a sudden illness, a natural disaster, or a family crisis, your contribution will make a tangible difference in the lives of those in need.",
    },
    {
      id: 3,
      isOpen: false,
      buttonText: "Student Scholarships",
      content:
        "By providing scholarships, we empower talented students from diverse backgrounds to realize their full potential. Your donation will help ensure that financial constraints do not hinder academic aspirations.",
    },
    {
      id: 4,
      isOpen: false,
      buttonText: "Fostering a Dynamic Ecosystem",
      content:
        `Your support will nourish a dynamic ecosystem where intellectual curiosity flourishes, creativity thrives, and collaboration reigns supreme. From stimulating academic discourse to vibrant <b> extracurricular activities </b>, your donation will enrich every facet of student life.`,
    },
    {
      id: 5,
      isOpen: false,
      buttonText: "Elevating Campus Infrastructure",
      content:
        "Rosa Mystica is committed to enhancing the campus infrastructure, your donation facilitates us to build more structures and improve the current state-of-the art that inspires learning and foster a sense of community. Our objective is to provide an environment that enables our future leaders maximize their potentials without hinderance.",
        // "Rosa Mystica is committed to pioneering educational innovation. Your generosity will empower us to explore groundbreaking initiatives, adopt emerging technologies, and adapt to the ever-evolving educational landscape",
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
              <div
                className="pl-6 leading-7 max-sm:text-xs max-sm:leading-5"
                dangerouslySetInnerHTML={{ __html: accordion.content }}
              >
                {/* {accordion.content} */}
              </div> //On a normal the correct approach to render this is using the commented 'div' tag below, however this method of rendering the accordion.content is the make the <b> tag have effect on the without appearing as a string.
              // <div className="pl-6 leading-7 max-sm:text-xs max-sm:leading-5">{accordion.content}</div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
