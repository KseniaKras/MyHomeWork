import React from 'react'
import {HW1, messageData} from '../../h1/HW1'
import HW2 from '../../h2/HW2'
import HW3 from '../../h3/HW3'
import HW4 from '../../h4/HW4'

function PreJunior() {
    return (
        <div>
            <HW1 avatar={messageData.avatar}
                 name={messageData.name}
                 message={messageData.message}
                 time={messageData.time}/>
            <HW2/>
            <HW3/>
            <HW4/>
            {/*<HW6/>*/}

        </div>
    )
}

export default PreJunior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз