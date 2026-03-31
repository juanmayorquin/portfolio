import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex items-center justify-center pt-16 py-10">
      <p className="text-neutral-400">{t("footer.text")}</p>
    </div>
  );
};

export default Footer;
