import styled from 'styled-components'
import TimezoneList from './Utilities/TimezoneList'
import PhoneCode from './Utilities/PhoneCode'
import NetworkStatus from './Utilities/NetworkStatus'

function More() {
    return (
        <Container>
            <NetworkStatus />
            <h1>More Options</h1>
            <Box>
                <div>TimeZone : </div>
                <TimezoneList />
            </Box>
            <Box>
                <div> Contact Number : </div>
                <PhoneCode />
            </Box>
        </Container>
    )
}

export default More

const Box = styled.div`
    display: flex; 
    align-items: center;
    gap: 10px;
    margin-bottom: 10px;
`;

const Container = styled.div`
    min-height: 110vh;
`;
