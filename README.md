# react-line

Provide a React component to draw a line

Underneath, it's only using a classic `<div>` that it rotates and positions
where it needs to be.

# Props

You need provide 4 coordinates to draw a line which are the props of the
component :

```javascript
static propTypes = {
  from: React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
  }),
  to: React.PropTypes.shape({
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
  }),
  style: React.PropTypes.string
}
```

`style` is optional and is the css style you want to apply on the line.
The default is `1px solid black`.

# Example

```javascript
<Line
  from={{x: 10, y: 20}}
  to={{x: 10, y: 100}}
  style="5px solid orange"
/>
```

An octogon :

![An octogon using react-line](https://raw.githubusercontent.com/chtefi/react-line/master/octogon.PNG)
