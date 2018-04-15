# Button

A button indicates a possible user action

- [Button](#button)
    - [SeButton](#sebutton)
        - [Name](#name)
        - [Props](#props)
    - [SeButtonGroup](#sebuttongroup)
        - [Name](#name)
        - [Props](#props)

> Note: All * makred are required attributes

## SeButton
### Name
`se-button`
### Props
| Name     | Default | Type    | Description                                                    |
| -------- | ------- | ------- | -------------------------------------------------------------- |
| color    |         | String  | Semantic UI colors: (primary, secondary, red, orange)          |
| label    |         | String  | Label content for button                                       |
| icon     |         | String  | A button can have only an icon                                 |
| basic    | `false` | Boolean | A basic button is less pronounced                              |
| inverted | `false` | Boolean | A button can be formatted to appear on dark backgrounds        |
| disabled | `false` | Boolean | A button can show it is currently unable to be interacted with |
| loading  | `false` | Boolean | A button can show a loading indicator                          |
| size     |         | String  | A button can have different sizes(mini,tiny,huge,massive)      |
| float    |         | String  | A button can be aligned to the left or right of its container  |
| compact  | `false` | Boolean | A button can reduce its padding to fit into tighter spaces     |
| fluid    | `false` | Boolean | A button can take the width of its container                   |
| circular | `false` | Boolean | A button can be circular                                       |


## SeButtonGroup
### Name
`se-button-group`
### Props
| Name     | Default | Type    | Description                                                             |
| -------- | ------- | ------- | ----------------------------------------------------------------------- |
| icon     |         | Boolean | Button groups can show groups of icons                                  |
| width    |         | String  | Groups can have their widths divided evenly (e.g. `five` for 5 buttons) |
| vertical | `false` | Boolean | Groups can be formatted to appear vertically                            |
| labeled  | `false` | Boolean | Groups can be formatted as labeled icons                                |
| color    |         | String  | Semantic UI colors: (primary, secondary, red, orange)                   |
| basic    | `false` | Boolean | A button group can be less pronounced                                   |
| size     |         | String  | A button group can have different sizes(mini,tiny,huge,massive)         |