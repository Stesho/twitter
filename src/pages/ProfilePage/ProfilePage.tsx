import React from "react";
import { useSelector } from "react-redux";
import { userSelector } from "@/store/selectors/userSelectors";
import { Menu } from "@/components/ui/Menu/Menu";
import { Search } from "@/components/ui/Search/Search";
import { ProfilePageWrapper } from "@/pages/ProfilePage/ProfilePage.styled";
import { Profile } from "@/components/Profile/Profile";

export const ProfilePage = () => {
  const { user } = useSelector(userSelector);

  return (
    <ProfilePageWrapper>
      <Menu />
      <Profile user={user} />
      <aside>
        <Search />
        <div>
          <span>You might like</span>
        </div>
      </aside>
    </ProfilePageWrapper>
  );
};
