import React from "react";
import {
  Flex,
  FlexProps,
  Tag as ChakraTag,
  TagProps as ChakraTagProps,
  useColorModeValue,
  useTheme,
} from "@chakra-ui/react";
import { ColorKeys, getTagBackgroundDark } from "./theme/foundations/colors";

export interface TagProps extends ChakraTagProps {
  name: string;
  interactive?: boolean;
  colorScheme?: ColorKeys;
}

export function useTagStyles(colorScheme: ColorKeys = "accent") {
  const theme = useTheme();
  return {
    bg: useColorModeValue(
      `${colorScheme}.100`,
      colorScheme === "accent"
        ? "var(--colors-accent-tag-bg-dark)"
        : getTagBackgroundDark(colorScheme, theme)
    ),
    color: useColorModeValue(`${colorScheme}.800`, `${colorScheme}.200`),
  };
}

export const getTagColor = (type) => {
  type = type.toLowerCase();
  switch (type) {
    case "rails":
    case "ruby":
      return "red";

    case "react":
      return "cyan";

    case "javascript":
    case "aws":
      return "yellow";

    case "typescript":
    case "tailwind":
      return "blue";

    case "chakraui":
    case "css":
      return "teal";

    case "mongodb":
    case "node":
      return "green";

    case "canvas":
      return "orange";

    case "heroku":
      return "purple";

    case "socket.io":
      return "gray";
  }
};

export const Tag: React.FC<TagProps> = ({
  colorScheme = "accent",
  name,
  interactive = true,
  ...props
}) => {
  const propsOverride = {
    size: "sm",
    my: "4px",
    ml: "4px",
    verticalAlign: "middle",
    ...useTagStyles(colorScheme),
  };

  return (
    // <RouteLink to={`/posts?tag=${name}`}>
    <ChakraTag {...props} {...propsOverride}>
      {name}
    </ChakraTag>
    // </RouteLink>
  );
};

export interface TagsProps extends FlexProps {
  interactive?: boolean;
  tags?: string[];
  tagProps?: Partial<TagProps>;
}
