
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model OauthAccount
 * 
 */
export type OauthAccount = $Result.DefaultSelection<Prisma.$OauthAccountPayload>
/**
 * Model ProcessingHistory
 * 
 */
export type ProcessingHistory = $Result.DefaultSelection<Prisma.$ProcessingHistoryPayload>
/**
 * Model HistoryCoinDetail
 * 
 */
export type HistoryCoinDetail = $Result.DefaultSelection<Prisma.$HistoryCoinDetailPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.oauthAccount`: Exposes CRUD operations for the **OauthAccount** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OauthAccounts
    * const oauthAccounts = await prisma.oauthAccount.findMany()
    * ```
    */
  get oauthAccount(): Prisma.OauthAccountDelegate<ExtArgs>;

  /**
   * `prisma.processingHistory`: Exposes CRUD operations for the **ProcessingHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProcessingHistories
    * const processingHistories = await prisma.processingHistory.findMany()
    * ```
    */
  get processingHistory(): Prisma.ProcessingHistoryDelegate<ExtArgs>;

  /**
   * `prisma.historyCoinDetail`: Exposes CRUD operations for the **HistoryCoinDetail** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HistoryCoinDetails
    * const historyCoinDetails = await prisma.historyCoinDetail.findMany()
    * ```
    */
  get historyCoinDetail(): Prisma.HistoryCoinDetailDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.20.0
   * Query Engine version: 06fc58a368dc7be9fbbbe894adf8d445d208c284
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    OauthAccount: 'OauthAccount',
    ProcessingHistory: 'ProcessingHistory',
    HistoryCoinDetail: 'HistoryCoinDetail'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "oauthAccount" | "processingHistory" | "historyCoinDetail"
      txIsolationLevel: never
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      OauthAccount: {
        payload: Prisma.$OauthAccountPayload<ExtArgs>
        fields: Prisma.OauthAccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OauthAccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OauthAccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccountPayload>
          }
          findFirst: {
            args: Prisma.OauthAccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OauthAccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccountPayload>
          }
          findMany: {
            args: Prisma.OauthAccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccountPayload>[]
          }
          create: {
            args: Prisma.OauthAccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccountPayload>
          }
          createMany: {
            args: Prisma.OauthAccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OauthAccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccountPayload>
          }
          update: {
            args: Prisma.OauthAccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccountPayload>
          }
          deleteMany: {
            args: Prisma.OauthAccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OauthAccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OauthAccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OauthAccountPayload>
          }
          aggregate: {
            args: Prisma.OauthAccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOauthAccount>
          }
          groupBy: {
            args: Prisma.OauthAccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<OauthAccountGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.OauthAccountFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.OauthAccountAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.OauthAccountCountArgs<ExtArgs>
            result: $Utils.Optional<OauthAccountCountAggregateOutputType> | number
          }
        }
      }
      ProcessingHistory: {
        payload: Prisma.$ProcessingHistoryPayload<ExtArgs>
        fields: Prisma.ProcessingHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProcessingHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProcessingHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingHistoryPayload>
          }
          findFirst: {
            args: Prisma.ProcessingHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProcessingHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingHistoryPayload>
          }
          findMany: {
            args: Prisma.ProcessingHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingHistoryPayload>[]
          }
          create: {
            args: Prisma.ProcessingHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingHistoryPayload>
          }
          createMany: {
            args: Prisma.ProcessingHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.ProcessingHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingHistoryPayload>
          }
          update: {
            args: Prisma.ProcessingHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ProcessingHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProcessingHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ProcessingHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProcessingHistoryPayload>
          }
          aggregate: {
            args: Prisma.ProcessingHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProcessingHistory>
          }
          groupBy: {
            args: Prisma.ProcessingHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProcessingHistoryGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ProcessingHistoryFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.ProcessingHistoryAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.ProcessingHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ProcessingHistoryCountAggregateOutputType> | number
          }
        }
      }
      HistoryCoinDetail: {
        payload: Prisma.$HistoryCoinDetailPayload<ExtArgs>
        fields: Prisma.HistoryCoinDetailFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryCoinDetailFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryCoinDetailPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryCoinDetailFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryCoinDetailPayload>
          }
          findFirst: {
            args: Prisma.HistoryCoinDetailFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryCoinDetailPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryCoinDetailFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryCoinDetailPayload>
          }
          findMany: {
            args: Prisma.HistoryCoinDetailFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryCoinDetailPayload>[]
          }
          create: {
            args: Prisma.HistoryCoinDetailCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryCoinDetailPayload>
          }
          createMany: {
            args: Prisma.HistoryCoinDetailCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HistoryCoinDetailDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryCoinDetailPayload>
          }
          update: {
            args: Prisma.HistoryCoinDetailUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryCoinDetailPayload>
          }
          deleteMany: {
            args: Prisma.HistoryCoinDetailDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryCoinDetailUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HistoryCoinDetailUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryCoinDetailPayload>
          }
          aggregate: {
            args: Prisma.HistoryCoinDetailAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistoryCoinDetail>
          }
          groupBy: {
            args: Prisma.HistoryCoinDetailGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryCoinDetailGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HistoryCoinDetailFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HistoryCoinDetailAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HistoryCoinDetailCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryCoinDetailCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    oauthAccounts: number
    processingHistories: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oauthAccounts?: boolean | UserCountOutputTypeCountOauthAccountsArgs
    processingHistories?: boolean | UserCountOutputTypeCountProcessingHistoriesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOauthAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OauthAccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProcessingHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessingHistoryWhereInput
  }


  /**
   * Count Type ProcessingHistoryCountOutputType
   */

  export type ProcessingHistoryCountOutputType = {
    details: number
  }

  export type ProcessingHistoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    details?: boolean | ProcessingHistoryCountOutputTypeCountDetailsArgs
  }

  // Custom InputTypes
  /**
   * ProcessingHistoryCountOutputType without action
   */
  export type ProcessingHistoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingHistoryCountOutputType
     */
    select?: ProcessingHistoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProcessingHistoryCountOutputType without action
   */
  export type ProcessingHistoryCountOutputTypeCountDetailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryCoinDetailWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatarUrl: string | null
    hashedPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    avatarUrl: string | null
    hashedPassword: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    avatarUrl: number
    hashedPassword: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatarUrl?: true
    hashedPassword?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatarUrl?: true
    hashedPassword?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    avatarUrl?: true
    hashedPassword?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    avatarUrl: string | null
    hashedPassword: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    oauthAccounts?: boolean | User$oauthAccountsArgs<ExtArgs>
    processingHistories?: boolean | User$processingHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    avatarUrl?: boolean
    hashedPassword?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    oauthAccounts?: boolean | User$oauthAccountsArgs<ExtArgs>
    processingHistories?: boolean | User$processingHistoriesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      oauthAccounts: Prisma.$OauthAccountPayload<ExtArgs>[]
      processingHistories: Prisma.$ProcessingHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      avatarUrl: string | null
      hashedPassword: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    oauthAccounts<T extends User$oauthAccountsArgs<ExtArgs> = {}>(args?: Subset<T, User$oauthAccountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "findMany"> | Null>
    processingHistories<T extends User$processingHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$processingHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessingHistoryPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly avatarUrl: FieldRef<"User", 'String'>
    readonly hashedPassword: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.oauthAccounts
   */
  export type User$oauthAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccount
     */
    select?: OauthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccountInclude<ExtArgs> | null
    where?: OauthAccountWhereInput
    orderBy?: OauthAccountOrderByWithRelationInput | OauthAccountOrderByWithRelationInput[]
    cursor?: OauthAccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OauthAccountScalarFieldEnum | OauthAccountScalarFieldEnum[]
  }

  /**
   * User.processingHistories
   */
  export type User$processingHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingHistory
     */
    select?: ProcessingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingHistoryInclude<ExtArgs> | null
    where?: ProcessingHistoryWhereInput
    orderBy?: ProcessingHistoryOrderByWithRelationInput | ProcessingHistoryOrderByWithRelationInput[]
    cursor?: ProcessingHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProcessingHistoryScalarFieldEnum | ProcessingHistoryScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model OauthAccount
   */

  export type AggregateOauthAccount = {
    _count: OauthAccountCountAggregateOutputType | null
    _min: OauthAccountMinAggregateOutputType | null
    _max: OauthAccountMaxAggregateOutputType | null
  }

  export type OauthAccountMinAggregateOutputType = {
    id: string | null
    providerId: string | null
    providerUserId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OauthAccountMaxAggregateOutputType = {
    id: string | null
    providerId: string | null
    providerUserId: string | null
    userId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OauthAccountCountAggregateOutputType = {
    id: number
    providerId: number
    providerUserId: number
    userId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OauthAccountMinAggregateInputType = {
    id?: true
    providerId?: true
    providerUserId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OauthAccountMaxAggregateInputType = {
    id?: true
    providerId?: true
    providerUserId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OauthAccountCountAggregateInputType = {
    id?: true
    providerId?: true
    providerUserId?: true
    userId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OauthAccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OauthAccount to aggregate.
     */
    where?: OauthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthAccounts to fetch.
     */
    orderBy?: OauthAccountOrderByWithRelationInput | OauthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OauthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OauthAccounts
    **/
    _count?: true | OauthAccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OauthAccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OauthAccountMaxAggregateInputType
  }

  export type GetOauthAccountAggregateType<T extends OauthAccountAggregateArgs> = {
        [P in keyof T & keyof AggregateOauthAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOauthAccount[P]>
      : GetScalarType<T[P], AggregateOauthAccount[P]>
  }




  export type OauthAccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OauthAccountWhereInput
    orderBy?: OauthAccountOrderByWithAggregationInput | OauthAccountOrderByWithAggregationInput[]
    by: OauthAccountScalarFieldEnum[] | OauthAccountScalarFieldEnum
    having?: OauthAccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OauthAccountCountAggregateInputType | true
    _min?: OauthAccountMinAggregateInputType
    _max?: OauthAccountMaxAggregateInputType
  }

  export type OauthAccountGroupByOutputType = {
    id: string
    providerId: string
    providerUserId: string
    userId: string
    createdAt: Date
    updatedAt: Date
    _count: OauthAccountCountAggregateOutputType | null
    _min: OauthAccountMinAggregateOutputType | null
    _max: OauthAccountMaxAggregateOutputType | null
  }

  type GetOauthAccountGroupByPayload<T extends OauthAccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OauthAccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OauthAccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OauthAccountGroupByOutputType[P]>
            : GetScalarType<T[P], OauthAccountGroupByOutputType[P]>
        }
      >
    >


  export type OauthAccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    providerUserId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["oauthAccount"]>


  export type OauthAccountSelectScalar = {
    id?: boolean
    providerId?: boolean
    providerUserId?: boolean
    userId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OauthAccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OauthAccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OauthAccount"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerId: string
      providerUserId: string
      userId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["oauthAccount"]>
    composites: {}
  }

  type OauthAccountGetPayload<S extends boolean | null | undefined | OauthAccountDefaultArgs> = $Result.GetResult<Prisma.$OauthAccountPayload, S>

  type OauthAccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OauthAccountFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OauthAccountCountAggregateInputType | true
    }

  export interface OauthAccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OauthAccount'], meta: { name: 'OauthAccount' } }
    /**
     * Find zero or one OauthAccount that matches the filter.
     * @param {OauthAccountFindUniqueArgs} args - Arguments to find a OauthAccount
     * @example
     * // Get one OauthAccount
     * const oauthAccount = await prisma.oauthAccount.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OauthAccountFindUniqueArgs>(args: SelectSubset<T, OauthAccountFindUniqueArgs<ExtArgs>>): Prisma__OauthAccountClient<$Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OauthAccount that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OauthAccountFindUniqueOrThrowArgs} args - Arguments to find a OauthAccount
     * @example
     * // Get one OauthAccount
     * const oauthAccount = await prisma.oauthAccount.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OauthAccountFindUniqueOrThrowArgs>(args: SelectSubset<T, OauthAccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OauthAccountClient<$Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OauthAccount that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccountFindFirstArgs} args - Arguments to find a OauthAccount
     * @example
     * // Get one OauthAccount
     * const oauthAccount = await prisma.oauthAccount.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OauthAccountFindFirstArgs>(args?: SelectSubset<T, OauthAccountFindFirstArgs<ExtArgs>>): Prisma__OauthAccountClient<$Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OauthAccount that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccountFindFirstOrThrowArgs} args - Arguments to find a OauthAccount
     * @example
     * // Get one OauthAccount
     * const oauthAccount = await prisma.oauthAccount.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OauthAccountFindFirstOrThrowArgs>(args?: SelectSubset<T, OauthAccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__OauthAccountClient<$Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OauthAccounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OauthAccounts
     * const oauthAccounts = await prisma.oauthAccount.findMany()
     * 
     * // Get first 10 OauthAccounts
     * const oauthAccounts = await prisma.oauthAccount.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const oauthAccountWithIdOnly = await prisma.oauthAccount.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OauthAccountFindManyArgs>(args?: SelectSubset<T, OauthAccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OauthAccount.
     * @param {OauthAccountCreateArgs} args - Arguments to create a OauthAccount.
     * @example
     * // Create one OauthAccount
     * const OauthAccount = await prisma.oauthAccount.create({
     *   data: {
     *     // ... data to create a OauthAccount
     *   }
     * })
     * 
     */
    create<T extends OauthAccountCreateArgs>(args: SelectSubset<T, OauthAccountCreateArgs<ExtArgs>>): Prisma__OauthAccountClient<$Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OauthAccounts.
     * @param {OauthAccountCreateManyArgs} args - Arguments to create many OauthAccounts.
     * @example
     * // Create many OauthAccounts
     * const oauthAccount = await prisma.oauthAccount.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OauthAccountCreateManyArgs>(args?: SelectSubset<T, OauthAccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OauthAccount.
     * @param {OauthAccountDeleteArgs} args - Arguments to delete one OauthAccount.
     * @example
     * // Delete one OauthAccount
     * const OauthAccount = await prisma.oauthAccount.delete({
     *   where: {
     *     // ... filter to delete one OauthAccount
     *   }
     * })
     * 
     */
    delete<T extends OauthAccountDeleteArgs>(args: SelectSubset<T, OauthAccountDeleteArgs<ExtArgs>>): Prisma__OauthAccountClient<$Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OauthAccount.
     * @param {OauthAccountUpdateArgs} args - Arguments to update one OauthAccount.
     * @example
     * // Update one OauthAccount
     * const oauthAccount = await prisma.oauthAccount.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OauthAccountUpdateArgs>(args: SelectSubset<T, OauthAccountUpdateArgs<ExtArgs>>): Prisma__OauthAccountClient<$Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OauthAccounts.
     * @param {OauthAccountDeleteManyArgs} args - Arguments to filter OauthAccounts to delete.
     * @example
     * // Delete a few OauthAccounts
     * const { count } = await prisma.oauthAccount.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OauthAccountDeleteManyArgs>(args?: SelectSubset<T, OauthAccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OauthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OauthAccounts
     * const oauthAccount = await prisma.oauthAccount.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OauthAccountUpdateManyArgs>(args: SelectSubset<T, OauthAccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OauthAccount.
     * @param {OauthAccountUpsertArgs} args - Arguments to update or create a OauthAccount.
     * @example
     * // Update or create a OauthAccount
     * const oauthAccount = await prisma.oauthAccount.upsert({
     *   create: {
     *     // ... data to create a OauthAccount
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OauthAccount we want to update
     *   }
     * })
     */
    upsert<T extends OauthAccountUpsertArgs>(args: SelectSubset<T, OauthAccountUpsertArgs<ExtArgs>>): Prisma__OauthAccountClient<$Result.GetResult<Prisma.$OauthAccountPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more OauthAccounts that matches the filter.
     * @param {OauthAccountFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const oauthAccount = await prisma.oauthAccount.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: OauthAccountFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a OauthAccount.
     * @param {OauthAccountAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const oauthAccount = await prisma.oauthAccount.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: OauthAccountAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of OauthAccounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccountCountArgs} args - Arguments to filter OauthAccounts to count.
     * @example
     * // Count the number of OauthAccounts
     * const count = await prisma.oauthAccount.count({
     *   where: {
     *     // ... the filter for the OauthAccounts we want to count
     *   }
     * })
    **/
    count<T extends OauthAccountCountArgs>(
      args?: Subset<T, OauthAccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OauthAccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OauthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OauthAccountAggregateArgs>(args: Subset<T, OauthAccountAggregateArgs>): Prisma.PrismaPromise<GetOauthAccountAggregateType<T>>

    /**
     * Group by OauthAccount.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OauthAccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OauthAccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OauthAccountGroupByArgs['orderBy'] }
        : { orderBy?: OauthAccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OauthAccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOauthAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OauthAccount model
   */
  readonly fields: OauthAccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OauthAccount.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OauthAccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OauthAccount model
   */ 
  interface OauthAccountFieldRefs {
    readonly id: FieldRef<"OauthAccount", 'String'>
    readonly providerId: FieldRef<"OauthAccount", 'String'>
    readonly providerUserId: FieldRef<"OauthAccount", 'String'>
    readonly userId: FieldRef<"OauthAccount", 'String'>
    readonly createdAt: FieldRef<"OauthAccount", 'DateTime'>
    readonly updatedAt: FieldRef<"OauthAccount", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OauthAccount findUnique
   */
  export type OauthAccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccount
     */
    select?: OauthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OauthAccount to fetch.
     */
    where: OauthAccountWhereUniqueInput
  }

  /**
   * OauthAccount findUniqueOrThrow
   */
  export type OauthAccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccount
     */
    select?: OauthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OauthAccount to fetch.
     */
    where: OauthAccountWhereUniqueInput
  }

  /**
   * OauthAccount findFirst
   */
  export type OauthAccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccount
     */
    select?: OauthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OauthAccount to fetch.
     */
    where?: OauthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthAccounts to fetch.
     */
    orderBy?: OauthAccountOrderByWithRelationInput | OauthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OauthAccounts.
     */
    cursor?: OauthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OauthAccounts.
     */
    distinct?: OauthAccountScalarFieldEnum | OauthAccountScalarFieldEnum[]
  }

  /**
   * OauthAccount findFirstOrThrow
   */
  export type OauthAccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccount
     */
    select?: OauthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OauthAccount to fetch.
     */
    where?: OauthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthAccounts to fetch.
     */
    orderBy?: OauthAccountOrderByWithRelationInput | OauthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OauthAccounts.
     */
    cursor?: OauthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthAccounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OauthAccounts.
     */
    distinct?: OauthAccountScalarFieldEnum | OauthAccountScalarFieldEnum[]
  }

  /**
   * OauthAccount findMany
   */
  export type OauthAccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccount
     */
    select?: OauthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccountInclude<ExtArgs> | null
    /**
     * Filter, which OauthAccounts to fetch.
     */
    where?: OauthAccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OauthAccounts to fetch.
     */
    orderBy?: OauthAccountOrderByWithRelationInput | OauthAccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OauthAccounts.
     */
    cursor?: OauthAccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OauthAccounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OauthAccounts.
     */
    skip?: number
    distinct?: OauthAccountScalarFieldEnum | OauthAccountScalarFieldEnum[]
  }

  /**
   * OauthAccount create
   */
  export type OauthAccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccount
     */
    select?: OauthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccountInclude<ExtArgs> | null
    /**
     * The data needed to create a OauthAccount.
     */
    data: XOR<OauthAccountCreateInput, OauthAccountUncheckedCreateInput>
  }

  /**
   * OauthAccount createMany
   */
  export type OauthAccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OauthAccounts.
     */
    data: OauthAccountCreateManyInput | OauthAccountCreateManyInput[]
  }

  /**
   * OauthAccount update
   */
  export type OauthAccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccount
     */
    select?: OauthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccountInclude<ExtArgs> | null
    /**
     * The data needed to update a OauthAccount.
     */
    data: XOR<OauthAccountUpdateInput, OauthAccountUncheckedUpdateInput>
    /**
     * Choose, which OauthAccount to update.
     */
    where: OauthAccountWhereUniqueInput
  }

  /**
   * OauthAccount updateMany
   */
  export type OauthAccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OauthAccounts.
     */
    data: XOR<OauthAccountUpdateManyMutationInput, OauthAccountUncheckedUpdateManyInput>
    /**
     * Filter which OauthAccounts to update
     */
    where?: OauthAccountWhereInput
  }

  /**
   * OauthAccount upsert
   */
  export type OauthAccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccount
     */
    select?: OauthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccountInclude<ExtArgs> | null
    /**
     * The filter to search for the OauthAccount to update in case it exists.
     */
    where: OauthAccountWhereUniqueInput
    /**
     * In case the OauthAccount found by the `where` argument doesn't exist, create a new OauthAccount with this data.
     */
    create: XOR<OauthAccountCreateInput, OauthAccountUncheckedCreateInput>
    /**
     * In case the OauthAccount was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OauthAccountUpdateInput, OauthAccountUncheckedUpdateInput>
  }

  /**
   * OauthAccount delete
   */
  export type OauthAccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccount
     */
    select?: OauthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccountInclude<ExtArgs> | null
    /**
     * Filter which OauthAccount to delete.
     */
    where: OauthAccountWhereUniqueInput
  }

  /**
   * OauthAccount deleteMany
   */
  export type OauthAccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OauthAccounts to delete
     */
    where?: OauthAccountWhereInput
  }

  /**
   * OauthAccount findRaw
   */
  export type OauthAccountFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * OauthAccount aggregateRaw
   */
  export type OauthAccountAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * OauthAccount without action
   */
  export type OauthAccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OauthAccount
     */
    select?: OauthAccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OauthAccountInclude<ExtArgs> | null
  }


  /**
   * Model ProcessingHistory
   */

  export type AggregateProcessingHistory = {
    _count: ProcessingHistoryCountAggregateOutputType | null
    _avg: ProcessingHistoryAvgAggregateOutputType | null
    _sum: ProcessingHistorySumAggregateOutputType | null
    _min: ProcessingHistoryMinAggregateOutputType | null
    _max: ProcessingHistoryMaxAggregateOutputType | null
  }

  export type ProcessingHistoryAvgAggregateOutputType = {
    totalCount: number | null
    totalValue: number | null
  }

  export type ProcessingHistorySumAggregateOutputType = {
    totalCount: number | null
    totalValue: number | null
  }

  export type ProcessingHistoryMinAggregateOutputType = {
    id: string | null
    totalCount: number | null
    totalValue: number | null
    labeledImage: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type ProcessingHistoryMaxAggregateOutputType = {
    id: string | null
    totalCount: number | null
    totalValue: number | null
    labeledImage: string | null
    createdAt: Date | null
    userId: string | null
  }

  export type ProcessingHistoryCountAggregateOutputType = {
    id: number
    totalCount: number
    totalValue: number
    labeledImage: number
    createdAt: number
    userId: number
    _all: number
  }


  export type ProcessingHistoryAvgAggregateInputType = {
    totalCount?: true
    totalValue?: true
  }

  export type ProcessingHistorySumAggregateInputType = {
    totalCount?: true
    totalValue?: true
  }

  export type ProcessingHistoryMinAggregateInputType = {
    id?: true
    totalCount?: true
    totalValue?: true
    labeledImage?: true
    createdAt?: true
    userId?: true
  }

  export type ProcessingHistoryMaxAggregateInputType = {
    id?: true
    totalCount?: true
    totalValue?: true
    labeledImage?: true
    createdAt?: true
    userId?: true
  }

  export type ProcessingHistoryCountAggregateInputType = {
    id?: true
    totalCount?: true
    totalValue?: true
    labeledImage?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type ProcessingHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessingHistory to aggregate.
     */
    where?: ProcessingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessingHistories to fetch.
     */
    orderBy?: ProcessingHistoryOrderByWithRelationInput | ProcessingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProcessingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProcessingHistories
    **/
    _count?: true | ProcessingHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProcessingHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProcessingHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProcessingHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProcessingHistoryMaxAggregateInputType
  }

  export type GetProcessingHistoryAggregateType<T extends ProcessingHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateProcessingHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProcessingHistory[P]>
      : GetScalarType<T[P], AggregateProcessingHistory[P]>
  }




  export type ProcessingHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProcessingHistoryWhereInput
    orderBy?: ProcessingHistoryOrderByWithAggregationInput | ProcessingHistoryOrderByWithAggregationInput[]
    by: ProcessingHistoryScalarFieldEnum[] | ProcessingHistoryScalarFieldEnum
    having?: ProcessingHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProcessingHistoryCountAggregateInputType | true
    _avg?: ProcessingHistoryAvgAggregateInputType
    _sum?: ProcessingHistorySumAggregateInputType
    _min?: ProcessingHistoryMinAggregateInputType
    _max?: ProcessingHistoryMaxAggregateInputType
  }

  export type ProcessingHistoryGroupByOutputType = {
    id: string
    totalCount: number
    totalValue: number
    labeledImage: string
    createdAt: Date
    userId: string
    _count: ProcessingHistoryCountAggregateOutputType | null
    _avg: ProcessingHistoryAvgAggregateOutputType | null
    _sum: ProcessingHistorySumAggregateOutputType | null
    _min: ProcessingHistoryMinAggregateOutputType | null
    _max: ProcessingHistoryMaxAggregateOutputType | null
  }

  type GetProcessingHistoryGroupByPayload<T extends ProcessingHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProcessingHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProcessingHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProcessingHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ProcessingHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ProcessingHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    totalCount?: boolean
    totalValue?: boolean
    labeledImage?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    details?: boolean | ProcessingHistory$detailsArgs<ExtArgs>
    _count?: boolean | ProcessingHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["processingHistory"]>


  export type ProcessingHistorySelectScalar = {
    id?: boolean
    totalCount?: boolean
    totalValue?: boolean
    labeledImage?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type ProcessingHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    details?: boolean | ProcessingHistory$detailsArgs<ExtArgs>
    _count?: boolean | ProcessingHistoryCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $ProcessingHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProcessingHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      details: Prisma.$HistoryCoinDetailPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      totalCount: number
      totalValue: number
      labeledImage: string
      createdAt: Date
      userId: string
    }, ExtArgs["result"]["processingHistory"]>
    composites: {}
  }

  type ProcessingHistoryGetPayload<S extends boolean | null | undefined | ProcessingHistoryDefaultArgs> = $Result.GetResult<Prisma.$ProcessingHistoryPayload, S>

  type ProcessingHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ProcessingHistoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ProcessingHistoryCountAggregateInputType | true
    }

  export interface ProcessingHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProcessingHistory'], meta: { name: 'ProcessingHistory' } }
    /**
     * Find zero or one ProcessingHistory that matches the filter.
     * @param {ProcessingHistoryFindUniqueArgs} args - Arguments to find a ProcessingHistory
     * @example
     * // Get one ProcessingHistory
     * const processingHistory = await prisma.processingHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProcessingHistoryFindUniqueArgs>(args: SelectSubset<T, ProcessingHistoryFindUniqueArgs<ExtArgs>>): Prisma__ProcessingHistoryClient<$Result.GetResult<Prisma.$ProcessingHistoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ProcessingHistory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ProcessingHistoryFindUniqueOrThrowArgs} args - Arguments to find a ProcessingHistory
     * @example
     * // Get one ProcessingHistory
     * const processingHistory = await prisma.processingHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProcessingHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ProcessingHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProcessingHistoryClient<$Result.GetResult<Prisma.$ProcessingHistoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ProcessingHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingHistoryFindFirstArgs} args - Arguments to find a ProcessingHistory
     * @example
     * // Get one ProcessingHistory
     * const processingHistory = await prisma.processingHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProcessingHistoryFindFirstArgs>(args?: SelectSubset<T, ProcessingHistoryFindFirstArgs<ExtArgs>>): Prisma__ProcessingHistoryClient<$Result.GetResult<Prisma.$ProcessingHistoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ProcessingHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingHistoryFindFirstOrThrowArgs} args - Arguments to find a ProcessingHistory
     * @example
     * // Get one ProcessingHistory
     * const processingHistory = await prisma.processingHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProcessingHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ProcessingHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProcessingHistoryClient<$Result.GetResult<Prisma.$ProcessingHistoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ProcessingHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProcessingHistories
     * const processingHistories = await prisma.processingHistory.findMany()
     * 
     * // Get first 10 ProcessingHistories
     * const processingHistories = await prisma.processingHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const processingHistoryWithIdOnly = await prisma.processingHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProcessingHistoryFindManyArgs>(args?: SelectSubset<T, ProcessingHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProcessingHistoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ProcessingHistory.
     * @param {ProcessingHistoryCreateArgs} args - Arguments to create a ProcessingHistory.
     * @example
     * // Create one ProcessingHistory
     * const ProcessingHistory = await prisma.processingHistory.create({
     *   data: {
     *     // ... data to create a ProcessingHistory
     *   }
     * })
     * 
     */
    create<T extends ProcessingHistoryCreateArgs>(args: SelectSubset<T, ProcessingHistoryCreateArgs<ExtArgs>>): Prisma__ProcessingHistoryClient<$Result.GetResult<Prisma.$ProcessingHistoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ProcessingHistories.
     * @param {ProcessingHistoryCreateManyArgs} args - Arguments to create many ProcessingHistories.
     * @example
     * // Create many ProcessingHistories
     * const processingHistory = await prisma.processingHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProcessingHistoryCreateManyArgs>(args?: SelectSubset<T, ProcessingHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ProcessingHistory.
     * @param {ProcessingHistoryDeleteArgs} args - Arguments to delete one ProcessingHistory.
     * @example
     * // Delete one ProcessingHistory
     * const ProcessingHistory = await prisma.processingHistory.delete({
     *   where: {
     *     // ... filter to delete one ProcessingHistory
     *   }
     * })
     * 
     */
    delete<T extends ProcessingHistoryDeleteArgs>(args: SelectSubset<T, ProcessingHistoryDeleteArgs<ExtArgs>>): Prisma__ProcessingHistoryClient<$Result.GetResult<Prisma.$ProcessingHistoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ProcessingHistory.
     * @param {ProcessingHistoryUpdateArgs} args - Arguments to update one ProcessingHistory.
     * @example
     * // Update one ProcessingHistory
     * const processingHistory = await prisma.processingHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProcessingHistoryUpdateArgs>(args: SelectSubset<T, ProcessingHistoryUpdateArgs<ExtArgs>>): Prisma__ProcessingHistoryClient<$Result.GetResult<Prisma.$ProcessingHistoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ProcessingHistories.
     * @param {ProcessingHistoryDeleteManyArgs} args - Arguments to filter ProcessingHistories to delete.
     * @example
     * // Delete a few ProcessingHistories
     * const { count } = await prisma.processingHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProcessingHistoryDeleteManyArgs>(args?: SelectSubset<T, ProcessingHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProcessingHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProcessingHistories
     * const processingHistory = await prisma.processingHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProcessingHistoryUpdateManyArgs>(args: SelectSubset<T, ProcessingHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ProcessingHistory.
     * @param {ProcessingHistoryUpsertArgs} args - Arguments to update or create a ProcessingHistory.
     * @example
     * // Update or create a ProcessingHistory
     * const processingHistory = await prisma.processingHistory.upsert({
     *   create: {
     *     // ... data to create a ProcessingHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProcessingHistory we want to update
     *   }
     * })
     */
    upsert<T extends ProcessingHistoryUpsertArgs>(args: SelectSubset<T, ProcessingHistoryUpsertArgs<ExtArgs>>): Prisma__ProcessingHistoryClient<$Result.GetResult<Prisma.$ProcessingHistoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more ProcessingHistories that matches the filter.
     * @param {ProcessingHistoryFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const processingHistory = await prisma.processingHistory.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: ProcessingHistoryFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ProcessingHistory.
     * @param {ProcessingHistoryAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const processingHistory = await prisma.processingHistory.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: ProcessingHistoryAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of ProcessingHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingHistoryCountArgs} args - Arguments to filter ProcessingHistories to count.
     * @example
     * // Count the number of ProcessingHistories
     * const count = await prisma.processingHistory.count({
     *   where: {
     *     // ... the filter for the ProcessingHistories we want to count
     *   }
     * })
    **/
    count<T extends ProcessingHistoryCountArgs>(
      args?: Subset<T, ProcessingHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProcessingHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProcessingHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProcessingHistoryAggregateArgs>(args: Subset<T, ProcessingHistoryAggregateArgs>): Prisma.PrismaPromise<GetProcessingHistoryAggregateType<T>>

    /**
     * Group by ProcessingHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProcessingHistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProcessingHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProcessingHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ProcessingHistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProcessingHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProcessingHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProcessingHistory model
   */
  readonly fields: ProcessingHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProcessingHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProcessingHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    details<T extends ProcessingHistory$detailsArgs<ExtArgs> = {}>(args?: Subset<T, ProcessingHistory$detailsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryCoinDetailPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProcessingHistory model
   */ 
  interface ProcessingHistoryFieldRefs {
    readonly id: FieldRef<"ProcessingHistory", 'String'>
    readonly totalCount: FieldRef<"ProcessingHistory", 'Int'>
    readonly totalValue: FieldRef<"ProcessingHistory", 'Float'>
    readonly labeledImage: FieldRef<"ProcessingHistory", 'String'>
    readonly createdAt: FieldRef<"ProcessingHistory", 'DateTime'>
    readonly userId: FieldRef<"ProcessingHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ProcessingHistory findUnique
   */
  export type ProcessingHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingHistory
     */
    select?: ProcessingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProcessingHistory to fetch.
     */
    where: ProcessingHistoryWhereUniqueInput
  }

  /**
   * ProcessingHistory findUniqueOrThrow
   */
  export type ProcessingHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingHistory
     */
    select?: ProcessingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProcessingHistory to fetch.
     */
    where: ProcessingHistoryWhereUniqueInput
  }

  /**
   * ProcessingHistory findFirst
   */
  export type ProcessingHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingHistory
     */
    select?: ProcessingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProcessingHistory to fetch.
     */
    where?: ProcessingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessingHistories to fetch.
     */
    orderBy?: ProcessingHistoryOrderByWithRelationInput | ProcessingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessingHistories.
     */
    cursor?: ProcessingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessingHistories.
     */
    distinct?: ProcessingHistoryScalarFieldEnum | ProcessingHistoryScalarFieldEnum[]
  }

  /**
   * ProcessingHistory findFirstOrThrow
   */
  export type ProcessingHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingHistory
     */
    select?: ProcessingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProcessingHistory to fetch.
     */
    where?: ProcessingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessingHistories to fetch.
     */
    orderBy?: ProcessingHistoryOrderByWithRelationInput | ProcessingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProcessingHistories.
     */
    cursor?: ProcessingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessingHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProcessingHistories.
     */
    distinct?: ProcessingHistoryScalarFieldEnum | ProcessingHistoryScalarFieldEnum[]
  }

  /**
   * ProcessingHistory findMany
   */
  export type ProcessingHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingHistory
     */
    select?: ProcessingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ProcessingHistories to fetch.
     */
    where?: ProcessingHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProcessingHistories to fetch.
     */
    orderBy?: ProcessingHistoryOrderByWithRelationInput | ProcessingHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProcessingHistories.
     */
    cursor?: ProcessingHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProcessingHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProcessingHistories.
     */
    skip?: number
    distinct?: ProcessingHistoryScalarFieldEnum | ProcessingHistoryScalarFieldEnum[]
  }

  /**
   * ProcessingHistory create
   */
  export type ProcessingHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingHistory
     */
    select?: ProcessingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ProcessingHistory.
     */
    data: XOR<ProcessingHistoryCreateInput, ProcessingHistoryUncheckedCreateInput>
  }

  /**
   * ProcessingHistory createMany
   */
  export type ProcessingHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProcessingHistories.
     */
    data: ProcessingHistoryCreateManyInput | ProcessingHistoryCreateManyInput[]
  }

  /**
   * ProcessingHistory update
   */
  export type ProcessingHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingHistory
     */
    select?: ProcessingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ProcessingHistory.
     */
    data: XOR<ProcessingHistoryUpdateInput, ProcessingHistoryUncheckedUpdateInput>
    /**
     * Choose, which ProcessingHistory to update.
     */
    where: ProcessingHistoryWhereUniqueInput
  }

  /**
   * ProcessingHistory updateMany
   */
  export type ProcessingHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProcessingHistories.
     */
    data: XOR<ProcessingHistoryUpdateManyMutationInput, ProcessingHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ProcessingHistories to update
     */
    where?: ProcessingHistoryWhereInput
  }

  /**
   * ProcessingHistory upsert
   */
  export type ProcessingHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingHistory
     */
    select?: ProcessingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ProcessingHistory to update in case it exists.
     */
    where: ProcessingHistoryWhereUniqueInput
    /**
     * In case the ProcessingHistory found by the `where` argument doesn't exist, create a new ProcessingHistory with this data.
     */
    create: XOR<ProcessingHistoryCreateInput, ProcessingHistoryUncheckedCreateInput>
    /**
     * In case the ProcessingHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProcessingHistoryUpdateInput, ProcessingHistoryUncheckedUpdateInput>
  }

  /**
   * ProcessingHistory delete
   */
  export type ProcessingHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingHistory
     */
    select?: ProcessingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingHistoryInclude<ExtArgs> | null
    /**
     * Filter which ProcessingHistory to delete.
     */
    where: ProcessingHistoryWhereUniqueInput
  }

  /**
   * ProcessingHistory deleteMany
   */
  export type ProcessingHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProcessingHistories to delete
     */
    where?: ProcessingHistoryWhereInput
  }

  /**
   * ProcessingHistory findRaw
   */
  export type ProcessingHistoryFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ProcessingHistory aggregateRaw
   */
  export type ProcessingHistoryAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * ProcessingHistory.details
   */
  export type ProcessingHistory$detailsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryCoinDetail
     */
    select?: HistoryCoinDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryCoinDetailInclude<ExtArgs> | null
    where?: HistoryCoinDetailWhereInput
    orderBy?: HistoryCoinDetailOrderByWithRelationInput | HistoryCoinDetailOrderByWithRelationInput[]
    cursor?: HistoryCoinDetailWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryCoinDetailScalarFieldEnum | HistoryCoinDetailScalarFieldEnum[]
  }

  /**
   * ProcessingHistory without action
   */
  export type ProcessingHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProcessingHistory
     */
    select?: ProcessingHistorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProcessingHistoryInclude<ExtArgs> | null
  }


  /**
   * Model HistoryCoinDetail
   */

  export type AggregateHistoryCoinDetail = {
    _count: HistoryCoinDetailCountAggregateOutputType | null
    _avg: HistoryCoinDetailAvgAggregateOutputType | null
    _sum: HistoryCoinDetailSumAggregateOutputType | null
    _min: HistoryCoinDetailMinAggregateOutputType | null
    _max: HistoryCoinDetailMaxAggregateOutputType | null
  }

  export type HistoryCoinDetailAvgAggregateOutputType = {
    count: number | null
    value: number | null
  }

  export type HistoryCoinDetailSumAggregateOutputType = {
    count: number | null
    value: number | null
  }

  export type HistoryCoinDetailMinAggregateOutputType = {
    id: string | null
    type: string | null
    count: number | null
    value: number | null
    historyId: string | null
  }

  export type HistoryCoinDetailMaxAggregateOutputType = {
    id: string | null
    type: string | null
    count: number | null
    value: number | null
    historyId: string | null
  }

  export type HistoryCoinDetailCountAggregateOutputType = {
    id: number
    type: number
    count: number
    value: number
    historyId: number
    _all: number
  }


  export type HistoryCoinDetailAvgAggregateInputType = {
    count?: true
    value?: true
  }

  export type HistoryCoinDetailSumAggregateInputType = {
    count?: true
    value?: true
  }

  export type HistoryCoinDetailMinAggregateInputType = {
    id?: true
    type?: true
    count?: true
    value?: true
    historyId?: true
  }

  export type HistoryCoinDetailMaxAggregateInputType = {
    id?: true
    type?: true
    count?: true
    value?: true
    historyId?: true
  }

  export type HistoryCoinDetailCountAggregateInputType = {
    id?: true
    type?: true
    count?: true
    value?: true
    historyId?: true
    _all?: true
  }

  export type HistoryCoinDetailAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryCoinDetail to aggregate.
     */
    where?: HistoryCoinDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryCoinDetails to fetch.
     */
    orderBy?: HistoryCoinDetailOrderByWithRelationInput | HistoryCoinDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryCoinDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryCoinDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryCoinDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HistoryCoinDetails
    **/
    _count?: true | HistoryCoinDetailCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryCoinDetailAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistoryCoinDetailSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryCoinDetailMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryCoinDetailMaxAggregateInputType
  }

  export type GetHistoryCoinDetailAggregateType<T extends HistoryCoinDetailAggregateArgs> = {
        [P in keyof T & keyof AggregateHistoryCoinDetail]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistoryCoinDetail[P]>
      : GetScalarType<T[P], AggregateHistoryCoinDetail[P]>
  }




  export type HistoryCoinDetailGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryCoinDetailWhereInput
    orderBy?: HistoryCoinDetailOrderByWithAggregationInput | HistoryCoinDetailOrderByWithAggregationInput[]
    by: HistoryCoinDetailScalarFieldEnum[] | HistoryCoinDetailScalarFieldEnum
    having?: HistoryCoinDetailScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCoinDetailCountAggregateInputType | true
    _avg?: HistoryCoinDetailAvgAggregateInputType
    _sum?: HistoryCoinDetailSumAggregateInputType
    _min?: HistoryCoinDetailMinAggregateInputType
    _max?: HistoryCoinDetailMaxAggregateInputType
  }

  export type HistoryCoinDetailGroupByOutputType = {
    id: string
    type: string
    count: number
    value: number
    historyId: string
    _count: HistoryCoinDetailCountAggregateOutputType | null
    _avg: HistoryCoinDetailAvgAggregateOutputType | null
    _sum: HistoryCoinDetailSumAggregateOutputType | null
    _min: HistoryCoinDetailMinAggregateOutputType | null
    _max: HistoryCoinDetailMaxAggregateOutputType | null
  }

  type GetHistoryCoinDetailGroupByPayload<T extends HistoryCoinDetailGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryCoinDetailGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryCoinDetailGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryCoinDetailGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryCoinDetailGroupByOutputType[P]>
        }
      >
    >


  export type HistoryCoinDetailSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    count?: boolean
    value?: boolean
    historyId?: boolean
    history?: boolean | ProcessingHistoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["historyCoinDetail"]>


  export type HistoryCoinDetailSelectScalar = {
    id?: boolean
    type?: boolean
    count?: boolean
    value?: boolean
    historyId?: boolean
  }

  export type HistoryCoinDetailInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    history?: boolean | ProcessingHistoryDefaultArgs<ExtArgs>
  }

  export type $HistoryCoinDetailPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HistoryCoinDetail"
    objects: {
      history: Prisma.$ProcessingHistoryPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      count: number
      value: number
      historyId: string
    }, ExtArgs["result"]["historyCoinDetail"]>
    composites: {}
  }

  type HistoryCoinDetailGetPayload<S extends boolean | null | undefined | HistoryCoinDetailDefaultArgs> = $Result.GetResult<Prisma.$HistoryCoinDetailPayload, S>

  type HistoryCoinDetailCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HistoryCoinDetailFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HistoryCoinDetailCountAggregateInputType | true
    }

  export interface HistoryCoinDetailDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HistoryCoinDetail'], meta: { name: 'HistoryCoinDetail' } }
    /**
     * Find zero or one HistoryCoinDetail that matches the filter.
     * @param {HistoryCoinDetailFindUniqueArgs} args - Arguments to find a HistoryCoinDetail
     * @example
     * // Get one HistoryCoinDetail
     * const historyCoinDetail = await prisma.historyCoinDetail.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryCoinDetailFindUniqueArgs>(args: SelectSubset<T, HistoryCoinDetailFindUniqueArgs<ExtArgs>>): Prisma__HistoryCoinDetailClient<$Result.GetResult<Prisma.$HistoryCoinDetailPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one HistoryCoinDetail that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HistoryCoinDetailFindUniqueOrThrowArgs} args - Arguments to find a HistoryCoinDetail
     * @example
     * // Get one HistoryCoinDetail
     * const historyCoinDetail = await prisma.historyCoinDetail.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryCoinDetailFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryCoinDetailFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryCoinDetailClient<$Result.GetResult<Prisma.$HistoryCoinDetailPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first HistoryCoinDetail that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCoinDetailFindFirstArgs} args - Arguments to find a HistoryCoinDetail
     * @example
     * // Get one HistoryCoinDetail
     * const historyCoinDetail = await prisma.historyCoinDetail.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryCoinDetailFindFirstArgs>(args?: SelectSubset<T, HistoryCoinDetailFindFirstArgs<ExtArgs>>): Prisma__HistoryCoinDetailClient<$Result.GetResult<Prisma.$HistoryCoinDetailPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first HistoryCoinDetail that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCoinDetailFindFirstOrThrowArgs} args - Arguments to find a HistoryCoinDetail
     * @example
     * // Get one HistoryCoinDetail
     * const historyCoinDetail = await prisma.historyCoinDetail.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryCoinDetailFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryCoinDetailFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryCoinDetailClient<$Result.GetResult<Prisma.$HistoryCoinDetailPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more HistoryCoinDetails that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCoinDetailFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HistoryCoinDetails
     * const historyCoinDetails = await prisma.historyCoinDetail.findMany()
     * 
     * // Get first 10 HistoryCoinDetails
     * const historyCoinDetails = await prisma.historyCoinDetail.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyCoinDetailWithIdOnly = await prisma.historyCoinDetail.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryCoinDetailFindManyArgs>(args?: SelectSubset<T, HistoryCoinDetailFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryCoinDetailPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a HistoryCoinDetail.
     * @param {HistoryCoinDetailCreateArgs} args - Arguments to create a HistoryCoinDetail.
     * @example
     * // Create one HistoryCoinDetail
     * const HistoryCoinDetail = await prisma.historyCoinDetail.create({
     *   data: {
     *     // ... data to create a HistoryCoinDetail
     *   }
     * })
     * 
     */
    create<T extends HistoryCoinDetailCreateArgs>(args: SelectSubset<T, HistoryCoinDetailCreateArgs<ExtArgs>>): Prisma__HistoryCoinDetailClient<$Result.GetResult<Prisma.$HistoryCoinDetailPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many HistoryCoinDetails.
     * @param {HistoryCoinDetailCreateManyArgs} args - Arguments to create many HistoryCoinDetails.
     * @example
     * // Create many HistoryCoinDetails
     * const historyCoinDetail = await prisma.historyCoinDetail.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryCoinDetailCreateManyArgs>(args?: SelectSubset<T, HistoryCoinDetailCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HistoryCoinDetail.
     * @param {HistoryCoinDetailDeleteArgs} args - Arguments to delete one HistoryCoinDetail.
     * @example
     * // Delete one HistoryCoinDetail
     * const HistoryCoinDetail = await prisma.historyCoinDetail.delete({
     *   where: {
     *     // ... filter to delete one HistoryCoinDetail
     *   }
     * })
     * 
     */
    delete<T extends HistoryCoinDetailDeleteArgs>(args: SelectSubset<T, HistoryCoinDetailDeleteArgs<ExtArgs>>): Prisma__HistoryCoinDetailClient<$Result.GetResult<Prisma.$HistoryCoinDetailPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one HistoryCoinDetail.
     * @param {HistoryCoinDetailUpdateArgs} args - Arguments to update one HistoryCoinDetail.
     * @example
     * // Update one HistoryCoinDetail
     * const historyCoinDetail = await prisma.historyCoinDetail.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryCoinDetailUpdateArgs>(args: SelectSubset<T, HistoryCoinDetailUpdateArgs<ExtArgs>>): Prisma__HistoryCoinDetailClient<$Result.GetResult<Prisma.$HistoryCoinDetailPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more HistoryCoinDetails.
     * @param {HistoryCoinDetailDeleteManyArgs} args - Arguments to filter HistoryCoinDetails to delete.
     * @example
     * // Delete a few HistoryCoinDetails
     * const { count } = await prisma.historyCoinDetail.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryCoinDetailDeleteManyArgs>(args?: SelectSubset<T, HistoryCoinDetailDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HistoryCoinDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCoinDetailUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HistoryCoinDetails
     * const historyCoinDetail = await prisma.historyCoinDetail.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryCoinDetailUpdateManyArgs>(args: SelectSubset<T, HistoryCoinDetailUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HistoryCoinDetail.
     * @param {HistoryCoinDetailUpsertArgs} args - Arguments to update or create a HistoryCoinDetail.
     * @example
     * // Update or create a HistoryCoinDetail
     * const historyCoinDetail = await prisma.historyCoinDetail.upsert({
     *   create: {
     *     // ... data to create a HistoryCoinDetail
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HistoryCoinDetail we want to update
     *   }
     * })
     */
    upsert<T extends HistoryCoinDetailUpsertArgs>(args: SelectSubset<T, HistoryCoinDetailUpsertArgs<ExtArgs>>): Prisma__HistoryCoinDetailClient<$Result.GetResult<Prisma.$HistoryCoinDetailPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more HistoryCoinDetails that matches the filter.
     * @param {HistoryCoinDetailFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const historyCoinDetail = await prisma.historyCoinDetail.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: HistoryCoinDetailFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a HistoryCoinDetail.
     * @param {HistoryCoinDetailAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const historyCoinDetail = await prisma.historyCoinDetail.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HistoryCoinDetailAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of HistoryCoinDetails.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCoinDetailCountArgs} args - Arguments to filter HistoryCoinDetails to count.
     * @example
     * // Count the number of HistoryCoinDetails
     * const count = await prisma.historyCoinDetail.count({
     *   where: {
     *     // ... the filter for the HistoryCoinDetails we want to count
     *   }
     * })
    **/
    count<T extends HistoryCoinDetailCountArgs>(
      args?: Subset<T, HistoryCoinDetailCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCoinDetailCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HistoryCoinDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCoinDetailAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HistoryCoinDetailAggregateArgs>(args: Subset<T, HistoryCoinDetailAggregateArgs>): Prisma.PrismaPromise<GetHistoryCoinDetailAggregateType<T>>

    /**
     * Group by HistoryCoinDetail.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCoinDetailGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HistoryCoinDetailGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryCoinDetailGroupByArgs['orderBy'] }
        : { orderBy?: HistoryCoinDetailGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HistoryCoinDetailGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryCoinDetailGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HistoryCoinDetail model
   */
  readonly fields: HistoryCoinDetailFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HistoryCoinDetail.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryCoinDetailClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    history<T extends ProcessingHistoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProcessingHistoryDefaultArgs<ExtArgs>>): Prisma__ProcessingHistoryClient<$Result.GetResult<Prisma.$ProcessingHistoryPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HistoryCoinDetail model
   */ 
  interface HistoryCoinDetailFieldRefs {
    readonly id: FieldRef<"HistoryCoinDetail", 'String'>
    readonly type: FieldRef<"HistoryCoinDetail", 'String'>
    readonly count: FieldRef<"HistoryCoinDetail", 'Int'>
    readonly value: FieldRef<"HistoryCoinDetail", 'Float'>
    readonly historyId: FieldRef<"HistoryCoinDetail", 'String'>
  }
    

  // Custom InputTypes
  /**
   * HistoryCoinDetail findUnique
   */
  export type HistoryCoinDetailFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryCoinDetail
     */
    select?: HistoryCoinDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryCoinDetailInclude<ExtArgs> | null
    /**
     * Filter, which HistoryCoinDetail to fetch.
     */
    where: HistoryCoinDetailWhereUniqueInput
  }

  /**
   * HistoryCoinDetail findUniqueOrThrow
   */
  export type HistoryCoinDetailFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryCoinDetail
     */
    select?: HistoryCoinDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryCoinDetailInclude<ExtArgs> | null
    /**
     * Filter, which HistoryCoinDetail to fetch.
     */
    where: HistoryCoinDetailWhereUniqueInput
  }

  /**
   * HistoryCoinDetail findFirst
   */
  export type HistoryCoinDetailFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryCoinDetail
     */
    select?: HistoryCoinDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryCoinDetailInclude<ExtArgs> | null
    /**
     * Filter, which HistoryCoinDetail to fetch.
     */
    where?: HistoryCoinDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryCoinDetails to fetch.
     */
    orderBy?: HistoryCoinDetailOrderByWithRelationInput | HistoryCoinDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryCoinDetails.
     */
    cursor?: HistoryCoinDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryCoinDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryCoinDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryCoinDetails.
     */
    distinct?: HistoryCoinDetailScalarFieldEnum | HistoryCoinDetailScalarFieldEnum[]
  }

  /**
   * HistoryCoinDetail findFirstOrThrow
   */
  export type HistoryCoinDetailFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryCoinDetail
     */
    select?: HistoryCoinDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryCoinDetailInclude<ExtArgs> | null
    /**
     * Filter, which HistoryCoinDetail to fetch.
     */
    where?: HistoryCoinDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryCoinDetails to fetch.
     */
    orderBy?: HistoryCoinDetailOrderByWithRelationInput | HistoryCoinDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HistoryCoinDetails.
     */
    cursor?: HistoryCoinDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryCoinDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryCoinDetails.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HistoryCoinDetails.
     */
    distinct?: HistoryCoinDetailScalarFieldEnum | HistoryCoinDetailScalarFieldEnum[]
  }

  /**
   * HistoryCoinDetail findMany
   */
  export type HistoryCoinDetailFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryCoinDetail
     */
    select?: HistoryCoinDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryCoinDetailInclude<ExtArgs> | null
    /**
     * Filter, which HistoryCoinDetails to fetch.
     */
    where?: HistoryCoinDetailWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HistoryCoinDetails to fetch.
     */
    orderBy?: HistoryCoinDetailOrderByWithRelationInput | HistoryCoinDetailOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HistoryCoinDetails.
     */
    cursor?: HistoryCoinDetailWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HistoryCoinDetails from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HistoryCoinDetails.
     */
    skip?: number
    distinct?: HistoryCoinDetailScalarFieldEnum | HistoryCoinDetailScalarFieldEnum[]
  }

  /**
   * HistoryCoinDetail create
   */
  export type HistoryCoinDetailCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryCoinDetail
     */
    select?: HistoryCoinDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryCoinDetailInclude<ExtArgs> | null
    /**
     * The data needed to create a HistoryCoinDetail.
     */
    data: XOR<HistoryCoinDetailCreateInput, HistoryCoinDetailUncheckedCreateInput>
  }

  /**
   * HistoryCoinDetail createMany
   */
  export type HistoryCoinDetailCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HistoryCoinDetails.
     */
    data: HistoryCoinDetailCreateManyInput | HistoryCoinDetailCreateManyInput[]
  }

  /**
   * HistoryCoinDetail update
   */
  export type HistoryCoinDetailUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryCoinDetail
     */
    select?: HistoryCoinDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryCoinDetailInclude<ExtArgs> | null
    /**
     * The data needed to update a HistoryCoinDetail.
     */
    data: XOR<HistoryCoinDetailUpdateInput, HistoryCoinDetailUncheckedUpdateInput>
    /**
     * Choose, which HistoryCoinDetail to update.
     */
    where: HistoryCoinDetailWhereUniqueInput
  }

  /**
   * HistoryCoinDetail updateMany
   */
  export type HistoryCoinDetailUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HistoryCoinDetails.
     */
    data: XOR<HistoryCoinDetailUpdateManyMutationInput, HistoryCoinDetailUncheckedUpdateManyInput>
    /**
     * Filter which HistoryCoinDetails to update
     */
    where?: HistoryCoinDetailWhereInput
  }

  /**
   * HistoryCoinDetail upsert
   */
  export type HistoryCoinDetailUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryCoinDetail
     */
    select?: HistoryCoinDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryCoinDetailInclude<ExtArgs> | null
    /**
     * The filter to search for the HistoryCoinDetail to update in case it exists.
     */
    where: HistoryCoinDetailWhereUniqueInput
    /**
     * In case the HistoryCoinDetail found by the `where` argument doesn't exist, create a new HistoryCoinDetail with this data.
     */
    create: XOR<HistoryCoinDetailCreateInput, HistoryCoinDetailUncheckedCreateInput>
    /**
     * In case the HistoryCoinDetail was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryCoinDetailUpdateInput, HistoryCoinDetailUncheckedUpdateInput>
  }

  /**
   * HistoryCoinDetail delete
   */
  export type HistoryCoinDetailDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryCoinDetail
     */
    select?: HistoryCoinDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryCoinDetailInclude<ExtArgs> | null
    /**
     * Filter which HistoryCoinDetail to delete.
     */
    where: HistoryCoinDetailWhereUniqueInput
  }

  /**
   * HistoryCoinDetail deleteMany
   */
  export type HistoryCoinDetailDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HistoryCoinDetails to delete
     */
    where?: HistoryCoinDetailWhereInput
  }

  /**
   * HistoryCoinDetail findRaw
   */
  export type HistoryCoinDetailFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * HistoryCoinDetail aggregateRaw
   */
  export type HistoryCoinDetailAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * HistoryCoinDetail without action
   */
  export type HistoryCoinDetailDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HistoryCoinDetail
     */
    select?: HistoryCoinDetailSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryCoinDetailInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    avatarUrl: 'avatarUrl',
    hashedPassword: 'hashedPassword',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OauthAccountScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    providerUserId: 'providerUserId',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OauthAccountScalarFieldEnum = (typeof OauthAccountScalarFieldEnum)[keyof typeof OauthAccountScalarFieldEnum]


  export const ProcessingHistoryScalarFieldEnum: {
    id: 'id',
    totalCount: 'totalCount',
    totalValue: 'totalValue',
    labeledImage: 'labeledImage',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type ProcessingHistoryScalarFieldEnum = (typeof ProcessingHistoryScalarFieldEnum)[keyof typeof ProcessingHistoryScalarFieldEnum]


  export const HistoryCoinDetailScalarFieldEnum: {
    id: 'id',
    type: 'type',
    count: 'count',
    value: 'value',
    historyId: 'historyId'
  };

  export type HistoryCoinDetailScalarFieldEnum = (typeof HistoryCoinDetailScalarFieldEnum)[keyof typeof HistoryCoinDetailScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    oauthAccounts?: OauthAccountListRelationFilter
    processingHistories?: ProcessingHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    oauthAccounts?: OauthAccountOrderByRelationAggregateInput
    processingHistories?: ProcessingHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    avatarUrl?: StringNullableFilter<"User"> | string | null
    hashedPassword?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    oauthAccounts?: OauthAccountListRelationFilter
    processingHistories?: ProcessingHistoryListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    avatarUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    hashedPassword?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OauthAccountWhereInput = {
    AND?: OauthAccountWhereInput | OauthAccountWhereInput[]
    OR?: OauthAccountWhereInput[]
    NOT?: OauthAccountWhereInput | OauthAccountWhereInput[]
    id?: StringFilter<"OauthAccount"> | string
    providerId?: StringFilter<"OauthAccount"> | string
    providerUserId?: StringFilter<"OauthAccount"> | string
    userId?: StringFilter<"OauthAccount"> | string
    createdAt?: DateTimeFilter<"OauthAccount"> | Date | string
    updatedAt?: DateTimeFilter<"OauthAccount"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type OauthAccountOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    providerUserId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type OauthAccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    providerId_providerUserId?: OauthAccountProviderIdProviderUserIdCompoundUniqueInput
    AND?: OauthAccountWhereInput | OauthAccountWhereInput[]
    OR?: OauthAccountWhereInput[]
    NOT?: OauthAccountWhereInput | OauthAccountWhereInput[]
    providerId?: StringFilter<"OauthAccount"> | string
    providerUserId?: StringFilter<"OauthAccount"> | string
    userId?: StringFilter<"OauthAccount"> | string
    createdAt?: DateTimeFilter<"OauthAccount"> | Date | string
    updatedAt?: DateTimeFilter<"OauthAccount"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "providerId_providerUserId">

  export type OauthAccountOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    providerUserId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OauthAccountCountOrderByAggregateInput
    _max?: OauthAccountMaxOrderByAggregateInput
    _min?: OauthAccountMinOrderByAggregateInput
  }

  export type OauthAccountScalarWhereWithAggregatesInput = {
    AND?: OauthAccountScalarWhereWithAggregatesInput | OauthAccountScalarWhereWithAggregatesInput[]
    OR?: OauthAccountScalarWhereWithAggregatesInput[]
    NOT?: OauthAccountScalarWhereWithAggregatesInput | OauthAccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OauthAccount"> | string
    providerId?: StringWithAggregatesFilter<"OauthAccount"> | string
    providerUserId?: StringWithAggregatesFilter<"OauthAccount"> | string
    userId?: StringWithAggregatesFilter<"OauthAccount"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OauthAccount"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OauthAccount"> | Date | string
  }

  export type ProcessingHistoryWhereInput = {
    AND?: ProcessingHistoryWhereInput | ProcessingHistoryWhereInput[]
    OR?: ProcessingHistoryWhereInput[]
    NOT?: ProcessingHistoryWhereInput | ProcessingHistoryWhereInput[]
    id?: StringFilter<"ProcessingHistory"> | string
    totalCount?: IntFilter<"ProcessingHistory"> | number
    totalValue?: FloatFilter<"ProcessingHistory"> | number
    labeledImage?: StringFilter<"ProcessingHistory"> | string
    createdAt?: DateTimeFilter<"ProcessingHistory"> | Date | string
    userId?: StringFilter<"ProcessingHistory"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    details?: HistoryCoinDetailListRelationFilter
  }

  export type ProcessingHistoryOrderByWithRelationInput = {
    id?: SortOrder
    totalCount?: SortOrder
    totalValue?: SortOrder
    labeledImage?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    details?: HistoryCoinDetailOrderByRelationAggregateInput
  }

  export type ProcessingHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProcessingHistoryWhereInput | ProcessingHistoryWhereInput[]
    OR?: ProcessingHistoryWhereInput[]
    NOT?: ProcessingHistoryWhereInput | ProcessingHistoryWhereInput[]
    totalCount?: IntFilter<"ProcessingHistory"> | number
    totalValue?: FloatFilter<"ProcessingHistory"> | number
    labeledImage?: StringFilter<"ProcessingHistory"> | string
    createdAt?: DateTimeFilter<"ProcessingHistory"> | Date | string
    userId?: StringFilter<"ProcessingHistory"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    details?: HistoryCoinDetailListRelationFilter
  }, "id">

  export type ProcessingHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    totalCount?: SortOrder
    totalValue?: SortOrder
    labeledImage?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    _count?: ProcessingHistoryCountOrderByAggregateInput
    _avg?: ProcessingHistoryAvgOrderByAggregateInput
    _max?: ProcessingHistoryMaxOrderByAggregateInput
    _min?: ProcessingHistoryMinOrderByAggregateInput
    _sum?: ProcessingHistorySumOrderByAggregateInput
  }

  export type ProcessingHistoryScalarWhereWithAggregatesInput = {
    AND?: ProcessingHistoryScalarWhereWithAggregatesInput | ProcessingHistoryScalarWhereWithAggregatesInput[]
    OR?: ProcessingHistoryScalarWhereWithAggregatesInput[]
    NOT?: ProcessingHistoryScalarWhereWithAggregatesInput | ProcessingHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ProcessingHistory"> | string
    totalCount?: IntWithAggregatesFilter<"ProcessingHistory"> | number
    totalValue?: FloatWithAggregatesFilter<"ProcessingHistory"> | number
    labeledImage?: StringWithAggregatesFilter<"ProcessingHistory"> | string
    createdAt?: DateTimeWithAggregatesFilter<"ProcessingHistory"> | Date | string
    userId?: StringWithAggregatesFilter<"ProcessingHistory"> | string
  }

  export type HistoryCoinDetailWhereInput = {
    AND?: HistoryCoinDetailWhereInput | HistoryCoinDetailWhereInput[]
    OR?: HistoryCoinDetailWhereInput[]
    NOT?: HistoryCoinDetailWhereInput | HistoryCoinDetailWhereInput[]
    id?: StringFilter<"HistoryCoinDetail"> | string
    type?: StringFilter<"HistoryCoinDetail"> | string
    count?: IntFilter<"HistoryCoinDetail"> | number
    value?: FloatFilter<"HistoryCoinDetail"> | number
    historyId?: StringFilter<"HistoryCoinDetail"> | string
    history?: XOR<ProcessingHistoryRelationFilter, ProcessingHistoryWhereInput>
  }

  export type HistoryCoinDetailOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    count?: SortOrder
    value?: SortOrder
    historyId?: SortOrder
    history?: ProcessingHistoryOrderByWithRelationInput
  }

  export type HistoryCoinDetailWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HistoryCoinDetailWhereInput | HistoryCoinDetailWhereInput[]
    OR?: HistoryCoinDetailWhereInput[]
    NOT?: HistoryCoinDetailWhereInput | HistoryCoinDetailWhereInput[]
    type?: StringFilter<"HistoryCoinDetail"> | string
    count?: IntFilter<"HistoryCoinDetail"> | number
    value?: FloatFilter<"HistoryCoinDetail"> | number
    historyId?: StringFilter<"HistoryCoinDetail"> | string
    history?: XOR<ProcessingHistoryRelationFilter, ProcessingHistoryWhereInput>
  }, "id">

  export type HistoryCoinDetailOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    count?: SortOrder
    value?: SortOrder
    historyId?: SortOrder
    _count?: HistoryCoinDetailCountOrderByAggregateInput
    _avg?: HistoryCoinDetailAvgOrderByAggregateInput
    _max?: HistoryCoinDetailMaxOrderByAggregateInput
    _min?: HistoryCoinDetailMinOrderByAggregateInput
    _sum?: HistoryCoinDetailSumOrderByAggregateInput
  }

  export type HistoryCoinDetailScalarWhereWithAggregatesInput = {
    AND?: HistoryCoinDetailScalarWhereWithAggregatesInput | HistoryCoinDetailScalarWhereWithAggregatesInput[]
    OR?: HistoryCoinDetailScalarWhereWithAggregatesInput[]
    NOT?: HistoryCoinDetailScalarWhereWithAggregatesInput | HistoryCoinDetailScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HistoryCoinDetail"> | string
    type?: StringWithAggregatesFilter<"HistoryCoinDetail"> | string
    count?: IntWithAggregatesFilter<"HistoryCoinDetail"> | number
    value?: FloatWithAggregatesFilter<"HistoryCoinDetail"> | number
    historyId?: StringWithAggregatesFilter<"HistoryCoinDetail"> | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    oauthAccounts?: OauthAccountCreateNestedManyWithoutUserInput
    processingHistories?: ProcessingHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    oauthAccounts?: OauthAccountUncheckedCreateNestedManyWithoutUserInput
    processingHistories?: ProcessingHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthAccounts?: OauthAccountUpdateManyWithoutUserNestedInput
    processingHistories?: ProcessingHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthAccounts?: OauthAccountUncheckedUpdateManyWithoutUserNestedInput
    processingHistories?: ProcessingHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OauthAccountCreateInput = {
    id?: string
    providerId: string
    providerUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOauthAccountsInput
  }

  export type OauthAccountUncheckedCreateInput = {
    id?: string
    providerId: string
    providerUserId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OauthAccountUpdateInput = {
    providerId?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOauthAccountsNestedInput
  }

  export type OauthAccountUncheckedUpdateInput = {
    providerId?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OauthAccountCreateManyInput = {
    id?: string
    providerId: string
    providerUserId: string
    userId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OauthAccountUpdateManyMutationInput = {
    providerId?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OauthAccountUncheckedUpdateManyInput = {
    providerId?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessingHistoryCreateInput = {
    id?: string
    totalCount: number
    totalValue: number
    labeledImage: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProcessingHistoriesInput
    details?: HistoryCoinDetailCreateNestedManyWithoutHistoryInput
  }

  export type ProcessingHistoryUncheckedCreateInput = {
    id?: string
    totalCount: number
    totalValue: number
    labeledImage: string
    createdAt?: Date | string
    userId: string
    details?: HistoryCoinDetailUncheckedCreateNestedManyWithoutHistoryInput
  }

  export type ProcessingHistoryUpdateInput = {
    totalCount?: IntFieldUpdateOperationsInput | number
    totalValue?: FloatFieldUpdateOperationsInput | number
    labeledImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProcessingHistoriesNestedInput
    details?: HistoryCoinDetailUpdateManyWithoutHistoryNestedInput
  }

  export type ProcessingHistoryUncheckedUpdateInput = {
    totalCount?: IntFieldUpdateOperationsInput | number
    totalValue?: FloatFieldUpdateOperationsInput | number
    labeledImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    details?: HistoryCoinDetailUncheckedUpdateManyWithoutHistoryNestedInput
  }

  export type ProcessingHistoryCreateManyInput = {
    id?: string
    totalCount: number
    totalValue: number
    labeledImage: string
    createdAt?: Date | string
    userId: string
  }

  export type ProcessingHistoryUpdateManyMutationInput = {
    totalCount?: IntFieldUpdateOperationsInput | number
    totalValue?: FloatFieldUpdateOperationsInput | number
    labeledImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessingHistoryUncheckedUpdateManyInput = {
    totalCount?: IntFieldUpdateOperationsInput | number
    totalValue?: FloatFieldUpdateOperationsInput | number
    labeledImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryCoinDetailCreateInput = {
    id?: string
    type: string
    count: number
    value: number
    history: ProcessingHistoryCreateNestedOneWithoutDetailsInput
  }

  export type HistoryCoinDetailUncheckedCreateInput = {
    id?: string
    type: string
    count: number
    value: number
    historyId: string
  }

  export type HistoryCoinDetailUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    history?: ProcessingHistoryUpdateOneRequiredWithoutDetailsNestedInput
  }

  export type HistoryCoinDetailUncheckedUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    historyId?: StringFieldUpdateOperationsInput | string
  }

  export type HistoryCoinDetailCreateManyInput = {
    id?: string
    type: string
    count: number
    value: number
    historyId: string
  }

  export type HistoryCoinDetailUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type HistoryCoinDetailUncheckedUpdateManyInput = {
    type?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
    historyId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type OauthAccountListRelationFilter = {
    every?: OauthAccountWhereInput
    some?: OauthAccountWhereInput
    none?: OauthAccountWhereInput
  }

  export type ProcessingHistoryListRelationFilter = {
    every?: ProcessingHistoryWhereInput
    some?: ProcessingHistoryWhereInput
    none?: ProcessingHistoryWhereInput
  }

  export type OauthAccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcessingHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    avatarUrl?: SortOrder
    hashedPassword?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type OauthAccountProviderIdProviderUserIdCompoundUniqueInput = {
    providerId: string
    providerUserId: string
  }

  export type OauthAccountCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    providerUserId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OauthAccountMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    providerUserId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OauthAccountMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    providerUserId?: SortOrder
    userId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type HistoryCoinDetailListRelationFilter = {
    every?: HistoryCoinDetailWhereInput
    some?: HistoryCoinDetailWhereInput
    none?: HistoryCoinDetailWhereInput
  }

  export type HistoryCoinDetailOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProcessingHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    totalCount?: SortOrder
    totalValue?: SortOrder
    labeledImage?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ProcessingHistoryAvgOrderByAggregateInput = {
    totalCount?: SortOrder
    totalValue?: SortOrder
  }

  export type ProcessingHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    totalCount?: SortOrder
    totalValue?: SortOrder
    labeledImage?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ProcessingHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    totalCount?: SortOrder
    totalValue?: SortOrder
    labeledImage?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type ProcessingHistorySumOrderByAggregateInput = {
    totalCount?: SortOrder
    totalValue?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ProcessingHistoryRelationFilter = {
    is?: ProcessingHistoryWhereInput
    isNot?: ProcessingHistoryWhereInput
  }

  export type HistoryCoinDetailCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    count?: SortOrder
    value?: SortOrder
    historyId?: SortOrder
  }

  export type HistoryCoinDetailAvgOrderByAggregateInput = {
    count?: SortOrder
    value?: SortOrder
  }

  export type HistoryCoinDetailMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    count?: SortOrder
    value?: SortOrder
    historyId?: SortOrder
  }

  export type HistoryCoinDetailMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    count?: SortOrder
    value?: SortOrder
    historyId?: SortOrder
  }

  export type HistoryCoinDetailSumOrderByAggregateInput = {
    count?: SortOrder
    value?: SortOrder
  }

  export type OauthAccountCreateNestedManyWithoutUserInput = {
    create?: XOR<OauthAccountCreateWithoutUserInput, OauthAccountUncheckedCreateWithoutUserInput> | OauthAccountCreateWithoutUserInput[] | OauthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthAccountCreateOrConnectWithoutUserInput | OauthAccountCreateOrConnectWithoutUserInput[]
    createMany?: OauthAccountCreateManyUserInputEnvelope
    connect?: OauthAccountWhereUniqueInput | OauthAccountWhereUniqueInput[]
  }

  export type ProcessingHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ProcessingHistoryCreateWithoutUserInput, ProcessingHistoryUncheckedCreateWithoutUserInput> | ProcessingHistoryCreateWithoutUserInput[] | ProcessingHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProcessingHistoryCreateOrConnectWithoutUserInput | ProcessingHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ProcessingHistoryCreateManyUserInputEnvelope
    connect?: ProcessingHistoryWhereUniqueInput | ProcessingHistoryWhereUniqueInput[]
  }

  export type OauthAccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OauthAccountCreateWithoutUserInput, OauthAccountUncheckedCreateWithoutUserInput> | OauthAccountCreateWithoutUserInput[] | OauthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthAccountCreateOrConnectWithoutUserInput | OauthAccountCreateOrConnectWithoutUserInput[]
    createMany?: OauthAccountCreateManyUserInputEnvelope
    connect?: OauthAccountWhereUniqueInput | OauthAccountWhereUniqueInput[]
  }

  export type ProcessingHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ProcessingHistoryCreateWithoutUserInput, ProcessingHistoryUncheckedCreateWithoutUserInput> | ProcessingHistoryCreateWithoutUserInput[] | ProcessingHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProcessingHistoryCreateOrConnectWithoutUserInput | ProcessingHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ProcessingHistoryCreateManyUserInputEnvelope
    connect?: ProcessingHistoryWhereUniqueInput | ProcessingHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OauthAccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<OauthAccountCreateWithoutUserInput, OauthAccountUncheckedCreateWithoutUserInput> | OauthAccountCreateWithoutUserInput[] | OauthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthAccountCreateOrConnectWithoutUserInput | OauthAccountCreateOrConnectWithoutUserInput[]
    upsert?: OauthAccountUpsertWithWhereUniqueWithoutUserInput | OauthAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OauthAccountCreateManyUserInputEnvelope
    set?: OauthAccountWhereUniqueInput | OauthAccountWhereUniqueInput[]
    disconnect?: OauthAccountWhereUniqueInput | OauthAccountWhereUniqueInput[]
    delete?: OauthAccountWhereUniqueInput | OauthAccountWhereUniqueInput[]
    connect?: OauthAccountWhereUniqueInput | OauthAccountWhereUniqueInput[]
    update?: OauthAccountUpdateWithWhereUniqueWithoutUserInput | OauthAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OauthAccountUpdateManyWithWhereWithoutUserInput | OauthAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OauthAccountScalarWhereInput | OauthAccountScalarWhereInput[]
  }

  export type ProcessingHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProcessingHistoryCreateWithoutUserInput, ProcessingHistoryUncheckedCreateWithoutUserInput> | ProcessingHistoryCreateWithoutUserInput[] | ProcessingHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProcessingHistoryCreateOrConnectWithoutUserInput | ProcessingHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ProcessingHistoryUpsertWithWhereUniqueWithoutUserInput | ProcessingHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProcessingHistoryCreateManyUserInputEnvelope
    set?: ProcessingHistoryWhereUniqueInput | ProcessingHistoryWhereUniqueInput[]
    disconnect?: ProcessingHistoryWhereUniqueInput | ProcessingHistoryWhereUniqueInput[]
    delete?: ProcessingHistoryWhereUniqueInput | ProcessingHistoryWhereUniqueInput[]
    connect?: ProcessingHistoryWhereUniqueInput | ProcessingHistoryWhereUniqueInput[]
    update?: ProcessingHistoryUpdateWithWhereUniqueWithoutUserInput | ProcessingHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProcessingHistoryUpdateManyWithWhereWithoutUserInput | ProcessingHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProcessingHistoryScalarWhereInput | ProcessingHistoryScalarWhereInput[]
  }

  export type OauthAccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OauthAccountCreateWithoutUserInput, OauthAccountUncheckedCreateWithoutUserInput> | OauthAccountCreateWithoutUserInput[] | OauthAccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OauthAccountCreateOrConnectWithoutUserInput | OauthAccountCreateOrConnectWithoutUserInput[]
    upsert?: OauthAccountUpsertWithWhereUniqueWithoutUserInput | OauthAccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OauthAccountCreateManyUserInputEnvelope
    set?: OauthAccountWhereUniqueInput | OauthAccountWhereUniqueInput[]
    disconnect?: OauthAccountWhereUniqueInput | OauthAccountWhereUniqueInput[]
    delete?: OauthAccountWhereUniqueInput | OauthAccountWhereUniqueInput[]
    connect?: OauthAccountWhereUniqueInput | OauthAccountWhereUniqueInput[]
    update?: OauthAccountUpdateWithWhereUniqueWithoutUserInput | OauthAccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OauthAccountUpdateManyWithWhereWithoutUserInput | OauthAccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OauthAccountScalarWhereInput | OauthAccountScalarWhereInput[]
  }

  export type ProcessingHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ProcessingHistoryCreateWithoutUserInput, ProcessingHistoryUncheckedCreateWithoutUserInput> | ProcessingHistoryCreateWithoutUserInput[] | ProcessingHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ProcessingHistoryCreateOrConnectWithoutUserInput | ProcessingHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ProcessingHistoryUpsertWithWhereUniqueWithoutUserInput | ProcessingHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ProcessingHistoryCreateManyUserInputEnvelope
    set?: ProcessingHistoryWhereUniqueInput | ProcessingHistoryWhereUniqueInput[]
    disconnect?: ProcessingHistoryWhereUniqueInput | ProcessingHistoryWhereUniqueInput[]
    delete?: ProcessingHistoryWhereUniqueInput | ProcessingHistoryWhereUniqueInput[]
    connect?: ProcessingHistoryWhereUniqueInput | ProcessingHistoryWhereUniqueInput[]
    update?: ProcessingHistoryUpdateWithWhereUniqueWithoutUserInput | ProcessingHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ProcessingHistoryUpdateManyWithWhereWithoutUserInput | ProcessingHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ProcessingHistoryScalarWhereInput | ProcessingHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutOauthAccountsInput = {
    create?: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutOauthAccountsNestedInput = {
    create?: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutOauthAccountsInput
    upsert?: UserUpsertWithoutOauthAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOauthAccountsInput, UserUpdateWithoutOauthAccountsInput>, UserUncheckedUpdateWithoutOauthAccountsInput>
  }

  export type UserCreateNestedOneWithoutProcessingHistoriesInput = {
    create?: XOR<UserCreateWithoutProcessingHistoriesInput, UserUncheckedCreateWithoutProcessingHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProcessingHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type HistoryCoinDetailCreateNestedManyWithoutHistoryInput = {
    create?: XOR<HistoryCoinDetailCreateWithoutHistoryInput, HistoryCoinDetailUncheckedCreateWithoutHistoryInput> | HistoryCoinDetailCreateWithoutHistoryInput[] | HistoryCoinDetailUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: HistoryCoinDetailCreateOrConnectWithoutHistoryInput | HistoryCoinDetailCreateOrConnectWithoutHistoryInput[]
    createMany?: HistoryCoinDetailCreateManyHistoryInputEnvelope
    connect?: HistoryCoinDetailWhereUniqueInput | HistoryCoinDetailWhereUniqueInput[]
  }

  export type HistoryCoinDetailUncheckedCreateNestedManyWithoutHistoryInput = {
    create?: XOR<HistoryCoinDetailCreateWithoutHistoryInput, HistoryCoinDetailUncheckedCreateWithoutHistoryInput> | HistoryCoinDetailCreateWithoutHistoryInput[] | HistoryCoinDetailUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: HistoryCoinDetailCreateOrConnectWithoutHistoryInput | HistoryCoinDetailCreateOrConnectWithoutHistoryInput[]
    createMany?: HistoryCoinDetailCreateManyHistoryInputEnvelope
    connect?: HistoryCoinDetailWhereUniqueInput | HistoryCoinDetailWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutProcessingHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutProcessingHistoriesInput, UserUncheckedCreateWithoutProcessingHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutProcessingHistoriesInput
    upsert?: UserUpsertWithoutProcessingHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProcessingHistoriesInput, UserUpdateWithoutProcessingHistoriesInput>, UserUncheckedUpdateWithoutProcessingHistoriesInput>
  }

  export type HistoryCoinDetailUpdateManyWithoutHistoryNestedInput = {
    create?: XOR<HistoryCoinDetailCreateWithoutHistoryInput, HistoryCoinDetailUncheckedCreateWithoutHistoryInput> | HistoryCoinDetailCreateWithoutHistoryInput[] | HistoryCoinDetailUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: HistoryCoinDetailCreateOrConnectWithoutHistoryInput | HistoryCoinDetailCreateOrConnectWithoutHistoryInput[]
    upsert?: HistoryCoinDetailUpsertWithWhereUniqueWithoutHistoryInput | HistoryCoinDetailUpsertWithWhereUniqueWithoutHistoryInput[]
    createMany?: HistoryCoinDetailCreateManyHistoryInputEnvelope
    set?: HistoryCoinDetailWhereUniqueInput | HistoryCoinDetailWhereUniqueInput[]
    disconnect?: HistoryCoinDetailWhereUniqueInput | HistoryCoinDetailWhereUniqueInput[]
    delete?: HistoryCoinDetailWhereUniqueInput | HistoryCoinDetailWhereUniqueInput[]
    connect?: HistoryCoinDetailWhereUniqueInput | HistoryCoinDetailWhereUniqueInput[]
    update?: HistoryCoinDetailUpdateWithWhereUniqueWithoutHistoryInput | HistoryCoinDetailUpdateWithWhereUniqueWithoutHistoryInput[]
    updateMany?: HistoryCoinDetailUpdateManyWithWhereWithoutHistoryInput | HistoryCoinDetailUpdateManyWithWhereWithoutHistoryInput[]
    deleteMany?: HistoryCoinDetailScalarWhereInput | HistoryCoinDetailScalarWhereInput[]
  }

  export type HistoryCoinDetailUncheckedUpdateManyWithoutHistoryNestedInput = {
    create?: XOR<HistoryCoinDetailCreateWithoutHistoryInput, HistoryCoinDetailUncheckedCreateWithoutHistoryInput> | HistoryCoinDetailCreateWithoutHistoryInput[] | HistoryCoinDetailUncheckedCreateWithoutHistoryInput[]
    connectOrCreate?: HistoryCoinDetailCreateOrConnectWithoutHistoryInput | HistoryCoinDetailCreateOrConnectWithoutHistoryInput[]
    upsert?: HistoryCoinDetailUpsertWithWhereUniqueWithoutHistoryInput | HistoryCoinDetailUpsertWithWhereUniqueWithoutHistoryInput[]
    createMany?: HistoryCoinDetailCreateManyHistoryInputEnvelope
    set?: HistoryCoinDetailWhereUniqueInput | HistoryCoinDetailWhereUniqueInput[]
    disconnect?: HistoryCoinDetailWhereUniqueInput | HistoryCoinDetailWhereUniqueInput[]
    delete?: HistoryCoinDetailWhereUniqueInput | HistoryCoinDetailWhereUniqueInput[]
    connect?: HistoryCoinDetailWhereUniqueInput | HistoryCoinDetailWhereUniqueInput[]
    update?: HistoryCoinDetailUpdateWithWhereUniqueWithoutHistoryInput | HistoryCoinDetailUpdateWithWhereUniqueWithoutHistoryInput[]
    updateMany?: HistoryCoinDetailUpdateManyWithWhereWithoutHistoryInput | HistoryCoinDetailUpdateManyWithWhereWithoutHistoryInput[]
    deleteMany?: HistoryCoinDetailScalarWhereInput | HistoryCoinDetailScalarWhereInput[]
  }

  export type ProcessingHistoryCreateNestedOneWithoutDetailsInput = {
    create?: XOR<ProcessingHistoryCreateWithoutDetailsInput, ProcessingHistoryUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: ProcessingHistoryCreateOrConnectWithoutDetailsInput
    connect?: ProcessingHistoryWhereUniqueInput
  }

  export type ProcessingHistoryUpdateOneRequiredWithoutDetailsNestedInput = {
    create?: XOR<ProcessingHistoryCreateWithoutDetailsInput, ProcessingHistoryUncheckedCreateWithoutDetailsInput>
    connectOrCreate?: ProcessingHistoryCreateOrConnectWithoutDetailsInput
    upsert?: ProcessingHistoryUpsertWithoutDetailsInput
    connect?: ProcessingHistoryWhereUniqueInput
    update?: XOR<XOR<ProcessingHistoryUpdateToOneWithWhereWithoutDetailsInput, ProcessingHistoryUpdateWithoutDetailsInput>, ProcessingHistoryUncheckedUpdateWithoutDetailsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type OauthAccountCreateWithoutUserInput = {
    id?: string
    providerId: string
    providerUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OauthAccountUncheckedCreateWithoutUserInput = {
    id?: string
    providerId: string
    providerUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OauthAccountCreateOrConnectWithoutUserInput = {
    where: OauthAccountWhereUniqueInput
    create: XOR<OauthAccountCreateWithoutUserInput, OauthAccountUncheckedCreateWithoutUserInput>
  }

  export type OauthAccountCreateManyUserInputEnvelope = {
    data: OauthAccountCreateManyUserInput | OauthAccountCreateManyUserInput[]
  }

  export type ProcessingHistoryCreateWithoutUserInput = {
    id?: string
    totalCount: number
    totalValue: number
    labeledImage: string
    createdAt?: Date | string
    details?: HistoryCoinDetailCreateNestedManyWithoutHistoryInput
  }

  export type ProcessingHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    totalCount: number
    totalValue: number
    labeledImage: string
    createdAt?: Date | string
    details?: HistoryCoinDetailUncheckedCreateNestedManyWithoutHistoryInput
  }

  export type ProcessingHistoryCreateOrConnectWithoutUserInput = {
    where: ProcessingHistoryWhereUniqueInput
    create: XOR<ProcessingHistoryCreateWithoutUserInput, ProcessingHistoryUncheckedCreateWithoutUserInput>
  }

  export type ProcessingHistoryCreateManyUserInputEnvelope = {
    data: ProcessingHistoryCreateManyUserInput | ProcessingHistoryCreateManyUserInput[]
  }

  export type OauthAccountUpsertWithWhereUniqueWithoutUserInput = {
    where: OauthAccountWhereUniqueInput
    update: XOR<OauthAccountUpdateWithoutUserInput, OauthAccountUncheckedUpdateWithoutUserInput>
    create: XOR<OauthAccountCreateWithoutUserInput, OauthAccountUncheckedCreateWithoutUserInput>
  }

  export type OauthAccountUpdateWithWhereUniqueWithoutUserInput = {
    where: OauthAccountWhereUniqueInput
    data: XOR<OauthAccountUpdateWithoutUserInput, OauthAccountUncheckedUpdateWithoutUserInput>
  }

  export type OauthAccountUpdateManyWithWhereWithoutUserInput = {
    where: OauthAccountScalarWhereInput
    data: XOR<OauthAccountUpdateManyMutationInput, OauthAccountUncheckedUpdateManyWithoutUserInput>
  }

  export type OauthAccountScalarWhereInput = {
    AND?: OauthAccountScalarWhereInput | OauthAccountScalarWhereInput[]
    OR?: OauthAccountScalarWhereInput[]
    NOT?: OauthAccountScalarWhereInput | OauthAccountScalarWhereInput[]
    id?: StringFilter<"OauthAccount"> | string
    providerId?: StringFilter<"OauthAccount"> | string
    providerUserId?: StringFilter<"OauthAccount"> | string
    userId?: StringFilter<"OauthAccount"> | string
    createdAt?: DateTimeFilter<"OauthAccount"> | Date | string
    updatedAt?: DateTimeFilter<"OauthAccount"> | Date | string
  }

  export type ProcessingHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ProcessingHistoryWhereUniqueInput
    update: XOR<ProcessingHistoryUpdateWithoutUserInput, ProcessingHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ProcessingHistoryCreateWithoutUserInput, ProcessingHistoryUncheckedCreateWithoutUserInput>
  }

  export type ProcessingHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ProcessingHistoryWhereUniqueInput
    data: XOR<ProcessingHistoryUpdateWithoutUserInput, ProcessingHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ProcessingHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ProcessingHistoryScalarWhereInput
    data: XOR<ProcessingHistoryUpdateManyMutationInput, ProcessingHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ProcessingHistoryScalarWhereInput = {
    AND?: ProcessingHistoryScalarWhereInput | ProcessingHistoryScalarWhereInput[]
    OR?: ProcessingHistoryScalarWhereInput[]
    NOT?: ProcessingHistoryScalarWhereInput | ProcessingHistoryScalarWhereInput[]
    id?: StringFilter<"ProcessingHistory"> | string
    totalCount?: IntFilter<"ProcessingHistory"> | number
    totalValue?: FloatFilter<"ProcessingHistory"> | number
    labeledImage?: StringFilter<"ProcessingHistory"> | string
    createdAt?: DateTimeFilter<"ProcessingHistory"> | Date | string
    userId?: StringFilter<"ProcessingHistory"> | string
  }

  export type UserCreateWithoutOauthAccountsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processingHistories?: ProcessingHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOauthAccountsInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    processingHistories?: ProcessingHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOauthAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
  }

  export type UserUpsertWithoutOauthAccountsInput = {
    update: XOR<UserUpdateWithoutOauthAccountsInput, UserUncheckedUpdateWithoutOauthAccountsInput>
    create: XOR<UserCreateWithoutOauthAccountsInput, UserUncheckedCreateWithoutOauthAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOauthAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOauthAccountsInput, UserUncheckedUpdateWithoutOauthAccountsInput>
  }

  export type UserUpdateWithoutOauthAccountsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processingHistories?: ProcessingHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOauthAccountsInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    processingHistories?: ProcessingHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutProcessingHistoriesInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    oauthAccounts?: OauthAccountCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProcessingHistoriesInput = {
    id?: string
    email: string
    name?: string | null
    avatarUrl?: string | null
    hashedPassword?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    oauthAccounts?: OauthAccountUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProcessingHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProcessingHistoriesInput, UserUncheckedCreateWithoutProcessingHistoriesInput>
  }

  export type HistoryCoinDetailCreateWithoutHistoryInput = {
    id?: string
    type: string
    count: number
    value: number
  }

  export type HistoryCoinDetailUncheckedCreateWithoutHistoryInput = {
    id?: string
    type: string
    count: number
    value: number
  }

  export type HistoryCoinDetailCreateOrConnectWithoutHistoryInput = {
    where: HistoryCoinDetailWhereUniqueInput
    create: XOR<HistoryCoinDetailCreateWithoutHistoryInput, HistoryCoinDetailUncheckedCreateWithoutHistoryInput>
  }

  export type HistoryCoinDetailCreateManyHistoryInputEnvelope = {
    data: HistoryCoinDetailCreateManyHistoryInput | HistoryCoinDetailCreateManyHistoryInput[]
  }

  export type UserUpsertWithoutProcessingHistoriesInput = {
    update: XOR<UserUpdateWithoutProcessingHistoriesInput, UserUncheckedUpdateWithoutProcessingHistoriesInput>
    create: XOR<UserCreateWithoutProcessingHistoriesInput, UserUncheckedCreateWithoutProcessingHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProcessingHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProcessingHistoriesInput, UserUncheckedUpdateWithoutProcessingHistoriesInput>
  }

  export type UserUpdateWithoutProcessingHistoriesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthAccounts?: OauthAccountUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProcessingHistoriesInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    avatarUrl?: NullableStringFieldUpdateOperationsInput | string | null
    hashedPassword?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    oauthAccounts?: OauthAccountUncheckedUpdateManyWithoutUserNestedInput
  }

  export type HistoryCoinDetailUpsertWithWhereUniqueWithoutHistoryInput = {
    where: HistoryCoinDetailWhereUniqueInput
    update: XOR<HistoryCoinDetailUpdateWithoutHistoryInput, HistoryCoinDetailUncheckedUpdateWithoutHistoryInput>
    create: XOR<HistoryCoinDetailCreateWithoutHistoryInput, HistoryCoinDetailUncheckedCreateWithoutHistoryInput>
  }

  export type HistoryCoinDetailUpdateWithWhereUniqueWithoutHistoryInput = {
    where: HistoryCoinDetailWhereUniqueInput
    data: XOR<HistoryCoinDetailUpdateWithoutHistoryInput, HistoryCoinDetailUncheckedUpdateWithoutHistoryInput>
  }

  export type HistoryCoinDetailUpdateManyWithWhereWithoutHistoryInput = {
    where: HistoryCoinDetailScalarWhereInput
    data: XOR<HistoryCoinDetailUpdateManyMutationInput, HistoryCoinDetailUncheckedUpdateManyWithoutHistoryInput>
  }

  export type HistoryCoinDetailScalarWhereInput = {
    AND?: HistoryCoinDetailScalarWhereInput | HistoryCoinDetailScalarWhereInput[]
    OR?: HistoryCoinDetailScalarWhereInput[]
    NOT?: HistoryCoinDetailScalarWhereInput | HistoryCoinDetailScalarWhereInput[]
    id?: StringFilter<"HistoryCoinDetail"> | string
    type?: StringFilter<"HistoryCoinDetail"> | string
    count?: IntFilter<"HistoryCoinDetail"> | number
    value?: FloatFilter<"HistoryCoinDetail"> | number
    historyId?: StringFilter<"HistoryCoinDetail"> | string
  }

  export type ProcessingHistoryCreateWithoutDetailsInput = {
    id?: string
    totalCount: number
    totalValue: number
    labeledImage: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutProcessingHistoriesInput
  }

  export type ProcessingHistoryUncheckedCreateWithoutDetailsInput = {
    id?: string
    totalCount: number
    totalValue: number
    labeledImage: string
    createdAt?: Date | string
    userId: string
  }

  export type ProcessingHistoryCreateOrConnectWithoutDetailsInput = {
    where: ProcessingHistoryWhereUniqueInput
    create: XOR<ProcessingHistoryCreateWithoutDetailsInput, ProcessingHistoryUncheckedCreateWithoutDetailsInput>
  }

  export type ProcessingHistoryUpsertWithoutDetailsInput = {
    update: XOR<ProcessingHistoryUpdateWithoutDetailsInput, ProcessingHistoryUncheckedUpdateWithoutDetailsInput>
    create: XOR<ProcessingHistoryCreateWithoutDetailsInput, ProcessingHistoryUncheckedCreateWithoutDetailsInput>
    where?: ProcessingHistoryWhereInput
  }

  export type ProcessingHistoryUpdateToOneWithWhereWithoutDetailsInput = {
    where?: ProcessingHistoryWhereInput
    data: XOR<ProcessingHistoryUpdateWithoutDetailsInput, ProcessingHistoryUncheckedUpdateWithoutDetailsInput>
  }

  export type ProcessingHistoryUpdateWithoutDetailsInput = {
    totalCount?: IntFieldUpdateOperationsInput | number
    totalValue?: FloatFieldUpdateOperationsInput | number
    labeledImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutProcessingHistoriesNestedInput
  }

  export type ProcessingHistoryUncheckedUpdateWithoutDetailsInput = {
    totalCount?: IntFieldUpdateOperationsInput | number
    totalValue?: FloatFieldUpdateOperationsInput | number
    labeledImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type OauthAccountCreateManyUserInput = {
    id?: string
    providerId: string
    providerUserId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProcessingHistoryCreateManyUserInput = {
    id?: string
    totalCount: number
    totalValue: number
    labeledImage: string
    createdAt?: Date | string
  }

  export type OauthAccountUpdateWithoutUserInput = {
    providerId?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OauthAccountUncheckedUpdateWithoutUserInput = {
    providerId?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OauthAccountUncheckedUpdateManyWithoutUserInput = {
    providerId?: StringFieldUpdateOperationsInput | string
    providerUserId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProcessingHistoryUpdateWithoutUserInput = {
    totalCount?: IntFieldUpdateOperationsInput | number
    totalValue?: FloatFieldUpdateOperationsInput | number
    labeledImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: HistoryCoinDetailUpdateManyWithoutHistoryNestedInput
  }

  export type ProcessingHistoryUncheckedUpdateWithoutUserInput = {
    totalCount?: IntFieldUpdateOperationsInput | number
    totalValue?: FloatFieldUpdateOperationsInput | number
    labeledImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    details?: HistoryCoinDetailUncheckedUpdateManyWithoutHistoryNestedInput
  }

  export type ProcessingHistoryUncheckedUpdateManyWithoutUserInput = {
    totalCount?: IntFieldUpdateOperationsInput | number
    totalValue?: FloatFieldUpdateOperationsInput | number
    labeledImage?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HistoryCoinDetailCreateManyHistoryInput = {
    id?: string
    type: string
    count: number
    value: number
  }

  export type HistoryCoinDetailUpdateWithoutHistoryInput = {
    type?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type HistoryCoinDetailUncheckedUpdateWithoutHistoryInput = {
    type?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }

  export type HistoryCoinDetailUncheckedUpdateManyWithoutHistoryInput = {
    type?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    value?: FloatFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProcessingHistoryCountOutputTypeDefaultArgs instead
     */
    export type ProcessingHistoryCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProcessingHistoryCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OauthAccountDefaultArgs instead
     */
    export type OauthAccountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OauthAccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ProcessingHistoryDefaultArgs instead
     */
    export type ProcessingHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ProcessingHistoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HistoryCoinDetailDefaultArgs instead
     */
    export type HistoryCoinDetailArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HistoryCoinDetailDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}