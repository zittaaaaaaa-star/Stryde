import { type User, type InsertUser, type ContactInquiry, type TeamMember } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactInquiry(inquiry: ContactInquiry): Promise<ContactInquiry & { id: string; submittedAt: string }>;
  getContactInquiries(): Promise<Array<ContactInquiry & { id: string; submittedAt: string }>>;
  getTeamMembers(): Promise<TeamMember[]>;
  updateTeamMemberImage(id: number, imagePath: string): Promise<TeamMember | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactInquiries: Array<ContactInquiry & { id: string; submittedAt: string }>;
  private teamMembers: TeamMember[];

  constructor() {
    this.users = new Map();
    this.contactInquiries = [];
    this.teamMembers = [
      { id: 1, name: "Alejandra Paredes", role: "CEO", initials: "AP", image: "" },
      { id: 2, name: "Kailey Huang", role: "CCO", initials: "KH", image: "" },
      { id: 3, name: "Nishat Tasnim", role: "CHRO", initials: "NT", image: "" },
      { id: 4, name: "Elie Krugolets", role: "COO", initials: "EK", image: "" },
      { id: 5, name: "Kasper Lu", role: "CFO", initials: "KL", image: "" },
      { id: 6, name: "Arian Moula", role: "CMO", initials: "AM", image: "" },
      { id: 7, name: "Salma Benzriouil", role: "OM", initials: "SB", image: "" },
    ];
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async saveContactInquiry(inquiry: ContactInquiry): Promise<ContactInquiry & { id: string; submittedAt: string }> {
    const savedInquiry = {
      ...inquiry,
      id: randomUUID(),
      submittedAt: new Date().toISOString()
    };
    this.contactInquiries.push(savedInquiry);
    return savedInquiry;
  }

  async getContactInquiries(): Promise<Array<ContactInquiry & { id: string; submittedAt: string }>> {
    return [...this.contactInquiries].sort((a, b) => 
      new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime()
    );
  }

  async getTeamMembers(): Promise<TeamMember[]> {
    return [...this.teamMembers];
  }

  async updateTeamMemberImage(id: number, imagePath: string): Promise<TeamMember | undefined> {
    const member = this.teamMembers.find(m => m.id === id);
    if (member) {
      member.image = imagePath;
      return member;
    }
    return undefined;
  }
}

export const storage = new MemStorage();
