import Conversations from "./Conversations";
import SearchInput from "./SearchInput";

const Sidebar = () => {
  return (
    <div>
      <SearchInput />
      <div className=" divider px-3"></div>
      <Conversations />
    </div>
  );
};

export default Sidebar;
