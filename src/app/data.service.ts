import { Injectable } from '@angular/core';
import {
  ABOUT_DATA,
  CONTACT_DATA,
  PROJECTS_DATA,
  RESUME_DATA,
  SERVICES_DATA,
  SKILL_CATEGORIES,
} from './data/portfolio.data';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Servis adını standartlaşdırdım
  getAboutData() {
    return ABOUT_DATA;
  }
  getResumeData() {
    return RESUME_DATA;
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

  // YENİ: Layihələri qaytaran metod
  getProjects() {
    return PROJECTS_DATA;
  }
}
