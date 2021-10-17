import React from 'react';
import { SketchPicker } from 'react-color';
export default function Colorpicker({ value, onChange }) {
    return (React.createElement("div", null,
        React.createElement(SketchPicker, { disableAlpha: true, color: value, presetColors: [], onChange: (color, ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                onChange(color.hex);
            } })));
}
