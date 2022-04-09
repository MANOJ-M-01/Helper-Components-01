import { useState } from "react";
import Select from "react-select";
import styled from "styled-components";
import PhoneCodeData from "../data/SelectOptions/phone_code.json";
import CountryCodeIndexed from "../Helper/CountryCodeIndexed";

function PhoneCode() {
    const [PhoneCodes, setPhoneCodes] = useState(PhoneCodeData);
    const TimeZone = "India";
    const TimeZoneSet = TimeZone ? TimeZone : "India";
    const InitialState = CountryCodeIndexed.byName[TimeZoneSet].dial_code;
    const [MyPhoneCode, setMyPhoneCode] = useState(InitialState);

    let myNumber = 9043738067101;
    const [phoneNumber, setPhoneNumber] = useState(myNumber);

    let initialSelect = "";
    PhoneCodes.map((name) => {
        if (name.value === MyPhoneCode) {
            initialSelect = { value: name.value, label: `${name.label}` };
        }
    });
    const [selectedOption, setSelectedOption] = useState(initialSelect);

    const handleChange = (e) => {
        setSelectedOption(e);
        setMyPhoneCode(e.value);
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
            color: "var(--color)",

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
            <PhoneNumberContainer>
                <SelectionContainer>
                    <Select
                        styles={customStyles}
                        menuColor="--color"
                        options={PhoneCodes}
                        value={selectedOption}
                        onChange={handleChange}
                    />
                </SelectionContainer>

                <PhoneNumberGroup>
                    <PhoneCodeBox>{MyPhoneCode != null ? <p>{MyPhoneCode}</p> : null}</PhoneCodeBox>
                    <input type="number" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} name="phone_number" placeholder="Enter contact number" />
                </PhoneNumberGroup>
            </PhoneNumberContainer>
        </>
    );
}

export default PhoneCode;

const PhoneNumberContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

const SelectionContainer = styled.div`
    max-width: 250px; 
    width: 250px;
    margin-right: 10px;
    @media (max-width: 768px) {
        margin-bottom: 10px;
    }
`;

const PhoneNumberGroup = styled.div`
    display: flex;
    justify-content: center; 
    align-items: center;
    box-shadow:rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    background: white;
    width: 250px;
    height: 45px;
    border-radius: 4px;
    overflow: hidden;
    background: white;
    font-weight: 600;
    padding:0px 10px; 
    font-size: 14px;
    input{
        letter-spacing: 0.6px;
        display: block;
        width: 100%;
        border:none;
        outline: none; 
        display: flex;
        font-weight: 600;
        padding:0px 10px;
        font-size: 14px;
        height: 100%;
        font-family:inherit;
        color: var(--color); 
    }
`;
const PhoneCodeBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;  
    display: flex;
    cursor: context-menu;
`;