import React from 'react';

type ColorTheme = {
  main: string; 
  secondary: string;
  bg: string;
}

type AppConfig = {
  fontSize: number; 
  colorTheme: ColorTheme;
  icon: boolean;
  pattern: boolean;

  setFontSize: (newSize: number) => void;
  updateColorTheme: (cls: keyof ColorTheme, val: string) => void;
  setIcon: (icon: boolean) => void;
  setPattern: (pattern: boolean) => void;

  getStyleFor: (cls: keyof ColorTheme) => React.CSSProperties;
}

export const AppConfigContext = React.createContext<AppConfig>({
  fontSize: 20,
  colorTheme: {
    main: 'black',
    secondary: 'gray',
    bg: 'white'
  },
  icon: false,
  pattern: false,

  setFontSize: _ => {},
  updateColorTheme: (_, __) => {},
  setIcon: _ => {},
  setPattern: _ => {},
  getStyleFor: _ => ({})
});


const diagonalPattern = (color: string): React.CSSProperties => {
  return {
    background: `repeating-linear-gradient( -45deg, ${color}, ${color} 2px, transparent 2px, transparent 10px )`
  }
}

const paperPattern = (color: string): React.CSSProperties => {
  return {
    backgroundImage:  `linear-gradient(${color} 0.8px, transparent 0.8px), linear-gradient(90deg, ${color} 0.8px, transparent 0.8px), linear-gradient(${color} 0.4px, transparent 0.4px), linear-gradient(90deg, ${color} 0.4px, transparent 0.4px)`,
    backgroundSize: '20px 20px, 20px 20px, 4px 4px, 4px 4px',
    backgroundPosition: '-0.8px -0.8px, -0.8px -0.8px, -0.4px -0.4px, -0.4px -0.4px'
  }
}

export const AppConfigProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [fontSize, setFontSize] = React.useState<number>(15);
  const [icon, setIcon] = React.useState<boolean>(false);
  const [pattern, setPattern] = React.useState<boolean>(false);
  const [colorTheme, setColorTheme] = React.useState<ColorTheme>({
    main: 'black',
    secondary: 'gray',
    bg: 'white'
  });

  const updateColorTheme = (cls: keyof ColorTheme, val: string) => {
    const newTheme = {...colorTheme};
    newTheme[cls] = val;
    setColorTheme(newTheme);
  }

  const getStyleFor = (cls: keyof ColorTheme) => {
    if (pattern) {
      if (cls === 'main') {
        return diagonalPattern(colorTheme.main);
      } else if (cls === 'secondary') {
        return paperPattern(colorTheme.secondary);
      } else {
        return {
          backgroundColor: colorTheme.bg
        }
      }
    }
    return {
      backgroundColor: colorTheme[cls]
    }
  }
  
  const value: AppConfig = {
    fontSize, setFontSize, icon, setIcon: setIcon, pattern, setPattern, colorTheme, updateColorTheme, getStyleFor
  }

  return <AppConfigContext.Provider value={value}>
    {children}
  </AppConfigContext.Provider>
}

