import { Accordion } from "@/src/components/accordion"
import { AccordionButton } from "@/src/components/accordionButton"
import { AccordionIcon } from "@/src/components/accordionIcon"
import { AccordionItem } from "@/src/components/accordionItem"
import { AccordionPanel } from "@/src/components/accordionPanel"
import { Alert } from "@/src/components/alert"
import { AlertDialog } from "@/src/components/alertDialog"
import { AspectRatio } from "@/src/components/aspectRatio"
import { Avatar } from "@/src/components/avatar"
import { AvatarBadge } from "@/src/components/avatarBadge"
import { AvatarGroup } from "@/src/components/avatarGroup"
import { Badge } from "@/src/components/badge"
import { Box } from "@/src/components/box"
import { Breadcrumb } from "@/src/components/breadcrumb"
import { BreadcrumbItem } from "@/src/components/breadcrumbItem"
import { BreadcrumbLink } from "@/src/components/breadcrumbLink"
import { BreadcrumbSeparator } from "@/src/components/breadcrumbSeparator"
import { Button } from "@/src/components/button"
import { ButtonGroup } from "@/src/components/buttonGroup"
import { Card } from "@/src/components/card"
import { CardBody } from "@/src/components/cardBody"
import { CardFooter } from "@/src/components/cardFooter"
import { CardHeader } from "@/src/components/cardHeader"
import { Center } from "@/src/components/center"
import { Checkbox } from "@/src/components/checkbox"
import { CheckboxGroup } from "@/src/components/checkboxGroup"
import { CircularProgress } from "@/src/components/circularProgress"
import { CloseButton } from "@/src/components/closeButton"
import { Code } from "@/src/components/code"
import { Container } from "@/src/components/container"
import { Divider } from "@/src/components/divider"
import { Drawer } from "@/src/components/drawer"
import { Editable } from "@/src/components/editable"
import { Flex } from "@/src/components/flex"
import { FormControl } from "@/src/components/formControl"
import { FormErrorMessage } from "@/src/components/formErrorMessage"
import { FormHelperText } from "@/src/components/formHelperText"
import { FormLabel } from "@/src/components/formLabel"
import { Grid } from "@/src/components/grid"
import { Heading } from "@/src/components/heading"
import { Highlight } from "@/src/components/highlight"
import { HStack } from "@/src/components/hStack"
import { Icon } from "@/src/components/icon"
import { IconButton } from "@/src/components/iconButton"
import { Image } from "@/src/components/image"
import { Input } from "@/src/components/input"
import { Kbd } from "@/src/components/kbd"
import { Link } from "@/src/components/link"
import { LinkOverlay } from "@/src/components/linkOverlay"
import { List } from "@/src/components/list"
import { Menu } from "@/src/components/menu"
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
import { PopoverHeader } from "@/src/components/popoverHeader"
import { PopoverTrigger } from "@/src/components/popoverTrigger"
import { Portal } from "@/src/components/portal"
import { Progress } from "@/src/components/progress"
import { Radio } from "@/src/components/radio"
import { RadioGroup } from "@/src/components/radioGroup"
import { RangeSlider } from "@/src/components/rangeSlider"
import { Select } from "@/src/components/select"
import { ShowHide } from "@/src/components/showHide"
import { SimpleGrid } from "@/src/components/simpleGrid"
import { Skeleton } from "@/src/components/skeleton"
import { SkipNav } from "@/src/components/skipNav"
import { Slider } from "@/src/components/slider"
import { Spinner } from "@/src/components/spinner"
import { Stack } from "@/src/components/stack"
import { Stat } from "@/src/components/stat"
import { StatArrow } from "@/src/components/statArrow"
import { StatHelpText } from "@/src/components/statHelpText"
import { StatLabel } from "@/src/components/statLabel"
import { StatNumber } from "@/src/components/statNumber"
import { Stepper } from "@/src/components/stepper"
import { Switch } from "@/src/components/switch"
import { Tab } from "@/src/components/tab"
import { Table } from "@/src/components/table"
import { TableCaption } from "@/src/components/tableCaption"
import { TableContainer } from "@/src/components/tableContainer"
import { TabList } from "@/src/components/tabList"
import { TabPanel } from "@/src/components/tabPanel"
import { TabPanels } from "@/src/components/tabPanels"
import { Tabs } from "@/src/components/tabs"
import { Tag } from "@/src/components/tag"
import { TagCloseButton } from "@/src/components/tagCloseButton"
import { TagLabel } from "@/src/components/tagLabel"
import { TagLeftIcon } from "@/src/components/tagLeftIcon"
import { TagRightIcon } from "@/src/components/tagRightIcon"
import { Tbody } from "@/src/components/tbody"
import { Td } from "@/src/components/td"
import { Text } from "@/src/components/text"
import { Textarea } from "@/src/components/textarea"
import { Tfoot } from "@/src/components/tfoot"
import { Th } from "@/src/components/th"
import { Thead } from "@/src/components/thead"
import { Toast } from "@/src/components/toast"
import { Tooltip } from "@/src/components/tooltip"
import { Tr } from "@/src/components/tr"
import { Transitions } from "@/src/components/transitions"
import { VisuallyHidden } from "@/src/components/visuallyHidden"
import { VStack } from "@/src/components/vStack"
import { Wrap } from "@/src/components/wrap"

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
import { alertMeta } from "./registerAlert"
import { alertDialogMeta } from "./registerAlert"
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
import { circularProgressMeta } from "./registerCircularProgress"
import { closeButtonMeta } from "./registerCloseButton"
import { codeMeta } from "./registerCode";
import { containerMeta } from "./registerContainer";
import { dividerMeta } from "./registerDivider";
import { drawerMeta } from "./registerDrawer"
import { editableMeta } from "./registerEditable"
import { flexMeta } from "./registerFlex"

