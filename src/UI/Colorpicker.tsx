import React, { useEffect, useState } from 'react';
import { SketchPicker } from 'react-color';

export default function Colorpicker({ value, onChange }: ColorpickerProps) {

    return (
        <div>
            <SketchPicker
                // disableAlpha={true}
                color={value}
                presetColors={[]}
                className="colorPicker"
                onChange={(color, ev) => {
                    ev.preventDefault();
                    ev.stopPropagation();
                    onChange(color.hex);
                }}

            />

        </div>
    )
}

interface ColorpickerProps {
    value: string;
    onChange: (value: string) => void;
}
