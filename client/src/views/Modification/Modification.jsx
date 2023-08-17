import style from "./Modification.module.css"
import NavBar from "../../components/NavBar/NavBar"
import { useParams } from "react-router-dom";
import FormModification from "../../components/FormModification/FormModification";

const Modification = () => {
  const { id } = useParams();
  return (
    <div className={style["body-bg"]}>
      <NavBar />
      <FormModification id={id} />
    </div>
  )
}

export default Modification;