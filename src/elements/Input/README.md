# Input

An input is a field used to elicit a response from a user

- [Input](#input)
  - [SeInput](#seinput)
    - [Name](#name)
  - [Props](#props)
  - [Slots](#slots)

> Note: All * marked are required attributes

## SeInput
### Name
`se-input`
## Props
| Name             | Default | Type    | Description                                                                |
| ---------------- | ------- | ------- | -------------------------------------------------------------------------- |
| type*            |         | String  | The HTML input type.                                                       |
| action           | `false` | Boolean | An Input can be formatted to alert the user to an action they may perform. |
| action-position  |         | String  | An action can appear along side an Input on the left or right.             |
| disalbed         | `false` | Boolean | An Input field can show that it is disabled.                               |
| fluid            | `false` | Boolean | Take on the size of its container.                                         |
| placeholder-text |         | String  | Placeholder content for the input                                          |
| focus            | `false` | Boolean | An Input field can show a user is currently interacting with it.           |
| loading          | `false` | Boolean | An Icon Input field can show that it is currently loading data.            |
| icon             |         | String  | Optional Icon to display inside the Input.                                 |
| icon-position    |         | String  | An Icon can appear inside an Input on the left or right                    |
| label-position   |         | String  | Position of label slot (must match with slot's position)                   |
| error            | `false` | Boolean | An Input field can show the data contains errors.                          |
| value            |         | String  | Input field's value                                                        |
| name             |         | String  | Name of HTML input element                                                 |
## Slots
| Name         | Description                                         |
| ------------ | --------------------------------------------------- |
| left-action  | Slot for rendering action on left of input element  |
| left-label   | Slot for rendering label on left of input element   |
| right-label  | Slot for rendering label on right of input element  |
| right-action | Slot for rendering action on right of input element |
