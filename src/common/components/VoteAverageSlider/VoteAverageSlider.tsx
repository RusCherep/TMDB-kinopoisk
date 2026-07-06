import {useEffect, useRef, useState} from "react";
import s from './VoteAverageSlider.module.css';
import {useDebounce} from "@/common/hooks/useDebounce.ts";

interface RangeSliderProps {
    min?: number;
    max?: number;
    step?: number;
    defaultValue?: [number, number];
    onChange: (range: { gte: number; lte: number }) => void;
    label?: string;
}

export const VoteAverageSlider = ({
                                      min = 0,
                                      max = 10,
                                      step = 0.1,
                                      defaultValue = [0, 10],
                                      onChange,
                                      label,
                                  }: RangeSliderProps) => {

    const [range, setRange] = useState<[number, number]>(defaultValue)
    const debouncedRange = useDebounce(range, 200);
    const trackRef = useRef<HTMLDivElement>(null);

    const leftPercent = ((range[0] - min) / (max - min)) * 100
    const rightPercent = 100 - ((range[1] - min) / (max - min)) * 100

    useEffect(() => {
        onChange({gte: debouncedRange[0], lte: debouncedRange[1]});
    }, [debouncedRange]);

    return (
        <div className={s.container}>
            <div className={s.values}>
                {label && <span className={s.label}>{label}</span>}
                <span>{range[0].toFixed(1)} - {range[1].toFixed(1)}</span>
            </div>
            <div className={s.sliderWrapper}>
                <div className={s.track} ref={trackRef}>
                    <div
                        className={s.range}
                        style={{
                            left: `${leftPercent}%`,
                            right: `${rightPercent}%`,
                        }}
                    />
                </div>
                <input
                    type={'range'}
                    min={min}
                    max={max}
                    step={step}
                    value={range[0]}
                    onChange={(event) => {
                        const val = Number(event.currentTarget.value)
                        if (val <= range[1]) {
                            setRange([val, range[1]])
                        }

                    }}
                    className={`${s.thumb} ${s.thumbLeft}`}
                />
                <input
                    type={'range'}
                    min={min}
                    max={max}
                    step={step}
                    value={range[1]}
                    onChange={(event) => {
                        const val = Number(event.currentTarget.value)
                        if (val >= range[0]) {
                            setRange([range[0], val])
                        }

                    }}
                    className={`${s.thumb} ${s.thumbRight}`}
                />
            </div>
        </div>
    )
}