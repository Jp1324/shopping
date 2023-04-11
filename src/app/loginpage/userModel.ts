 export class User {
    constructor(
      public id: number | null,
      public login?: string,
      public firstName?: string | null,
      public otp?: string | null,
      public lastName?: string | null,
      public email?: string,
      public activated?: boolean,
      public langKey?: string,
      public authorities?: string[],
      public createdBy?: string,
      public createdDate?: Date,
      public lastModifiedBy?: string,
      public lastModifiedDate?: Date
    ) {}
  }