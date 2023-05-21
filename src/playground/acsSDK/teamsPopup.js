import { InteractionType } from "@azure/msal-browser";
import { MsalAuthenticationTemplate, useMsal } from "@azure/msal-react";
import { Router } from "@gatsbyjs/reach-router";
import {
  FluentThemeProvider,
  DEFAULT_COMPONENT_ICONS,
} from "@azure/communication-react";
import { Stack, initializeIcons, registerIcons } from "@fluentui/react";
import { CallingComponents } from "./call";
import { ChatComponents } from "./chat";
import { CallWithChatExperience } from "./callWithChat";
import React from "react";

function WelcomeUser() {
  const { accounts } = useMsal();
  const username = accounts[0].username;

  return <p>Welcome, {username}</p>;
}

// Remember that MsalProvider must be rendered somewhere higher up in the component tree
function App() {
  initializeIcons();
  registerIcons({ icons: DEFAULT_COMPONENT_ICONS });

  const stackStyle = {
    root: {
      width: "100%",
    },
  };

  return (
    <MsalAuthenticationTemplate interactionType={InteractionType.Popup}>
      <p>This will only render if a user is signed-in.</p>
      <FluentThemeProvider>
        <Stack horizontal horizontalAlign="space-evenly" styles={stackStyle}>
          <CallWithChatExperience />
        </Stack>
      </FluentThemeProvider>
    </MsalAuthenticationTemplate>
  );
}

export default App;
