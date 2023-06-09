import { Injector, Logger } from "replugged";
export const PluginInjector = new Injector();
export const PluginLogger = Logger.plugin("PingPong");
import { applyInjections } from "./patches/index";
export const start = (): void => {
  applyInjections();
};

export const stop = (): void => {
  PluginInjector.uninjectAll();
};
