import React from "react";
import { AppConfigContext } from "../contexts/AppConfig";

namespace Typography {
  export const H1: React.FC<{children: React.ReactNode, style?: React.CSSProperties}> = ({
    children, style
  }) => {

    const appConfig = React.useContext(AppConfigContext);
    const fontSize = appConfig.fontSize * 2.2;
  
    return <h1 style={{fontSize, ...style}}>
      {children}
    </h1>
  }
  
  export const H2: React.FC<{children: React.ReactNode, style?: React.CSSProperties}> = ({
    children, style
  }) => {
  
    const appConfig = React.useContext(AppConfigContext);
    const fontSize = appConfig.fontSize * 1.3;
  
    return <h2 style={{fontSize, ...style}}>
      {children}
    </h2>
  }
  
  export const P: React.FC<{children: React.ReactNode, style?: React.CSSProperties}> = ({
    children, style
  }) => {
  
    const appConfig = React.useContext(AppConfigContext);
    const fontSize = appConfig.fontSize;
  
    return <p style={{fontSize, ...style}}>
      {children}
    </p>
  }
}

export default Typography;