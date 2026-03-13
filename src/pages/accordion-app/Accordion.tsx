import { accordionData } from "./data"
import AppHeading from "../../components/common/AppHeading"
import AccordionItem from "./components/AccordionItem"

const AccordionApp = () => {
  return (
    <div className="max-w-3xl mx-auto px-6">
      <AppHeading sno={1} title="Query Knowledge Base" />
      <div className="mt-12 space-y-4">
        {accordionData.map((res, idx) => (
          <AccordionItem idx={idx} key={idx} {...res} />
        ))}
      </div>
    </div>
  )
}

export default AccordionApp;