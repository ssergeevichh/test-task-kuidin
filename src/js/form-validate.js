import { FormValidator } from "./validation/form/validator";
import { addFormError } from "./validation/form";

export default function formValidate() {
  const formValidator = new FormValidator(".contact-form", {
    rules: [
      {
        name: "name",
        rules: [
          {
            type: "required",
            message: "Name is required"
          },
          {
            type: "minLength",
            value: 2,
            message: "Name must be at least 2 characters long"
          }
        ]
      },
      {
        name: "email",
        rules: [
          {
            type: "required",
            message: "Email is required"
          },
          {
            type: "correctEmail",
            message: "Email is not valid"
          }
        ]
      },
      {
        name: "phone",
        rules: [
          {
            type: "required",
            message: "Phone is required"
          },
          {
            type: "minLength",
            value: 10,
            message: "Phone must be at least 10 characters long"
          },
          {
            type: 'onlyNumbers',
            message: 'Phone must be only numbers'
          }
        ]
      }
    ],
    onSuccsessCallback: (data, form) => {
      console.log(data)
      form.reset()
    },
    onErrorCallback: (errors, form) => {
      errors.forEach(error => addFormError(form, error))
    }
  })
}
