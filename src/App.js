import React from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  
  const { unityProvider } = useUnityContext({
    loaderUrl: "build/myunityapp.loader.js",
    dataUrl: "build/myunityapp.data",
    frameworkUrl: "build/myunityapp.framework.js",
    codeUrl: "build/myunityapp.wasm",
  });

  return (
    <div style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}>
      
      <Unity unityProvider={unityProvider} />
    </div>
  );
}

export default App;
