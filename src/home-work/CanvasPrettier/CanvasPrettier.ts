/**
 * Universidad de La Laguna
 * Escuela Superior de Ingeniería y Tecnología
 * Grado en Ingeniería Informática
 * Programación de Aplicaciones Interactivas 2023-2024
 *
 * @author Aday Cuesta Correa
 * @alias alu0101483887
 * @since Mar 17 2024
 * @desc CanvasPrettier
 *       This class personalize the canvas.
 * @see {@link https://www.geogebra.org/m/BTC45Jzp}
 *
 */

export class CanvasPrettier {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private centerX: number;
  private centerY: number;
  private step: number = 24;

  constructor() {
    const CANVAS: HTMLCanvasElement = document.getElementById('myCanvas') as HTMLCanvasElement;
    const CONTEXT = CANVAS.getContext('2d') || new CanvasRenderingContext2D();
    CONTEXT.lineCap = 'round';
    CONTEXT.lineJoin = 'round';
    CONTEXT.strokeStyle = 'black';
    CONTEXT.lineWidth = 1;
    this.canvas = CANVAS;
    this.context = CONTEXT;
    this.centerX = this.canvas.width / 2;
    this.centerY = this.canvas.height / 2;
    this.context.font = '11px Arial';
  }

  public drawAxis(): void {
    // Draw x-axis
    this.context.beginPath();
    this.context.moveTo(0, this.centerY);
    this.context.lineTo(this.canvas.width, this.centerY);
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 2;
    this.context.stroke();
    // Draw y-axis
    this.context.beginPath();
    this.context.moveTo(this.centerX, 0);
    this.context.lineTo(this.centerX, this.canvas.height);
    this.context.strokeStyle = 'black';
    this.context.lineWidth = 2;
    this.context.stroke();
  }

  public drawGrid(): void {
    const WIDTH = this.canvas.width;
    const HEIGHT = this.canvas.height;
    // Draw vertical lines
    for (let x = this.centerX; x < WIDTH; x += this.step) {
      this.context.moveTo(x, 0);
      this.context.lineTo(x, HEIGHT);
    }
    for (let x = this.centerX; x > 0; x -= this.step) {
      this.context.moveTo(x, 0);
      this.context.lineTo(x, HEIGHT);
    }
    // Draw horizontal lines
    for (let y = this.centerY; y < HEIGHT; y += this.step) {
      this.context.moveTo(0, y);
      this.context.lineTo(WIDTH, y);
    }
    for (let y = this.centerY; y > 0; y -= this.step) {
      this.context.moveTo(0, y);
      this.context.lineTo(WIDTH, y);
    }
    // Set style and stroke
    this.context.strokeStyle = '#ddd'; // light gray color
    this.context.stroke();
  }

  public drawAxisMarksX(): void {
    const OFFSET = 2;
    let counter = 1;
    for (let x = this.centerX + this.step; x < this.canvas.width; x += this.step) {
      this.context.beginPath();
      this.context.moveTo(x, this.centerY - OFFSET);
      this.context.lineTo(x, this.centerY + OFFSET);
      this.context.stroke();
      this.context.fillText(counter.toString(), x - 3, this.centerY + 15);
      counter++;
    }
    counter = 1;
    for (let x = this.centerX - this.step; x > 0; x -= this.step) {
      this.context.beginPath();
      this.context.moveTo(x, this.centerY - OFFSET);
      this.context.lineTo(x, this.centerY + OFFSET);
      this.context.stroke();
      this.context.fillText(`-${counter.toString()}`, x - 5, this.centerY + 15);
      counter++;
    }
  }

  public drawAxisMarksY(): void {
    const OFFSET = 2;
    let counter = 1;
    for (let y = this.centerY + this.step; y < this.canvas.height; y += this.step) {
      this.context.beginPath();
      this.context.moveTo(this.centerX - OFFSET, y);
      this.context.lineTo(this.centerX + OFFSET, y);
      this.context.stroke();
      this.context.fillText(`- ${counter.toString()}`, this.centerX + 10, y + 3);
      counter++;
    }
    counter = 1;
    for (let y = this.centerY - this.step; y > 0; y -= this.step) {
      this.context.beginPath();
      this.context.moveTo(this.centerX - OFFSET, y);
      this.context.lineTo(this.centerX + OFFSET, y);
      this.context.stroke();
      this.context.fillText(counter.toString(), this.centerX + 10, y + 3);
      counter++;
    }
  }
}