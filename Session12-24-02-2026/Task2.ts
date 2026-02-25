// 1. Create FirstArgument<T> to extract first parameter type.
// 2. Test it with a function that takes (id: string, active: boolean) 

// 1.

// type FirstArgument<T> = T extends (a:infer A,...args : any[]) => number  ? A : "Nothing";

type FirstArgument<T> = T extends (...args : infer R) => any ? R[0] : "Nothing";

type CheckFirstParameter = FirstArgument<(a:number[] , b:string)=>void>;

// second way to do it...
type FirstArgument2<T> = T extends (arg: infer A, ...rest: any[]) => any ? A : never;
type CheckFirstParameter2 = FirstArgument2<(a:number[] , b:string)=>void>;

// 2. Test it with a function that takes (id: string, active: boolean) 

type CheckFirstParameter3= FirstArgument<(id: string, active: boolean)=>void>;

