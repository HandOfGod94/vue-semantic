# Button

A button indicates a possible user action

> Note: All * makred are required attributes

## SeButton
### Name
`se-button`
### Props
| Name           | Default | Type    | Description                                                    |
| -------------- | ------- | ------- | -------------------------------------------------------------- |
| color          |         | String  | Semantic UI colors: (primary, secondary, red, orange)          |
| label          |         | String  | Label content for button                                       |
| label-position |         | String  | Position for label (`left` or `right`)                         |
| icon           |         | String  | A button can have only an icon                                 |
| basic          | `false` | Boolean | A basic button is less pronounced                              |
| inverted       | `false` | Boolean | A button can be formatted to appear on dark backgrounds        |
| disabled       | `false` | Boolean | A button can show it is currently unable to be interacted with |
| loading        | `false` | Boolean | A button can show a loading indicator                          |
| size           |         | String  | A button can have different sizes(mini,tiny,huge,massive)      |
| float          |         | String  | A button can be aligned to the left or right of its container  |
| compact        | `false` | Boolean | A button can reduce its padding to fit into tighter spaces     |
| fluid          | `false` | Boolean | A button can take the width of its container                   |
| circular       | `false` | Boolean | A button can be circular                                       |

### Slots
| Name  | Description                           |
| ----- | ------------------------------------- |
| label | Slot for rendering label indie button |

### Exmaple

#### color
```html
<se-button color="primary"></se-button>
<se-button color="secondary"></se-button>
<se-button color="orange"></se-button>
```
<se-button color="primary">Primary</se-button>
<se-button color="secondary">Secondary</se-button>
<se-button color="orange">Orange</se-button>

#### basic
```html
<se-button basic>Basic</se-button>
```
<se-button basic>Basic</se-button>

#### icon
```html
<se-button icon="cloud" />
<se-button label="Pause" icon="pause" />
<se-button label="Next" label-position="right" icon="right arrow" />
```
<se-button icon="cloud" />
<se-button label="Pause" icon="pause" />
<se-button label="Next" label-position="right" icon="right arrow" />

#### disabled
```html
<se-button icon="user" label="Followed" disabled />
```
<se-button icon="user" label="Followed" disabled />

#### loading
```html
<se-button loading>Loading</se-button>
<se-button loading color="primary">Loading</se-button>
<se-button loading color="secondary">Loading</se-button>
<se-button loading color="orange">Loading</se-button>
``` 
<se-button loading>Loading</se-button>
<se-button loading color="primary">Loading</se-button>
<se-button loading color="secondary">Loading</se-button>
<se-button loading color="orange">Loading</se-button>

#### size
```html
<se-button size="mini">mini</se-button>
<se-button size="tiny">tiny</se-button>
<se-button size="small">small</se-button>
<se-button size="medium">medium</se-button>
<se-button size="large">large</se-button>
<se-button size="big">big</se-button>
<se-button size="huge">huge</se-button>
<se-button size="massive">massive</se-button>
```
<se-button size="mini">mini</se-button>
<se-button size="tiny">tiny</se-button>
<se-button size="small">small</se-button>
<se-button size="medium">medium</se-button>
<se-button size="large">large</se-button>
<se-button size="big">big</se-button>
<se-button size="huge">huge</se-button>
<se-button size="massive">massive</se-button>

#### float
```html
<se-button float="left">Left</se-button>
<se-button float="right">Right</se-button>
```
<se-button float="left">Left</se-button>
<se-button float="right">Right</se-button>
<br/>

#### comapact
```html
<se-button compact>Compact</se-button>
<se-button size="medium">Compact</se-button>
```
<se-button compact>Compact</se-button>
<se-button size="medium">Compact</se-button>

#### fluid
```html
<se-button fluid>Fluid button</se-button>
```
<se-button fluid>Fluid button</se-button>

#### circular
```html
<se-button icon="settings" circular />
```
<se-button icon="settings" circular />


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

<style lang="styl">
@import '~semantic-ui-css/semantic.css';
</style>
