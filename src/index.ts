/// <reference path="../@types/bonjour-hap.d.ts" />
/// <reference path="../@types/node-persist.d.ts" />

import './lib/gen';
import * as accessoryLoader from './lib/AccessoryLoader';
import * as uuidFunctions from './lib/util/uuid';
import * as legacyTypes from './accessories/types';
import { HAPStorage } from "./lib/model/HAPStorage";

export const AccessoryLoader = accessoryLoader;
export const uuid = uuidFunctions;

export * from './lib/Accessory';
export * from './lib/Bridge';
export * from './lib/Service';
export * from './lib/Characteristic';
export * from './lib/AccessoryLoader';
export * from './lib/camera';
export * from './lib/HAPServer';
export * from './lib/gen';
export * from './lib/datastream';
export * from './lib/controller';

export * from './lib/util/chacha20poly1305';
export * from './lib/util/clone';
export * from './lib/util/encryption';
export * from './lib/util/hkdf';
export * from './lib/util/once';
export * from './lib/util/tlv';

export * from './types';
export const LegacyTypes = legacyTypes;

/**
 *
 * @param {string} storagePath
 * @deprecated the need to manually initialize the internal storage was removed. If you want to set a custom
 *  storage path location, please use {@link HAPStorage.setCustomStoragePath} directly.
 */
export function init(storagePath?: string) {
  if (storagePath) {
    HAPStorage.setCustomStoragePath(storagePath);
  }
}
