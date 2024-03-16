import React from "react";
import SocialsList from "@/shared/SocialsList/SocialsList";
import Label from "@/components/Label/Label";
import Input from "@/shared/Input/Input";
import Textarea from "@/shared/Textarea/Textarea";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionPromo1 from "@/components/SectionPromo1";

const info = [
  {
    title: "🗺 ADDRESS",
    desc: "Vinayaka Sales & Perfumery Traditional Indian Fragrances Opp. Moti Gumbaz Civil Hospital Road, Vijayapura",
  },
  {
    title: "💌 EMAIL",
    desc: "vinayakaproject23@gmail.com",
  },
  {
    title: "☎ PHONE",
    desc: "+91 9902030993",
  },
];

const PageContact = () => {
  return (
    <div className={`nc-PageContact overflow-hidden`}>
      <div className="">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Contact
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 md:grid-cols-2 gap-12 ">
            <div className="max-w-sm space-y-8">
              {info.map((item, index) => (
                <div key={index}>
                  <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                    {item.title}
                  </h3>
                  {item.title === "🗺 ADDRESS" ? (
                    <div>
                      <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                        {item.desc}
                      </span>
                      <iframe title="Google Map"
                          width="100%"
                          height="300"
                          style={{ border: 0 }}
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1544.0018388584267!2d75.69452510961466!3d16.82967679233528!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc6ff9e409f5f89%3A0x5738b8fe9858038d!2sVinayaka%20Sales%20And%20Perfumery%2C%20Agarbati%20Factory!5e0!3m2!1sen!2sin!4v1693062291615!5m2!1sen!2sin"
                          allowFullScreen></iframe>
                    </div>
                  ) : (
                    <a
                      href={item.title === "💌 EMAIL" ? `mailto:${item.desc}` : `tel:${item.desc}`}
                      className="block mt-2 text-neutral-500 dark:text-neutral-400"
                    >
                      {item.desc}
                    </a>
                  )}
                </div>
              ))}
              <div>
                <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
                  🌏 SOCIALS
                </h3>
                <SocialsList className="mt-2" />
              </div>
            </div>
            <div>
              <form className="grid grid-cols-1 gap-6" action="#" method="post">
                <label className="block">
                  <Label>Full name</Label>

                  <Input
                    placeholder="Example Doe"
                    type="text"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Email address</Label>

                  <Input
                    type="email"
                    placeholder="example@example.com"
                    className="mt-1"
                  />
                </label>
                <label className="block">
                  <Label>Message</Label>

                  <Textarea className="mt-1" rows={6} />
                </label>
                <div>
                  <ButtonPrimary type="submit">Send Message</ButtonPrimary>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <div className="container">
        <div className="relative my-24 lg:my-32 py-24 lg:py-32">
          <BackgroundSection />
          <SectionPromo1 />
        </div>
      </div>
    </div>
  );
};

export default PageContact;
