import {
  CameraButton,
  ControlBar,
  EndCallButton,
  GridLayout,
  MicrophoneButton,
  DevicesButton,
  ScreenShareButton,
  VideoTile,
} from "@azure/communication-react";

import { IContextualMenuProps, mergeStyles, Stack } from "@fluentui/react";
import React, { useState } from "react";

export const CallingComponents = () => {
  const exampleOptionsMenuProps = {
    items: [
      {
        key: "1",
        name: "Choose Camera",
        iconProps: { iconName: "LocationCircle" },
        onClick: () => alert("Choose Camera Menu Item Clicked!"),
      },
    ],
  };

  const controlBarStyle = {
    root: {
      justifyContent: "center",
    },
  };
  const [videoButtonChecked, setVideoButtonChecked] = useState(false);
  const [audioButtonChecked, setAudioButtonChecked] = useState(false);
  const [screenshareButtonChecked, setScreenshareButtonChecked] =
    useState(false);

  return (
    <Stack className={mergeStyles({ height: "100%" })}>
      {/* GridLayout Component relies on the parent's height and width, so it's required to set the height and width on its parent. */}
      <div style={{ height: "30rem", width: "30rem", border: "1px solid" }}>
        <GridLayout>
          <VideoTile displayName={"Michael"} />
        </GridLayout>
      </div>

      {/* Control Bar with default set up */}
      <ControlBar styles={controlBarStyle}>
        <CameraButton
          checked={videoButtonChecked}
          onClick={() => setVideoButtonChecked(!videoButtonChecked)}
        />
        <MicrophoneButton
          checked={audioButtonChecked}
          onClick={() => setAudioButtonChecked(!audioButtonChecked)}
        />
        <ScreenShareButton
          checked={screenshareButtonChecked}
          onClick={() => setScreenshareButtonChecked(!screenshareButtonChecked)}
        />
        <DevicesButton menuProps={exampleOptionsMenuProps} />
        <EndCallButton />
      </ControlBar>
    </Stack>
  );
};
