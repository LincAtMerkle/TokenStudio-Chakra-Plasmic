import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
import { ModifierContext } from "./src/components/tokensCtx";
export const PLASMIC = initPlasmicLoader({
  projects: [
    { // Plasmic POC (locahost)
      id: "nV7sRTPBx6ecWzFNNAWeQg",  // ID of a project you are using
      token: "NIKKvwe5oRoMzc1Ag6Y0edSDYxfGY1n9Aq2D9dqA1tC0nzLJgWADIVPivuIexoJWe1G1klGrrnm1rYErzvt2w"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})

PLASMIC.registerGlobalContext(ModifierContext, {
  name: "ModifierContext",
  props: {
    // Simple scalar props
    tokenId: 'string',
    darkMode: 'boolean',
    
    // Some props can take an enum of options
    productFilter: {
      type: 'choice',
      options: ['shirts', 'boots', 'jackets']
    },
    
    // Some props can take an arbitrary JSON object
    config: 'object',
  }
});