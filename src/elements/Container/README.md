# Container

A container limits content to a maximum width.

> Note: All * marked are required attributes

## SeContainer
### Name 
`se-container`
### Props
| Name                    | Default | Type    | Description                                              |
| ----------------------- | ------- | ------- | -------------------------------------------------------- |
| [text](#text)           | `false` | Boolean | Reduce maximum width to more naturally accommodate text. |
| [align](#align)         |         | String  | Align container text(`left`, `center`, `right`)          |
| [justified](#justified) | `false` | Boolean | Justify container text                                   |
| [fluid](#fluid)         | `false` | Boolean | Container has no maximum width                           |

### Example
#### text
```html
<se-container text>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis
</se-container>
```
<se-container text> Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam feli</se-container>

#### align
```html
<se-container align="right">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis
</se-container>
```
<se-container align="right">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis </se-container>

#### justified
```html
<se-container justified>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis
</se-container>
```
<se-container justified>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis </se-container>

#### fluid
```html
<se-container fluid>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis
</se-container>
```
<se-container fluid>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis </se-container>

<style lang="styl">
@import '~semantic-ui-css/semantic.css';
</style>