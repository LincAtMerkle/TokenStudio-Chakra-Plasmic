// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import * as ph from "@plasmicapp/host";
import GlobalContextsProvider from "../components/plasmic/plasmic_poc/PlasmicGlobalContextsProvider";
import { ScreenVariantProvider } from "../components/plasmic/plasmic_poc/PlasmicGlobalVariant__Screen";
import { PlasmicFooterWithFourColumns } from "../components/plasmic/plasmic_poc/PlasmicFooterWithFourColumns";
import { useRouter } from "next/router";

function FooterWithFourColumns() {
  // Use PlasmicFooterWithFourColumns to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicFooterWithFourColumns are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicFooterWithFourColumns is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  return (
    // <GlobalContextsProvider>
      <ph.PageParamsProvider
        params={useRouter()?.query}
        query={useRouter()?.query}
      >
        <PlasmicFooterWithFourColumns />
      </ph.PageParamsProvider>
    // </GlobalContextsProvider>
  );
}

export default FooterWithFourColumns;
