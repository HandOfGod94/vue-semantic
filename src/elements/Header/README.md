# Header

A header provides a short summary of content
Table of Contents:

- [Header](#header)
    - [SeHeader](#seheader)
        - [Name](#name)
        - [Props](#props)
        - [Slots](#slots)

> Note: All * makred are required attributess

## SeHeader
### Name 
`se-header`
### Props
| Name      | Default | Type    | Description                                                         |
| --------- | ------- | ------- | ------------------------------------------------------------------- |
| as*       |         | String  | An element type to render as (String)                               |
| color     |         | String  | Semantic UI colors: (primary, secondary, red, orange)               |
| inverted  | `false` | Boolean | A header can have its colors inverted for contrast                  |
| icon      |         | String  | A header may contain an icon                                        |
| sub       | `false` | Boolean | Headers may be formatted to label smaller or de-emphasized content. |
| block     | `false` | Boolean | A header can be formatted to appear inside a content block          |
| in-class  |         | String  | Any extra semantic ui class to applied on element                   |
| disabled  | `false` | Boolean | A header can show that it is inactive                               |
| align     |         | String  | A header can have its text aligned to a side(left, right, center)   |
| justified | `false` | Boolean | A header can have its text justified                                |
| content   |         | String  | Shorthand for `content` slot                                        |
| subheader |         | String  | Shorthand for `subheader` slot                                      |

### Slots
| Name      | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| content   | Content of the header (Mainly used with `subheader` slot)             |
| subheader | A Header may contain sub header, which should be wrapped in this slot |
