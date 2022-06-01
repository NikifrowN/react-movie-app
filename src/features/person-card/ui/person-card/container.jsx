import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Error } from "../../../error/ui/component";
import { LoadingSpinner } from "../../../loading/ui/component";
import { selectIsPersonLoading, selectPerson } from "../../module/selectors";
import { loadPerson } from "../../module/thunks/load-person";
import { PersonCard } from "./component";

export const PersonContainer = () => {
   let params = useParams();
   const dispatch = useDispatch();
   const person = useSelector(selectPerson);
   const isLoading = useSelector(selectIsPersonLoading);
   const noData = !person;
   console.log(person)

   useEffect(() => {
      dispatch(loadPerson(params.person))
   }, [params.movie]);
   
   return isLoading ? (<LoadingSpinner/>) : (
      noData ? (<Error/>) : (
         <PersonCard person={person} />
      )
   )
}