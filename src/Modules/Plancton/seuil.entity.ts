export class SeuilEntity {
  minimum: number;
  maximum: number;
  color: string;
  type: 'DANGER' | 'ALERT' | 'NEUTRAL' | 'SAFE' | 'POSITIVE';
}
