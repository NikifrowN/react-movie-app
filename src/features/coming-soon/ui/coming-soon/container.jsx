import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectComingSoonIds, selectIsComingSoonError, selectIsComingSoonLoading } from "../../module/selectors";
import { loadComingSoon } from "../../module/thunks/load-coming-soon";
import { ComingSoon } from "./component";

// import { AllProducts } from "./component"

// export const AllProductsContainer = () => {
//    const dispatch = useDispatch();
//    const productIds = useSelector(selectAllProductsIds);
//    const isLoading = useSelector(selectIsAllProductsLoading);
   
//    useEffect(() => {
//       dispatch(loadAllProducts())
//    }, []);

//    return isLoading ? (
//       <span>Loading</span>
//    ) : (
//       <AllProducts productIds={productIds} />
//    )
// }

export const ComingSoonContainer = () => {
   const dispatch = useDispatch();
   const comingSoonIds = useSelector(selectComingSoonIds);
   const isLoading = useSelector(selectIsComingSoonLoading);
   const error = useSelector(selectIsComingSoonError);

   useEffect(() => {
      dispatch(loadComingSoon());
   }, [])

   console.log(comingSoonIds)
   return error ? (<span>error</span>) : (
      isLoading ? (<span>loading</span>) : (
         <ComingSoon comingSoonIds={comingSoonIds} />
      )
   )
}