import { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h2>
                {count}
            </h2>
            <button style={{ marginRight: 10 }} onClick={() => setCount(count + 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </div>
    )
}

export default Counter
