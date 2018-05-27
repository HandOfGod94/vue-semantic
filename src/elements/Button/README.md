# Button

A button indicates a possible user action

> Note: All * marked are required attributes

## SeButton
### Name
`se-button`
### Props
| Name                  | Default | Type    | Description                                                    |
| --------------------- | ------- | ------- | -------------------------------------------------------------- |
| [color](#color)       |         | String  | Semantic UI colors: (primary, secondary, red, orange)          |
| label                 |         | String  | Label content for button                                       |
| label-position        |         | String  | Position for label (`left` or `right`)                         |
| [icon](#icon)         |         | String  | A button can have only an icon                                 |
| [basic](#basic)       | `false` | Boolean | A basic button is less pronounced                              |
| inverted              | `false` | Boolean | A button can be formatted to appear on dark backgrounds        |
| [disabled](#disabled) | `false` | Boolean | A button can show it is currently unable to be interacted with |
| [loading](#loading)   | `false` | Boolean | A button can show a loading indicator                          |
| [size](#size)         |         | String  | A button can have different sizes(mini,tiny,huge,massive)      |
| [float](#float)       |         | String  | A button can be aligned to the left or right of its container  |
| [compact](#compact)   | `false` | Boolean | A button can reduce its padding to fit into tighter spaces     |
| [fluid](#fluid)       | `false` | Boolean | A button can take the width of its container                   |
| [circular](#circular) | `false` | Boolean | A button can be circular                                       |

### Slots

* **label**
  
  Slot for rendering label in buttons
  
  Example
  ```html
  <se-button as="div" label-position="left">
    <se-label slot="label">2048</se-label>
    <se-button as="div" icon="heart">Like</se-button>
  </se-button>
  ```
  <se-button as="div" label-position="left">
    <se-label slot="label" basic>2048</se-label>
    <se-button as="div" icon="heart">Like</se-button>
  </se-button>

### Example

#### color
```html
<se-button color="primary"></se-button>
<se-button color="secondary"></se-button>
<se-button color="orange"></se-button>
```
<se-button color="primary">Primary</se-button>
<se-button color="secondary">Secondary</se-button>
<se-button color="orange">Orange</se-button>

#### icon
```html
<se-button icon="cloud" />
<se-button label="Pause" icon="pause" />
<se-button label="Next" label-position="right" icon="right arrow" />
```
<se-button icon="cloud" />
<se-button label="Pause" icon="pause" />
<se-button label="Next" label-position="right" icon="right arrow" />

#### basic
```html
<se-button basic>Basic</se-button>
```
<se-button basic>Basic</se-button>

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
| Name                        | Default | Type    | Description                                                             |
| --------------------------- | ------- | ------- | ----------------------------------------------------------------------- |
| [icon](#icon-group)         |         | Boolean | Button groups can show groups of icons                                  |
| [width](#width-group)       |         | String  | Groups can have their widths divided evenly (e.g. `five` for 5 buttons) |
| [vertical](#vertical-group) | `false` | Boolean | Groups can be formatted to appear vertically                            |
| [labeled](#labeled-group)   |         | String  | Groups can be formatted as labeled icons                                |
| [color](#color-group)       |         | String  | Semantic UI colors: (primary, secondary, red, orange)                   |
| [basic](#basic-group)       | `false` | Boolean | A button group can be less pronounced                                   |
| [size](#size-group)         |         | String  | A button group can have different sizes(mini,tiny,huge,massive)         |

### Example
#### icon (group)
```html
<se-button-group icon>
  <se-button icon="align left" />
  <se-button icon="align center" />
  <se-button icon="align right" />
  <se-button icon="align justify" />
</se-button-group>
<se-button-group icon>
  <se-button icon="bold"/>
  <se-button icon="underline" />
  <se-button icon="text width" />
</se-button-group>
```
<se-button-group icon>
  <se-button icon="align left" />
  <se-button icon="align center" />
  <se-button icon="align right" />
  <se-button icon="align justify" />
</se-button-group>
<se-button-group icon>
  <se-button icon="bold"/>
  <se-button icon="underline" />
  <se-button icon="text width" />
</se-button-group>

#### width (group)
```html
<se-button-group width="five">
  <se-button>Overview</se-button>
  <se-button>Specs</se-button>
  <se-button>Warranty</se-button>
  <se-button>Reviews</se-button>
  <se-button>Support</se-button>
</se-button-group>
<se-button-group width="three">
  <se-button>Overview</se-button>
  <se-button>Specs</se-button>
  <se-button>Support</se-button>
</se-button-group>
```
<se-button-group width="five">
  <se-button>Overview</se-button>
  <se-button>Specs</se-button>
  <se-button>Warranty</se-button>
  <se-button>Reviews</se-button>
  <se-button>Support</se-button>
</se-button-group>
<se-button-group width="three">
  <se-button>Overview</se-button>
  <se-button>Specs</se-button>
  <se-button>Support</se-button>
</se-button-group>

#### vertical (group)
```html
<se-button-group vertical>
  <se-button>Feed</se-button> 
  <se-button>Message</se-button> 
  <se-button>Events</se-button> 
</se-button-group>
```
<se-button-group vertical>
  <se-button>Feed</se-button> 
  <se-button>Message</se-button> 
  <se-button>Events</se-button> 
</se-button-group>

#### labeled (group)
```html
<se-button-group vertical labeled>
  <se-button icon="play" label="Play" />
  <se-button icon="pause" label="Pause" />
  <se-button icon="shuffle" label="Shuffle" />
</se-button-group>
```
<se-button-group vertical labeled>
  <se-button icon="play" label="Play" />
  <se-button icon="pause" label="Pause" />
  <se-button icon="shuffle" label="Shuffle" />
</se-button-group>

#### color (group)
```html
<se-button-group color="primary">
  <se-button>Overview</se-button>
  <se-button>Specs</se-button>
  <se-button>Support</se-button>
</se-button-group>
```
<se-button-group color="primary">
  <se-button>Overview</se-button>
  <se-button>Specs</se-button>
  <se-button>Support</se-button>
</se-button-group>

#### basic (group)
```html
<se-button-group basic>
  <se-button>Overview</se-button>
  <se-button>Specs</se-button>
  <se-button>Support</se-button>
</se-button-group>
```
<se-button-group basic>
  <se-button>Overview</se-button>
  <se-button>Specs</se-button>
  <se-button>Support</se-button>
</se-button-group>

#### size (group)
```html
<se-button-group size="big">
  <se-button>Overview</se-button>
  <se-button>Specs</se-button>
  <se-button>Support</se-button>
</se-button-group>
```
<se-button-group size="big">
  <se-button>Overview</se-button>
  <se-button>Specs</se-button>
  <se-button>Support</se-button>
</se-button-group>

<style lang="styl">
@import '~semantic-ui-css/semantic.css';
</style>
