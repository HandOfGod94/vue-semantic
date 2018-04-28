# Container

A container limits content to a maximum width.

> Note: All * makred are required attributes

## SeContainer
### Name 
`se-container`
### Props
| Name      | Default | Type    | Description                                              |
| --------- | ------- | ------- | -------------------------------------------------------- |
| text      | `false` | Boolean | Reduce maximum width to more naturally accommodate text. |
| align     |         | String  | Align container text(left, center, right)                |
| justified | `false` | Boolean | Justify container text                                   |
| fluid     | `false` | Boolean | Container has no maximum width                           |

### Exmaple
#### text
```html
<se-container text>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis
</se-container>
```
<ClientOnly>
<se-container text> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam feli</se-container>
</ClientOnly>

<style lang="styl">
@import '~semantic-ui-css/semantic.css';
</style>