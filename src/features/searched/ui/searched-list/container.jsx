import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Error } from "../../../error/ui/component";
import { LoadingSpinner } from "../../../loading/ui/component";
import { selectIsSearchedLoading, selectSearched } from "../../module/selectors";
import { loadSearched } from "../../module/thunks/load-searched";
import { SearchedList } from "./component";

export const SearchedContainer = () => {
   let params = useParams();
   const dispatch = useDispatch();
   const searched = useSelector(selectSearched);
   const isLoading = useSelector(selectIsSearchedLoading);
   const noData = !searched?.length;

   useEffect(() => {
      dispatch(loadSearched(params.search));
   }, [params.search])

   return isLoading ? (<LoadingSpinner/>) : (
      noData ? (<Error/>) : (
         <SearchedList searched={searched} param={params.search} />
      )
   )
}