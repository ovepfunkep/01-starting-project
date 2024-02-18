export default function Input({label, children, ...props}) {
    return (
        <div className="flex flex-col mb-6">
            <label className="text-2xl text-teal-950 mb-1 uppercase flex flex-col">
                {label}
                <input className="text-2xl outline rounded-md outline-1 p-2" {...props}/>
            </label>
        </div>
    )
}