interface inputProps {
    title: string;
    placeholder: string;
    type: "text" | "textarea";
}
export const InputBar: React.FC<inputProps> = ({ title, placeholder, type }) => {
    return (
        <div className="flex flex-col">
            <label className="text-sm font-popi font-semibold" htmlFor={title}>{title}</label>
            {type == "text" &&
                (<input type={type} id={title} className="rounded-md p-4 border-[2px] border-[#EEF2FF] outline-none mt-2" placeholder={placeholder} />)
            }
            {type == "textarea" &&
                (<textarea id={title} className="rounded-md p-4 border-[2px] border-[#EEF2FF] outline-none mt-2" placeholder={placeholder} />)
            }
        </div>
    )
}
