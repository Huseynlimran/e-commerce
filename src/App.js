import  { dogApi } from "./store/storeSlice";

import { useSelector,useDispatch } from "react-redux";




function App() {
  
  const dispatch = useDispatch()

  const store = useSelector((state) => state.store);
  console.log(store)

  return (
    <div className="App">
      

      <button disabled={!store.data.loading ? true : false} onClick={() => dispatch(dogApi())}>add</button>

      <img src={store.data.image} alt="" />
    </div>
  );
}

export default App;
