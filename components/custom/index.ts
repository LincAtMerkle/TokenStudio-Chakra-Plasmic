import { registerImageWithOverlay } from "./registerImageWithOverlay"
import { registerButtonPreview } from "./registerButtonPreview"
import { registerToggleColorMode } from "./registerToggleColorMode"
import { registerChakraDocs } from "./tokenSheets/registerChakraDocs"
import { registerGolfIcon } from "./icons/registerGolfIcon";
import { registerBowlingIcon } from "./icons/registerBowlingIcon";
import { registerArcadeIcon } from "./icons/registerArcadeIcon";
import { registerHijinxIcon } from "./icons/registerHijinxIcon";
import { registerWondervilleIcon } from "./icons/registerWondervilleIcon";
import { registerKaraokeIcon } from "./icons/registerKaraokeIcon";
import { registerLaserIcon } from "./icons/registerLaserIcon";
import { registerEscaperoomIcon } from "./icons/registerEscaperoomIcon";
import { registerFunPassIcon } from "./icons/registerFunPassIcon";
import { registerLocationPinIcon } from "./icons/registerLocationPinIcon";
import { registerDartsIcon } from "./icons/registerDartsIcon";
import { registerSwatchColor } from "./tokenSheets/registerSwatchColor";
import { registerSwatchSizing } from "./tokenSheets/registerSwatchSizing";
import { registerSwatchBorderRadius } from "./tokenSheets/registerSwatchBorderRadius";
import { registerSwatchSpacing } from "./tokenSheets/registerSwatchSpacing";
import { registerSwatchFontFamily } from "./tokenSheets/registerSwatchFontFamily";
import { registerSwatchFontWeights } from "./tokenSheets/registerSwatchFontWeights";
import { registerSwatchFontSizes } from "./tokenSheets/registerSwatchFontSizes";
import { registerSwatchBorderWidth } from "./tokenSheets/registerSwatchBorderWidth";
import { registerSwatchOpacity } from "./tokenSheets/registerSwatchOpacity";
import { registerSwatchLineHeights } from "./tokenSheets/registerSwatchLineHeights";
import { registerSwatchLetterSpacing } from "./tokenSheets/registerSwatchLetterSpacing";
import { registerSwatchParagraphSpacing } from "./tokenSheets/registerSwatchParagraphSpacing";
import { registerSwatchTextCase } from "./tokenSheets/registerSwatchTextCase";
import { registerSwatchAssets } from "./tokenSheets/registerSwatchAssets";
import { registerSwatchDimension } from "./tokenSheets/registerSwatchDimension";
import { registerSwatchTextDecoration } from "./tokenSheets/registerSwatchTextDecoration";
import { registerSwatchBorder } from "./tokenSheets/registerSwatchBorder";
import { registerSwatchBoxShadow } from "./tokenSheets/registerSwatchBoxShadow";
import { registerSwatchTypography } from "./tokenSheets/registerSwatchTypography";
import { registerSwatchComposition } from "./tokenSheets/registerSwatchComposition";


export function registerAllCustom() {
    registerImageWithOverlay();
    registerButtonPreview();
    registerToggleColorMode();
    registerChakraDocs();
  
    //Custom icons
    registerGolfIcon();
    registerBowlingIcon();
    registerArcadeIcon();
    registerHijinxIcon();
    registerWondervilleIcon();
    registerKaraokeIcon();
    registerLaserIcon();
    registerEscaperoomIcon();
    registerFunPassIcon();
    registerLocationPinIcon();
    registerDartsIcon();
    
    //TokenSheets
    registerSwatchColor();
    registerSwatchSizing();
    registerSwatchBorderRadius();
    registerSwatchSpacing();
    registerSwatchFontFamily();
    registerSwatchFontWeights();
    registerSwatchFontSizes();
    registerSwatchBorderWidth();
    registerSwatchOpacity();
    registerSwatchLineHeights();
    registerSwatchLetterSpacing();
    registerSwatchParagraphSpacing();
    registerSwatchTextCase();
    registerSwatchTextDecoration();
    registerSwatchAssets();
    registerSwatchDimension();
    registerSwatchBorder();
    registerSwatchBoxShadow();
    registerSwatchTypography();
    registerSwatchComposition();
}