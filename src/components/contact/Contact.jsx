import { paragraphs } from "./data";

const Contact = () => {
  return (
    <section className="flex flex-col items-center px-4 mt-[70px] font-futura">
      <p className="text-3xl leading-7 mb-12">CONTACT US</p>
      {paragraphs.map((paragraph) => (
        <p className={paragraph.style}>{paragraph.content}</p>
      ))}
    </section>
  );
};

export default Contact;
