import DevContact from "@/components/DevContact";
import DevContainer from "@/components/DevContainer";
import DesktopScreen from "@/components/Resume/DesktopScreen";
import ProfileInformation from "@/components/Resume/ProfileInformation";
import ProfileSummary from "@/components/Resume/profileSummary";

export default function Resume() {
  return (
    <DevContainer>
      <ProfileInformation />
      <ProfileSummary />
      <DesktopScreen />
      <DevContact />
    </DevContainer>
  );
}
