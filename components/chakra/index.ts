import { Accordion } from "@/src/components/accordion"
import { AccordionButton } from "@/src/components/accordionButton"
import { AccordionIcon } from "@/src/components/accordionIcon"
import { AccordionItem } from "@/src/components/accordionItem"
import { AccordionPanel } from "@/src/components/accordionPanel"
import { AspectRatio } from "@/src/components/aspectRatio"
import { Avatar } from "@/src/components/avatar"
import { AvatarBadge } from "@/src/components/avatarBadge"
import { AvatarGroup } from "@/src/components/avatarGroup"
import { Badge } from "@/src/components/badge"
import { Breadcrumb } from "@/src/components/breadcrumb"
import { BreadcrumbItem } from "@/src/components/breadcrumbItem"
import { BreadcrumbLink } from "@/src/components/breadcrumbLink"
import { BreadcrumbSeparator } from "@/src/components/breadcrumbSeparator"
import { Button } from "@/src/components/button"
import { ButtonGroup } from "@/src/components/buttonGroup"
import { Box } from "@/src/components/box"
import { Card } from "@/src/components/card"
import { CardHeader } from "@/src/components/cardHeader"
import { CardBody } from "@/src/components/cardBody"
import { CardFooter } from "@/src/components/cardFooter"
import { Checkbox } from "@/src/components/checkbox"
import { CheckboxGroup } from "@/src/components/checkboxGroup"
import { Code } from "@/src/components/code"
import { Container } from "@/src/components/container"
import { Divider } from "@/src/components/divider"
import { FormControl } from "@/src/components/formControl"
import { FormErrorMessage } from "@/src/components/formErrorMessage"
import { FormHelperText } from "@/src/components/formHelperText"
import { FormLabel } from "@/src/components/formLabel"
import { Heading } from "@/src/components/heading"
import { Highlight } from "@/src/components/highlight"
import { Image } from "@/src/components/image"
import { Input } from "@/src/components/input"
import { IconButton } from "@/src/components/iconButton"
import { Kbd } from "@/src/components/kbd"
import { Modal } from "@/src/components/modal"
import { ModalBody } from "@/src/components/modalBody"
import { ModalCloseButton } from "@/src/components/modalCloseButton"
import { ModalContent } from "@/src/components/modalContent"
import { ModalFooter } from "@/src/components/modalFooter"
import { ModalHeader } from "@/src/components/modalHeader"
import { ModalOverlay } from "@/src/components/modalOverlay"
import { NumberDecrementStepper } from "@/src/components/numberDecrementStepper"
import { NumberIncrementStepper } from "@/src/components/numberIncrementStepper"
import { NumberInput } from "@/src/components/numberInput"
import { NumberInputField } from "@/src/components/numberInputField"
import { NumberInputStepper } from "@/src/components/numberInputStepper"
import { PinInput } from "@/src/components/pinInput"
import { PinInputField } from "@/src/components/pinInputField"
import { Popover } from "@/src/components/popover"
import { PopoverArrow } from "@/src/components/popoverArrow"
import { PopoverBody } from "@/src/components/popoverBody"
import { PopoverCloseButton } from "@/src/components/popoverCloseButton"
import { PopoverContent } from "@/src/components/popoverContent"
import { PopoverHeader } from "@/src/components/PopoverHeaderutton"
import { PopoverTrigger } from "@/src/components/popoverTrigger"
import { Progress } from "@/src/components/progress"
import { Radio } from "@/src/components/radio"
import { RadioGroup } from "@/src/components/radioGroup"
import { Select } from "@/src/components/select"
import { Stat } from "@/src/components/stat"
import { StatArrow } from "@/src/components/statArrow"
import { StatHelpText } from "@/src/components/statHelpText"
import { StatLabel } from "@/src/components/statLabel"
import { StatNumber } from "@/src/components/statNumber"
import { Stack } from "@/src/components/stack"
import { Switch } from "@/src/components/switch";
import { HStack } from "@/src/components/hStack"
import { VStack } from "@/src/components/vStack"
import { Tab } from "@/src/components/tab"
import { TabList } from "@/src/components/tabList"
import { TabPanel } from "@/src/components/tabPanel"
import { TabPanels } from "@/src/components/tabPanels"
import { Tabs } from "@/src/components/tabs"
import { Tag } from "@/src/components/tag"
import { TagLeftIcon } from "@/src/components/tagLeftIcon"
import { TagLabel } from "@/src/components/tagLabel"
import { TagRightIcon } from "@/src/components/tagRightIcon"
import { TagCloseButton } from "@/src/components/tagCloseButton"
import { Text } from "@/src/components/text"
import { Table } from "@/src/components/table"
import { TableCaption } from "@/src/components/tableCaption"
import { TableContainer } from "@/src/components/tableContainer"
import { Tbody } from "@/src/components/tbody"
import { Td } from "@/src/components/td"
import { Tfoot } from "@/src/components/tfoot"
import { Th } from "@/src/components/th"
import { Tr } from "@/src/components/tr"
import { Thead } from "@/src/components/thead"
import { Toast } from "@/src/components/toast"
import { Tooltip } from "@/src/components/tooltip"

