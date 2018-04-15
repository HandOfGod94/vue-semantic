# Label

A label displays content classification

- [Label](#label)
    - [SeLabel](#selabel)
        - [Name](#name)
        - [Props](#props)
    - [SeLabelGroup](#selabelgroup)
        - [Name](#name)
        - [Props](#props)
    - [SeLabelDetail](#selabeldetail)
        - [Name](#name)
        - [Props](#props)

## SeLabel
### Name
`se-label`
### Props
| Name       | Default | Type    | Description                                                                 |
| ---------- | ------- | ------- | --------------------------------------------------------------------------- |
| as         | `div`   | String  | An element type to render as (String)                                       |
| image      | `false` | Boolean | A label can be formatted to emphasize an imag                               |
| color      |         | String  | A label can have different colors                                           |
| basic      | `false` | Boolean | A label can reduce its complexity                                           |
| empty      | `false` | Boolean |                                                                             |
| circular   | `false` | Boolean | A label can reduce its complexity                                           |
| size       |         | String  | A label can reduce its complexity                                           |
| corner     |         | String  | A label can position itself in the corner of an element(left/right)         |
| tag        | `false` | Boolean | A label can appear as a tag                                                 |
| ribbon     | `false` | Boolean | A label can appear as a ribbon attaching itself to an element               |
| pointing   |         | String  | A label can point to content next to it                                     |
| horizontal | `false` | Boolean | A horizontal label is formatted to label content along-side it horizontally |
| floating   | `false` | Boolean | A label can float above another element.                                    |
| attach     |         | String  | A label can attach to a content segment(top/botton/top right/top left)      |

## SeLabelGroup
### Name
`se-label-group`
### Props
| Name     | Default | Type    | Description                      |
| -------- | ------- | ------- | -------------------------------- |
| size     |         | String  | Labels can share sizes together  |
| color    |         | String  | Labels can share colors together |
| tag      | `false` | Boolean | Labels can share tag formatting  |
| circular | `false` | Boolean | Labels can share shapes          |

## SeLabelDetail
### Name
`se-label-detail`
### Props
`None`
> It's a functional component