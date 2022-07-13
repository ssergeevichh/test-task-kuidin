/* eslint-disable no-throw-literal */
import { createErrorData, rulesHandling } from './rules-handling'

export function getFullDataFromForm(form) {
  const formData = new FormData(form)
  const obj = {}
  formData.forEach((value, inputName) => {
    obj[inputName] = value
  })
  return obj
}

export function validateFormData(data, rules) {
  const errors = []
  const dataEntries = Object.entries(data)

  dataEntries.forEach(([inputName, value]) => {
    const field = rules.find(field => field.name === inputName)
    if (field) {
      field.rules.every((rule) => {
        const ruleHandling = rulesHandling.find(ruleHandling => ruleHandling.name === rule.type)
        if (!ruleHandling.func(value, rule.value)) {
          errors.push(createErrorData(rule.message || ruleHandling.defaultMessage, inputName))

          return false
        }

        return true
      })
    }

  })
  return errors
}