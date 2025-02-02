import {
  NumberDecrementStepperProps,
  NumberIncrementStepperProps,
  NumberInputFieldProps,
  NumberInputProps,
  NumberInputStepperProps,
} from "@chakra-ui/react";
import { CodeComponentMeta } from "@plasmicapp/host/registerComponent";
import {
  getComponentNameAndImportMeta,
  getPlasmicComponentName,
} from "./utils";

export const numberInputMeta: CodeComponentMeta<NumberInputProps> = {
  ...getComponentNameAndImportMeta("NumberInput"),
  props: {
    size: {
      type: "choice",
      options: ["xl", "sm", "md", "lg"],
    },
    variant: {
      type: "choice",
      options: ["outline", "filled", "flushed", "unstyled"],
    },
    inputMode: {
      type: "choice",
      options: [
        "text",
        "search",
        "none",
        "tel",
        "url",
        "email",
        "numeric",
        "decimal",
      ],
    },
    format: {
      type: "string",
    },
    step: {
      type: "number",
    },
    precision: {
      type: "number",
    },
    max: {
      type: "number",
    },
    min: {
      type: "number",
    },
    errorBorderColor: {
      type: "string",
      defaultValue: "red.500",
    },
    focusBorderColor: {
      type: "string",
      defaultValue: "blue.500",
    },
    allowMouseWheel: {
      type: "boolean",
    },
    isDisabled: {
      type: "boolean",
    },
    isInvalid: {
      type: "boolean",
    },
    isReadOnly: {
      type: "boolean",
    },
    isRequired: {
      type: "boolean",
    },

    children: {
      type: "slot",
      defaultValue: [
        {
          type: "component",
          name: getPlasmicComponentName("NumberInputField"),
        },
        {
          type: "component",
          name: getPlasmicComponentName("NumberInputStepper"),
        },
      ],
    },
  },
};

export const numberInputStepperMeta: CodeComponentMeta<NumberInputStepperProps> = {
  ...getComponentNameAndImportMeta("NumberInputStepper", "NumberInput"),
  props: {
    children: {
      type: "slot",
      allowedComponents: [
        getPlasmicComponentName("NumberIncrementStepper"),
        getPlasmicComponentName("NumberDecrementStepper"),
      ],
      defaultValue: [
        {
          type: "component",
          name: getPlasmicComponentName("NumberIncrementStepper"),
        },
        {
          type: "component",
          name: getPlasmicComponentName("NumberDecrementStepper"),
        },
      ],
    },
  },
};

export const numberDecrementStepperMeta: CodeComponentMeta<NumberDecrementStepperProps> = {
  ...getComponentNameAndImportMeta(
    "NumberDecrementStepper",
    "NumberInputStepper"
  ),
  props: {},
};

export const numberIncrementStepperMeta: CodeComponentMeta<NumberIncrementStepperProps> = {
  ...getComponentNameAndImportMeta(
    "NumberIncrementStepper",
    "NumberInputStepper"
  ),
  props: {},
};

export const numberInputFieldMeta: CodeComponentMeta<NumberInputFieldProps> = {
  ...getComponentNameAndImportMeta("NumberInputField", "NumberInput"),
  props: {},
};
