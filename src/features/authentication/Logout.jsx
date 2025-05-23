import React from "react";
import ButtonIcon from "../../ui/ButtonIcon";
import { HiArrowRightStartOnRectangle } from "react-icons/hi2";
import { useLogout } from "./useLogout";
import SpinnerMini from "../../ui/SpinnerMini";

function Logout() {
  const { logout, isLoading } = useLogout();
  return (
    <ButtonIcon disabled={isLoading} onClick={logout}>
      {!isLoading ? <HiArrowRightStartOnRectangle /> : <SpinnerMini />}
    </ButtonIcon>
  );
}

export default Logout;
