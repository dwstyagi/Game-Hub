import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwtich from "./ColorModeSwtich";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px"></Image>
      <ColorModeSwtich />
    </HStack>
  );
};

export default NavBar;
