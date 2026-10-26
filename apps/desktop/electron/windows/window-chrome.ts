import type { BrowserWindowConstructorOptions } from "electron";

type WindowChromeOptions = Pick<
  BrowserWindowConstructorOptions,
  "titleBarStyle" | "autoHideMenuBar" | "trafficLightPosition"
>;

// Linux drops the native title bar and menu bar; the topbar draws its own
// window controls. A frameless Electron window never shows the menu bar but
// still registers the default menu's accelerators (undo, copy, paste, quit).
// macOS and Windows keep their existing chrome.
export function windowChromeOptions(platform: NodeJS.Platform): WindowChromeOptions {
  return {
    titleBarStyle: platform === "linux" ? "hidden" : "hiddenInset",
    autoHideMenuBar: platform !== "darwin",
    trafficLightPosition: { x: 18, y: 18 },
  };
}
