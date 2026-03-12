import { accordionData } from "../../../data/content"
import AppHeading from "../../../components/common/AppHeading"
import AccordionItem from "./AccordionItem"

const AccordionApp = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 pt-32 pb-20">
      <AppHeading sno={8} title="Query Knowledge Base" />
      <div className="mt-12 space-y-4">
        {accordionData.map((res, idx) => (
          <AccordionItem idx={idx} key={idx} {...res} />
        ))}
      </div>
    </div>
  )
}

export default AccordionApp;