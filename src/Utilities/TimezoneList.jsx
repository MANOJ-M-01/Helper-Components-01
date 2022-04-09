import { useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import TimzoneData from "../data/SelectOptions/tz_database_name.json";

function TimezoneList() {
    const [TimezoneNames, setTimezoneNames] = useState(TimzoneData);
    const [MyTimezone, setMyTimezone] = useState("Asia/Kolkata");


    let zone = "";
    TimezoneNames.map((name) => {
        if (name.value === MyTimezone) {
            zone = { value: name.value, label: `${name.label}` };
        }
    });
    const [selectedOption, setSelectedOption] = useState(zone);

    const handleChange = (e) => {
        setSelectedOption(e);
        setMyTimezone(e.value);
    };

    const customStyles = {
        menu: (provided, state) => ({
            ...provided,
            width: state.selectProps.width,
            border: "none",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            color: state.selectProps.menuColor,
            padding: "10px",
            fontWeight: "600",
            fontSize: "12px",
        }),
        control: (_, { selectProps: { width } }) => ({
            width: width,
            border: "none",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px",
            borderRadius: 4,
            display: "flex",
            background: "white",
            fontWeight: "600",
            padding: '5px 5px',
            fontSize: "14px",

        }),
        singleValue: (provided, state) => {
            const opacity = state.isDisabled ? 0.5 : 1;
            const transition = "opacity 300ms";
            const color = "var(--color)";
            return { ...provided, opacity, transition, color };
        },
    };

    return (
        <>
            <SelectionContainer>
                <Select
                    styles={customStyles}
                    menuColor="--color"
                    options={TimezoneNames}
                    value={selectedOption}
                    onChange={handleChange}
                />
            </SelectionContainer>
            MyTimezone: {MyTimezone}
        </>
    );
}

export default TimezoneList;


const SelectionContainer = styled.div`
    width: 250px; 
`;