import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwtich = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text whiteSpace="nowrap" paddingRight="20px">
        Dark Mode
      </Text>
    </HStack>
  );
};

export default ColorModeSwtich;
