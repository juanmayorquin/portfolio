import { useState } from "react";
import { motion } from "motion/react";
import Section from "../components/Section";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();

  const labelStyle =
    "text-neutral-300 group-hover:text-white group-hover:font-medium transition-all w-full text-sm";
  const inputStyle =
    "placeholder:text-neutral-400 p-3 outline-none w-full h-full text-[0.9rem] border border-neutral-500 focus:border-orange-600 leading-5 bg-neutral-900 rounded-lg appearance-none transition-all";

  const [selectedValue, setSelectedValue] = useState("");

  return (
    <Section id="contact" title={t("sections.contact.sectionTitle")}>
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        viewport={{ once: true }}
        animate
        className="grid grid-cols-2 gap-4 text-white"
        action=""
      >
        <div className="flex flex-col gap-4 group">
          <label className={labelStyle} htmlFor="contact-name">
            {t("sections.contact.nameLabel")}
          </label>
          <input
            className={inputStyle}
            placeholder={t("sections.contact.namePlaceholder")}
            id="contact-name"
            type="text"
          />
        </div>
        <div className="flex flex-col gap-4 group">
          <label className={labelStyle} htmlFor="contact-email">
            {t("sections.contact.emailLabel")}
          </label>
          <input
            className={inputStyle}
            placeholder={t("sections.contact.emailPlaceholder")}
            id="contact-email"
            type="email"
          />
        </div>
        <div className="flex flex-col gap-4 col-span-2 group">
          <label className={labelStyle} htmlFor="contact-budget">
            {t("sections.contact.budgetLabel")}
          </label>
          <select
            className={`${inputStyle} ${
              selectedValue ? "text-white" : "text-neutral-400"
            }`}
            id="contact-budget"
            defaultValue=""
            onChange={(e) => setSelectedValue(e.target.value)}
          >
            <option disabled value="">
              {t("sections.contact.budgetPlaceholder")}
            </option>
            <option className="text-white" value="under3k">
              {t("sections.contact.budgetOptions.under3k")}
            </option>
            <option className="text-white" value="3kTo5k">
              {t("sections.contact.budgetOptions.from3kTo5k")}
            </option>
            <option className="text-white" value="5kTo10k">
              {t("sections.contact.budgetOptions.from5kTo10k")}
            </option>
            <option className="text-white" value="over10k">
              {t("sections.contact.budgetOptions.over10k")}
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-4 col-span-2 group">
          <label className={labelStyle} htmlFor="contact-message">
            {t("sections.contact.messageLabel")}
          </label>
          <textarea
            className={`${inputStyle} h-52`}
            placeholder={t("sections.contact.messagePlaceholder")}
            name="message"
            id="contact-message"
          ></textarea>
        </div>
        <button
          className="w-full mt-4 col-span-2 bg-orange-600 p-3 rounded-xl font-semibold flex items-center justify-center text-lg hover:text-neutral-800 transition-all"
          type="submit"
        >
          {t("sections.contact.submit")}
        </button>
      </motion.form>
    </Section>
  );
};

export default ContactForm;
