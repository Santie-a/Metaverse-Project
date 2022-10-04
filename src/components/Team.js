export default function Team(props) {
    const style = props.selected ? "bg-green-light" : "opacity-70"

	return (
		<div
            className={`${style} cursor-pointer text-center ease-in duration-300 bg-white shadow-inner flex flex-col items-center justify-center h-auto w-auto m-2 p-5 border border-gray-primary rounded`}
            onClick={props.toggle}
        >
            <img
                src={props.img}
                alt="Team"
                className="w-full m-auto"
            />
            <p className="font-bold text-gray-base mt-1">
                {props.name}
            </p>
        </div>
    )
}