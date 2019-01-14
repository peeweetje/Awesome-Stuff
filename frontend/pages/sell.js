import CreateItems from "../components/CreateItems";
import PleaseSignIn from "../components/PleaseSignIn";

const Sell = props => (
  <div>
    <PleaseSignIn>
      <CreateItems />
    </PleaseSignIn>
  </div>
);

export default Sell;
