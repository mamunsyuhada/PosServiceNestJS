import { Injectable } from '@nestjs/common';
import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { getConnection } from 'typeorm';

@ValidatorConstraint({ async: true })
@Injectable()
export class ExistValidator implements ValidatorConstraintInterface {
  async validate(_: any, args: ValidationArguments) {
    const find = { [args.constraints[1]]: args.value };
    const cek = await getConnection()
      .getRepository(args.constraints[0])
      .findOne(find);
    return !cek ? true : false;
  }
  defaultMessage(args: ValidationArguments) {
    return `${args.property} ${args.value} already registered`;
  }
}

export function IsExist(option: any, validationOption?: ValidationOptions) {
  return function (object: any, propertyName: string) {
    registerDecorator({
      name: 'IsExist',
      target: object.constructor,
      propertyName,
      constraints: option,
      options: validationOption,
      validator: ExistValidator,
      async: true,
    });
  };
}
