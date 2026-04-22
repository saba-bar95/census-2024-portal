import "./Results.scss";
import Navbar from "../../components/Navbar/Navbar";
import Section from "../../components/Main.jsx/Section";
import translations from "../../translation";

export default function Results() {
  const language = localStorage.getItem("language");
  const text = translations[language].pages.results;

  const links = {
    ka: {
      first:
        "საქართველოს 2024 წლის მოსახლეობის და სასოფლო-სამეურნეო აღწერის წინასწარი შედეგები",
      second:
        "მოსახლეობის რიცხოვნობა რეგიონების, თვითმმართველი ერთეულების და საქალაქო-სასოფლო დასახლებების მიხედვით",
      third:
        "მოსახლეობის რიცხოვნობა რეგიონების, თვითმმართველი ერთეულების და სქესის მიხედვით",
    },
    en: {
      first:
        "2024 Population and Agricultural Census of Georgia Preliminary results",
      second:
        "Population by regions, self-governed units and urban-rural settlements",
      third: "Population by regions, self-governed units and sex",
    },
  };

  const links2 = {
    ka: {
      first: "საქართველოს 2024 წლის მოსახლეობის აღწერის დაზუსტებული შედეგები",
      second:
        "საქართველოს მოსახლეობის რიცხოვნობა რეგიონების, თვითმმართველი ერთეულების, საქალაქო-სასოფლო ტიპის დასახლებების და სქესის მიხედვით",
      third:
        "საქართველოს მოსახლეობის რიცხოვნობა რეგიონების, თვითმმართველი ერთეულების, 5 წლიანი ასაკობრივი ჯგუფების, საქალაქო-სასოფლო ტიპის დასახლებების და სქესის მიხედვით",
      fourth:
        "საქართველოს მოსახლეობის რიცხოვნობა ასაკის, საქალაქო-სასოფლო ტიპის დასახლებების და სქესის მიხედვით (1 წლიანი ასაკებით)",
    },
    en: {
      first:
        "2024 Population and Agricultural Census of Georgia Finalized results",
      second:
        "Population of Georgia by regions, self-governed units, urban-rural settlements and sex",
      third:
        "Population of Georgia by regions, self-governed units, 5-year age groups, urban-rural settlements and sex",
      fourth:
        "Population of Georgia by age, urban-rural settlements and sex (single years of age)",
    },
  };

  const createDownloadHandler = (fileName) => {
    const folder = language === "ka" ? "ge" : "en";
    const link = document.createElement("a");
    link.href = `/${folder}/${encodeURIComponent(fileName)}`;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handlers for preliminary results (header)
  const handlers = {
    first: () => {
      const fileName =
        language === "ka"
          ? "საქართველოს 2024 წლის მოსახლეობის და სასოფლო-სამეურნეო აღწერის წინასწარი შედეგები.pdf"
          : "2024 Population and Agricultural Census of Georgia Preliminary results.pdf";
      createDownloadHandler(fileName);
    },
    second: () => {
      const fileName =
        language === "ka"
          ? "01-mosaxleoba-RegionebiT-TviTmarTveli-erTeulebiT-da-saqalaqo-sasoflo-dasaxlebebiT.xlsx"
          : "01-Population-by-regions-self-governed-units-and-urban-rural-settlements.xlsx";
      createDownloadHandler(fileName);
    },
    third: () => {
      const fileName =
        language === "ka"
          ? "02-mosaxleoba-RegionebiT-TviTmarTveli-erTeulebiT-da-sqesiT.xlsx"
          : "02-Population-by-regions-self-governed-units-and-sex.xlsx";
      createDownloadHandler(fileName);
    },
    fourth: () => {
      const fileName = "Census 2024_25.06.2024.pdf";
      createDownloadHandler(fileName);
    },
  };

  // Handlers for finalized results (header2)
  const handlers2 = {
    first: () => {
      const fileName =
        language === "ka"
          ? "საქართველოს-2024-წლის-მოსახლეობის-და-სასოფლო-სამეურნეო-აღწერის--დაზუსტებული-შედეგები.pdf"
          : "2024-Population-and-Agricultural-Census-of-Georgia-Finalized-results.pdf";
      createDownloadHandler(fileName);
    },
    second: () => {
      const fileName =
        language === "ka"
          ? "01-mosaxleoba-TviTmmarTveli-erTeulebis-dasaxlebis-tipisa-da-sqesis-mixedviT.xlsx"
          : "01-population-by-self-governed-units-settlement-type-and-sex.xlsx";
      createDownloadHandler(fileName);
    },
    third: () => {
      const fileName =
        language === "ka"
          ? "02-mosaxleoba-TviTmmarTveli-erTeulebis-asakis-dasaxlebis-tipis-da-sqesis-mixedviT.xlsx"
          : "02-population-by-self-governed-units-age-groups-settlement-type-and-sex.xlsx";
      createDownloadHandler(fileName);
    },
    fourth: () => {
      const fileName =
        language === "ka"
          ? "03-mosaxleoba-asakis-dasaxlebebis-tipis-da-sqesis-mixedviT.xlsx"
          : "03-population-by-age-settlement-type-and-sex.xlsx";
      createDownloadHandler(fileName);
    },
  };

  const handleClick = (e, whichHandlers) => {
    if (e.target.tagName === "LI") {
      const type = e.target.dataset.type;
      if (whichHandlers[type]) {
        whichHandlers[type]();
      }
    }
  };

  return (
    <>
      <Navbar />
      <Section>
        <div
          className="results-container"
          style={{ height: "fit-content", paddingBottom: "20px" }}>
          <h1>{text.header2}</h1>
          <div className="links">
            <ul onClick={(e) => handleClick(e, handlers2)}>
              <li data-type="first">{links2[language].first}</li>
              <li data-type="second">{links2[language].second}</li>
              <li data-type="third">{links2[language].third}</li>
              <li data-type="fourth">{links2[language].fourth}</li>
            </ul>
          </div>
        </div>
        <div className="results-container">
          <h1>{text.header}</h1>
          <div className="links">
            <ul onClick={(e) => handleClick(e, handlers)}>
              <li data-type="first">{links[language].first}</li>
              <li data-type="second">{links[language].second}</li>
              <li data-type="third">{links[language].third}</li>
              {language === "ka" && (
                <li data-type="fourth">
                  2024 წლის მოსახლეობის აღწერის წინასწარი შედეგები (პრეზენტაცია)
                </li>
              )}
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
