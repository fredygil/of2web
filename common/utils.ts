import { SIZE_SCALE } from './const';

export function scaled(size: string): string;
export function scaled(size: number): number;
export function scaled(size: undefined): undefined;

export function scaled(size: unknown): unknown {
    if (typeof size === 'string') {
        const parsedSize = parseInt(size, 10);
        return `${parsedSize * SIZE_SCALE}`;
    }
    if (typeof size === 'number') {
        return size * SIZE_SCALE;
    }
    return undefined;
}