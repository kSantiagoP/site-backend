import { ObjectId } from "typeorm";

export class JuniorDataCsvDto {
      id: ObjectId;

      name: string;

      email: string;

      linkedin: string;

      area: string;

      subarea?: string;

      toolsKnowledge: string;

      otherExperiences: string;

      fieldKnowledge: string;

      startDate: Date;

      createdAt: Date;


      constructor(id: ObjectId, name: string, email: string, linkedin: string, otherExperiences: string, toolsKnowledge: string, fieldKnowledge: string, area: string, subarea: string, startDate: Date, createdAt: Date) {
            this.id = id;
            this.name = name;
            this.email = email;
            this.linkedin = linkedin;
            this.area = area;
            this.subarea = subarea;
            this.toolsKnowledge = toolsKnowledge;
            this.otherExperiences = otherExperiences;
            this.fieldKnowledge = fieldKnowledge;
            this.startDate = startDate;
            this.createdAt = createdAt;
      }
}