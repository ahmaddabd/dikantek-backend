import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Setting } from './settings.entity';

@Injectable()
export class SettingsService {
  constructor(
    @InjectRepository(Setting)
    private settingsRepository: Repository<Setting>,
  ) {}

  async getAllSettings(): Promise<Setting[]> {
    return this.settingsRepository.find();
  }

  async getSettingByKey(key: string): Promise<Setting> {
    return this.settingsRepository.findOne({ where: { key } });
  }

  async updateSetting(key: string, value: string): Promise<any> {
    const setting = await this.settingsRepository.findOne({ where: { key } });
    if (!setting) {
      return { error: 'Setting not found' };
    }
    setting.value = value;
    await this.settingsRepository.save(setting);
    return { message: 'Setting updated successfully' };
  }
}