import React from 'react';

export type ColorTheme = Record<Cls, ColorArragement>;
type PatternFn = (color: string) => React.CSSProperties;

export type ColorArragement = {
  color: string, 
  bg: string,
  pattern: PatternFn,
}

export type Cls = 'primary' | 'secondary';

type AppConfig = {
  fontSize: number; 
  colorTheme: ColorTheme;
  icon: boolean;
  pattern: boolean;

  setFontSize: (newSize: number) => void;
  updateColorTheme: (cls: Cls, val: ColorArragement) => void;
  setIcon: (icon: boolean) => void;
  setPattern: (pattern: boolean) => void;

  getStyleFor: (cls: keyof ColorTheme) => React.CSSProperties;
}

const diagonalPattern = (color: string): React.CSSProperties => {
  return {
    background: `repeating-linear-gradient( -45deg, ${color}, ${color} 5px, #55555555 8px, #55555555 8px )`
  }
}

const paperPattern = (color: string): React.CSSProperties => {

  return {
    backgroundImage:  `linear-gradient(gray 1px, transparent 1px), linear-gradient(to right, gray 1px, ${color} 1px)`,
    backgroundSize: '15px 15px',
  }
}

export const AppConfigContext = React.createContext<AppConfig>({
  fontSize: 20,
  colorTheme: {
    primary: {
      color: 'white',
      bg: 'black',
      pattern: diagonalPattern
    },
    secondary: {
      color: 'gray',
      bg: 'lightgray',
      pattern: paperPattern
    }
  },
  icon: false,
  pattern: false,

  setFontSize: _ => {},
  updateColorTheme: (_, __) => {},
  setIcon: _ => {},
  setPattern: _ => {},
  getStyleFor: _ => ({})
});

export const AppConfigProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [fontSize, setFontSize] = React.useState<number>(20);
  const [icon, setIcon] = React.useState<boolean>(false);
  const [pattern, setPattern] = React.useState<boolean>(false);
  const [colorTheme, setColorTheme] = React.useState<ColorTheme>({
    primary: {
      color: 'white',
      bg: '#2196f3',
      pattern: diagonalPattern
    },
    secondary: {
      color: 'black',
      bg: 'lightgray',
      pattern: paperPattern
    }
  });

  const updateColorTheme = (cls: keyof ColorTheme, val: ColorArragement) => {
    const newTheme = {...colorTheme};
    newTheme[cls] = val;
    setColorTheme(newTheme);
  }

  const getStyleFor = (cls: keyof ColorTheme): React.CSSProperties => {
    const colorArrangement = colorTheme[cls];
    let bgCss: React.CSSProperties;

    if (pattern) {
      bgCss = colorArrangement.pattern(colorArrangement.bg);
    } else {
      bgCss = {backgroundColor: colorArrangement.bg}
    }

    return {
      color: colorArrangement.color,
      ... bgCss
    }
  }
  
  const value: AppConfig = {
    fontSize, setFontSize, icon, setIcon: setIcon, pattern, setPattern, colorTheme, updateColorTheme, getStyleFor
  }

  return <AppConfigContext.Provider value={value}>
    {children}
  </AppConfigContext.Provider>
}

