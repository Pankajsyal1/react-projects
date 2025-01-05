import { accordionData } from "../../data/content"
import AccordionItem from "./AccordionItem"
const AccordionApp = () => {
  return (
    <div>
      {accordionData.map((res, idx) => <AccordionItem idx={idx} key={Math.random()} {...res} />)}
    </div>
  )
}

export default AccordionApp