import { Registerable } from "./registerable";
import registerComponent, {
  CodeComponentMeta,
} from "@plasmicapp/host/registerComponent";

import {
  accordionButtonMeta,
  accordionIconMeta,
  accordionItemMeta,
  accordionMeta,
  accordionPanelMeta,
} from "./registerAccordion";
import { aspectRatioMeta } from "./registerAspectRatio";
import { avatarBadgeMeta, avatarGroupMeta, avatarMeta } from "./registerAvatar";
import { badgeMeta } from "./registerBadge";
import {
  breadcrumbItemMeta,
  breadcrumbLinkMeta,
  breadcrumbMeta,
  breadcrumbSeparatorMeta,
} from "./registerBreadcrumb";
import { buttonGroupMeta, buttonMeta } from "./registerButton";
import { boxMeta } from "./registerBox";
import { modifierProvider } from "./registerModifierProvider";
import { checkboxGroupMeta, checkboxMeta } from "./registerCheckBox";
import { codeMeta } from "./registerCode";
import { containerMeta } from "./registerContainer";
import { dividerMeta } from "./registerDivider";
import {
  formControlMeta,
  formErrorMessageMeta,
  formHelperTextMeta,
  formLabelMeta,
} from "./registerFormControl";
import { headingMeta } from "./registerHeading";
import { highlightMeta } from "./registerHighlight";
import { imageMeta } from "./registerImage";
import { inputMeta } from "./registerInput";
import { kbdMeta } from "./registerKbd";
import {
  modalMeta,
  modalBodyMeta,
  modalCloseButtonMeta,
  modalContentMeta,
  modalFooterMeta,
  modalHeaderMeta,
  modalOverlayMeta,
} from "./registerModal";
import {
  numberDecrementStepperMeta,
  numberIncrementStepperMeta,
  numberInputFieldMeta,
  numberInputMeta,
  numberInputStepperMeta,
} from "./registerNumberInput";
import { pinInputFieldMeta, pinInputMeta } from "./registerPinInput";
import {
  popoverArrowMeta,
  popoverBodyMeta,
  popoverCloseButtonMeta,
  popoverContentMeta,
  popoverHeaderMeta,
  popoverMeta,
  popoverTriggerMeta,
} from "./registerPopover";
import { progressMeta } from "./registerProgress";
import { radioGroupMeta, radioMeta } from "./registerRadio";
import { Option, optionMeta, selectMeta } from "./registerSelect";
import {
  statArrowMeta,
  statHelpTextMeta,
  statLabelMeta,
  statMeta,
  statNumberMeta,
} from "./registerStat";
import { switchMeta } from "./registerSwitch";
import {
  tableCaptionMeta,
  tableContainerMeta,
  tableMeta,
  tbodyMeta,
  tdMeta,
  tfootMeta,
  theadMeta,
  thMeta,
  trMeta,
} from "./registerTable";
import {
  tabListMeta,
  tabMeta,
  tabPanelMeta,
  tabPanelsMeta,
  tabsMeta,
} from "./registerTabs";
import { textMeta } from "./registerText";
import { toastMeta } from "./registerToast";
import { tooltipMeta } from "./registerTooltip";
import {
  cardMeta,
  cardHeaderMeta,
  cardBodyMeta,
  cardFooterMeta,
} from "./registerCard";

