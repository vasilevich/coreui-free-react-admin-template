declare interface ObjectConstructor {
  assign(target: any, ...sources: any[]): any;
  values(target: any, ...sources: any[]): any;
}
