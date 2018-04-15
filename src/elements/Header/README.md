# Header

A header provides a short summary of content
Table of Contents:

- [Header](#header)
    - [SeHeader](#seheader)
        - [Name](#name)
        - [Props](#props)
    - [SeSubHeader](#sesubheader)
        - [Name](#name)
        - [Props](#props)

> Note: All * makred are required attributess

## SeHeader
### Name 
`se-header`
### Props
| Name      | Default | Type    | Description                                                                                                 |
| --------- | ------- | ------- | ----------------------------------------------------------------------------------------------------------- |
| as*       |         | String  | An element type to render as (String)                                                                       |
| color     |         | String  | Semantic UI colors: (primary, secondary, red, orange)                                                       |
| inverted  | `false` | Boolean | A header can have its colors inverted for contrast                                                          |
| icon      |         | String  | A header may contain an icon                                                                                |
| image     |         | String  | A header may contain an image                                                                               |
| content   |         | String  | Headers may be oriented to give the importance of a section in the context of the content that surrounds it |
| subheader | `false` | Boolean | Headers may contain subheaders (Use `se-sub-header` for this)                                               |
| block     | `false` | Boolean | A header can be formatted to appear inside a content block                                                  |
| in-class  |         | String  | Any extra semantic ui class to applied on element                                                           |
| disabled  | `false` | Boolean | A header can show that it is inactive                                                                       |
| align     |         | String  | A header can have its text aligned to a side(left, right, center)                                           |
| justified | `false` | Boolean | A header can have its text justified                                                                        |


## SeSubHeader
### Name
`se-sub-header`
### Props
`None`