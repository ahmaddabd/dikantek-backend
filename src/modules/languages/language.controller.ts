import { Controller, Get, Query } from '@nestjs/common';
import { LanguageService } from './language.service';

@Controller('languages')
export class LanguageController {
  constructor(private readonly languageService: LanguageService) {}

  @Get('translate')
  async getTranslation(
    @Query('lang') lang: string,
    @Query('key') key: string
  ) {
    return { translation: await this.languageService.getTranslation(lang, key) };
  }
}