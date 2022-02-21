import { Listing } from '@prisma/client'
import { ValidatorConstraint, ValidatorConstraintInterface } from 'class-validator'
import { ListingsUtilsService } from '../listings-utils.service'

@ValidatorConstraint({ name: 'isValidSelect', async: false })
export class IsValidSelectField implements ValidatorConstraintInterface {
  private validatorService = new ListingsUtilsService()

  validate(values: (keyof Listing)[]) {
    return this.validatorService.validateSelectFields(values)
  }

  defaultMessage() {
    return 'Invalid select fields'
  }
}
