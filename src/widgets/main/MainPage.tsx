const ContactData = dynamic(
  () => import("@/shared/ui/ContactData/ContactData")
);
import dynamic from "next/dynamic";
import MainScreen from "./ui/MainScreen";
const Reviews = dynamic(() => import("./ui/Reviews"));
const Describe = dynamic(() => import("./ui/Describe"));
const Photos = dynamic(() => import("./ui/Photos"));
const Dignities = dynamic(() => import("./ui/Dignities"));

export default function MainPage() {
  return (
    <>
      <MainScreen />
      <Dignities />
      <Photos />
      <Describe />
      <Reviews />
      <ContactData />
    </>
  );
}
