import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {//Plasmic POC
      id: "nV7sRTPBx6ecWzFNNAWeQg",  // ID of a project you are using
      token: "NIKKvwe5oRoMzc1Ag6Y0edSDYxfGY1n9Aq2D9dqA1tC0nzLJgWADIVPivuIexoJWe1G1klGrrnm1rYErzvt2w"  // API token for that project
    },
    { // FocusTokens
      id: "6VdvnRp9F6ae11p6fdVqu9",  // ID of a project you are using
      token: "dXcuNHgAOgV8aIA9ubdyZ1Qkqd3uXC0eT9TpYaFoAq0KfXaKK7WcUmXFdUL6AjhijKTaDG5LZtEoRB3w"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})