# Image

An image is a graphic representation of something

- [Image](#image)
    - [SeImage](#seimage)
        - [Name](#name)
        - [Props](#props)

> Note: All * makred are required attributes

## SeImage
### Name 
`se-image`
### Props
| Name           | Default | Type    | Description                                                                                 |
| -------------- | ------- | ------- | ------------------------------------------------------------------------------------------- |
| as             | `img`   | String  | An element type to render as (String)                                                       |
| src*           |         | String  | Soruce url for image **(for Vue it comes from data object)**                                |
| size           |         | String  | An image can have different sizes(mini,tiny,huge,massive)                                   |
| hidden         | `false` | Boolean | An image can be hidden                                                                      |
| disabled       | `false` | Boolean | An image can be disabled                                                                    |
| avatar         | `false` | Boolean | An image may be formatted to appear inline with text as an avatar                           |
| bordered       | `false` | Boolean | An image may include a border to emphasize the edges of white or transparent content        |
| fluid          | `false` | Boolean | An image can take up the width of its container                                             |
| rounded        | `false` | Boolean | An image may appear rounded                                                                 |
| circular       | `false` | Boolean | An image may appear circular                                                                |
| vertical-align | `false` | Boolean | An image can specify its vertical alignment                                                 |
| centered       | `false` | Boolean | An image can appear centered in a content block                                             |
| spaced         | `false` | Boolean | An image can specify that it needs an additional spacing to separate it from nearby content |
| float          |         | String  | An image can sit to the left or right of other content                                      |
