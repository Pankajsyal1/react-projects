import { accordionData } from "../../data/content"
import AppHeading from "../AppHeading"
import AccordionItem from "./AccordionItem"
const AccordionApp = () => {
  return (
    <div>
      <AppHeading sno={8} title={"Accordion App"} />
      {accordionData.map((res, idx) => <AccordionItem idx={idx} key={Math.random()} {...res} />)}
    </div>
  )
}

export default AccordionApp