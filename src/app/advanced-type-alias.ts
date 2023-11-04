type User = {
    firstName: string,
    lastName: string,
    password: string,
    age?: number
}

// Dưới đây là các type alias mà TS đã built-in. Chẳng qua là tạo mới lại và có hậu tố là selfCreated để
// nhìn xem TS định nghĩa chúng như thế nào

// Exclude: Loại bỏ những types ở T nếu như những types này gán được cho U
type Exclude_selfCreated<T, U> = T extends U ? never : T;
type SomeDiff = Exclude_selfCreated<'a' | 'b' | 'c', 'c' | 'd'>; // 'a' | 'b'. 'c' đã bị removed.
type keysInUser = Exclude_selfCreated<keyof User, 'password'>;

// Extract: Loại bỏ những types ở T nếu như những types này KHÔNG gán được cho U
type Extract_selfCreated<T, U> = T extends U ? T : never;
type SomeFilter = Extract_selfCreated<'a' | 'b' | 'c', 'c' | 'd'>; // 'c'. 'a' và 'b' đã bị removed.

// hoặc có thể dùng Exclude để tạo type alias NonNullable
// loại bỏ null và undefined từ T
type NonNullable_selfCreated<T> = Exclude<T, null | undefined>;
type StringOrNumberOrNull = string | number | null;
type StringOrNull = NonNullable_selfCreated<StringOrNumberOrNull>;

// ================= Các type alias dưới đây apply cho type = {...} và interface ===============
const user1: Readonly<User> = {
    firstName: 'Tai',
    lastName: 'Phan Văn',
    password: '123'
};
// user1.firstName = 'abc'; -> error

// Làm cho tất cả các props trong type thành optional.
// Eg: Rất có lợi cho việc type 1 tham số khi cần truyền vào 1 type nào đó mà ko bắt buộc.
// -> Duyệt qua tất cả key xong thêm ? ở cuối để thể hiện optional
type Partial_selfCreated<T> = { [P in keyof T]?: T[P] };
const user2: Partial<User> = {
    // Các property kia là optional
    password: '123'
};
user2.firstName = 'Phan Văn Tài';

// Type tự tạo, cho phép value của các property có giá trị có thể null hoặc hoặc là undefined
type Nullable<T> = { [P in keyof T]: T[P] | null | undefined };
const user3: Nullable<User> = {
    firstName: 'Tai',
    lastName: 'Phan Văn',
    password: null
}

// Biến tất cả property nullable thành required
type Required_selfCreated<T> = {
    [P in keyof T]-?: T[P];
};
const user: Required_selfCreated<User> = {
    firstName: 'Tai',
    lastName: 'Phan Văn',
    password: '123',
    age: 20
}

// TS đã có Pick và Record rồi, và đây là code của nó, kết quả trả về 1 type mới
type Pick_selfCreated<T, K extends keyof T> = { [P in K]: T[P] };
type Record__selfCreated<K extends keyof any, T> = { [P in K]: T };

interface Person {
    firstName: string;
    lastName: string;
    password: string;
};

// Pick: Pick từ trong T những type có key là K
type person = Pick_selfCreated<Person, 'firstName' | 'lastName'>;

// Record: Gán type T cho lần lượt từng key P trong K
type ThreeStringProps = Record__selfCreated<'prop1' | 'prop2' | 'prop3', string>;

// ReturnType: trả về type của giá trị mà function T trả về.
type ReturnType_selfCreated<T> = T extends (...args: any[]) => infer R ? R : any;
type result = ReturnType_selfCreated<() => string>; // string

// Omit: loại bỏ type có key là K trong T
// Exclude<keyof T, K> trả về các key mà không chứa K, xong dùng Pick để tạo ra 1 type mới
// có key nằm trong tập kết quả Exclude
type Omit_selfCreated<T, K extends keyof T> = Pick_selfCreated<T, Exclude<keyof T, K>>;
type PersonWithoutPassword = Omit_selfCreated<Person, 'password'>; // {firstName: string, lastName: string}