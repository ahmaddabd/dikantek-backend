import { Controller, Get, Patch, Param, Body } from '@nestjs/common';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get()
  async getAllSettings(): Promise<any> {
    return this.settingsService.getAllSettings();
  }

  @Get(':key')
  async getSettingByKey(@Param('key') key: string) {
    return this.settingsService.getSettingByKey(key);
  }

  @Patch('update/:key')
  async updateSetting(@Param('key') key: string, @Body() body: any) {
    return this.settingsService.updateSetting(key, body.value);
  }
}