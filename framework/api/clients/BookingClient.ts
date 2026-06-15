import { APIRequestContext } from "playwright/test";
import { BookingClientsCreate } from "../dto/BookingDTO";

export class BookingClient {
  private readonly baseUrl: string;
  constructor(private request: APIRequestContext) {
    this.baseUrl = process.env.API_BASE_URL!;
  }

  async createToken(username: string, password: string) {
    return await this.request.post(`${this.baseUrl}/auth`, { data: { username, password } });
  }

  async getBookingId() {
    return await this.request.get(`${this.baseUrl}/booking`);
  }

  async getBookingFull(id: number) {
    return await this.request.get(`${this.baseUrl}/${id}`);
  }

  async createBooking(booking: BookingClientsCreate) {
    return await this.request.post(`${this.baseUrl}`, { data: booking });
  }

  async updateBooking(id: number, booking: BookingClientsCreate) {
    return await this.request.put(`${this.baseUrl}/${id}`, { data: booking });
  }

  async partialupdateBooking(id: number, booking: Partial<BookingClientsCreate>) {
    return await this.request.patch(`${this.baseUrl}/${id}`, { data: booking });
  }

  async deleteBooking(id: number, token: string) {
    return await this.request.delete(`${this.baseUrl}/${id}`, { headers: { cookie: `token=${token}` } });
  }
}
