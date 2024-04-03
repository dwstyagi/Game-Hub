import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwtich from "./ColorModeSwtich";
import SearchBarInput from "./SearchBarInput";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchBarInput />
      <ColorModeSwtich />
    </HStack>
  );
};

export default NavBar;