// Added
// Chakra-UI components
import {
  tagMeta,
  tagLeftIconMeta,
  tagLabelMeta,
  tagRightIconMeta,
  tagCloseButtonMeta,
} from "./registerTag";
import { iconButtonMeta } from "./registerIconButton";
import { 
  stackMeta,
  vStackMeta,
  hStackMeta,
 } from "./registerStack";



export * from "./registerable";
export * from "./registerAccordion";
export * from "./registerAspectRatio";
export * from "./registerAvatar";
export * from "./registerBadge";
export * from "./registerBreadcrumb";
export * from "./registerButton";
export * from "./registerBox";
export * from "./registerModifierProvider";
export * from "./registerCheckBox";
export * from "./registerCode";
export * from "./registerContainer";
export * from "./registerDivider";
export * from "./registerFormControl";
export * from "./registerHeading";
export * from "./registerHighlight";
export * from "./registerImage";
export * from "./registerInput";
export * from "./registerKbd";
export * from "./registerNumberInput";
export * from "./registerPinInput";
export * from "./registerPopover";
export * from "./registerProgress";
export * from "./registerRadio";
export * from "./registerSelect";
export * from "./registerStat";
export * from "./registerSwitch";
export * from "./registerTable";
export * from "./registerTabs";
export * from "./registerText";
export * from "./registerToast";
export * from "./registerTooltip";
export * from "./registerCard";
export * from "./registerTag";
export * from "./registerStack";

