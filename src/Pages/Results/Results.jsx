import "./Results.scss";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Main.jsx/Section";
import translations from "../../translation";

const ExternalLinkIcon = () => (
  <svg
    className="external-link-icon"
    xmlns="http://www.w3.org/2000/svg"
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function Results() {
  const language = localStorage.getItem("language");
  const text = translations[language].pages.results;

  const links = {
    ka: [
      {
        label: "ნაწილი 1. ზოგადი ინფორმაცია მეურნეობის შესახებ",
        url: "https://www.geostat.ge/ka/modules/categories/906/tsatsili-1-zogadi-informatsia-meurneobis-shesakheb",
      },
      {
        label: "ნაწილი 2. მეურნეობების სარგებლობაში არსებული მიწა",
        url: "https://www.geostat.ge/ka/modules/categories/907/natsili-2-meurneobebis-sargeblobashi-arsebuli-mitsa",
      },
      {
        label: "ნაწილი 3. მრავალწლოვანი ნარგავები (გვ. 1)",
        url: "https://www.geostat.ge/ka/modules/categories/916/natsili-3-mravaltslovani-nargavebi",
      },
      {
        label: "ნაწილი 4. პირუტყვი, ფრინველი და ფუტკრის ოჯახები",
        url: "https://www.geostat.ge/ka/modules/categories/917/natsili-4-pirutqvi-frinveli-da-futkris-ojakhebi",
      },
      {
        label: "ნაწილი 3. მრავალწლოვანი ნარგავები (გვ. 2)",
        url: "https://www.geostat.ge/ka/modules/categories/921/natsili-3-mravaltslovani-nargavebi-gv-2",
      },
    ],
    en: [
      {
        label: "Section 1. General Information On Agricultural Holdings",
        url: "https://www.geostat.ge/en/modules/categories/906/section-1-general-information-on-agricultural-holdings",
      },
      {
        label: "Section 2. Land Operated By Agricultural Holdings",
        url: "https://www.geostat.ge/en/modules/categories/907/section-2-land-operated-by-agricultural-holdings",
      },
      {
        label: "Section 3. Permanent Crops (p. 1)",
        url: "https://www.geostat.ge/en/modules/categories/916/section-3-permanent-crops",
      },
      {
        label: "Section 4. Livestock, Poultry And Beehives",
        url: "https://www.geostat.ge/en/modules/categories/917/section-4-livestock-poultry-and-beehives",
      },
      {
        label: "Section 3. Permanent Crops (p. 2)",
        url: "https://www.geostat.ge/en/modules/categories/921/part-3-perennial-plantings-p-2",
      },
    ],
  };

  const links2 = {
    ka: [
      {
        label: "მოსახლეობის გეოგრაფიული განაწილება და შიდა მიგრაცია",
        url: "https://www.geostat.ge/ka/modules/categories/909/mosakhleobis-geografiuli-ganatsileba-da-shida-migratsia",
      },
      {
        label: "დემოგრაფიული და სოციალური მახასიათებლები",
        url: "https://www.geostat.ge/ka/modules/categories/910/demografiuli-da-sotsialuri-makhasiateblebi",
      },
      {
        label: "განათლების დონე",
        url: "https://www.geostat.ge/ka/modules/categories/912/ganatlebis-done",
      },
      {
        label: "ეკონომიკური მახასიათებლები",
        url: "https://www.geostat.ge/ka/modules/categories/913/ekonomikuri-makhasiateblebi",
      },
      {
        label: "გარე მიგრაცია",
        url: "https://www.geostat.ge/ka/modules/categories/914/gare-migratsia",
      },
      {
        label: "შინამეურნეობები",
        url: "https://www.geostat.ge/ka/modules/categories/915/shinameurneobebi",
      },
      {
        label: "საბინაო პირობები",
        url: "https://www.geostat.ge/ka/modules/categories/918/sabinao-pirobebi",
      },
    ],
    en: [
      {
        label:
          "The Geographical Distribution of The Population and Internal Migration",
        url: "https://www.geostat.ge/en/modules/categories/909/the-geographical-distribution-of-the-population-and-internal-migration",
      },
      {
        label: "Demographic and Social Characteristics",
        url: "https://www.geostat.ge/en/modules/categories/910/demographic-and-social-characteristics",
      },
      {
        label: "Education",
        url: "https://www.geostat.ge/en/modules/categories/912/education",
      },
      {
        label: "Economic Characteristics",
        url: "https://www.geostat.ge/en/modules/categories/913/economic-characteristics",
      },
      {
        label: "International Migration",
        url: "https://www.geostat.ge/en/modules/categories/914/international-migration",
      },
      {
        label: "Households",
        url: "https://www.geostat.ge/en/modules/categories/915/households",
      },
      {
        label: "Living Conditions",
        url: "https://www.geostat.ge/en/modules/categories/918/living-conditions",
      },
    ],
  };

  return (
    <>
      <Navbar />
      <Section>
        <div
          className="results-container"
          style={{ height: "fit-content", paddingBottom: "20px" }}
        >
          <h1>{text.header2}</h1>
          <div className="links">
            <ul>
              {links2[language].map((item) => (
                <li key={item.url}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.label}
                    <ExternalLinkIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="results-container">
          <h1>{text.header}</h1>
          <div className="links">
            <ul>
              {links[language].map((item) => (
                <li key={item.url}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.label}
                    <ExternalLinkIcon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
