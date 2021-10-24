import React, { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';
import { rgb2string } from '../utils/color';

export default function Colorpicker({ value, onChange }: ColorpickerProps) {

    return (
        <div>
            <SketchPicker
                // disableAlpha={true}
                color={value}
                presetColors={[]}
                className="colorPicker"
                onChange={(color, ev) => {
                    // ev.preventDefault();
                    // ev.stopPropagation();
                    
                    const rgba = color.rgb;
                    const hex = rgb2string(rgba);
                    console.log(hex)
                    onChange(hex);
                }}

            />

        </div>
    )
}

interface ColorpickerProps {
    value: string;
    onChange: (value: string) => void;
}
