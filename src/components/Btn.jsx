import { Link } from "react-router-dom";

function Btn({ url, text }) {
  return (
    <Link
      to={url}
      className="px-4 py-2 text-sm rounded-md border cursor-pointer"
    >
      {text}
    </Link>
  );
}

export default Btn;
