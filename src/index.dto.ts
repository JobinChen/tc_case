// import { IsString, IsNotEmpty, Allow, IsNumber } from 'class-validator';
// export class InitDataDto {
//   @IsNotEmpty()
//   readonly name: string;
// }

export default function InitData(target, name, descriptor) {
  console.log(target, name, descriptor.value)

  let oldValue = descriptor.value;

  descriptor.value = function () {
      console.log(`before calling ${name} with`, arguments);
      return oldValue.apply(this, arguments);
  };
  // return descriptor;
}