import {
  formControlMeta,
  formErrorMessageMeta,
  formHelperTextMeta,
  formLabelMeta,
} from "./registerFormControl";
import { gridMeta } from "./registerGrid"

import { headingMeta } from "./registerHeading";
import { highlightMeta } from "./registerHighlight";
import { imageMeta } from "./registerImage";
import { inputMeta } from "./registerInput";
import { kbdMeta } from "./registerKbd";

import { linkMeta, linkOverlayMeta} from "./registerLink"
import { listMeta } from "./registerList"
import { menuMeta } from "./registerMenu"
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

import { portalMeta } from "./registerPortal"
import { progressMeta } from "./registerProgress";
import { radioGroupMeta, radioMeta } from "./registerRadio";

import { rangeSliderMeta } from "./registerRangeSlider"
import { Option, optionMeta, selectMeta } from "./registerSelect";

import { showHideMeta } from "./registerShowHide"
import { simpleGridMeta } from "./registerSimpleGrid"
import { skeletonMeta } from "./registerSkeleton"
import { skipNavMeta } from "./registerSkipNav"
import { sliderMeta } from "./registerSlider"
import { spinnerMeta } from "./registerSpinner"
import {
  statArrowMeta,
  statHelpTextMeta,
  statLabelMeta,
  statMeta,
  statNumberMeta,
} from "./registerStat";
import { stepperMeta } from "./registerStepper"

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

import { transitionsMeta } from "./registerTransitions"
import { visuallyHiddenMeta } from "./registerVisuallyHidden"
import {
  tabListMeta,
  tabMeta,
  tabPanelMeta,
  tabPanelsMeta,
  tabsMeta,
} from "./registerTabs";
import { textMeta } from "./registerText";

import { textareaMeta } from "./registerTextarea"
import { toastMeta } from "./registerToast";
import { tooltipMeta } from "./registerTooltip";
import {
  cardMeta,
  cardHeaderMeta,
  cardBodyMeta,
  cardFooterMeta,
} from "./registerCard";
import { centerMeta } from "./registerCenter"

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

 import { wrapMeta } from "./registerWrap"
export * from "./registerable";

/* 
Add all registers here
*/

export * from "./registerAccordion";
export * from "./registerAlert";
export * from "./registerAspectRatio";
export * from "./registerAvatar";
export * from "./registerBadge";
export * from "./registerBox";
export * from "./registerBreadcrumb";
export * from "./registerButton";
export * from "./registerCard";

