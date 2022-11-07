import React from "react";
import { AppConfigContext, Cls } from "../contexts/AppConfig";

const Button: React.FC<{
  children: React.ReactNode,
  onClick?: React.MouseEventHandler,
  cls?: 'primary' | 'secondary',
}> = ({children, onClick, cls}) => {
  if (!cls) {
    cls = 'primary';
  }
  if (!onClick) {
    onClick = () => {};
  }
  const config = React.useContext(AppConfigContext);
  const style = config.getStyleFor(cls);

  return <button style={{...style, fontSize: config.fontSize}} className="btn" onClick={onClick}>
    {children}
  </button>
}

export default Button;