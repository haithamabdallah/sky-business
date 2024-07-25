import ContactForm from "./components/contactForm/ContactForm";
import { paragraphs } from "./data";
import PageCover from '../innerPages/components/pageCover/PageCover';

const Contact = () => {
    return (
        <>
            <PageCover
                title=""
                subtitle=""
                backgroundImage="https://plus.unsplash.com/premium_photo-1661575055079-9d0360784f67?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <section className="flex flex-col items-center max-w-[75rem] px-4 mt-[70px] font-futura">
                <p className="text-3xl leading-7 mb-12">CONTACT US</p>
                {paragraphs.map((paragraph, i) => (
                    <p key={`paragraph ${i + 1}`} className={paragraph.style}>
                        {paragraph.content}
                    </p>
                ))}
                <ContactForm />
            </section>
        </>
    );
};

export default Contact;
