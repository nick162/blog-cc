import { Shell } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <Shell className="animate-spin size-24" />
      <br />
      <p>Loading .....</p>
    </div>
  );
};

export default Loading;
