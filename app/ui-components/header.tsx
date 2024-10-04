import { ModeToggle } from "./dark-mode";

const Header = () => {
  return (
    <div className="h-full w-full flex justify-between">
      <div className="text-4xl font-sans font-bold border-r-2 border-b-2 w-[400px] flex justify-center py-4">
        Tasker
      </div>
      <div className="w-full border-b-2 flex justify-end">
        <div className="p-4">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
};

export default Header;
