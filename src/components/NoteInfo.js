// Component imports
import { useParams } from "react-router"
import formatDate from "./DateFormatting"


const Note = (props) => {
  const { id } = useParams()
  console.log(id)

  return (
    <div id="note" className="p-2 border-b-2 hover:bg-gray-200">
      <h1 className="text-xl font-semibold">{props.title}</h1>
      <h2 className="text-xs text-gray-500">{formatDate(props.time)}</h2>
      <p className="line-clamp-2 text-sm break-all">{props.text || "..."}</p>
    </div>
  )
}
export default Note