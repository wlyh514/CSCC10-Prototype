import React, { ReactComponentElement, ReactNode } from "react";

import Landing from "../screens/Landing";

type Screen = {
  body: React.ReactElement;
  note?: string;
  scrollable: boolean;
}

const screens = {
  "Landing": {
    body: <Landing />,
    scrollable: false,
  }
}

type Navigator = {
  currScreen: keyof typeof screens;
  navigate: (screenName: keyof typeof screens) => void;
  getScreen: () => Screen;
}

export const NavigatorContext = React.createContext<Navigator>({
  currScreen: 'Landing',
  navigate: () => {},
  getScreen: () => screens['Landing']
});

export const NavigatorProvider: React.FC<{children: ReactNode}> = ({children}) => {

  const [currScreen, navigate] = React.useState<keyof typeof screens>("Landing");
  const getScreen = () => {
    return screens[currScreen];
  }

  const value = {currScreen, navigate, getScreen};

  return <NavigatorContext.Provider value={value}>
    {children}
  </NavigatorContext.Provider>
}
