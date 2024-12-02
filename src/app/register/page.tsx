import RegisterComponent from "@/components/RegisterComponent/RegisterComponent";
import RegisterHeader from "@/components/RegisterHeader/RegisterHeader";

const page = () => {
  return (
    <div className="mb-8">
      <RegisterHeader />
      <RegisterComponent />
    </div>
  );
};

export default page;
