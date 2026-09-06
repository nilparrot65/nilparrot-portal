export interface Policy{
    header:string;
    subHeader?:string;
    para?:string;
    subList?: PolicySubList[];
    note?:string;
}

export interface PolicySubList {
  header?: string;
  list: string[];
}