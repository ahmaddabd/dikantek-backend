import { Controller, Get, Post, Body } from '@nestjs/common';
import { IntegrationService } from './integration.service';

@Controller('integrations')
export class IntegrationController {
  constructor(private readonly integrationService: IntegrationService) {}

  @Post('google-analytics')
  async connectGoogleAnalytics(@Body() body: any) {
    return this.integrationService.connectGoogleAnalytics(body.analyticsId);
  }

  @Post('facebook-pixel')
  async connectFacebookPixel(@Body() body: any) {
    return this.integrationService.connectFacebookPixel(body.pixelId);
  }

  @Get()
  async listIntegrations() {
    return this.integrationService.listIntegrations();
  }
}