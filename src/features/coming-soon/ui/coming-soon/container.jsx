import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Error } from "../../../error/ui/component";
import { LoadingSpinner } from "../../../loading/ui/component";
import { selectComingSoonIds, selectIsComingSoonLoading } from "../../module/selectors";
import { loadComingSoon } from "../../module/thunks/load-coming-soon";
import { ComingSoon } from "./component";

export const ComingSoonContainer = () => {
   const dispatch = useDispatch();
   const comingSoonIds = useSelector(selectComingSoonIds);
   const isLoading = useSelector(selectIsComingSoonLoading);
   const noData = !comingSoonIds?.length;

   useEffect(() => {
      dispatch(loadComingSoon());
   }, []);

   return isLoading ? (<LoadingSpinner/>) : (
      noData ? (<Error/>) : (
         <ComingSoon comingSoonIds={comingSoonIds} />
      )
   )
}