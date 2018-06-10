# Image

An image is a graphic representation of something

> Note: All * marked are required attributes

## SeImage
### Name 
`se-image`
### Props
| Name                              | Default | Type    | Description                                                                                 |
| --------------------------------- | ------- | ------- | ------------------------------------------------------------------------------------------- |
| [as](#as)                         | `img`   | String  | An element type to render as (String)                                                       |
| [src](#src)*                      |         | String  | Source url for image **(for Vue it comes from data object)**                                |
| [size](#size)                     |         | String  | An image can have different sizes(mini,tiny,huge,massive)                                   |
| [hidden](#hidden)                 | `false` | Boolean | An image can be hidden                                                                      |
| [disabled](#disabled)             | `false` | Boolean | An image can be disabled                                                                    |
| [avatar](#avatar)                 | `false` | Boolean | An image may be formatted to appear inline with text as an avatar                           |
| [bordered](#bordered)             | `false` | Boolean | An image may include a border to emphasize the edges of white or transparent content        |
| [fluid](#fluid)                   | `false` | Boolean | An image can take up the width of its container                                             |
| [rounded](#rounded)               | `false` | Boolean | An image may appear rounded                                                                 |
| [circular](#circurlar)            | `false` | Boolean | An image may appear circular                                                                |
| [vertical-align](#vertical-align) | `false` | Boolean | An image can specify its vertical alignment                                                 |
| [centered](#centered)             | `false` | Boolean | An image can appear centered in a content block                                             |
| [spaced](#spaced)                 | `false` | Boolean | An image can specify that it needs an additional spacing to separate it from nearby content |
| [float](#float)                   |         | String  | An image can sit to the left or right of other content                                      |

### Example
#### as
```html
NOT WORKING
```

#### src
```html
<se-image src="static/user.png"/>
```
<se-image src="/static/user.png"/>

#### size
```html
<se-image src="static/user.png" size="small" />
```
<se-image src="/static/user.png" size="small" />

#### hidden
```html
<se-image src="static/user.png" size="small" hidden/>
```
<se-image src="/static/user.png" size="small" hidden/>

#### disabled
```html
<se-image src="static/user.png" size="small" disabled/>
```
<se-image src="/static/user.png" size="small" disabled/>

#### avatar
```html
<se-image src="static/user.png" avatar/>
```
<se-image src="/static/user.png" avatar/>

#### bordered
```html
<se-image src="static/user.png" size="small" bordered/>
```
<se-image src="/static/user.png" size="small" bordered/>

#### fluid
```html
<se-image src="static/user.png" size="small" fluid/>
```
<se-image src="/static/user.png" fluid/>

#### rounded
```html
<se-image src="static/user.png" size="small" rounded/>
```
<se-image src="/static/user.png" size="small" rounded/>

#### circular
```html
<se-image src="static/user.png" size="small" circular/>
```
<se-image src="/static/user.png" size="small" circular/>

#### vertical-align
```html{1,4,7}
<se-image src="static/user.png" size="small" vertical-align="top"/>
<span>Top Aligned</span>
<se-divider />
<se-image src="static/user.png" size="small" vertical-align="middle"/>
<span>Middle Aligned</span>
<se-divider />
<se-image src="static/user.png" size="small" vertical-align="bottom"/>
<span>Bottom Aligned</span>
```
<se-image src="/static/user.png" size="small" vertical-align="top"/> <span>Top Aligned</span>
<se-divider />
<se-image src="/static/user.png" size="small" vertical-align="middle"/><span>Middle Aligned</span>
<se-divider />
<se-image src="/static/user.png" size="small" vertical-align="bottom"/><span>Bottom Aligned</span>

#### centered
```html
<se-image src="static/user.png" size="small" centered/>
Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.
```
<se-image src="/static/user.png" size="small" centered/>
Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo. Populo quodsi te eam, wisi everti eos ex, eum elitr altera utamur at. Quodsi convenire mnesarchum eu per, quas minimum postulant per id.

#### spaced
```html
<p>Te eum doming eirmod, nominati pertinacia <se-image size="mini" spaced="left" src="static/user.png" /> argumentum ad his.</p>
<p>Te eum doming eirmod, nominati pertinacia <se-image size="mini" spaced="right" src="static/user.png" /> argumentum ad his.</p>
<p>Te eum doming eirmod, nominati pertinacia <se-image size="mini" spaced src="static/user.png" /> argumentum ad his.</p>
```
<p>Te eum doming eirmod, nominati pertinacia <se-image size="mini" spaced="left" src="/static/user.png" /> argumentum ad his.</p>
<p>Te eum doming eirmod, nominati pertinacia <se-image size="mini" spaced="right" src="/static/user.png" /> argumentum ad his.</p>
<p>Te eum doming eirmod, nominati pertinacia <se-image size="mini" spaced src="/static/user.png" /> argumentum ad his.</p>

#### float
```html
<se-image src="static/user.png" float="right" />
```
::: warning
Unable to put demo of this example as its distorting layout
:::

## SeImageGroup
### Name
`se-image-group`
### Props
| Name          | Default | Type     | Description                                               |
| ------------- | ------- | -------- | --------------------------------------------------------- |
| [size](#size) |         | `String` | A group of images can be formatted to have the same size. |

### Example
#### size
```html
<se-image-group size="mini">
  <se-image src="static/user.png"/>
  <se-image src="static/user.png"/>
  <se-image src="static/user.png"/>
</se-image-group>
```
<se-image-group size="mini">
  <se-image src="/static/user.png"/>
  <se-image src="/static/user.png"/>
  <se-image src="/static/user.png"/>
</se-image-group>


<style lang="styl">
@import '~semantic-ui-css/semantic.css';
</style>
