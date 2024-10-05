import MobileAppContent from "./mobile-app-content/mobile-app-content";
import MobileAppHeader from "./mobile-app-header/mobile-app-header";

const MobileApp = () => {
  return (
    <div className="flex  h-full flex-col gap-10">
      <div className="bg-slate-600">
        <MobileAppHeader />
      </div>
      <div  className="bg-slate-500">
        <MobileAppContent />
      </div>
    </div>
  );
};

export default MobileApp;