export * from "./registerModifierProvider";
export * from "./registerCheckBox";
export * from "./registerCode";
export * from "./registerContainer";
export * from "./registerDivider";

export * from "./registerDrawer";
export * from "./registerEditable";
export * from "./registerFlex";
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

export * from "./registerShowHide";
export * from "./registerSimpleGrid";
export * from "./registerSkeleton";
export * from "./registerSkipNav";
export * from "./registerSlider";
export * from "./registerSpinner";
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
  _registerComponent(Alert, alertMeta);
  _registerComponent(AlertDialog, alertDialogMeta);

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

  _registerComponent(CircularProgress, circularProgressMeta);
  _registerComponent(CloseButton, closeButtonMeta );
  _registerComponent(Code, codeMeta);
  _registerComponent(Container, containerMeta);
  _registerComponent(Divider, dividerMeta);
  _registerComponent(FormControl, formControlMeta);
  _registerComponent(FormErrorMessage, formErrorMessageMeta);
  _registerComponent(FormHelperText, formHelperTextMeta);
  _registerComponent(FormLabel, formLabelMeta);

  _registerComponent(Grid, gridMeta);
  _registerComponent(Heading, headingMeta);
  _registerComponent(Highlight, highlightMeta);
  _registerComponent(Image, imageMeta);
  _registerComponent(Input, inputMeta);
  _registerComponent(Kbd, kbdMeta);

  _registerComponent(Link, linkMeta );
  _registerComponent(LinkOverlay, linkOverlayMeta);
  _registerComponent(List, listMeta );
  _registerComponent(Menu, menuMeta);
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

  _registerComponent(ShowHide, showHideMeta );
  _registerComponent(SimpleGrid, simpleGridMeta) ;
  _registerComponent(Skeleton, skeletonMeta);
  _registerComponent(SkipNav, skipNavMeta );
  _registerComponent(Slider, sliderMeta);
  _registerComponent(Spinner, spinnerMeta);
  _registerComponent(PinInput, pinInputMeta);
  _registerComponent(PinInputField, pinInputFieldMeta);
  _registerComponent(Popover, popoverMeta);
  _registerComponent(PopoverBody, popoverBodyMeta);
  _registerComponent(PopoverArrow, popoverArrowMeta);
  _registerComponent(PopoverCloseButton, popoverCloseButtonMeta);
  _registerComponent(PopoverContent, popoverContentMeta);
  _registerComponent(PopoverHeader, popoverHeaderMeta);
  _registerComponent(PopoverTrigger, popoverTriggerMeta);

  _registerComponent(Portal, portalMeta);
  _registerComponent(Progress, progressMeta);
  _registerComponent(Radio, radioMeta);
  _registerComponent(RadioGroup, radioGroupMeta);

  _registerComponent(RangeSlider, rangeSliderMeta);
  _registerComponent(Stat, statMeta);
  _registerComponent(StatArrow, statArrowMeta);
  _registerComponent(StatHelpText, statHelpTextMeta);
  _registerComponent(StatLabel, statLabelMeta);
  _registerComponent(StatNumber, statNumberMeta);

  _registerComponent(Stepper, stepperMeta);
  _registerComponent(Switch, switchMeta);
  _registerComponent(Table, tableMeta);
  _registerComponent(TableCaption, tableCaptionMeta);
  _registerComponent(Tbody, tbodyMeta);
  _registerComponent(Thead, theadMeta);
  _registerComponent(Tfoot, tfootMeta);
  _registerComponent(Td, tdMeta);
  _registerComponent(Th, thMeta);

  _registerComponent(Transitions, transitionsMeta);
  _registerComponent(VisuallyHidden,visuallyHiddenMeta);
  _registerComponent(Tr, trMeta);
  _registerComponent(TableContainer, tableContainerMeta);
  _registerComponent(Text, textMeta);

  _registerComponent(Textarea, textareaMeta );
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
  Center
  _registerComponent(CardBody, cardBodyMeta);
  _registerComponent(CardFooter, cardFooterMeta);
  _registerComponent(Stack, stackMeta);
  _registerComponent(HStack, hStackMeta);
  _registerComponent(VStack, vStackMeta)

  _registerComponent(Wrap, wrapMeta );
}