export enum EventType {
  Start = 'Start',
  Records = 'Records',
  Reveal = 'Reveal',
  Revealed = 'Revealed',
}

export type BaseEvent<
  Type extends EventType,
  Payload = undefined
> = Payload extends undefined
  ? {
      reactSpecimen: true;
      type: Type;
      payload?: undefined;
    }
  : {
      reactSpecimen: true;
      type: Type;
      payload: Payload;
    };

export type Id = string;

export interface Viewport {}

export interface Record {
  id: Id;
  name: string;
  parent?: Id;
  label?: string;
  description?: string;
  viewport?: Viewport;
}

export type StartEvent = BaseEvent<EventType.Start>;
export type RecordsEvent = BaseEvent<EventType.Records, Record[]>;
export type RevealEvent = BaseEvent<EventType.Reveal, Record['id']>;
export type RevealedEvent = BaseEvent<EventType.Revealed, Record['id']>;

type EventMap = {
  [EventType.Start]: StartEvent;
  [EventType.Records]: RecordsEvent;
  [EventType.Reveal]: RevealEvent;
  [EventType.Revealed]: RevealedEvent;
};

type AllEvents = EventMap[keyof EventMap];
export type Event<
  Type extends EventType | unknown = unknown
> = Type extends EventType ? EventMap[Type] : AllEvents;
