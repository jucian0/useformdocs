import { Outlet } from "remix";
import withDocs from "~/hocs/withDocs";

function Docs() {

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default withDocs(Docs);