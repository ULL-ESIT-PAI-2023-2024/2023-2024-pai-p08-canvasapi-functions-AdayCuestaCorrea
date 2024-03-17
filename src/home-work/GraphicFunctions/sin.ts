/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author Aday Cuesta Correa
 * @alias alu0101483887
 * @since Mar 17 2024
 * @desc 
 * @see {@link https://www.geogebra.org/m/BTC45Jzp}
 *
 */

import { DrawFunction } from '../Interfaces/DrawFunction'
import { GraphicFunction } from '../Interfaces/GraphicFunction'

export class Sin implements DrawFunction, GraphicFunction {
  constructor(private value: number) {}

  draw(canvas: HTMLCanvasElement, context: CanvasRenderingContext2D, color: string = 'black'): void {
    
  }

  evaluate(): number {
    return Math.sin(this.value);
  }
}