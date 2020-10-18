const FormRange = ({ min, max, step, value, onChange }) => {
    // Generate range of numbers
    const range = Array.from(
        new Array((max - min) / step + 1).keys(),
        (index) => min + index * step
    );

    return (
        <div>
            <input
                className="block rounded-full appearance-none focus:outline-none focus-visible:shadow-outline bg-gray-900 bg-opacity-25 shadow-inner w-full -mx-4 px-4 h-4 box-content"
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={(event) => onChange(Number(event.target.value))}
            />
            <div className="flex justify-between text-base mt-4 -mx-1">
                {range.map((number) => (
                    <span
                        key={number}
                        className={
                            number === value
                                ? "text-gray-100 text-center w-5"
                                : "text-gray-500 text-center w-5"
                        }
                    >
                        {number}
                    </span>
                ))}
            </div>
        </div>
    );
};

export default FormRange;
