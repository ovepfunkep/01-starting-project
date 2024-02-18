export default function Button({text = '+ Add new project', className, ...props}) {
    return (
        <button className={`bg-teal-400 font-bold p-2 rounded-lg w-30 outline outline-1 outline-black hover:outline-teal-50 ${className}`} {...props}>{text}</button>
    )
}