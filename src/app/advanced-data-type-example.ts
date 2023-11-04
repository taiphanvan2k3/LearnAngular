import { Dictionary, ObjectDictionary } from "./Dictionary";

// Type composition
function merge<T1, T2>(o1: T1, o2: T2): T1 & T2 {
    return { ...o1, ...o2 };
}

const result = merge({ foo: 'foo' }, { bar: 'bar' });
console.log(result);

type StyleProp = {
    backgroundColor: string,
    color: string,
    padding: string,
    margin: string,
    border: string
}

type ButtonProps = {
    onClick: (event: MouseEvent) => void;
} & StyleProp;

const buttonProps: ButtonProps = {
    onClick: (event) => {
        // Xử lý sự kiện click ở đây
    },
    backgroundColor: "blue",
    color: "white",
    padding: "10px",
    margin: "5px",
    border: "1px solid black"
};

console.log(buttonProps.backgroundColor);

// Type Alias và Conditional Type
type StringOrNumber = string | number;
type StringDictionary = Dictionary<string>;
type NumberDictionary = Dictionary<number>;
type UserEntity = Dictionary<StringOrNumber>;
type UserEntity2 = ObjectDictionary<StringOrNumber>;

// Tại cùng 1 lúc chỉ dùng 1 type thôi
const user: UserEntity = {
    foo: 'foo',
    bar: 'bar'
}

const user2: UserEntity = {
    foo: 123,
    bar: 456
};

const user3: UserEntity2 = {
    foo: 123,
    bar: '456'
}