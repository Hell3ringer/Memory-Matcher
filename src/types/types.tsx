export enum Level {
  easy = "easy",
  medium = "medium",
  hard = "hard",
}

export enum NoOfCards {
  easy = 12,
  medium = 20,
  hard = 28,
}

export interface Card {
  frontValue: number;
  backValue : number;
  showBack : boolean;
  success : boolean;
}
