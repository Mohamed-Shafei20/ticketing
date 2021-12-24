import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@mshtickets/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
