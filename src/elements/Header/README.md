# Header

A header provides a short summary of content
Table of Contents:

> Note: All * marked are required attributes.

::: warning
Due to how vue press works this document doesn't contain demo for now.
Need to include live demo component for that.
:::

## SeHeader
### Name 
`se-header`

### Basic Usage
```html
<se-header as="h1">Hello World</se-header>
```
<se-header as="h1">Hello World</se-header>

-------

### Props
| Name                    | Default | Type    | Description                                                         |
| ----------------------- | ------- | ------- | ------------------------------------------------------------------- |
| [as](#as)*              |         | String  | An element type to render as (String)                               |
| [color](#color)         |         | String  | Semantic UI colors: (primary, secondary, red, orange)               |
| [inverted](#inverted)   | `false` | Boolean | A header can have its colors inverted for contrast                  |
| [icon](#icon)           |         | String  | A header may contain an icon                                        |
| [sub](#sub)             | `false` | Boolean | Headers may be formatted to label smaller or de-emphasized content. |
| [block](#block)         | `false` | Boolean | A header can be formatted to appear inside a content block          |
| [disabled](#disabled)   | `false` | Boolean | A header can show that it is inactive                               |
| [align](#align)         |         | String  | A header can have its text aligned to a side(left, right, center)   |
| [justified](#justified) | `false` | Boolean | A header can have its text justified                                |
| [content](#content)     |         | String  | Shorthand for `content` slot                                        |
| [subheader](#subheader) |         | String  | Shorthand for `subheader` slot                                      |

### Slots
* **content**
  
  Slot for content of the header (Mainly used with `subheader` slot)

  Example
  ```html
  <se-header as="h2" icon="settings" subheader="Manage your account settings and set e-mail preferences.">
    <template slot="content">Account Settings</template>
  </se-header>
  ```

* **subheader**
 
  Slot for sub header

  Example
  ```html
  <se-header as="h2" icon="settings">
    <template slot="content">Account Settings</template>
    <template slot="subheader">Manage your account settings and set e-mail preferences.</template>
  </se-header>
  ```

### Examples

#### as
```html
<se-header as="h1">This is header</se-header>
<se-header as="h2">This is header</se-header>
<se-header as="h3">This is header</se-header>
<se-header as="h4">This is header</se-header>
```

#### color
```html
<se-header as="h4" color="red">This is header</se-header>
<se-header as="h4" color="yellow">This is header</se-header>
<se-header as="h4" color="orange">This is header</se-header>
<se-header as="h4" color="blue">This is header</se-header>
```

#### inverted
```html
<div class="ui inverted segment">
  <se-header as="h4" inverted color="red">This is header</se-header>
  <se-header as="h4" inverted  color="yellow">This is header</se-header>
  <se-header as="h4" inverted color="orange">This is header</se-header>
  <se-header as="h4" inverted color="blue">This is header</se-header>
</div>
```

#### icon
```html
<se-header as="h2" icon="plug" content="Uptime"></se-header>
```

#### sub
```html
<se-header as="h2" sub>Price</se-header>
<span>$10.99</span>
```

#### block
```html
<se-header as="h2" block>Block header</se-header>
```

#### disabled
```html
<se-header as="h2" disabled>Disabled Header</se-header>
```
#### align
```html
<se-header as="h2" align="right">Right Align</se-header>
<se-header as="h2" align="center">Center Align</se-header>
```

#### justified
```html
<se-header as="h2" justified>
  This should take up the full width even if only one line
</se-header>
```
#### content
```html
<se-header as="h2" icon="settings" content="Account Settings" />
```

#### subheader
```html
<se-header as="h2" icon="settings" content="Account Settings" subheader="Manage your preferences" />
```