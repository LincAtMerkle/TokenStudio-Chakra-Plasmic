import { ImageWithOverlay } from "./ImageWithOverlay";
import {registerComponent } from "@plasmicapp/host";

export function registerImageWithOverlay() {
  registerComponent(ImageWithOverlay, {
    name: "ImageWithOverlay",
    importPath: "./ImageWithOverlay",
    props: {
      // title: {
      //   type: "string",
      //   defaultValue: "xxxxxxxx",
      // },
      // description: {
      //   type: "string",
      // },
      // url: {
      //   type: "string",
      //   defaultValue: "http://placekitten.com/200/300g",
      // },
      // alt: {
      //   type: "string",
      // },
      src: {
        type: "string",
      },
      // spacing: {
      //   type: "string",
      // },
      children: {
        type: "slot",
        defaultValue: [
          // {
          //   type: "component",
          //   name: "Chakra-UI Heading",
          //   props: { size: "4xl" },
          //   styles: { color: "white" },
          // },
        ],
      },
    },
  });
}