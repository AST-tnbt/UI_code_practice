export default function Job({ title, icon, bgColor }: { title: string, icon: React.ReactNode, bgColor: string }) {
    return (
        <div className={`text-[#281A51] flex flex-col font-medium justify-center items-center ${bgColor} p-6 rounded-md`}>
            {icon}
            <p className="mt-2">{title}</p>
        </div>
    )
}