// Type definitions for require-env 0.2.0
// Project: require-env
// Definitions by: Jip Stavenuiter https://github.com/Jipperism
import * as NodeUrl from 'url';

export function contains(name: string): boolean;
export function inherit(filename: string): void;
export function require(name: string): string;
export function requireUrl(name: string): NodeUrl.Url;
