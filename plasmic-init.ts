import { initPlasmicLoader } from "@plasmicapp/loader-nextjs";
export const PLASMIC = initPlasmicLoader({
  projects: [
    {
      id: "x7VZoMTkaRPxy26VUXVkvK",  // ID of a project you are using
      token: "uqnZxitEw1E1lPwEi16cwo52eXhRr5qvjZU7L3qNeFPvrthGbeQV70eEqDPtlQIsKHO3DQcGxGl18sGoDgIg"  // API token for that project
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
})