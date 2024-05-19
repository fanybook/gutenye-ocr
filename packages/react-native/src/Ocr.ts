import OcrModule from './OcrModule'
import type { OcrOptions } from './types'

export class Ocr {
  static async install() {
    OcrModule.install()
    console.log(':: foo hello', global.helloWorld())
  }

  // default options is at shared.h
  static async create(options: OcrOptions): Promise<Ocr> {
    await OcrModule.create(options)
    return new Ocr()
  }

  detect(imagePath: string): Promise<string[]> {
    return OcrModule.detect(imagePath)
  }
}
