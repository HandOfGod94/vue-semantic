# Divider

A divider visually segments content into groups

> Note: All * makred are required attributes

## SeDivider
### Name 
`se-divider`

### Basic Usage
```html
hello world
<se-divider />
world hello
```
hello-world
<se-divider />
world hello

### Props
| Name                      | Default | Type    | Description                                                         |
| ------------------------- | ------- | ------- | ------------------------------------------------------------------- |
| [horizontal](#horizontal) | `false` | Boolean | A divider can segment content horizontally                          |
| inverted                  | `false` | Boolean | A divider can have its colors inverted                              |
| [fitted](#fitted)         | `false` | Boolean | A divider can be fitted, without any space above or below it.       |
| [hidden](#hidden)         | `false` | Boolean | A hidden divider divides content without creating a dividing line   |
| [section](#section)       | `false` | Boolean | A divider can provide greater margins to divide sections of content |
| [clearing](#clearing)     | `false` | Boolean | A divider can clear the contents above it                           |

### Exmaples

#### horizontal
```html{2}
<se-button icon="add" color="primary">Checkout</se-button>
<se-divider horizontal>OR</se-divider>
<se-button icon="add" color="teal">Create Order</se-button>
```
<se-button icon="add" color="primary">Checkout</se-button>
<se-divider horizontal>OR</se-divider>
<se-button icon="add" color="teal">Create Order</se-button>

#### fitted
```html{6}
<div>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. 
    Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. 
    Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
</div>
<se-divider fitted />
<div>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. 
    Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. 
    Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
 </div>
```
<div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</div>
<se-divider fitted />
<div>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</div>

#### hidden
```html{5}
<div>
    <se-header as="h3">Section one</se-header>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
</div>
<se-divider hidden />
<div>
    <se-header as="h3">Section two</se-header>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
</div>
```
<div>
<se-header as="h3">Section one</se-header>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</div>
<se-divider hidden />
<div>
<se-header as="h3">Section two</se-header>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</div>

#### section
```html{5}
<div>
    <se-header as="h3">Section one</se-header>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
</div>
<se-divider section />
<div>
    <se-header as="h3">Section two</se-header>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
</div>
```
<div>
<se-header as="h3">Section one</se-header>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</div>
<se-divider section />
<div>
<se-header as="h3">Section two</se-header>
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</div>

#### clearing
```html{3}
<div>
    <se-header float="right" as="h2">Floated content</se-header>
    <se-divider clearing />
    <p>
    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
    </p>
</div>
```
<div>
    <se-header float="right" as="h2">Floated content</se-header>
    <se-divider clearing />
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.</p>
</div>

<style lang="styl">
@import '~semantic-ui-css/semantic.css';
</style>