export class Occurence {
  constructor(public id: number,
              public name: string,
              public description: string,
              public start_date: string,
              public end_date?: string) {}
}
