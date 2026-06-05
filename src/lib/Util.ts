/**
 * Utility to flatten complex type intersections for better readability in IDEs
 */
type Simplify<T> = {
  [K in keyof T]: T[K]
} & {}

/**
 * A generic function wrapper that preserves the original function's signature.
 */
export type Func<FType extends (...args: any[]) => any> = Simplify<
  (...args: Parameters<FType>) => ReturnType<FType>
>

/**
 * Creates a debounced function that delays invoking the callback until after
 * the specified delay has elapsed.
 * * @param callback - The function to debounce.
 * @param delay - The delay in milliseconds.
 * @returns A debounced version of the callback that returns void.
 */
export function debounce<T extends (...args: any[]) => any>(
  callback: T,
  delay: number,
): (...args: Parameters<T>) => void {
  let timer: ReturnType<typeof setTimeout>

  return (...args: Parameters<T>): void => {
    /* Limpiamos el timer activo para reiniciar el conteo */
    clearTimeout(timer)

    timer = setTimeout(() => {
      callback(...args)
    }, delay)
  }
}
