import { useState } from "react"
import AccordionIcon from "./icon-components/accordion-icon"
import ChevronUp from "./icon-components/chevron-up"
import DropDown from "./icon-components/dropdown"


export default function Accordion2(){

    const [select2,setSelect2] = useState(null)

    const toggle = (i) => {

        if(select2 === i ) {
            return setSelect2(null)
        }

        setSelect2(i)

    }

    const data = [
        {
            title:'Do You Have Any Samples?',
            content:'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos'
        },

        {
            title:'Can Iget Custom Templates?',
            content:'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos'
        },

        {
            title:'What Types Of Videos Can I Upload?',
            content:'You can upload any files from your computer or use Youtube links. Keep in mind that our content repurposing works best with longer videos'
        }
    ]

    return (
       
            <div className="accordion">
                {data.map((item,i) => (
                    <div className="item" key={i}>
                        <div className="titulo" onClick={()=> toggle(i)}>
                            <div className="accordion-title">
                                <AccordionIcon/>
                                <h2>{item.title}</h2>
                            </div>
                              <span>{select2 === i ? <ChevronUp/> : <DropDown/>}</span>
                        </div>
                        <div className={select2 === i ? 'content show' : 'content'} >
                            <p>{item.content}</p>
                        </div>
                    </div>
                ))}
            </div>

    )
}