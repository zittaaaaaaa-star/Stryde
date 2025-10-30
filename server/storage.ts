import { type User, type InsertUser, type ContactInquiry } from "@shared/schema";
import { randomUUID } from "crypto";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  saveContactInquiry(inquiry: ContactInquiry): Promise<ContactInquiry & { id: string; submittedAt: string }>;
  getContactInquiries(): Promise<Array<ContactInquiry & { id: string; submittedAt: string }>>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactInquiries: Array<ContactInquiry & { id: string; submittedAt: string }>;

  constructor() {
    this.users = new Map();
    this.contactInquiries = [];
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
}

export const storage = new MemStorage();
