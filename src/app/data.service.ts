import { Injectable } from '@angular/core';
import {
  ABOUT_DATA,
  CONTACT_DATA,
  SERVICES_DATA,
  SKILL_CATEGORIES,
} from './data/portfolio.data';

@Injectable({
  providedIn: 'root', // Servisi bütün proyekt üçün əlçatan edir
})
export class DataService {
  getAboutData() {
    return ABOUT_DATA;
  }

  getSkillCategories() {
    return SKILL_CATEGORIES;
  }

  getServices() {
    return SERVICES_DATA;
  }
  getContactData() {
    return CONTACT_DATA;
  }
}
