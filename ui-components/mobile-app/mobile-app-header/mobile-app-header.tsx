import { Filter } from "./filter";

const MobileAppHeader = () => {
  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-5">
        <span className="font-semibold text-3xl font-sans m-5">
              Mobile App
        </span>
      
        <div className="mx-5">
          <Filter />
          <Filter />
        </div>
      </div>
    </div>
  );
};

export default MobileAppHeader;
