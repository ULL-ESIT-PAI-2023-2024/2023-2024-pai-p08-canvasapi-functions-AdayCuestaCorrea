/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author Aday Cuesta Correa
 * @alias alu0101483887
 * @since Mar 17 2024
 * @desc Main
 *       The main function that initializes the logic of the program.
 * @see {@link https://www.geogebra.org/m/BTC45Jzp}
 *
 */

import { CanvasPrettier } from "./CanvasPrettier/CanvasPrettier";

function main() {
  const CANVAS_PRUEBA = new CanvasPrettier();
  CANVAS_PRUEBA.drawGrid();
  CANVAS_PRUEBA.drawAxis();
  CANVAS_PRUEBA.drawAxisMarksX();
  CANVAS_PRUEBA.drawAxisMarksY();
}

main();