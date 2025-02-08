import { Injectable } from '@nestjs/common';

@Injectable()
export class LanguageService {
  private translations = {
    ar: {
      welcome: "مرحبًا بك في ديكانتك",
      search: "بحث",
      cart: "عربة التسوق",
      checkout: "الدفع",
    },
    en: {
      welcome: "Welcome to Dikantek",
      search: "Search",
      cart: "Shopping Cart",
      checkout: "Checkout",
    },
  };

  async getTranslation(lang: string, key: string): Promise<string> {
    return this.translations[lang]?.[key] || key;
  }
}