export function registerAllChakra(loader?: Registerable) {
  const _registerComponent = <T extends React.ComponentType<any>>(
    Component: T,
    defaultMeta: CodeComponentMeta<React.ComponentProps<T>>
  ) => {
    if (loader) {
      loader.registerComponent(Component, defaultMeta);
    } else {
      registerComponent(Component, defaultMeta);
    }
  };
  modifierProvider(loader);

  _registerComponent(Accordion, accordionMeta);
  _registerComponent(AccordionButton, accordionButtonMeta);
  _registerComponent(AccordionIcon, accordionIconMeta);
  _registerComponent(AccordionItem, accordionItemMeta);
  _registerComponent(AccordionPanel, accordionPanelMeta);
  _registerComponent(AspectRatio, aspectRatioMeta);
  _registerComponent(Avatar, avatarMeta);
  _registerComponent(AvatarBadge, avatarBadgeMeta);
  _registerComponent(AvatarGroup, avatarGroupMeta);
  _registerComponent(Badge, badgeMeta);
  _registerComponent(Breadcrumb, breadcrumbMeta);
  _registerComponent(BreadcrumbItem, breadcrumbItemMeta);
  _registerComponent(BreadcrumbLink, breadcrumbLinkMeta);
  _registerComponent(BreadcrumbSeparator, breadcrumbSeparatorMeta);
  _registerComponent(Box, boxMeta);
  _registerComponent(Button, buttonMeta);
  _registerComponent(ButtonGroup, buttonGroupMeta);
  _registerComponent(Checkbox, checkboxMeta);
  _registerComponent(CheckboxGroup, checkboxGroupMeta);
  _registerComponent(Code, codeMeta);
  _registerComponent(Container, containerMeta);
  _registerComponent(Divider, dividerMeta);
  _registerComponent(FormControl, formControlMeta);
  _registerComponent(FormErrorMessage, formErrorMessageMeta);
  _registerComponent(FormHelperText, formHelperTextMeta);
  _registerComponent(FormLabel, formLabelMeta);
  _registerComponent(Heading, headingMeta);
  _registerComponent(Highlight, highlightMeta);
  _registerComponent(Image, imageMeta);
  _registerComponent(Input, inputMeta);
  _registerComponent(Kbd, kbdMeta);
  _registerComponent(Modal, modalMeta);
  _registerComponent(ModalOverlay, modalOverlayMeta);
  _registerComponent(ModalContent, modalContentMeta);
  _registerComponent(ModalHeader, modalHeaderMeta);
  _registerComponent(ModalBody, modalBodyMeta);
  _registerComponent(ModalFooter, modalFooterMeta);
  _registerComponent(ModalCloseButton, modalCloseButtonMeta);
  _registerComponent(NumberInput, numberInputMeta);
  _registerComponent(NumberDecrementStepper, numberDecrementStepperMeta);
  _registerComponent(NumberIncrementStepper, numberIncrementStepperMeta);
  _registerComponent(NumberInputField, numberInputFieldMeta);
  _registerComponent(NumberInputStepper, numberInputStepperMeta);
  _registerComponent(Option, optionMeta);
  _registerComponent(Select, selectMeta);
  _registerComponent(PinInput, pinInputMeta);
  _registerComponent(PinInputField, pinInputFieldMeta);
  _registerComponent(Popover, popoverMeta);
  _registerComponent(PopoverBody, popoverBodyMeta);
  _registerComponent(PopoverArrow, popoverArrowMeta);
  _registerComponent(PopoverCloseButton, popoverCloseButtonMeta);
  _registerComponent(PopoverContent, popoverContentMeta);
  _registerComponent(PopoverHeader, popoverHeaderMeta);
  _registerComponent(PopoverTrigger, popoverTriggerMeta);
  _registerComponent(Progress, progressMeta);
  _registerComponent(Radio, radioMeta);
  _registerComponent(RadioGroup, radioGroupMeta);
  _registerComponent(Stat, statMeta);
  _registerComponent(StatArrow, statArrowMeta);
  _registerComponent(StatHelpText, statHelpTextMeta);
  _registerComponent(StatLabel, statLabelMeta);
  _registerComponent(StatNumber, statNumberMeta);
  _registerComponent(Switch, switchMeta);
  _registerComponent(Table, tableMeta);
  _registerComponent(TableCaption, tableCaptionMeta);
  _registerComponent(Tbody, tbodyMeta);
  _registerComponent(Thead, theadMeta);
  _registerComponent(Tfoot, tfootMeta);
  _registerComponent(Td, tdMeta);
  _registerComponent(Th, thMeta);
  _registerComponent(Tr, trMeta);
  _registerComponent(TableContainer, tableContainerMeta);
  _registerComponent(Text, textMeta);
  _registerComponent(Toast, toastMeta);
  _registerComponent(Tooltip, tooltipMeta);
  _registerComponent(TabList, tabListMeta);
  _registerComponent(Tab, tabMeta);
  _registerComponent(Tabs, tabsMeta);
  _registerComponent(TabPanel, tabPanelMeta);
  _registerComponent(TabPanels, tabPanelsMeta);
  _registerComponent(Tag, tagMeta);
  _registerComponent(TagLeftIcon, tagLeftIconMeta);
  _registerComponent(TagLabel, tagLabelMeta);
  _registerComponent(TagRightIcon, tagRightIconMeta);
  _registerComponent(TagCloseButton, tagCloseButtonMeta);
  _registerComponent(IconButton, iconButtonMeta);

  // Added
  // Chakra-UI components
  _registerComponent(Card, cardMeta);
  _registerComponent(CardHeader, cardHeaderMeta);
  _registerComponent(CardBody, cardBodyMeta);
  _registerComponent(CardFooter, cardFooterMeta);
  _registerComponent(Stack, stackMeta);
  _registerComponent(HStack, hStackMeta);
  _registerComponent(VStack, vStackMeta)
}