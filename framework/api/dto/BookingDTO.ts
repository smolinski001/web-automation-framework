export interface BookingClientsCreate {
  firstname: string;
  lastname: string;
  totalprice: number;
  depositpaid: boolean;
  bookingdates: {
    checkin: string;
    checkout: string;
  };
  additionalneeds: string;
}

export interface BookingClientsResponse {
  bookingid: number;
  booking: BookingClientsCreate;
}
